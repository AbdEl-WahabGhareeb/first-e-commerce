import {
    getCategories,
    getSupCategories,
} from "@/app/serveractions/categories.action";
import SubCategoryDisplay from "@/components/CategoryComponent/SubCategoryDisplay";
import React from "react";

export default async function SubCatId({ params }: { params: { id: string } }) {
    const { id } = await params;

    const SubCategories = await getSupCategories(id);
    const categories = await getCategories();
    console.log(categories);

    return (
        <div className="container mx-auto mt-20">
            <SubCategoryDisplay
                subcategories={SubCategories?.data}
                category={categories?.data}
            />
        </div>
    );
}
