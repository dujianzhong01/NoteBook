package com.jzdu.user.controller;

import com.jzdu.common.NBResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @RequestMapping("/login")
    public NBResult login(){

        return new NBResult<>(200,"success",null);
    }
}
