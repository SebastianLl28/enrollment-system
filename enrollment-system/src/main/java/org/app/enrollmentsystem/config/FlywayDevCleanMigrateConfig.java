package org.app.enrollmentsystem.config;

import org.flywaydb.core.Flyway;
import org.springframework.boot.autoconfigure.flyway.FlywayMigrationStrategy;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FlywayDevCleanMigrateConfig {
  @Bean
  public FlywayMigrationStrategy cleanMigrateStrategy() {
    return (Flyway flyway) -> {
      flyway.clean();
      flyway.migrate();
    };
  }
}
