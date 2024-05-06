import { NavLink } from "react-router-dom";

function  BlogDetail({post}) {
     
    return ( <div className="font-bold text-lg ">
        <NavLink to={`/blog/${post.id}`}>
            <span>{post.title}</span>
        </NavLink>
        <p className='text-sm mt-[4px]'>
            by
            <span className="italic">{post.author}</span>
            on{" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className='underline font-bold'>{post.category}</span>
            </NavLink>
        </p>


        <p className="text-sm mt-[4px]">Posted on {post.date}</p>
        <p className="text-md mt-[14px]">{post.content}</p>
        <div className='flex gap-x-3'>
            {post.tags.map((tag,index) =>(
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span className="text-blue-700 underline font-bold text-xs mt-[5px]">{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
    </div> );
}

export default  BlogDetail;