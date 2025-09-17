import { getSupCategories } from "@/app/serveractions/categories.action";
import SubCategoryDisplay from "@/components/CategoryComponent/SubCategoryDisplay";
import React from "react";

export default async function SubCatId({ params }: { params: { id: string } }) {
    const { id } = await params;

     const SubCategories = await getSupCategories(id);

    return (
        <div className="container mx-auto mt-20">
            <p className="font-semibold text-3xl text-green-700 mb-4"></p>
            <SubCategoryDisplay subcategories={SubCategories?.data} />
        </div>
    );
}
