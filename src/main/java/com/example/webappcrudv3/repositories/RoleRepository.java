package com.example.webappcrudv3.repositories;

import com.example.webappcrudv3.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {

    @Query("select role from Role role where role.role=:role")
    Role findByRole(@Param("role") String roleName);
}