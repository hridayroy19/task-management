import Card from "../components/Card";
import FilterBy from "../components/FilterBy";


const Home = () => {
    return (
        <div className="py-10 px-7 border-2 border-black">
           <FilterBy></FilterBy>
           <Card></Card>
        </div>
    );
};

export default Home;