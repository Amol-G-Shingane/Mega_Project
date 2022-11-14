package com.example.demo.entities;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="payment")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int tid;
	@Column
	int bid;
	@Column
	int cid;
	@Column
	double tamt;
	@Column
	String mode;
	@Column
	//@JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
	String datetime;
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Payment(int bid, int cid, double tamt, String mode, String datetime) {
		super();
		this.bid = bid;
		this.cid = cid;
		this.tamt = tamt;
		this.mode = mode;
		this.datetime = datetime;
	}

	public int getTid() {
		return tid;
	}
	public void setTid(int tid) {
		this.tid = tid;
	}
	public int getBid() {
		return bid;
	}
	public void setBid(int bid) {
		this.bid = bid;
	}
	public int getCid() {
		return cid;
	}
	public void setCid(int cid) {
		this.cid = cid;
	}
	public double getTamt() {
		return tamt;
	}
	public void setTamt(double tamt) {
		this.tamt = tamt;
	}
	public String getMode() {
		return mode;
	}
	public void setMode(String mode) {
		this.mode = mode;
	}

	public String getDatetime() {
		return datetime;
	}

	public void setDatetime(String datetime) {
		this.datetime = datetime;
	}
}
