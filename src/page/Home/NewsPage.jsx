import { Link } from "react-router-dom";


const NewsPage = ( {aNews} ) => {
    const {image_url , title , details , _id} = aNews;

    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure><img src={image_url} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    {
        details.length > 200 ?<p>
            {details.slice(0,200) }<span className=" text-lime-500 font-bold"> <Link to={`/news/${_id}`}>Reed more</Link> </span>
        </p> : details
    }
    
  </div>
</div>
    );
};

export default NewsPage;