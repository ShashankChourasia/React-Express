import { useDispatch, useSelector } from "react-redux";
import { postActions } from "../store/post-slice";
import { useState } from "react";
import { Link } from "react-router-dom";

const ListWithFilter = ({showCards= 3}) => {
  const dispatch = useDispatch();
  const postsToDisplay = useSelector((state) => state.post.filteredPosts);
  const [active, setActive] = useState("Today");

  const handleClick = (period) => {
    if (period === "Today") {
      setActive("Today");
      dispatch(postActions.filterPosts("Today"));
    } else if (period === "This Week") {
      setActive("This Week");
      dispatch(postActions.filterPosts("This Week"));
    } else {
      setActive("This Month");
      dispatch(postActions.filterPosts("This Month"));
    }
  };

  return (
    <div className="container my-5">
      <div className="card">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <button
                onClick={() => handleClick("Today")}
                className={active === "Today" ? "nav-link active" : "nav-link"}
              >
                Today
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleClick("This Week")}
                className={
                  active === "This Week" ? "nav-link active" : "nav-link"
                }
              >
                This Week
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => handleClick("This Month")}
                className={
                  active === "This Month" ? "nav-link active" : "nav-link"
                }
              >
                This Month
              </button>
            </li>
          </ul>
        </div>
        {postsToDisplay.length === 0 && (
          <p className="card-body">
            No Posts to display click another tab to see more options
          </p>
        )}
        {postsToDisplay.length !== 0 &&
          postsToDisplay.slice(0, showCards).map((item) => (
            <Link
              to={`/blogs/${item.id}`}
              className="card-body shadow"
              key={item.id}
              style={{ textDecoration: "none" }}
            >
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
              {/* <a href="#" className="btn btn-primary">
                Go somewhere
              </a> */}
            </Link>
          ))}
      </div>
      <div className="card-body m-3">
        <Link
          to="/blogs"
          className="btn btn-primary"
          style={{ textDecoration: "none" }}
        >
          See All Blogs
        </Link>
      </div>
    </div>
  );
};

export default ListWithFilter;
