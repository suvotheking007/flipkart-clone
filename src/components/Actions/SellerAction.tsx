import { Store } from "lucide-react";
import React from "react";

const SellerAction = () => {
  return (
    <div className="flex gap-2 items-center">
      <Store />
      <span className="hidden md:block">Become a seller</span>
    </div>
  );
};

export { SellerAction };
