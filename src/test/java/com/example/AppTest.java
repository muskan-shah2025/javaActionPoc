package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class AppTest {

    @Test
    public void testAppMessage() {
        String message = App.getMessage();
        assertTrue(message.contains("GitHub Actions"));
    }
}
