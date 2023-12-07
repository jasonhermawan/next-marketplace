import CarouselComponent from "@/components/Carousel";
import { printDiscountProducts} from "./utils/products";
import ExploreByCategory from "./view/categories";
import LoadButton from "@/components/LoadButton";

export default async function Home() {
  return (
    <div>
      <CarouselComponent />
      <div className="mt-12">
        <h1 className="text-4xl font-semibold mb-5">Best Deals</h1>
        <div className="flex">{printDiscountProducts()}</div>
      </div>
      <div className="mt-12">
        <ExploreByCategory />
      </div>
      <LoadButton />
    </div>
  );
}
