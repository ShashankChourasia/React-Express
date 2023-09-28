import { useSelector } from "react-redux";
import BlogItem from "../components/BlogItem";
import { useParams } from "react-router-dom";


const BlogDetailPage= () => {

    const allPosts= useSelector((state) =>  state.post.posts);

    const { blogId }=useParams();

    const activeBlog= allPosts.find((blog) => blog.id === Number(blogId));

    return(
        <BlogItem activeBlog={activeBlog} />
    );

};

export default BlogDetailPage;