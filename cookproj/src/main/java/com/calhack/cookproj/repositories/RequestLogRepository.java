package com.calhack.cookproj.repositories;

import com.calhack.cookproj.models.RequestLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestLogRepository extends JpaRepository<RequestLog, Long> {
}
