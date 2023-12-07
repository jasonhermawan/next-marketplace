import ProductCard from "@/components/ProductCard";
import axios from "axios";

const products = await axios.get(
  `${process.env.NEXT_PUBLIC_API_BASE_URL}/product`
);

export const printDiscountProducts = () => {
  return products.data.map((val) => {
    if (val.discountPrice) {
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
    }
  });
};

export const printProducts = () => {
  return products.data.map((val) => {
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