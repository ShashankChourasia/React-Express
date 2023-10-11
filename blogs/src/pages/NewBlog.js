import { useDispatch } from "react-redux";

import BlogForm from "../components/BlogForm";
import { createPost } from "../store/post-actions";

const date = new Date();

const NewBlogPage = () => {
  const dispatch = useDispatch();

  const handleAddPost = (title, author, imagePath, description) => {
    const updatedPost = {
      title,
      author,
      imagePath,
      description,
      dateCreated: `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`,
    };
    dispatch(createPost(updatedPost));
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
