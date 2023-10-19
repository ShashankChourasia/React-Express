import BlogsList from "../components/BlogsList";
import SearchBar from "../components/SearchBar";

const BlogsPage = () => {
  return (
    <div className="container my-5">
      <SearchBar label="Search Blogs"/>
      <BlogsList fullList="9" />
    </div>
  );
};

export default BlogsPage;
