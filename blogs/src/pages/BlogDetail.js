import { useSelector } from "react-redux";
import BlogItem from "../components/BlogItem";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const BlogDetailPage = () => {
  const navigate = useNavigate();

  const allPosts = useSelector((state) => state.post.posts);

  const { blogId } = useParams();

  const activeBlog = allPosts.find((blog) => blog.id === blogId);

  useEffect(() => {
    if (!activeBlog) {
      navigate("/blogs");
    }
  });

  return <BlogItem activeBlog={activeBlog} />;
};

export default BlogDetailPage;
