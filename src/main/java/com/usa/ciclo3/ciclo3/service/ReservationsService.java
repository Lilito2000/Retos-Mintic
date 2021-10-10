package com.usa.ciclo3.ciclo3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usa.ciclo3.ciclo3.model.Reservations;
import com.usa.ciclo3.ciclo3.repository.ReservationsRepository;

@Service
public class ReservationsService {

	@Autowired
	private ReservationsRepository reservationsRepository;

	public List<Reservations> getAll() {

		return reservationsRepository.getAll();
	}

	public Optional<Reservations> getResevation(int id) {
		return reservationsRepository.getRegistranion(id);
	}

	public Reservations save(Reservations reserv) {
		if (reserv.getIdReservation() == null) {
			return reservationsRepository.save(reserv);
		} else {
			Optional<Reservations> reserveAuxOptional = reservationsRepository
					.getRegistranion(reserv.getIdReservation());
			if (reserveAuxOptional.isEmpty()) {
				return reservationsRepository.save(reserv);
			} else {
				return reserv;
			}

		}
	}
}
