package com.usa.ciclo3.ciclo3.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "Message")
public class Message implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idMessage;
	@Column(length = 250)
	private String messageText;

	@ManyToOne
	@JoinColumn(name = "skateId")
	@JsonIgnoreProperties({"messages", "reservations"})
	private Skateboard skate;

	@ManyToOne
	@JoinColumn(name = "clientId")
	@JsonIgnoreProperties({"messages", "reservations"})
	private Client client;

	public Integer getIdMessage() {
		return idMessage;
	}

	public void setIdMessage(Integer idMessage) {
		this.idMessage = idMessage;
	}

	public String getMessageText() {
		return messageText;
	}

	public void setMessageText(String messageText) {
		this.messageText = messageText;
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