"use client";
import ProductCard from "@/components/ProductCard";
import CategoryCard from "@/components/CategoryCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ExploreByCategory = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(1);

  const getCategory = async () => {
    try {
      const categories = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/category`
      );
      setCategories(categories.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const products = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/product?categoryid=${selectedCategory}`
      );
      setProducts(products.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategory();
    getProducts();
  }, []);

  const printCategories = () => {
    return categories.map((val) => {
      return (
        <CategoryCard 
          key={val.id} 
          active={selectedCategory === val.id ? true : false}
          onclick={() => setSelectedCategory(val.id)}
          name={val.category} 
        />
      )
    });
  };

  useEffect(() => {
    getProducts();
  }, [selectedCategory]);

  const printProductsByCategory = () => {
    return products.map((val) => {
      return (
        <ProductCard
          key={val.id}
          id={val.id}
          image={`${process.env.NEXT_PUBLIC_API_BASE_URL}/public/products/${val.product_images[0].image}`}
          discount={val.discountPrice}
          price={val.normalPrice}
          name={val.name}
        />
      );
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold mb-4">Explore Products</h1>
      <div className="flex gap-2 mb-5">{printCategories()}</div>
      <div className="flex">{printProductsByCategory().length ? printProductsByCategory() : "No products"}</div>
    </div>
  );
};

export default ExploreByCategory;
