'use client'

import { useAppDispatch, useAppSelector } from '@/app/hooks';
import './BikeCart.css';
import { addToCart, decrementQuantity, incrementQuantity } from '@/features/cartSlice/cartSlice';



export default function BikeCart({ bike, count }:any) {
    const { picture, _id, name, resalePrice, originalPrice, sellerName, location, category, condition, description, use, time, mobileNumber } =  bike;
     
        // const id = useParams()
        const {quantity} = useAppSelector((state) => state.cart)
        const cart = useAppSelector((state: any) => state.cart.cart)
        const dispatch = useAppDispatch(); 

    const cartInfo = cart.find((bike: any) => bike._id === _id)
    console.log(cartInfo);

    return (
        <div>
            <div className="w-full bg-[#f8f8f8] card-shadow">
                <div className='flex justify-between items-start p-8'>
                    <div className='text-start'>
                        <h1 className='font-[Oswald] uppercase text-xl'>{name}</h1>
                        <small className='uppercase'>Posted by {sellerName}</small>
                    </div>
                    <div>
                        <p className='font-[Oswald] text-2xl text-primary'>${resalePrice}</p>
                        <small>
                            <div className="tooltip tooltip-left" data-tip="Create ads on home page">
                            </div>
                        </small>
                    </div>
                </div>
                <label htmlFor="booking-modal" className='cursor-pointer'>
                    <figure className='bg-base-200 md:h-80 h-full flex justify-center items-center relative'><img src={picture} alt="Shoes" className='w-[94%] mx-auto' />
                        <div className='flex justify-center absolute items-center h-[100%] w-full font-[Oswald] duration-500 hover:bg-black hover:bg-opacity-60 z-50 blog-img'>
                            <div className='w-[100%] h-[100%] flex justify-center duration-1000 translate-y-0 hover:translate-y-24'>
                                <p className='w-[100px] py-5 text-secondary side-text text-img text-2xl uppercase'>buy now</p>
                            </div>
                        </div>
                    </figure>
                </label>
                <div className="p-10">
                    <div className='flex justify-between border-b-2 pb-7'>
                        <div>
                            <h3 className='font-[Oswald] uppercase'>location</h3>
                            <p>{location}</p>
                        </div>
                        <div className='border-x-2 px-4'>
                            <h3 className='font-[Oswald] uppercase'>Type</h3>
                            <p>{category}</p>
                        </div>
                        <div>
                            <h3 className='font-[Oswald] uppercase'>Condition</h3>
                            <p>{condition}</p>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <p className='text-start'>{description.slice(0, 150)}...</p>
                    </div>
                    <div className='flex items-center justify-between mt-4 p-2 border'>
                        <div className=' text-center'>
                            <p className='text-sm text-slate-600'>Total Price</p>
                        <h1 className='text-primary text-2xl font-semibold'>
                            {
                             cartInfo?.quantity?(resalePrice*cartInfo?.quantity): 0
                            }   
                        </h1>
                        </div>
                        <div className={`${cartInfo?.quantity > 0 ? 'flex': 'hidden'} flex items-center gap-3`}>
                        <button onClick={() => dispatch(decrementQuantity(bike))}  className='btn-primary'>-</button>
                        <p>{
                            cartInfo?
                            <>
                            {
                            cartInfo.quantity
                            }</>
                            :
                            <>0</>
                            }</p>
                        <button onClick={() => dispatch(incrementQuantity(bike))} className='btn-primary'>+</button>
                        </div>
                        <button onClick={()=>dispatch(addToCart(bike))} className={`${cartInfo?.quantity? 'hidden': 'flex'} btn-primary`}>Add to Cart</button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}