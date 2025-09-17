"use client";
import Link from "next/link";
import React from "react";
import { ShoppingCart, Heart } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { signOut, useSession } from "next-auth/react";
import { Badge } from "../ui/badge";
import { useCart } from "@/app/context/CartContext";

export default function Navbar() {
    const session = useSession();

    const { cartDetails } = useCart();

    return (
        <>
            <div className="bg-gray-200 fixed z-50 top-0 left-0 right-0">
                <NavigationMenu className=" p-4 max-w-7xl mx-auto justify-between items-center px-8">
                    <NavigationMenuList>
                        <NavigationMenuItem className="font-bold text-lg">
                            <Link href="/">Ecommerce</Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>

                    {session?.data ? (
                        <>
                            <NavigationMenuList className="gap-5 items-center">
                                <NavigationMenuItem>
                                    <Link href="/">Home</Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/cart">Cart</Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/wishlist">Wish List</Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/products">Products</Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/category">Category</Link>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <Link href="/brands">Brands</Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                            <NavigationMenuList className="gap-5 items-center"></NavigationMenuList>
                        </>
                    ) : null}

                    <NavigationMenuList className="gap-5">
                        {session?.data ? (
                            <>
                                <NavigationMenuItem>
                                    <Link
                                        href="/cart"
                                        className="relative block p-1.5"
                                    >
                                        {cartDetails?.numOfCartItems && (
                                            <Badge
                                                variant="default"
                                                className="absolute top-[-10px] right-[-8px]"
                                            >
                                                {cartDetails?.numOfCartItems}
                                            </Badge>
                                        )}
                                        <ShoppingCart />
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link
                                        href="/"
                                        onClick={() =>
                                            signOut({ callbackUrl: `/login` })
                                        }
                                    >
                                        Logout
                                    </Link>
                                </NavigationMenuItem>
                            </>
                        ) : (
                            <>
                                <NavigationMenuItem>
                                    <Link href="/login">Login</Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/register">Register</Link>
                                </NavigationMenuItem>
                            </>
                        )}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </>
    );
}
