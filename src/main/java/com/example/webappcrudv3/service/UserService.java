package com.example.webappcrudv3.service;

import com.example.webappcrudv3.models.Role;
import com.example.webappcrudv3.models.User;

import java.util.List;

public interface UserService {

    List<User> getAllUsers();

    User getUserById(Integer id);

    User getUserByLogin(String login);

    Role getRoleByName(String roleName);

    void createUser(User user);

    void updateUser(User user);

    void deleteUserById(Integer id);
}