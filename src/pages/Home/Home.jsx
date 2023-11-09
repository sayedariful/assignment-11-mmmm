import Banner from "../../components/Headers/Banner/Banner";
import Assignment from "../Assignment/Assignment";
import Everything from "./Everything";
import Marketing from "./Marketing";
import OurFeatures from "./OurFeatures";
import WhatTotc from "./WhatTotc";

const Home = () => {
    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Assignment></Assignment>
            </div>
            <div>
                <WhatTotc></WhatTotc>
            </div>
            <div>
                <Marketing></Marketing>
            </div>
            <div>
                <Everything></Everything>
            </div>
            <div>
                <OurFeatures></OurFeatures>
            </div>
        </div>
    );
};

export default Home;