import { useEffect, useState } from "react";

import api from "@/lib/api";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductList from "@/features/product/components/ProductList";

import banner from "../../public/images/banner_best.png";

const Customer = () => {
  const [query, setQuery] = useState("wedding");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, [query]);

  const fetchProducts = async () => {
    try {
      const res = await api.get(`/api/products?category=${query}`);
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log("products", products);

  return (
    <div className="max-w-screen-2xl">
      <img src={banner} alt="banner" className="w-full object-cover" />
      <section className="w-full py-16">
        <Tabs defaultValue="wedding" className="w-full flex flex-col">
          <TabsList className="bg-white">
            <TabsTrigger
              className="data-[state=active]:bg-prim data-[state=active]:text-white"
              value="wedding"
              onClick={() => setQuery("wedding")}
            >
              Wedding
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-prim data-[state=active]:text-white"
              value="birthday"
              onClick={() => setQuery("birthday")}
            >
              Birthday
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-prim data-[state=active]:text-white"
              value="anniversary"
              onClick={() => setQuery("anniversary")}
            >
              Anniversary
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-prim data-[state=active]:text-white"
              value="cupcake"
              onClick={() => setQuery("cupcake")}
            >
              Cupcake
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-prim data-[state=active]:text-white"
              value="vegan"
              onClick={() => setQuery("vegan")}
            >
              Vegan
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-prim data-[state=active]:text-white"
              value="custom"
              onClick={() => setQuery("custom")}
            >
              Custom
            </TabsTrigger>
          </TabsList>

          <div className="px-10">
            <TabsContent value="wedding">
              <ProductList products={products} />
            </TabsContent>
            <TabsContent value="birthday">
              <ProductList products={products} />
            </TabsContent>
            <TabsContent value="anniversary">
              <ProductList products={products} />
            </TabsContent>
            <TabsContent value="cupcake">
              <ProductList products={products} />
            </TabsContent>
            <TabsContent value="vegan">
              <ProductList products={products} />
            </TabsContent>
            <TabsContent value="custom">
              <ProductList products={products} />
            </TabsContent>
          </div>
        </Tabs>
      </section>
    </div>
  );
};

export default Customer;
