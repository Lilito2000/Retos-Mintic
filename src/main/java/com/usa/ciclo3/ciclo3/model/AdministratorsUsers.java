package com.usa.ciclo3.ciclo3.model;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import ch.qos.logback.core.net.server.Client;

import java.io.Serializable;
import java.sql.Date;




@Entity
@Table(name="administratorsUsers")
public class AdministratorsUsers implements Serializable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idAdminUser;
	
	@Column(length = 250)
	private String userName;
	
	@Column(length = 45)
	private String userMail;
	
	@Column(length = 45)
	@JsonIgnoreProperties("userPassword")
	private String userPassword;
	
	public Integer getIdAdminUser() {
		return idAdminUser;
	}
	public void setIdAdminUser(Integer idAdminUser) {
		this.idAdminUser = idAdminUser;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getUserMail() {
		return userMail;
	}
	public void setUserMail(String userMail) {
		this.userMail = userMail;
	}
	public String getUserPasworidString() {
		return userPassword;
	}
	public void setUserPasworidString(String userPassword) {
		this.userPassword = userPassword;
	}
		
	
}
