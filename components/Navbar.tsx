"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { Search, ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { Input } from "./ui/input";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { handleCartClick, cartCount } = useShoppingCart();
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Eterna<span className="text-primary">Style</span>
          </h1>
        </Link>
        <div className="hidden lg:flex items-center">
          <Input />
          <Button className="m-2">
            <Search />
          </Button>
        </div>
        <nav className="items-center gap-12 lg:flex 2xl:ml-16">
          {links.map((link, index) => (
            <div className="hidden lg:flex" key={index}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}>
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  href={link.href}>
                  {link.name}
                </Link>
              )}
            </div>
          ))}

          <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none">
            <div className="flex">
              <ShoppingBag />
              {cartCount !== 0 ? (
                <div className="absolute mt-3 ml-3 md:ml-3 md:mt-0 md:top-9 bg-red-500 rounded-full w-5 h-5 text-white">
                  {cartCount}
                </div>
              ) : (
                " "
              )}
            </div>

            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
