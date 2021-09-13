package com.example.webappcrudv3.service;

import com.example.webappcrudv3.models.Role;
import com.example.webappcrudv3.models.User;
import com.example.webappcrudv3.repositories.RoleRepository;
import com.example.webappcrudv3.repositories.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserServiceImp implements UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    final PasswordEncoder passwordEncoder;

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User getUserByLogin(String login) {
        return Optional.ofNullable(userRepository.findUserByLogin(login)).orElse(null);
    }

    @Override
    public Role getRoleByName(String roleName) {
        return roleRepository.findByRole(roleName);
    }

    @Override
    public void createUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public void updateUser(User user) {
        if (!user.getPassword().equals(getUserById(user.getId()).getPassword())) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
        }
        userRepository.save(user);
    }

    @Override
    public void deleteUserById(Integer id) {
        userRepository.deleteById(id);
    }
}