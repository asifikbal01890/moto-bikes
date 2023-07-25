import Banner from "./Banner/Banner";
import OurAim from "./OurAim/OurAim";
import TopSeller from "./TopSeller/TopSeller";
import UsersCount from "./UsersCount/UsersCount";

export default function Home() {
    return (
        <section>
            <Banner></Banner>
            <OurAim></OurAim>
            <UsersCount></UsersCount>
            <TopSeller></TopSeller>
        </section>
    );
}