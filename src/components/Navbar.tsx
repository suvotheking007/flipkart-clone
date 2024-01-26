import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import { CartAction, LoginAction, SellerAction } from "./Actions";
import ThreeDotMenu from "./ThreeDotMenu";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="bg-white sticky z-50 py-4">
      <header>
        <MaxWidthWrapper className="flex justify-between gap-4">
          <Icons.logo />
          <SearchBar />
          <LoginAction />
          <CartAction />
          <SellerAction />
          <ThreeDotMenu />
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
