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

import com.example.demo.entities.Login;
import com.example.demo.entities.Owner;
import com.example.demo.entities.OwnerRegister;
import com.example.demo.service.LoginService;
import com.example.demo.service.OwnerService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class OwnerController {
	@Autowired
	OwnerService oservice;
	@Autowired
	LoginService lservice;
	@GetMapping("/getowner")
	public List<Owner> getOwner()
	{
		return oservice.getOwner(); 
	}
	@DeleteMapping("/deleteowner/{oid}")
	public void getDelete(@PathVariable("oid") int oid)
	{
		oservice.getDelete(oid);
	}
	@GetMapping("/getownerbyoid/{oid}")
	public List<Owner> getcustomerbyid(@PathVariable("oid") int oid)
	{
		return oservice.getownerbyoid(oid);
	}
	@PostMapping("/registero")
	public Owner registerOwner(@RequestBody OwnerRegister or)
	{
		Login l= new Login(or.getUname(),or.getPwd(),"owner");
		Login inserted =lservice.save(l);
		Owner o= new Owner(or.getFname(),or.getLname(),or.getEmail(),or.getAddress(),or.getGender(),or.getContactno(),or.getAdharno(),inserted);
		return oservice.save(o);
	}
	@PostMapping("/saveowner")
	public Owner save(@RequestBody Owner o)
	{
		return oservice.save(o);
	}
}
