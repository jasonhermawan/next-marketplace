import CarouselComponent from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";
import axios from "axios";

export default async function Home() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/product`
  );
  const printDiscountProducts = () => {
    return response.data.map((val) => {
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
  const printProducts = () => {
    return response.data.map((val) => {
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
      <CarouselComponent />
      <div className="mt-12">
        <h1 className="text-4xl font-semibold mb-5">
          Best Deals
        </h1>
        <div className="flex">{printDiscountProducts()}</div>
      </div>
      <div className="mt-12">
        <h1 className="text-4xl font-semibold mb-5">
          Explore
        </h1>
        <div className="flex">{printProducts()}</div>
      </div>
    </div>
  );
}
