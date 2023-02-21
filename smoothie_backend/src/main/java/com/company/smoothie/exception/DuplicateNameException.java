package com.company.smoothie.exception;

public class DuplicateNameException extends ValidationException {
    public DuplicateNameException(String message) {
        super(message);
    }
}
