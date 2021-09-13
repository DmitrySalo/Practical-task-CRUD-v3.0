package com.example.webappcrudv3.controllers;

import com.example.webappcrudv3.controllers.Utils.RoleUtil;
import com.example.webappcrudv3.models.User;
import com.example.webappcrudv3.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/admin")
public class AdminRestController {
    private final UserService userService;

    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsersList() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok().body(users);
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable(value = "id") Integer id) {

        if(id == null) {
            return ResponseEntity.notFound().build();
        }

        User user = userService.getUserById(id);
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("/create")
    public ResponseEntity<User> create(@RequestBody @Valid User user,
                                       BindingResult bindingResult,
                                       @RequestParam(required = false, name = "newRoles") String[] newRoles) {

        if (bindingResult.hasErrors()) {
            ResponseEntity.status(HttpStatus.RESET_CONTENT).build();
        }

        RoleUtil.setRoles(user, newRoles, userService);
        userService.createUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(user);
    }

    @PutMapping("/update")
    public ResponseEntity<User> update(@RequestBody @Valid User user,
                                       BindingResult bindingResult,
                                       @RequestParam(required = false, name = "currentRoles") String[] currentRoles) {

        if (bindingResult.hasErrors()) {
            ResponseEntity.status(HttpStatus.RESET_CONTENT).build();
        }

        if (user == null) {
            return ResponseEntity.notFound().build();
        }

        RoleUtil.setRoles(user, currentRoles, userService);
        userService.updateUser(user);
        return ResponseEntity.ok().body(user);
    }

    @DeleteMapping("/delete/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable(value = "id") Integer id) {
        userService.deleteUserById(id);
    }
}