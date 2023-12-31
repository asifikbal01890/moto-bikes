// 'use client'
import Banner from "./Banner/Banner";
import BikesCategory from "./BikesCategory/BikesCategory";
import GoogleMaps from "./GoogleMaps/GoogleMaps";
import OurAim from "./OurAim/OurAim";
import TopSeller from "./TopSeller/TopSeller";
import UsersCount from "./UsersCount/UsersCount";

export default function Home() {
    return (
        <section>
            <Banner></Banner>
            <OurAim></OurAim>
            {/* <GoogleMaps></GoogleMaps> */}
            <BikesCategory></BikesCategory>
            <UsersCount></UsersCount>
            <TopSeller></TopSeller>
        </section>
    );
}