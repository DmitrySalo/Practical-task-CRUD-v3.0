package com.example.webappcrudv3.controllers;

import com.example.webappcrudv3.models.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping
public class UserController {

    @GetMapping("/user")
    public String getUserPage(@AuthenticationPrincipal User user, Model model) {
        model.addAttribute("authorizedUser", user);

        return "user/user";
    }
}