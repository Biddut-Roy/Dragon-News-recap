import { useParams } from "react-router-dom";
import Navbar from "../Sheare/Navbar";
import Header from "../Sheare/Header";
import Rightsitebar from "./Rightsitebar";


const News = () => {
    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className=" grid lg: grid-cols-4">
                <div className=" lg: col-span-3">
                    {id}
                </div>

                <div>
                    <Rightsitebar></Rightsitebar>
                </div>
            </div>
        </div>
    );
};

export default News;