import { useDispatch, useSelector } from "react-redux";

import BlogForm from "../components/BlogForm";
import { useParams } from "react-router-dom";
import { updatePostData } from "../store/post-actions";

const EditBlogPage = () => {
  const { blogId } = useParams();
  const selectedBlog = useSelector((state) =>
    state.post.posts.find((blog) => blog.id === blogId)
  );

  const { id, title, author, description, imagePath } = selectedBlog || {};

  const dispatch = useDispatch();

  const handleAddPost = (title, description, author, imagePath) => {
    const updatedPost = {
      id: blogId,
      title,
      author,
      imagePath,
      description,
    };
    dispatch(updatePostData(updatedPost));
  };

  return (
    <div className="container my-5">
      
      <BlogForm
        id={id}
        title={title}
        description={description}
        author={author}
        imagePath={imagePath}
        onAddPost={handleAddPost}
        buttonText="Update"
      />
    </div>
  );
};

export default EditBlogPage;
