'use client'

import { useSelector } from "react-redux";
import CardOfCart from "./CardOfCart/CardOfCart";

export default function MyCart() {

    const cart = useSelector((state: any) => state.cart.cart)

    return (
        <section className="pt-16 pl-11 h-screen">
            {
                cart.length ?
                    <table className="min-w-full border-collapse block md:table">
                        <thead className="block md:table-header-group">
                            <tr className="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
                                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Name</th>
                                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Price</th>
                                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Quantity</th>
                                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">TotalPrice</th>
                                <th className="bg-gray-600 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Status</th>
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
                    </table>
                    :
                    <>
                        <h1 className="text-primary text-3xl">You can not add any bikes</h1>
                    </>
            }
        </section>
    );
}