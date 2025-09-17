"use client";
import React from "react";
import { Categories } from "@/app/types/category.model";

export default function SubCategoryDisplay({
    subcategories,
}: {
    subcategories: Categories[];
}) {


    console.log(subcategories, "sub cateeeeeeegooooooooooriiiies");

    return (
        <>
            <p className="font-semibold text-3xl text-green-700 mb-4"></p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {subcategories?.map((subcat) => (
                    <div
                        key={subcat?._id}
                        className="bg-transparent font-semibold text-black text-center py-5 hover:bg-transparent hover:shadow-special transition-all duration-500 text-2xl border "
                    >
                        {subcat?.name}
                    </div>
                ))}
            </div>
        </>
    );
}
