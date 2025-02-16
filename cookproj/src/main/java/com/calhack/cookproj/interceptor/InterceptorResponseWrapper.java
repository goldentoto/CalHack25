package com.calhack.cookproj.interceptor;

import javax.servlet.ServletOutputStream;
import javax.servlet.WriteListener;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;

/** The class is created to intercept and have to assess body */
public class InterceptorResponseWrapper extends HttpServletResponseWrapper {
    private final ByteArrayOutputStream capturedContent = new ByteArrayOutputStream();
    private final PrintWriter writer = new PrintWriter(new OutputStreamWriter(capturedContent, StandardCharsets.UTF_8));
    private final ServletOutputStream output = new CapturedServletOutputStream();

    public InterceptorResponseWrapper(HttpServletResponse response) {
        super(response);
    }

    @Override
    public ServletOutputStream getOutputStream() throws IOException {
        return output;
    }

    @Override
    public PrintWriter getWriter() throws IOException {
        return writer;
    }

    public byte[] getCapturedResponseAsBytes() {
        writer.flush();  // Ensure everything written to the writer is captured.
        return capturedContent.toByteArray();
    }

    private class CapturedServletOutputStream extends ServletOutputStream {

        @Override
        public boolean isReady() {
            return true;
        }

        @Override
        public void setWriteListener(WriteListener writeListener) {
            // Consider implementing if needed.
        }

        @Override
        public synchronized void write(int b) throws IOException {
            capturedContent.write(b);
        }
    }
}