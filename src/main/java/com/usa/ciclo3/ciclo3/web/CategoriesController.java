package com.usa.ciclo3.ciclo3.web;

import com.usa.ciclo3.ciclo3.model.Categories;
import com.usa.ciclo3.ciclo3.service.CategoriesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Category")
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
public class CategoriesController {

    @Autowired
    private CategoriesService categoriesService;

    @GetMapping("/all")
    public List<Categories> getCategories(){
        return categoriesService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<Categories> getCategory(@PathVariable("id") int id){
        return categoriesService.getCategory(id);
    }

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Categories save(@RequestBody Categories cat){
        return categoriesService.save(cat);
    }
}
