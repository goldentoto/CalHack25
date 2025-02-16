package com.calhack.cookproj.interceptor;

import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.*;

/** The class serves to modify and intercept request Data */
public class    InterceptorRequestWrapper extends HttpServletRequestWrapper {

    private final ByteArrayOutputStream capturedContent = new ByteArrayOutputStream();
    private final ServletInputStream input = new CapturedServletInputStream();

    public InterceptorRequestWrapper(HttpServletRequest request) throws IOException {
        super(request);
        copyRequestInputStream(request.getInputStream());
    }

    @Override
    public ServletInputStream getInputStream() throws IOException {
        final ByteArrayInputStream byteArrayCopy = new ByteArrayInputStream(capturedContent.toByteArray());

        return new ServletInputStream() {
            @Override
            public int read() throws IOException { return byteArrayCopy.read(); }

            @Override
            public boolean isFinished() { return byteArrayCopy.available() == 0; }

            @Override
            public boolean isReady() { return true; }

            @Override
            public void setReadListener(ReadListener listener) {
                throw new UnsupportedOperationException("Read Listener is Not implemented");
            }
        };

    }

    @Override
    public BufferedReader getReader() throws IOException {
        return new BufferedReader(new InputStreamReader(getInputStream(), getCharacterEncoding()));
    }

    private void copyRequestInputStream(ServletInputStream inputStream) throws IOException {
        byte[] buffer = new byte[1024];
        int bytesRead;
        while ((bytesRead = inputStream.read(buffer)) != -1) {
            capturedContent.write(buffer, 0, bytesRead);
        }
    }

    public byte[] getCapturedRequestData() {
        return capturedContent.toByteArray();
    }

    private class CapturedServletInputStream extends ServletInputStream {

        private ByteArrayInputStream byteArrayInputStream;

        CapturedServletInputStream() {
            byteArrayInputStream = new ByteArrayInputStream(capturedContent.toByteArray());
        }

        @Override
        public boolean isFinished() {
            return byteArrayInputStream.available() == 0;
        }

        @Override
        public boolean isReady() { return true; }

        @Override
        public void setReadListener(ReadListener readListener) {
            throw new UnsupportedOperationException("Not implemented");
        }

        @Override
        public int read() throws IOException { return byteArrayInputStream.read(); }
    }
}

