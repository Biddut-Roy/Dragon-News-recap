import { useLoaderData } from "react-router-dom";
import Header from "../Sheare/Header";
import Navbar from "../Sheare/Navbar";
import BREAKINGnews from "./BREAKINGnews";
import Leftsidebar from "./Leftsidebar";
import Rightsitebar from "./Rightsitebar";
import NewsPage from "./NewsPage";


const Home = () => {
    const news = useLoaderData();
    
    return (
        <div>
            <Header></Header>
            <BREAKINGnews></BREAKINGnews>
            <Navbar></Navbar>
            <h1>Home page</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <Leftsidebar></Leftsidebar>
                </div>
                <div className="md:col-span-2 border">
                   {
                    news?.map((aNews)=> <NewsPage key={aNews._id} aNews={aNews}></NewsPage>)
                   }
                </div>
                <div className="border">
                    <Rightsitebar></Rightsitebar>
                </div>
            </div>
        </div>
    );
};

export default Home;