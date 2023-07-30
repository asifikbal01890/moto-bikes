'user client'

import Link from "next/link";

export default function CategoryCart({bikeCategory}: any) {

    const { svgImg, hi, wi, categoryName, _id } = bikeCategory;
    return (
        <Link href={`category/${_id}`}>
            <div className="relative flex flex-col bg-white p-6 rounded-none shadow-xl z-10 h-[100%] border-b-4 border-b-[#e63619] hover:bg-[#e63619] hover:text-white delay-75 hover:fill-white fill-[#e63619] duration-500">
                <div className="flex flex-col uppercase ">
                    <h2 className="card-title text-3xl font-[Oswald]">{categoryName}</h2>
                    <p className='text-end'>See bikes</p>
                </div>
                <figure className='mb-6 text-white'> <svg xmlns="http://www.w3.org/2000/svg" className='' width={wi} height={hi}><path d={svgImg}></path></svg></figure>
            </div>
        </Link>
    );
}