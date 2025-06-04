package com.riddler.flee_market;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class FleeMarketApplication {
    private static final Logger logger = LoggerFactory.getLogger(FleeMarketApplication.class);

    public static void main(String[] args) {
        logger.info("Starting Flee Market Application...");
        SpringApplication.run(FleeMarketApplication.class, args);
    }

}
