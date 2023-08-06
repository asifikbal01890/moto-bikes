// 'use client'

import CardOfCart from "./CardOfCart/CardOfCart";
import { useAppSelector } from "@/app/hooks";

export default function MyCart() {

    const cart = useAppSelector((state: any) => state.cart.cart)

    const totalQuantity = cart.reduce((total: any, item:any) => total + item.quantity, 0);

    const grossPrice = cart.reduce((total: any, item: any) => total + item.resalePrice * item.quantity, 0);


    return (
        <section className="pt-16 pl-11 h-screen">
            {
                cart.length ?
                    <>
                        <table className="min-w-full border-collapse block md:table">
                            <thead className="block md:table-header-group">
                                <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Price</th>
                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Quantity</th>
                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">TotalPrice</th>
                                    <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Action</th>
                                </tr>
                            </thead>
                            <tbody className="block md:table-row-group">
                                {
                                    cart.map((bike: any) => <CardOfCart
                                        key={bike._id}
                                        bike={bike}
                                    ></CardOfCart>)
                                }
                            </tbody>
                            {/* <p className="bg-black w-full h-[1px]"></p> */}
                            <tbody className="block md:table-row-group">
                                <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
                                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>Total Item : {cart.length}</td>
                           
                                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span></td>
                            
                                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>Total Product: {totalQuantity}</td>
                                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>Gross Price:${grossPrice}</td>
                                    <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                                        <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Pay</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                    :
                    <>
                        <h1 className="text-primary text-3xl">You can not add any bikes</h1>
                    </>
            }
        </section>
    );
}