package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entities.Login;
import com.example.demo.entities.Owner;

@Repository
public interface OwnerRepository extends JpaRepository<Owner, Integer> {
	@Transactional
	@Modifying
	@Query("delete from Owner o where oid=?1")
	public void getDelete(int oid);
	@Query("select o from Owner o where o.loginid =:loginid")
	public Optional<Owner> getOwe(Login loginid);
	@Query("select o from Owner o where o.oid=:oid")
	public List<Owner> getownerbyoid(int oid);
}
