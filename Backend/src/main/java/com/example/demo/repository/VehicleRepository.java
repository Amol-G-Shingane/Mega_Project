package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.entities.Vehicle;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Integer> {
	@Transactional
	@Modifying
	@Query("delete from Vehicle v where vid=?1")
	public void getDelete(int vid);
	@Query("select v from Vehicle v where vtype=?1")
	public List<Vehicle> getbyvtype(String vtype);
	@Query("select v from Vehicle v where category=?1")
	public List<Vehicle> getbycategory(String category);
	@Query("select v from Vehicle v where city=?1")
	public List<Vehicle> getbycity(String city);
	@Query("select v from Vehicle v where city=?1 and vtype=?2")
	public List<Vehicle> getbysearch(String city,String vtype);
	@Query("select v from Vehicle v where vid=?1")
	public Vehicle getvehbyid(int vid);
	@Query("select v from Vehicle v where oid=?1")
	public List<Vehicle> getvehbyoid(int oid);
}
