// 'use client'
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import BikesFilter from "./BikesFilter/BikesFilter";
import { getBikeById, getBikes } from "@/features/bikeSlice/bikeSlice";
import BikeCart from "./BikesFilter/BikeCart/BikeCart";
import { useParams, useSearchParams } from 'next/navigation'

export default function BikesCollection() {
 
    const dispatch = useAppDispatch();
    const id = useParams()
    // console.log(id?.bikes);

    const {bikes} = useAppSelector((state) => state.bikes)
    const {bike} = useAppSelector((state) => state.bikes)
    const {count} = useAppSelector((state) => state.counter)
    
    
    useEffect(() => {
        dispatch(getBikes())
        dispatch(getBikeById(id?.bikes as string))
    }, [dispatch, id?.bikes])
   
   

    return (
        <div>
            <div className='grid lg:grid-cols-3 xl:gap-10 gap-6 justify-center max-w-[1440px] mx-auto px-5 pt-32'>
            <div className='lg:flex hidden'>
            <BikesFilter/>
            </div>
            <div className='col-span-2'>
                <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-10 gap-6'>
                    {
                        bike?.map((bike : any) => <BikeCart
                            key={bike._id}
                            bike={bike}
                            count={count}
                        ></BikeCart>)
                    }
                    {/* <BikeCart 
                    bike={bike}
                    ></BikeCart> */}
                </div>
            </div>
        </div>
        {/* <BookingModal
                product={product}
                setProduct={setProduct}
            ></BookingModal> */}
        </div>
    );
}