package com.usa.ciclo3.ciclo3.repository;

import java.util.List;
import java.util.Optional;

import com.usa.ciclo3.ciclo3.model.Categories;
import com.usa.ciclo3.ciclo3.repository.crud.CategoriesCrudRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CategoriesRepository {

    @Autowired
    private CategoriesCrudRepository categoriesCrudRepository;

    public List<Categories> getAll(){
        return (List<Categories>) categoriesCrudRepository.findAll();
    }

    public Optional<Categories> getCategory(int id){
        return categoriesCrudRepository.findById(id);
    }

    public Categories save(Categories c) {
        return categoriesCrudRepository.save(c);
    }

}
