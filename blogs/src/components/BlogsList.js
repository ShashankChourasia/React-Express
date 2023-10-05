import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BlogsList = () => {
  const allPosts = useSelector((state) => state.post.posts);

  return (
    <section className="container py-5">
      <h1>All Blogs</h1>
      <div className="row">
        {allPosts.length === 0 && <h3 className="text-secondary">No Blogs available.</h3>}
        {allPosts.length >= 0 && allPosts.map((post) => (
          <div className="col-12 col-md-6 col-lg-4" key={post.id}>
            <div className="card my-2">
              <Link
                to={`/blogs/${post.id}`}
                className="card-body"
                style={{ textDecoration: "none" }}
              >
                <h3 className="card-title mb-3">{post.title}</h3>
                <img
                  src={post.imagePath}
                  style={{ height: "150px" }}
                  className="img-fluid rounded card-img-top"
                  alt={post.author}
                />
                <p className="card-text mt-3">{post.description}</p>
                <h4 className="card-title">{post.author}</h4>
                <div className="d-flex justify-content-between align-items-center">
                  <em className="card-title">
                    Published Date: {post.dateCreated}
                  </em>
                  <button className="btn btn-primary">Know more..</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsList;
