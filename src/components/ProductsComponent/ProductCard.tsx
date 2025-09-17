"use client";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Products } from "@/app/types/product.model";
import { StarRating } from "react-flexible-star-rating";
import { Heart, ShoppingCart, ZoomIn } from "lucide-react";
import Link from "next/link";
import { addToUserCart} from "@/app/serveractions/cart.action";
import toast from "react-hot-toast";
import { useCart } from "@/app/context/CartContext";

export default function ProductCard({ product }: { product: Products }) {
    const { getCartDetails } = useCart();
    async function handleAddToCart(productId: string) {
        const addToCart = await addToUserCart(productId);
        toast.success(addToCart?.message);
        await getCartDetails();
    }
    return (
        <>
            <Card key={product?._id} className="relative group overflow-hidden">
                <div className="absolute flex flex-col gap-4 top-32 right-[-50px] z-1 group-hover:right-0.5 transition-all duration-500">
                    <button
                        className="cursor-pointer bg-slate-200 p-2 "
                        onClick={() => handleAddToCart(product?._id)}
                    >
                        <ShoppingCart className="w-6 h-5 hover:text-blue-700 transition-all" />
                    </button>
                    <button className="cursor-pointer bg-slate-200 p-2 ">
                        <Heart className="w-6 h-5 hover:text-blue-700 transition-all" />
                    </button>
                    <button className="cursor-pointer bg-slate-200 p-2 ">
                        <Link href={`/products/${product?._id}`}>
                            <ZoomIn className="w-6 h-5 hover:text-blue-700 transition-all" />
                        </Link>
                    </button>
                </div>
                <CardHeader>
                    <CardTitle>
                        {product?.title.split(" ").slice(0, 2).join(" ")}
                    </CardTitle>
                    <CardDescription>
                        {product?.description.split(" ").slice(0, 2).join(" ") +
                            "..."}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full h-[200px] ">
                        <Image
                            className="object-cover p-8"
                            sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                            priority
                            loading="eager"
                            fill
                            src={product?.imageCover}
                            alt={product?.title}
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex-col justify-start items-start gap-3">
                    <div>
                        <span className="font-bold text-[16px] me-[5px]">
                            Price:
                        </span>
                        <span className="text-[14px] font-medium me-[5px]">
                            {product?.price}
                        </span>
                        <span className="text-[12px] font-normal">EGP</span>
                    </div>
                    <div className="text-lg">
                        <StarRating
                            initialRating={Math.floor(product?.ratingsAverage)}
                            dimension={7}
                        ></StarRating>
                    </div>
                </CardFooter>
            </Card>
        </>
    );
}
