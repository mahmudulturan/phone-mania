import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import PhonesCollection from "../../Components/PhonesCollection/PhonesCollection";

const Home = () => {
    const phones = useLoaderData();
    return (
        <div className="space-y-32">
            <Banner></Banner>
            <PhonesCollection phones={phones}></PhonesCollection>
        </div>
    );
};

export default Home;