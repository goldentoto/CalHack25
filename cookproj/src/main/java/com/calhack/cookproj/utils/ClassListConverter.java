package com.calhack.cookproj.utils;

import com.calhack.cookproj.models.ClassInfo;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import javax.persistence.AttributeConverter;
import javax.persistence.Converter;

import java.util.List;
@Converter
public class ClassListConverter implements AttributeConverter<List<ClassInfo>, String> {
        private static final ObjectMapper objectMapper = new ObjectMapper();

        @Override
        public String convertToDatabaseColumn(List<ClassInfo> classInfoList) {
            try {
                return objectMapper.writeValueAsString(classInfoList);
            } catch (Exception e) {
                throw new RuntimeException("Error converting list to JSON", e);
            }
        }

        @Override
        public List<ClassInfo> convertToEntityAttribute(String json) {
            try {
                return objectMapper.readValue(json, new TypeReference<List<ClassInfo>>() {
                });
            } catch (Exception e) {
                throw new RuntimeException("Error converting JSON to list", e);
            }
        }
    }

