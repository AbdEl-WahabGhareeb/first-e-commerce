"use client";
import { Categories } from "@/app/types/category.model";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import {
    getCategories,
    getSupCategories,
} from "@/app/serveractions/categories.action";

export default function CategoryDisplay({
    category,
}: {
    category: Categories[];
}) {


    async function handleSubDisplay(id: string) {
        const categories = await getCategories();
        console.log(categories);

        const subCategory = await getSupCategories(id);
        console.log(subCategory, " sub cat from caaaaaaaaaaaat");
        const subCategoory = await getSupCategories(id);

        console.log(subCategoory);
    }
    return (
        <>
            {category?.map((cat) => (
                <div onClick={() => handleSubDisplay(cat?._id)} key={cat._id}>
                    <Card className="relative w-full justify-around gap-0 p-0 text-center  hover:shadow-special transition-all duration-500">
                        <CardContent className="p-0">
                            <div className="relative w-full h-[300px] ">
                                <Image
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw (max-width: 1200px) 50vw , 25vw"
                                    priority
                                    loading="eager"
                                    fill
                                    src={cat?.image}
                                    alt={cat?.name}
                                />
                            </div>
                        </CardContent>
                        <CardFooter className="text-center items-center justify-center py-3">
                            <p className="text-3xl text-green-700 font-semibold p-2">
                                {cat?.name}
                            </p>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </>
    );
}
