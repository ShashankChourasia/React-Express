import { useDispatch } from "react-redux";
import { postActions } from "../store/post-slice";

import BlogForm from "../components/BlogForm";
// import { useParams } from "react-router-dom";

const date = new Date();

const NewBlogPage = () => {
  const dispatch = useDispatch();

  const handleAddPost = (title, author, imagePath, description) => {
    const updatedPost = {
      id: Math.floor(Math.random() * 100),
      title,
      author,
      imagePath,
      description,
      dateCreated: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`,
    };
    dispatch(postActions.createPost(updatedPost));
  };

  return (
    <div className="container my-5">
      <BlogForm
        buttonText="Create Blog"
        onAddPost={handleAddPost}
      />
    </div>
  );
};

export default NewBlogPage;
