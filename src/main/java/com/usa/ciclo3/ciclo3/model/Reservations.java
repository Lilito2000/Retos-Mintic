package com.usa.ciclo3.ciclo3.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import ch.qos.logback.core.net.server.Client;

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
	private String status;
	private String score=null;
	
	@ManyToOne
	@JoinColumn(name="client")
	@JsonIgnoreProperties("client")
	private Client client;
	
	@ManyToOne
	@JoinColumn(name="skate")
	@JsonIgnoreProperties("skate")
	private Skateboard skate;
	
	
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

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getScore() {
		return score;
	}

	public void setScore(String score) {
		this.score = score;
	}

	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;
	}

	public Skateboard getSkate() {
		return skate;
	}

	public void setSkate(Skateboard skate) {
		this.skate = skate;
	}

	
	
		
	
	
}
