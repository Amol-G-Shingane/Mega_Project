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

import com.example.demo.entities.Booking;
import com.example.demo.service.BookingService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class BookingController {
	@Autowired
	BookingService bservice;
	@PostMapping("/savebooking")
	public Booking save(@RequestBody Booking b)
	{
		return bservice.save(b);
	}
	@DeleteMapping("/deletebook/{bid}")
	public void getDelete(@PathVariable("bid") int bid)
	{
		bservice.getDelete(bid);
	}
	@GetMapping("/getbooking")
	public List<Booking> getbooking()
	{
		return bservice.getbooking();
	}
	@GetMapping("/getbookingbycid/{cid}")
	public List<Booking> getbookingbycid(@PathVariable("cid") int cid)
	{
		return bservice.getbookingbycid(cid);
	}
}
