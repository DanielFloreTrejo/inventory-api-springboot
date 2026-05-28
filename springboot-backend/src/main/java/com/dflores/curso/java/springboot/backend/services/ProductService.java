package com.dflores.curso.java.springboot.backend.services;

import com.dflores.curso.java.springboot.backend.entities.Product;

import java.util.List;
import java.util.Optional;

public interface ProductService {

    List<Product> findAll(); // lista todos los product

    Optional<Product> findById(Long id); // busca un producto a traves de Id

    Product save(Product product); // actualiza o guarda

    Optional<Product> deleteById(Long id); // borra un producto
}
