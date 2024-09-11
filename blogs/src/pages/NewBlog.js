import { useDispatch, useSelector } from "react-redux";

import BlogForm from "../components/BlogForm";
import { createPost } from "../store/post-actions";
import Notification from "../ui/Notification";

// const date = new Date();

const NewBlogPage = () => {
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  const handleAddPost = (title, description, author, imagePath, image) => {
    const updatedPost = {
      title,
      description,
      author,
      imagePath,
      image
      // dateCreated: `${date.getDate()}/${
      //   date.getMonth() + 1
      // }/${date.getFullYear()}`,
    };
    dispatch(createPost(updatedPost));
  };

  return (
    <div className="container my-5">
      {notification && notification.status === "failed" && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <BlogForm buttonText="Create Blog" onAddPost={handleAddPost} />
    </div>
  );
};

export default NewBlogPage;
