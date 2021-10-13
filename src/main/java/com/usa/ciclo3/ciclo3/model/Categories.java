package com.usa.ciclo3.ciclo3.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="categories")
public class Categories implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @JsonIgnoreProperties({"idCategories"})
    private Integer idCategories;

    @Column(name="name", nullable=true, length= 45)
    private String name;

    @Column(name="description", nullable=true, length= 250)
    private String description;

    public Integer getIdCategories() {
        return idCategories;
    }
    public void setIdCategories(Integer idReservation) {
        this.idCategories = idReservation;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
}
