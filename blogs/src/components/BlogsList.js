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

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    } else {
      return text;
    }
  };

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
                    {post?.description?.length >= 20
                      ? truncateText(post.description, 20)
                      : post.description}
                  </p>
                   
                  <img
                    src={`http://localhost:8080/${post.image}`}
                    style={{ width: "60px", height: "60px", borderRadius:'50px' }}
                    className="img-fluid card-img-top"
                    alt={post.author}
                  />
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
        {allPosts && allPosts.length > showMore && (
          <button
            className="btn btn-success mt-3 mx-2"
            type="button"
            onClick={handleShowMore}
          >
            Show more
          </button>
        )}
        {allPosts && allPosts.length > 3 && showMore > 3 && (
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

// import React, { useReducer } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const initialState = {
//   showMore: 3,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "SHOW_MORE":
//       return { showMore: state.showMore + 3 };
//     case "SHOW_LESS":
//       return { showMore: Math.max(3, state.showMore - 3) };
//     default:
//       return state;
//   }
// };

// const BlogsList = ({ fullList = 3 }) => {
//   const allPosts = useSelector((state) => state.post.posts);

//   const [state, dispatch] = useReducer(reducer, { showMore: fullList });

//   const content = allPosts.slice(0, state.showMore);

//   function truncateText(text, maxLength) {
//     if (text.length > maxLength) {
//       return text.slice(0, maxLength) + "...";
//     } else {
//       return text;
//     }
//   }

//   const handleShowMore = () => {
//     if (allPosts.length > state.showMore) {
//       dispatch({ type: "SHOW_MORE" });
//     }
//   };

//   const handleShowLess = () => {
//     if (state.showMore > 3) {
//       dispatch({ type: "SHOW_LESS" });
//     }
//   };

//   return (
//     <section className="container py-5">
//       <h1>All Blogs</h1>
//       <div className="row px-0">
//         {content.length === 0 && (
//           <h3 className="text-secondary">No Blogs available.</h3>
//         )}
//         {content.length > 0 &&
//           content.map((post) => (
//             <div className="col-12 col-md-6 col-lg-4 p-0" key={post.id}>
//               <div className="card m-2">
//                 <Link
//                   to={`/blogs/${post.id}`}
//                   className="card-body"
//                   style={{ textDecoration: "none" }}
//                 >
//                   <h3 className="card-title mb-3">{post.title}</h3>
//                   <img
//                     src={post.imagePath}
//                     style={{ height: "150px" }}
//                     className="img-fluid rounded card-img-top"
//                     alt={post.author}
//                   />
//                   <p className="card-text mt-3">
//                     {post.description.length >= 20
//                       ? truncateText(post.description, 20)
//                       : post.description}
//                   </p>
//                   <h4 className="card-title">{post.author}</h4>
//                   <div className="d-flex justify-content-between align-items-center">
//                     <em className="card-title">
//                       Published Date: {post.dateCreated}
//                     </em>
//                     <button className="btn btn-primary">Know more..</button>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//       </div>
//       <div className="d-flex justify-content-center">
//         {allPosts.length > state.showMore && (
//           <button
//             className="btn btn-success mt-3 mx-2"
//             type="button"
//             onClick={handleShowMore}
//           >
//             Show more
//           </button>
//         )}
//         {allPosts.length > 0 && state.showMore > 3 && (
//           <button
//             className="btn btn-warning mt-3 mx-2"
//             type="button"
//             onClick={handleShowLess}
//           >
//             Show less
//           </button>
//         )}
//       </div>
//     </section>
//   );
// };

// export default BlogsList;
