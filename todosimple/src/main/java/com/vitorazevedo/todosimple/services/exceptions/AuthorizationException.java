package com.vitorazevedo.todosimple.services.exceptions;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;

@ResponseStatus(value = HttpStatus.FORBIDDEN)
public class AuthorizationException extends AccessDeniedException{
    
    public AuthorizationException(String message) {
        super(message);
    }

}
