package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Customer;
import com.example.demo.entities.CustomerRegister;
import com.example.demo.entities.Login;
import com.example.demo.service.CustomerService;
import com.example.demo.service.LoginService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class CustomerController {
	@Autowired
	CustomerService cservice;
	@Autowired
	LoginService lservice;
	@GetMapping("/getcustomer")
	public List<Customer> getCust()
	{
		return cservice.getcust(); 
	}
	@DeleteMapping("/deletecust/{cid}")
	public void getDelete(@PathVariable("cid") int cid)
	{
		cservice.getDelete(cid);
	}
	@GetMapping("/getcustomerbyid/{cid}")
	public List<Customer> getcustomerbyid(@PathVariable("cid") int cid)
	{
		return cservice.getcustomerbyid(cid);
	}
	@PostMapping("/registerc")
	public Customer registerCustomer(@RequestBody CustomerRegister cr)
	{
		Login l= new Login(cr.getUname(),cr.getPwd(),"customer");
		Login inserted =lservice.save(l);
		Customer c= new Customer(cr.getFname(),cr.getLname(),cr.getEmail(),cr.getAddress(),cr.getGender(),cr.getContactno(),cr.getLicenceno(),inserted);
		return cservice.save(c);
	}
	@PostMapping("/savecustomer")
	public Customer save(@RequestBody Customer c)
	{
		return cservice.save(c);
	}
}