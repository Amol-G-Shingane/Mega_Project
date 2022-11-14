package com.example.demo.entities;

public class CustomerRegister {
	String uname;
	String pwd;
	String fname;
	String lname;
	String email;
	String address;
	String gender;
	String contactno;
	String licenceno;
	public CustomerRegister() {
		super();
		// TODO Auto-generated constructor stub
	}
	public CustomerRegister(String uname, String pwd, String fname, String lname, String email, String address,
			String gender, String contactno, String licenceno) {
		super();
		this.uname = uname;
		this.pwd = pwd;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.address = address;
		this.gender = gender;
		this.contactno = contactno;
		this.licenceno = licenceno;
	}
	public String getUname() {
		return uname;
	}
	public void setUname(String uname) {
		this.uname = uname;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
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
	public String getLicenceno() {
		return licenceno;
	}
	public void setLicenceno(String licenceno) {
		this.licenceno = licenceno;
	}
	
}
