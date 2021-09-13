package com.example.webappcrudv3.controllers;

import com.example.webappcrudv3.controllers.Utils.RoleUtil;
import com.example.webappcrudv3.models.User;
import com.example.webappcrudv3.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
@AllArgsConstructor
@RequestMapping("/admin")
public class AdminController {
    private final UserService service;

    @GetMapping
    public String adminPage(@AuthenticationPrincipal User user, Model model) {
        model.addAttribute("users", service.getAllUsers());
        model.addAttribute("user", user);
        return "admin/admin";
    }

    @GetMapping("/new")
    public String newUser(@AuthenticationPrincipal User user, Model model) {
        model.addAttribute("user", user);
        model.addAttribute("newUser", new User());
        return "admin/new";
    }

    @PostMapping
    public String create(@ModelAttribute("user") @Valid User user,
                         BindingResult bindingResult,
                         @RequestParam(required = false, name = "newRoles") String[] newRoles) {

        if (bindingResult.hasErrors()) {
            return "admin/new";
        }

        RoleUtil.setRoles(user, newRoles, service);
        service.createUser(user);
        return "redirect:/admin";
    }

    @GetMapping("/{id}")
    public String edit(@PathVariable("id") Integer id, Model model) {
        model.addAttribute("user", service.getUserById(id));
        return "admin/admin";
    }

    @PutMapping("/{id}")
    public String update(@ModelAttribute("user") @Valid User user,
                         BindingResult bindingResult,
                         @RequestParam(required = false, name = "currentRoles") String[] currentRoles) {

        if (bindingResult.hasErrors()) {
            return "redirect:/admin";
        }

        RoleUtil.setRoles(user, currentRoles, service);
        service.updateUser(user);
        return "redirect:/admin";
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable("id") Integer id) {
        service.deleteUserById(id);
        return "redirect:/admin";
    }
}