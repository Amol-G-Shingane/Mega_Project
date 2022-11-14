package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Admin;
import com.example.demo.entities.Login;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
	@Query("select a from Admin a where a.loginid =:loginid")
	public Optional<Admin> getoad(Login loginid);
}
