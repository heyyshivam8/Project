import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import Header from '../components/Header';
import BlogDetail from '../components/BlogDetail';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const { setLoading, loading } = useContext(AppContext);
    const navigation = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const fetchRelatedBlogs = async () => {
            setLoading(true);
            const blogId = location.pathname.split("/").pop();
            const url = `${newBaseUrl}get-blog?blogId=${blogId}`;
            try {
                const res = await fetch(url);
                const data = await res.json();
                setBlog(data.blog);
                setRelatedBlogs(data.relatedBlogs);
            } catch (error) {
                console.log("Error fetching blog:", error);
                setBlog(null);
                setRelatedBlogs([]);
            }
            setLoading(false);
        };

        fetchRelatedBlogs();
    }, [location.pathname, setLoading]);

    return (
        <div>
            <Header />
            <div>
                <button onClick={() => navigation(-1)}>Back</button>
            </div>
            {loading ? (
                <div>
                    <p>Loading</p>
                </div>
            ) : blog ? (
                <div>
                    <BlogDetail post={blog} />
                    <h2>Related Blogs</h2>
                    {relatedBlogs.map((post) => (
                        <div key={post.id}>
                            <BlogDetail post={post} />
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <p>No Blog Found</p>
                </div>
            )}
        </div>
    );
};

export default BlogPage;
