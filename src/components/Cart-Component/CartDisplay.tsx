"use client";
import React from "react";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useCart } from "@/app/context/CartContext";
import { removeItem, updateQuantity } from "@/app/serveractions/cart.action";
import toast from "react-hot-toast";

export default function CartDisplay() {
    const { cartDetails, getCartDetails } = useCart();

    async function handleDeleteItem(productId: string) {
        const removeFromCart = await removeItem(productId);
        console.log(removeFromCart);
        toast.success("Item Successfuly Removed");
        await getCartDetails();
    }

    async function handleUpdateQuantity(productId: string, count: number) {
        const updateCount = await updateQuantity(productId, count);
        console.log(updateCount);
        toast.success("Quantity Updated Successfuly");
        await getCartDetails();
    }

    return (
        <>
            <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Product</TableHead>
                        <TableHead className="text-center">Price</TableHead>
                        <TableHead className="text-center">Quantity</TableHead>
                        <TableHead className="text-center">SubTotal</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {cartDetails?.data?.products?.map((product) => (
                        <TableRow key={product?._id}>
                            <TableCell className="p-3 w-[200px]">
                                <div className="flex items-center gap-3 ">
                                    <div className="relative">
                                        <Badge
                                            onClick={() =>
                                                handleDeleteItem(
                                                    product?.product?._id
                                                )
                                            }
                                            className="absolute top-[-10px] left-[-10px] cursor-pointer"
                                        >
                                            x
                                        </Badge>
                                        <Image
                                            src={product?.product?.imageCover}
                                            alt={product?.product?.title}
                                            width="60"
                                            height="60"
                                            className="object-cover"
                                        />
                                    </div>
                                    <p>
                                        {product?.product?.title
                                            .split(" ")
                                            .slice(0, 2)
                                            .join(" ")}
                                    </p>
                                </div>
                            </TableCell>
                            <TableCell className="p-3 ">
                                {product?.price} EGP
                            </TableCell>
                            <TableCell className="p-3">
                                <button
                                    onClick={() =>
                                        handleUpdateQuantity(
                                            product?.product?._id,
                                            product?.count + 1
                                        )
                                    }
                                    className="border rounded-md border-slate-600 hover:bg-slate-200 transition-all  px-2 py-1 cursor-pointer"
                                >
                                    +
                                </button>
                                <span className="mx-3">{product?.count}</span>
                                <button
                                    onClick={() =>
                                        handleUpdateQuantity(
                                            product?.product?._id,
                                            product?.count - 1
                                        )
                                    }
                                    className="border rounded-md border-slate-600 hover:bg-slate-200 transition-all  px-2 py-1 cursor-pointer"
                                >
                                    -
                                </button>
                            </TableCell>
                            <TableCell className="p-3">
                                {product?.count * product?.price} EGP
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TableCell className="text-left font-bold" colSpan={2}>
                            Total
                        </TableCell>
                        <TableCell className="font-bold">
                            {cartDetails?.data?.totalCartPrice || 0} EGP
                        </TableCell>
                        <TableCell className="font-bold">
                            <Button className="cursor-pointer hover:bg-slate-800 transition-all">
                                Checkout
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </>
    );
}
