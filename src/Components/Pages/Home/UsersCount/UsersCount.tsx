'user client'

import CountUp from 'react-countup';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { BsBarChartLineFill, BsPostcardFill } from 'react-icons/bs';


export default function UsersCount() {

    const infos = [
        {
            icon: <FaUser/>,
            number: 5000,
            name: "TotalUsers"
        },
        {
            icon: <BsBarChartLineFill/>,
            number: 2055,
            name: "TotalSellers"
        },
        {
            icon: <FaShoppingCart/>,
            number: 2945,
            name: "TotalBuyers"
        },
        {
            icon: <BsPostcardFill/>,
            number: 9000,
            name: "TotalPosts"
        }
    ]

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 max-w-[1200px] mx-auto px-5 mt-16 lg:mt-40'>
            {
                infos.map((info, i) =>
                    <div key={i} className='text-start'>
                        <div>
                            <p className='text-[#323232] text-[40px]'>{info.icon}</p>
                            <p className='h-[3px] w-full mt-[25px] mb-[35px] flex items-center'>
                                <p className='bg-[#323232] h-full w-1/3 mr-1'></p>
                                <p className='bg-[#e63619] h-full w-2/3'></p>
                            </p>
                        </div>
                        <div>
                            <CountUp
                                end={info.number}
                                duration={8}
                                className='font-bold text-3xl font-[Lato] text-[#e63619]'
                            />
                            <h1 className='text-2xl font-[Lato]'>{info.name}</h1>
                        </div>
                    </div>
                )
            }
        </div>
    );
}