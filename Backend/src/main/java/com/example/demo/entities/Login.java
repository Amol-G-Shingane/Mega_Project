package com.example.demo.entities;





import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="login")
public class Login {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int loginid;
	@Column
	String uname;
	@Column
	String pwd;
	@Column
	String role;
	/*@OneToOne(mappedBy="loginid", cascade=CascadeType.ALL)
	Customer cus;
	@OneToOne(mappedBy="loginid", cascade=CascadeType.ALL)
	Owner owe;*/
	public Login() {
		super();
	}
	/*
	public Login(String uname, String pwd, String role, Owner owe) {
		super();
		this.uname = uname;
		this.pwd = pwd;
		this.role = role;
		this.owe = owe;
	}

	public Owner getOwe() {
		return owe;
	}

	public void setOwe(Owner owe) {
		this.owe = owe;
	}
	public Login(int loginid, String uname, String pwd, String role, Customer cus) {
		super();
		this.loginid = loginid;
		this.uname = uname;
		this.pwd = pwd;
		this.role = role;
		this.cus = cus;
	}*/
	public Login(String uname, String pwd, String role) {
		super();
		this.uname = uname;
		this.pwd = pwd;
		this.role = role;
	}
	/*public Login(String uname, String pwd, String role, Customer cus) {
		super();
		this.uname = uname;
		this.pwd = pwd;
		this.role = role;
		this.cus = cus;
	}*/
	public int getLoginid() {
		return loginid;
	}
	public void setLoginid(int loginid) {
		this.loginid = loginid;
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
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
/*	public Customer getCus() {
		return cus;
	}
	public void setCus(Customer cus) {
		this.cus = cus;
	}
	*/
	
	
}
