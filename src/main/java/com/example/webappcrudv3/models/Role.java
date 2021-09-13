package com.example.webappcrudv3.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "roles")
public class Role implements GrantedAuthority {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "roles", unique = true)
    private String role;

    @Override
    public String getAuthority() {
        return getRole();
    }

    @Override
    public String toString() {
        return getRole().substring(5).replaceAll("[\\p{Punct}]+", "");
    }
}