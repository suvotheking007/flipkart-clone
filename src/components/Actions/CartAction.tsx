import { ShoppingCart } from "lucide-react";
import React from "react";

const CartAction = () => {
  return (
    <div className="flex gap-2 items-center">
      <ShoppingCart />
      <span className="hidden md:block">Cart</span>
    </div>
  );
};

export { CartAction };
