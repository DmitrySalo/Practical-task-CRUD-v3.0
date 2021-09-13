package com.example.webappcrudv3.models;

import lombok.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.util.Collection;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@RequiredArgsConstructor
@EqualsAndHashCode(exclude = {"id", "roles"})
@Table(name = "users")
public class User implements UserDetails {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NonNull
    @Column(name = "name")
    @NotBlank(message = "Name should not be empty!")
    @Pattern(regexp="[\\p{Upper}{1}]+[\\p{Lower}]+|[А-ЯЁ{1}]+[а-яё]+",
            message = "Name must follow the pattern 'Name'!")
    @Size(min = 2, max = 30, message = "Name length should be between 2 and 30 characters!")
    private String name;

    @NonNull
    @Column(name = "age")
    @Min(value = 0, message = "Age should be greater than 0!")
    @Max(value = 125, message = "Age should not be greater than 125!")
    private int age;

    @NonNull
    @Column(name = "email", unique = true)
    @NotBlank(message = "Email should not be empty!")
    @Email(message = "Email should be valid!")
    @Size(min = 6, max = 46, message = "Email length should be between 6 and 46 characters!")
    private String email;

    @NonNull
    @Column(name = "login", unique = true)
    @NotBlank(message = "Enter the login!")
    @Size(min = 4, max = 16, message = "Login length should be between 4 and 16 characters!")
    private String login;

    @NonNull
    @Column(name = "password")
    @NotBlank(message = "Enter the password!")
    @Size(min = 4, max = 80, message = "Password length should be between 4 and 80 characters!")
    private String password;

    @NonNull
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_ID"),
            inverseJoinColumns = @JoinColumn(name = "role_ID"))
    private Set<Role> roles;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roles;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return getLogin();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getRolesNames() {
        return getRoles().toString().replaceAll("[\\p{Punct}&&[^,]]+", "");
    }
}