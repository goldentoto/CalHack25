package com.calhack.cookproj.interceptor;

import com.calhack.cookproj.models.RequestLog;
import com.calhack.cookproj.repositories.RequestLogRepository;
import com.calhack.cookproj.security.JwtTokenUtil;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import javax.servlet.ServletException;

/** The class create to log information on executed requests in database */
public class ResponseInterceptorFilter implements Filter {

    private RequestLogRepository requestLogRepository;
    private JwtTokenUtil jwtUtility;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        WebApplicationContext applicationContext = WebApplicationContextUtils
                .getRequiredWebApplicationContext(filterConfig.getServletContext());

        requestLogRepository = applicationContext.getBean(RequestLogRepository.class);
        jwtUtility = applicationContext.getBean(JwtTokenUtil.class);
    }

    @Override
    public void destroy() {}

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        if (!(request instanceof HttpServletRequest) || !(response instanceof HttpServletResponse)) {
            throw new ServletException("ResponseInterceptorFilter just supports HTTP requests");
        }

        InterceptorRequestWrapper wrappedRequest = new InterceptorRequestWrapper((HttpServletRequest) request);
        InterceptorResponseWrapper wrappedResponse = new InterceptorResponseWrapper((HttpServletResponse) response);

        chain.doFilter(wrappedRequest, wrappedResponse);

        byte[] capturedResponseContent = wrappedResponse.getCapturedResponseAsBytes();
        String responseBody = new String(capturedResponseContent, response.getCharacterEncoding());
        //System.out.println("Filter Captured Response Body: " + responseBody);

        byte[] capturedRequestContent = wrappedRequest.getCapturedRequestData();
        String requestBody = new String(capturedRequestContent, request.getCharacterEncoding());
        //System.out.println("Filter Captured Request Body: " + requestBody);

        logRespApiRequest(wrappedRequest, wrappedResponse, requestBody, responseBody);

        // Rewrite response to the API caller
        response.getOutputStream().write(capturedResponseContent);
    }

    /** Method logs request information into database */
    private void logRespApiRequest(ServletRequest request, ServletResponse response, String requestBody, String responseBody){
        if (request instanceof HttpServletRequest && response instanceof HttpServletResponse) {
            String username = "";
            String requestPath = ((HttpServletRequest) request).getRequestURI();
            String requestMethod = ((HttpServletRequest) request).getMethod();
            RequestLog log = new RequestLog();
            log.setPath(requestPath);
            log.setRequestMethod(((HttpServletRequest)request).getMethod());
            log.setResponseCode(((HttpServletResponse)response).getStatus());

            boolean isPreflight = "OPTIONS".equalsIgnoreCase(requestMethod) &&
                    ((HttpServletRequest) request).getHeader("Access-Control-Request-Method") != null;

            // If this is Preflight, do nothing
            if(isPreflight) return;

            // Obtain a username cases: from Auth token, from request body, no username
            try {
                switch (requestPath) {
                    case "/auth/login":
                        username = getValueFromJSON(requestBody, "username");
                        break;
                    case "/auth/register":
                        username = getValueFromJSON(requestBody, "username");
                        break;
                    default:
                        String token = ((HttpServletRequest) request).getHeader("Authorization");
                        username = token != null ? jwtUtility.getUsernameFromToken(token.substring(7)) : "NO TOKEN";
                        break;
                }
            }catch(Exception ex){
                ex.printStackTrace();
                username = "CAN'T Determine";
            }

            log.setUsername(username);
            requestLogRepository.save(log);
        }
    }

    private String getValueFromJSON(String json, String key){
        try{
            JSONObject jsonObject = new JSONObject(json);
            return jsonObject.getString(key);
        }catch (JSONException ex){
            ex.printStackTrace();
            return "Non Parsable Value";
        }
    }

}
