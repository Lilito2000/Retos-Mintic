package com.usa.ciclo3.ciclo3.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.usa.ciclo3.ciclo3.model.Reservations;
import com.usa.ciclo3.ciclo3.repository.crud.ReservationsCrudRepository;

@Repository
public class ReservationsRepository {
	
	@Autowired
	private ReservationsCrudRepository reservationsCrudRepository;  
	
	public List<Reservations> getAll(){

		return (List<Reservations>) reservationsCrudRepository.findAll();
	}
	public Optional<Reservations> getRegistranion(int id){

		return reservationsCrudRepository.findById(id);
	}
	
	public Reservations save(Reservations r) {
		return reservationsCrudRepository.save(r);
	}

}
