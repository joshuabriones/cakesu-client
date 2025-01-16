/* eslint-disable react/prop-types */
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const CakeCard = ({ product }) => {
  return (
    <div className="rounded-2xl border-2 border-[rgb(243,234,229)]">
      {/* Image Section */}
      <img
        src={product.images}
        alt={product.name}
        className="w-full h-60 object-cover"
      />
      <Separator />

      {/* Content Section */}
      <div className="p-4 flex flex-col justify-between h-32">
        <h2 className="text-xl font-semibold">{product.name}</h2>

        <div className="flex items-center justify-between">
          <p className="text-prim font-semibold mt-auto">${product.price}</p>
          <Button>Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default CakeCard;
