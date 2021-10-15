package com.usa.ciclo3.ciclo3.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.usa.ciclo3.ciclo3.model.AdministratorsUsers;
import com.usa.ciclo3.ciclo3.repository.AdministratorsUsersRepository;

@Service
public class AdministratorsUsersService {

	@Autowired
	private AdministratorsUsersRepository administratorsUsersRepository;

	public List<AdministratorsUsers> getAll() {

		return administratorsUsersRepository.getAll();
	}

	public Optional<AdministratorsUsers> getAdministratorUser(int id) {
		return administratorsUsersRepository.getAdministratorUser(id);
	}

	public AdministratorsUsers save(AdministratorsUsers admin) {
		if (admin.getIdAdminUser() == null) {
			return administratorsUsersRepository.save(admin);
		} else {
			Optional<AdministratorsUsers> auxOptional = administratorsUsersRepository
					.getAdministratorUser(admin.getIdAdminUser());
			if (auxOptional.isEmpty()) {
				return administratorsUsersRepository.save(admin);
			} else {
				return admin;
			}

		}
	}
}
