package com.calhack.cookproj.configs;

import com.calhack.cookproj.interceptor.ResponseInterceptorFilter;
import com.calhack.cookproj.repositories.RequestLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterRegistrationConfig {

    @Bean
    public FilterRegistrationBean<ResponseInterceptorFilter> loggingFilter(){
        FilterRegistrationBean<ResponseInterceptorFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new ResponseInterceptorFilter());
        registrationBean.addUrlPatterns("/*");
        return registrationBean;
    }
}