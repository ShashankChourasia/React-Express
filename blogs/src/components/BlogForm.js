import { useRef, useState } from "react";

import { debounce } from "lodash";

import Input from "../ui/input";
import BlogHighlighter from "../Layout/BlogHiglighter";
import { useNavigate } from "react-router-dom";

const BlogForm = ({
  id = 0,
  title = "",
  author = "",
  description: blogDescription = "",
  imagePath = "",
  onAddPost,
  buttonText,
}) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const imagePathRef = useRef();

  const [description, setDescription] = useState(blogDescription);
  const [error, setError] = useState();

  const navigate = useNavigate();

  const handleDescription = debounce((event) => {
    setDescription(event.target.value);
  }, 500);

  const handleForm = (event) => {
    event.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredAuthor = authorRef.current.value;
    const enteredImagePath = imagePathRef.current.value;

    if (
      enteredTitle.trim().length === 0 ||
      enteredAuthor.trim().length === 0 ||
      enteredImagePath.trim().length === 0 ||
      description.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please Enter non empty Title, Author, ImagePath, Description",
      });
      return;
    }

    onAddPost(enteredTitle, enteredAuthor, enteredImagePath, description);
    titleRef.current.value = "";
    authorRef.current.value = "";
    imagePathRef.current.value = "";
    setDescription("");
    setError(null);

    navigate("/");
  };

  const cancelHandler = () => {
    navigate("..");
  };

  return (
    <div key={id} className="row gx-5">
      <form onSubmit={handleForm} className="col-6">
        <div>
          <h5>{error?.title}</h5>
          <p>{error?.message}</p>
        </div>
        <Input
          ref={titleRef}
          label="Blog Title"
          input={{
            id: "title_" + id,
            type: "text",
            defaultValue: title,
          }}
        />
        <div className="mb-3">
          <label htmlFor="blog-description" className="form-label">
            Create Blog
          </label>
          <textarea
            onChange={handleDescription}
            className="form-control"
            id="blog-description"
            rows="6"
            defaultValue={description}
          ></textarea>
        </div>
        <Input
          ref={authorRef}
          label="Author Name"
          input={{
            id: "author_" + id,
            type: "text",
            defaultValue: author,
          }}
        />
        <Input
          ref={imagePathRef}
          label="Image path"
          input={{
            id: "imagePathRef_" + id,
            type: "text",
            defaultValue: imagePath,
          }}
        />
        <button type="submit" className="btn btn-primary me-3">
          {buttonText}
        </button>
        <button
          onClick={cancelHandler}
          type="button"
          className="btn btn-warning"
        >
          Cancel
        </button>
      </form>
      <div className="col-6 border border-info p-0">
        {description && description.length > 0 && (
          <BlogHighlighter description={description} />
        )}
      </div>
    </div>
  );
};

export default BlogForm;
