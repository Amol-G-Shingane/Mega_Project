package com.example.demo.entities;

import java.time.LocalDateTime;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="booking")
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int bid;
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	Date fdate;
	@Column
	@JsonFormat(pattern="yyyy-MM-dd")
	Date tdate;
	@Column
	String destto;
	@Column
	String destfrom;
	@Column
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd HH:mm:ss")
	String datetime;
	@Column
	int vid;
	public Booking() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	/*public Booking(Date fdate, Date tdate, String destto, String destfrom, LocalDateTime datetime, int vid) {
		super();
		this.fdate = fdate;
		this.tdate = tdate;
		this.destto = destto;
		this.destfrom = destfrom;
		this.datetime = datetime;
		this.vid = vid;
	}*/

	public Booking(Date fdate, Date tdate, String destto, String destfrom, String datetime, int vid) {
		super();
		this.fdate = fdate;
		this.tdate = tdate;
		this.destto = destto;
		this.destfrom = destfrom;
		this.datetime = datetime;
		this.vid = vid;
	}

	public int getBid() {
		return bid;
	}
	public void setBid(int bid) {
		this.bid = bid;
	}
	public Date getFdate() {
		return fdate;
	}
	public void setFdate(Date fdate) {
		this.fdate = fdate;
	}
	public Date getTdate() {
		return tdate;
	}
	public void setTdate(Date tdate) {
		this.tdate = tdate;
	}
	public String getDestto() {
		return destto;
	}
	public void setDestto(String destto) {
		this.destto = destto;
	}
	public String getDestfrom() {
		return destfrom;
	}
	public void setDestfrom(String destfrom) {
		this.destfrom = destfrom;
	}
	
	/*public LocalDateTime getDatetime() {
		return datetime;
	}

	public void setDatetime(LocalDateTime datetime) {
		this.datetime = datetime;
	}*/

	public String getDatetime() {
		return datetime;
	}

	public void setDatetime(String datetime) {
		this.datetime = datetime;
	}

	public int getVid() {
		return vid;
	}
	public void setVid(int vid) {
		this.vid = vid;
	}
	
}
