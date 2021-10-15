/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.usa.ciclo3.ciclo3.service;

import com.usa.ciclo3.ciclo3.model.Score;
import com.usa.ciclo3.ciclo3.repository.ScoreRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author lilia
 */
@Service
public class ScoreService {
 
   @Autowired
   private ScoreRepository scoreRepository; 
   
   public List<Score> getAll(){//
     return scoreRepository.getAll();
   }
    
    public Optional<Score> getScore (int id){
        return scoreRepository.getScore(id);
    }
    
    public Score save(Score puntaje) {
	if (puntaje.getIdScore() == null) {
            return scoreRepository.save(puntaje);
	
        } else {
		Optional<Score> puntajeAuxOptional = scoreRepository.getScore(puntaje.getIdScore());
                    if (puntajeAuxOptional.isEmpty()) {
			return scoreRepository.save(puntaje);
                    } else {
			return puntaje;
                    }
        }
    }

    
}
