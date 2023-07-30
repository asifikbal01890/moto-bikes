'use client'

export default function CardOfCart({ bike }: any) {

    const {picture, name, resalePrice, quantity} = bike;

    return (
        <tr className="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{name}</td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>${resalePrice}</td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>{quantity}</td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell"><span className="inline-block w-1/3 md:hidden font-bold"></span>${parseFloat(quantity)*(parseFloat(resalePrice))}</td>
            <td className="p-2 md:border md:border-grey-500 text-left block md:table-cell">
                <span className="inline-block w-1/3 md:hidden font-bold">Actions</span>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">Pay</button>
            </td>
        </tr>
    );
}