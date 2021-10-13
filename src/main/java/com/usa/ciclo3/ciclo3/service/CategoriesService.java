package com.usa.ciclo3.ciclo3.service;

import com.usa.ciclo3.ciclo3.model.Categories;
import com.usa.ciclo3.ciclo3.repository.CategoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoriesService {

    @Autowired
    private CategoriesRepository categoriesRepository;

    public List<Categories> getAll(){
        return categoriesRepository.getAll();
    }

    public Optional<Categories> getCategory (int id){
        return categoriesRepository.getCategory(id);
    }

    public Categories save(Categories cat){
        if (cat.getIdCategories() == null){
            return categoriesRepository.save(cat);
        } else{
            Optional<Categories> categoriesAuxOptional = categoriesRepository.getCategory(cat.getIdCategories());
            if (categoriesAuxOptional.isEmpty()){
                return categoriesRepository.save(cat);
            } else {
                return cat;
            }
        }
    }
}
