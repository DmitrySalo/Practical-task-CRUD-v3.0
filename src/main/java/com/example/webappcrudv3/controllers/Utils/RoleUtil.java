package com.example.webappcrudv3.controllers.Utils;

import com.example.webappcrudv3.models.Role;
import com.example.webappcrudv3.models.User;
import com.example.webappcrudv3.service.UserService;
import lombok.experimental.UtilityClass;

import java.util.HashSet;
import java.util.Set;

@UtilityClass
public class RoleUtil {

    public static void setRoles(User user, String[] rolesList, UserService service) {
        Set<Role> userRoles = new HashSet<>();
        if (rolesList != null) {
            for (String role : rolesList) {
                userRoles.add(service.getRoleByName(role));
            }
        }

        if (userRoles.isEmpty()) {
            userRoles.add(service.getRoleByName("ROLE_USER"));
        }

        user.setRoles(userRoles);
    }
}