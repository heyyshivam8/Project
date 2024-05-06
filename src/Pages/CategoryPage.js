import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Blogs from "../components/Blogs";

function CategoryPage() {


    const navigate = useNavigate()
    const location = useLocation()
    const category = location.pathname.split("/").at(-1)



    return ( <div>
        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
                <Header/>

                <div>
                    <button onClick={() => navigate(-1)}>
                        Back
                    </button>

                    <h2>Blogs Tagged <span>#{category}</span></h2>
                </div>

                <Blogs/>
        </div>

        <Pagination/>
    </div> ); 
}

export default CategoryPage;