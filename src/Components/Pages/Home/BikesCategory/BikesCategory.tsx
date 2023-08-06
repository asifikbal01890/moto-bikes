// 'use client'

import { useEffect } from "react";
import CategoryCart from "./CategoryCart";
import './Category.css'
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { getCategories } from "@/features/categorySlice/categorySlice";



export default function BikesCategory() {

 const dispatch = useAppDispatch();
 const {categories} = useAppSelector((state) => state.categories)
 console.log(categories);
useEffect(() => {
    dispatch(getCategories())
}, [dispatch])

    return (
        <div className='bg-category my-24'>
            <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-[1440px] mx-auto px-5'>
                {
                    categories.map((bikeCategory:any) => <CategoryCart
                        key={bikeCategory._id}
                        bikeCategory={bikeCategory}
                    ></CategoryCart>)
                }
            </div>
        </div>
    );
}