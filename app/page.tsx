import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductList title={"Our Newest products"} />
    </div>
  );
}
