import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetail from './BlogDetail';

const Blogs = () => {
    //consume
    const {posts,loading} = useContext(AppContext);
    console.log("Printing inside blogs component");
    console.log(posts);


  return (
    <div className='w-11/12 max-w-[670px] h-screen py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]  justify-center items-center'>
    {
        loading ? 

        (<Spinner />) : 

        (   
            posts.length === 0 ? 
            (<div>
                <p>No Post Found</p>
            </div>) : (
                posts.map((post)=>(
                    <BlogDetail post={post} key={post.id}/>
                ))
            )
            
        ) 
    }
      
    </div>
  )
}

export default Blogs