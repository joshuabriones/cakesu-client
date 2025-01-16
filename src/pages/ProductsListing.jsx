import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { CirclePlus, ListCollapse } from "lucide-react";

import AddProduct from "@/features/product/components/AddProduct";
import ViewProducts from "@/features/product/components/ViewProducts";

const ProductsListing = () => {
  return (
    <div className="h-screen w-full p-10 ">
      <Tabs defaultValue="add" className="w-full bg-white mx-auto">
        <TabsList>
          <TabsTrigger value="add">
            <CirclePlus className="w-4 mr-2" /> Add Product
          </TabsTrigger>
          <TabsTrigger value="view">
            <ListCollapse className="w-4 mr-2" /> View Products
          </TabsTrigger>
        </TabsList>
        <TabsContent value="add">
          <AddProduct />
        </TabsContent>
        <TabsContent value="view">
          <ViewProducts />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductsListing;
