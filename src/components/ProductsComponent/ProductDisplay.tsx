import { Products } from "@/app/types/product.model";
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductDisplay({ products }: { products: Products[] }) {
    return (
        <>
            <div className="mb-12">
                <div className="container mx-auto my-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products?.map((product) => (
                        <ProductCard key={product?._id} product={product} />
                    ))}
                </div>

            </div>
        </>
    );
}
