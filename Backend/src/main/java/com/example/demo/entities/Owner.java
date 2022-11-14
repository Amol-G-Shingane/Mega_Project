package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

@Entity
@Table(name="owner")
public class Owner {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int oid;
	@Column
	String fname;
	@Column
	String lname;
	@Column
	String email;
	@Column
	String address;
	@Column
	String gender;
	@Column
	String contactno;
	@Column
	String adharno;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="loginid")
	//@JsonProperty(access = Access.WRITE_ONLY)
	Login loginid;
	
	public Owner() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Owner(String fname, String lname, String email, String address, String gender, String contactno, String adharno,
			Login loginid) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.address = address;
		this.gender = gender;
		this.contactno = contactno;
		this.adharno = adharno;
		this.loginid = loginid;
	}
	public int getOid() {
		return oid;
	}
	public void setOid(int oid) {
		this.oid = oid;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getContactno() {
		return contactno;
	}
	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	public String getAdharno() {
		return adharno;
	}
	public void setAdharno(String adharno) {
		this.adharno = adharno;
	}
	public Login getLoginid() {
		return loginid;
	}
	public void setLoginid(Login loginid) {
		this.loginid = loginid;
	}
	
}
