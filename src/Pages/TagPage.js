import { useLocation, useNavigate, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
 
function TagPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const tag = location.pathname.split("/").at(-1)
    return ( <div>

        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
                        <Header/>

                <div>
                    <button onClick={() => navigate(-1)}>
                        Back
                    </button>

                    <h2>Blogs Tagged <span>#{tag}</span></h2>
                </div>

                <Blogs/>
                        </div>
                        <Pagination/>

    </div> )
}

export default TagPage;