/* eslint-disable react/prop-types */

import CakeCard from "./CakeCard";

const ProductList = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.length > 0 ? (
        <>
          {" "}
          {products.map((product) => (
            <CakeCard key={product.id} product={product} />
          ))}
        </>
      ) : (
        <p className="col-span-4 text-center p-10">No products found 😓</p>
      )}
    </div>
  );
};

export default ProductList;
