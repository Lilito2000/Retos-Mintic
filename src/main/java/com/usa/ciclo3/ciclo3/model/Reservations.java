package com.usa.ciclo3.ciclo3.model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "reservations")
public class Reservations implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idReservation;
	private Date startDate;
	private Date devolutionDate;
	private String status;
	

	@ManyToOne
	@OneToMany(cascade = { CascadeType.PERSIST }, mappedBy = "client")
	@JsonIgnoreProperties({"client","reservations"})
	private Skateboard skate;
	
	@ManyToOne
	@OneToMany(cascade = { CascadeType.PERSIST }, mappedBy = "client")
	@JsonIgnoreProperties({"messages","reservations"})
	private Client client;

	
	private String score = null;

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
