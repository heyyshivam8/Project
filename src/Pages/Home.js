import Blogs from "../components/Blogs";
import Header from "../components/Header";
import Pagination from "../components/Pagination";

function Home() {
    return ( <div>
        <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
        <Header/>
        <Blogs/>
        </div>
        <Pagination/>
        
    </div> );
}
export default Home;