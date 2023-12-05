import CarouselComponent from "@/components/Carousel";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div>
      <CarouselComponent />
      <div className="mt-12">
        <h1 className="text-4xl font-semibold tracking-tight mb-5">Best Deals</h1>
        <div className="flex">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
}
