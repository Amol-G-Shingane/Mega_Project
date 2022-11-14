package com.example.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vehicle")
public class Vehicle {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int vid;
	@Column
	String vno;
	@Column
	String vname;
	@Column
	String vtype;
	@Column
	String city;
	@Column
	String category;
	@Column
	String insurence;
	@Column
	String image;
	/*@OneToOne(cascade=CascadeType.ALL,targetEntity =Owner.class)
	@JoinColumn(name="oid")
	//@JsonProperty(access = Access.READ_WRITE)*/
	@Column
	int oid;
	public Vehicle() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Vehicle(String vno, String vname, String vtype, String city, String category, String insurence, String image,
			int oid) {
		super();
		this.vno = vno;
		this.vname = vname;
		this.vtype = vtype;
		this.city = city;
		this.category = category;
		this.insurence = insurence;
		this.image = image;
		this.oid = oid;
	}

	/*public Vehicle(String vno, String vname, String vtype, String city, String category, String insurence, String image,
			Owner oid) {
		super();
		this.vno = vno;
		this.vname = vname;
		this.vtype = vtype;
		this.city = city;
		this.category = category;
		this.insurence = insurence;
		this.image = image;
		this.oid = oid;
	}*/
	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getVname() {
		return vname;
	}

	public void setVname(String vname) {
		this.vname = vname;
	}

	public int getVid() {
		return vid;
	}
	public void setVid(int vid) {
		this.vid = vid;
	}
	public String getVno() {
		return vno;
	}
	public void setVno(String vno) {
		this.vno = vno;
	}
	public String getVtype() {
		return vtype;
	}
	public void setVtype(String vtype) {
		this.vtype = vtype;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getInsurence() {
		return insurence;
	}
	public void setInsurence(String insurence) {
		this.insurence = insurence;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public int getOid() {
		return oid;
	}
	public void setOid(int oid) {
		this.oid = oid;
	}
	
	/*public Owner getOid() {
		return oid;
	}
	public void setOid(Owner oid) {
		this.oid = oid;
	}*/
}
