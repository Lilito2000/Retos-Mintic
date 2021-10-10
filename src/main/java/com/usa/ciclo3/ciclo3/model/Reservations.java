package com.usa.ciclo3.ciclo3.model;

import javax.persistence.*;
import java.io.Serializable;
import java.sql.Date;




@Entity
@Table(name="reservations")
public class Reservations implements Serializable {
	@Id
	@GeneratedValue(strategy= GenerationType.IDENTITY)
	private Integer idReservation;
	private Date startDate;
	private Date devolutionDate;
	private String client;
	private String skate;
	
	public Integer getIdReservation() {
		return idReservation;
	}
	public void setIdReservation(Integer idReservation) {
		this.idReservation = idReservation;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getDevolutionDate() {
		return devolutionDate;
	}
	public void setDevolutionDate(Date devolutionDate) {
		this.devolutionDate = devolutionDate;
	}
	public String getClient() {
		return client;
	}
	public void setClient(String client) {
		this.client = client;
	}
	public String getSkate() {
		return skate;
	}
	public void setSkate(String skate) {
		this.skate = skate;
	}
	
	
}
