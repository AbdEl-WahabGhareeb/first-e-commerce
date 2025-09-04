import Link from "next/link";
import React from "react";
import { ShoppingCart, Heart } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
    return (
        <>
            <div className="bg-gray-200">
                <NavigationMenu className=" p-4 max-w-7xl mx-auto justify-between items-center px-8">
                    <NavigationMenuList>
                        <NavigationMenuItem className="font-bold text-lg">
                            <Link href="/">Ecommerce</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    <NavigationMenuList className="gap-5 items-center">
                        <NavigationMenuItem>
                            <Link href="/">Home</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/products">Products</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/cart">Cart</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/category">Category</Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="/brands">Brands</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    <NavigationMenuList className="gap-5">
                        <NavigationMenuItem>
                            <Link href="/">
                                <ShoppingCart />
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/">
                                <Heart />
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    );
}
