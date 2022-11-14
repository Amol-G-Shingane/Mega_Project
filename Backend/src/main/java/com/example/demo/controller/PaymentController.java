package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entities.Payment;
import com.example.demo.service.PaymentService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class PaymentController {
	@Autowired
	PaymentService pservice;
	@GetMapping("/getpay")
	public List<Payment> getpay()
	{
		return pservice.getpay();
	}
	@DeleteMapping("/deletepay/{tid}")
	public void getDelete(@PathVariable("tid") int tid)
	{
		pservice.getDelete(tid);
	}
	@GetMapping("/getpaycid/{cid}")
	public List<Payment> getpaybycid(@PathVariable("cid") int cid)
	{
		return pservice.getpaybycid(cid);
	}
	@GetMapping("/getpaybybid")
	public List<Payment> getpaybybid(@RequestParam("bid") int bid)
	{
		return pservice.getpaybybid(bid);
	}
	@PostMapping("/savepayment")
	public Payment save(@RequestBody Payment p)
	{
		return pservice.save(p);
	}
}
