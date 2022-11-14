package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
	@Transactional
	@Modifying
	@Query("delete from Payment p where tid=?1")
	public void getDelete(int tid);
	@Query("select p from Payment p where cid=?1")
	public List<Payment> getpaybycid(int cid);
	@Query("select p from Payment p where bid=?1")
	public List<Payment> getpaybybid(int bid);
}
