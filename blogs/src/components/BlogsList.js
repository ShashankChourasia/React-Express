import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogsList = ({ fullList = 3 }) => {
  const allPosts = useSelector((state) => state.post.posts);

  const [showMore, setShowMore] = useState(fullList);

  const content = allPosts <= showMore ? allPosts : allPosts.slice(0, showMore);

  const handleShowMore = () => {
    if (allPosts.length > showMore) {
      setShowMore((prevState) => prevState + 3);
    }
  };

  const handleShowLess = () => {
    if (showMore > 3) {
      if (showMore % 3 === 0) {
        setShowMore((prevState) => prevState - 3);
      } else if (showMore % 3 === 2) {
        setShowMore((prevState) => Math.max(3, prevState - 2));
      } else {
        setShowMore((prevState) => Math.max(3, prevState - 1));
      }
    }
  };

  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  }

  return (
    <section className="container py-5">
      <h1>All Blogs</h1>
      <div className="row px-0">
        {content.length === 0 && (
          <h3 className="text-secondary">No Blogs available.</h3>
        )}
        {content.length > 0 &&
          content.map((post) => (
            <div className="col-12 col-md-6 col-lg-4 p-0" key={post.id}>
              <div className="card m-2">
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
                  <p className="card-text mt-3">
                    {post.description.length >= 20
                      ? truncateText(post.description, 20)
                      : post.description}
                  </p>
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
      <div className="d-flex justify-content-center">
        {allPosts.length > showMore && (
          <button
            className="btn btn-success mt-3 mx-2"
            type="button"
            onClick={handleShowMore}
          >
            Show more
          </button>
        )}
        {showMore > 3 && (
          <button
            className="btn btn-warning mt-3 mx-2"
            type="button"
            onClick={handleShowLess}
          >
            Show less
          </button>
        )}
      </div>
    </section>
  );
};

export default BlogsList;
