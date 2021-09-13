package com.example.webappcrudv3;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import java.awt.*;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;

@Slf4j
@SpringBootApplication
public class WebappcrudV3Application {

    public static void main(String[] args) {
        SpringApplication.run(WebappcrudV3Application.class, args);
    }

    @EventListener({ApplicationReadyEvent.class})
    public void applicationReadyEvent() {
        log.info("Application was started... Launching browser page...");
        browse("http://localhost:8080/default/login");
    }

    public static void browse(String url) {
        if (Desktop.isDesktopSupported()) {
            Desktop desktop = Desktop.getDesktop();

            try {
                desktop.browse(new URI(url));
            } catch (IOException | URISyntaxException e) {
                e.printStackTrace();
            }
        } else {
            Runtime runtime = Runtime.getRuntime();

            try {
                runtime.exec("rundll32 url.dll,FileProtocolHandler " + url);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

}
