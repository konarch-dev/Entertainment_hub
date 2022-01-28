
import { useEffect, useState } from "react";
import axios from "axios";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/Pagination/CustomPagination";

const Trending=()=>{
    const [page,setPage]=useState(1);
const [count, setCount] = useState([]);
const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=95f122480319845607abc7bef74627c3&page=${page}`
    );
console.log(data.results);
    setCount(data.results);
  };

  useEffect(()=> {
  fetchTrending();
},[page]);


    return (
        <div>
            <span className="pageTitle"><b>Trending</b></span>
            <div className="trending">
               {count&&count.map((c)=>
               <SingleContent key={c.id}
                id={c.id}
                 poster={c.poster_path} 
                  title={c.title || c.name}
                   date={c.first_air_date || c.release_date}
                    media_type={c.media_type}
                    vote_average={c.vote_average}
                    baseUrl={c.base_url}
                   />
               
               )}

            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    );
};
export default Trending;