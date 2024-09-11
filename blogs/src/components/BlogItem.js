import { Link, useNavigate } from "react-router-dom";
import BlogHighlighter from "../Layout/BlogHiglighter";
import { useDispatch } from "react-redux";
import { deletePost } from "../store/post-actions";

const BlogItem = ({ activeBlog }) => {

  const navigate=  useNavigate();
  const dispatch = useDispatch();

  if (!activeBlog) {
    return null; // or handle the loading state as needed
  }
  const { id, title, description, dateCreated, author, imagePath, image } = activeBlog;

  const handleDeletePost = () => {
    dispatch(deletePost(id));
    navigate("..");
  };

  return (
    <div className="container my-5 w-75 border border-light shadow p-3 mb-5 bg-body rounded">
      <div key={id} className="card text-center border-0">
        <div className="card-body">
          <Link to="edit" className="btn btn-primary mx-2">
            Edit
          </Link>
          <button
            onClick={handleDeletePost}
            type="button"
            className="btn btn-secondary mx-2"
          >
            Delete
          </button>
        </div>
        <img
          src={imagePath}
          className="card-img-top img-responsive"
          style={{ height: "200px" }}
          alt={title}
        />
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <BlogHighlighter description={description} className="card-text" />
        </div>
        <ul className="list-group list-group-flush border-0">
          <li className="list-group-item border-0">
            <img
              src={`http://localhost:8080/${image}`}
              style={{ width: "60px", height: "60px" }}
              className="rounded-circle"
              alt={author}
            />
            <h4 className="card-title">{author}</h4>
          </li>
          <li className="list-group-item border-0">
            <em className="card-text">Date publihed: {dateCreated}</em>
          </li>
          {/* <li className="list-group-item border-0">A third item</li> */}
        </ul>
      </div>
    </div>
  );
};

export default BlogItem;
