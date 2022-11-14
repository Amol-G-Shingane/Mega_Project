package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {
	@Transactional
	@Modifying
	@Query("delete from Booking b where bid=?1")
	public void getDelete(int bid);
	@Query("select b from Booking b where bid=?1")
	public Booking getbookingbybid(int bid);
	@Query("select b from Booking b where b.bid IN (select p.bid from Payment p where p.cid=?1)")
	public List<Booking> getbookingbycid(int cid);
}
