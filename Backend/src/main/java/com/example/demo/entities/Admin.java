package com.example.demo.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="admin")
public class Admin {
	@Id
	int aid;
	@OneToOne(cascade =CascadeType.ALL)
	@JoinColumn(name="loginid")
	Login loginid;
	public Admin() {
		super();
	}
	public Admin(int aid, Login loginid) {
		super();
		this.aid = aid;
		this.loginid = loginid;
	}
	public int getAid() {
		return aid;
	}
	public void setAid(int aid) {
		this.aid = aid;
	}
	public Login getLoginid() {
		return loginid;
	}
	public void setLoginid(Login loginid) {
		this.loginid = loginid;
	}
}
