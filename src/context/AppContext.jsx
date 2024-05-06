import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";


//step1
export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    //data filling
    const fetchData = async (page =1,tag=null,category)=> {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`
        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`
        }
        try {
            const res = await fetch(url)
            const data = await res.json() 
            setPosts(data.posts)
            setPage(data.page)
            setTotalPages(data.totalPages)
        } catch (error) {
            setPage(1)
            setPosts([])
            setTotalPages(null)
        }
        setLoading(false)
    }

    function handlePageChange(page){
        setPage(page)
        fetchData(page)
    }

    const value = {
        posts,  // => state khte h isse
        setPosts, // function hte h isse
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchData,
        handlePageChange
    }
return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>  

}