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

import com.example.demo.entities.Vehicle;
import com.example.demo.service.VehicleService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
public class VehicleController {
	@Autowired
	VehicleService vservice;
	@GetMapping("/getveh")
	public List<Vehicle> getveh()
	{
		return vservice.getveh();
	}
	@DeleteMapping("/deleteveh/{vid}")
	public void getDelete(@PathVariable("vid") int vid)
	{
		vservice.getDelete(vid);
	}
	@GetMapping("/getvehbyoid/{oid}")
	public List<Vehicle> getvehbyoid(@PathVariable("oid") int oid)
	{
		return vservice.getvehbyoid(oid);
	}
	@GetMapping("/getvehbyid/{vid}")
	public Vehicle getvehbyid(@PathVariable("vid") int vid)
	{
		return vservice.getvehbyid(vid);
	}
	@GetMapping("/searchveh/{city}/{vtype}")
	public List<Vehicle> getbysearch(@PathVariable("city") String city,@PathVariable("vtype") String vtype)
	{
		return vservice.getbysearch(city,vtype);
	}
	@GetMapping("/getvtype")
	public List<Vehicle> getbyvtype(@RequestParam("vtype") String vtype)
	{
		return vservice.getbyvtype(vtype);
	}
	@GetMapping("/getcategory")
	public List<Vehicle> getbycategory(@RequestParam("category") String category)
	{
		return vservice.getbycategory(category);
	}
	@GetMapping("/getcity")
	public List<Vehicle> getbycity(@RequestParam("city") String city)
	{
		return vservice.getbycity(city);
	}
	@PostMapping("/savevehicle")
	public Vehicle save(@RequestBody Vehicle v)
	{
		//System.out.println(v.ge);
		return vservice.save(v);
	}
}
