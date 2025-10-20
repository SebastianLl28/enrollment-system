package org.app.enrollmentsystem.repository;

import org.app.enrollmentsystem.model.Course;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
  Page<Course> findAllByActiveTrue(Pageable pageable);

  Optional<Course> findByIdAndActiveTrue(Integer id);

  boolean existsByCodeIgnoreCase(String code);

  boolean existsByCodeIgnoreCaseAndIdNot(String code, Integer id);
}
