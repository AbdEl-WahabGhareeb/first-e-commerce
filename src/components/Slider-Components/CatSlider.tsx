import { getCategories } from "@/app/serveractions/categories.action";
import React from "react";
import CatDisplay from "./CatDisplay";

export default async function CatSlider() {
    const category = await getCategories();

    console.log(category?.data);

    return (
        <div>
            <CatDisplay categories={category?.data?.data} />
        </div>
    );
}
