package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Customer;
import com.example.demo.entities.Login;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	@Transactional
	@Modifying
	@Query("delete from Customer c where cid=?1")
	public void getDelete(int cid);
	@Query("select c from Customer c where c.loginid =:loginid")
	public Optional<Customer> getCust(Login loginid);
	@Query("select c from Customer c where c.cid=:cid")
	public List<Customer> getcustomerbyid(int cid);
}
