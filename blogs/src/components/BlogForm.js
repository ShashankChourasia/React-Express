import { useState } from "react";

import Input from "../ui/input";
import BlogHighlighter from "../Layout/BlogHiglighter";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/use-input";

const BlogForm = ({
  id = "",
  title = "",
  author = "",
  description: blogDescription = "",
  imagePath = "",
  onAddPost,
  buttonText,
}) => {
  const [error, setError] = useState();

  const navigate = useNavigate();

  const {
    value: enteredTitle,
    isValid: enteredTitleIsValid,
    hasError: titleInputHasError,
    valueChangeHandler: titleChangedHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitleInput,
  } = useInput((value) => value.trim() !== "", title);

  const {
    value: enteredDescription,
    isValid: enteredDescriptionIsValid,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionChangedHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptionInput,
  } = useInput((value) => value.trim() !== "", blogDescription);

  const {
    value: enteredAuthor,
    isValid: enteredAuthorIsValid,
    hasError: authorInputHasError,
    valueChangeHandler: authorChangedHandler,
    inputBlurHandler: authorBlurHandler,
    reset: resetAuthorInput,
  } = useInput((value) => value.trim() !== "", author);

  const {
    value: enteredImagePath,
    isValid: enteredImagePathIsValid,
    hasError: imagePathInputHasError,
    valueChangeHandler: imagePathChangedHandler,
    inputBlurHandler: imagePathBlurHandler,
    reset: resetImagePathInput,
  } = useInput((value) => value.trim() !== "", imagePath);

  let formIsValid = false;

  if (
    enteredTitleIsValid &&
    enteredDescriptionIsValid &&
    enteredAuthorIsValid &&
    enteredImagePathIsValid
  ) {
    formIsValid = true;
  }

  const handleForm = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      setError("Form is Invalid");
      return;
    }

    onAddPost(
      enteredTitle,
      enteredDescription,
      enteredAuthor,
      enteredImagePath
    );

    resetTitleInput();
    resetDescriptionInput();
    resetAuthorInput();
    resetImagePathInput();
    navigate("/");
  };

  const cancelHandler = () => {
    navigate("..");
  };

  const titleInputClasses = titleInputHasError
    ? "form-control border border-danger bg-danger bg-opacity-10"
    : "form-control";

  const descriptionInputClasses = descriptionInputHasError
    ? "form-control border border-danger bg-danger bg-opacity-10"
    : "form-control";

  const authorInputClasses = authorInputHasError
    ? "form-control border border-danger bg-danger bg-opacity-10"
    : "form-control";

  const imagePathInputClasses = imagePathInputHasError
    ? "form-control border border-danger bg-danger bg-opacity-10"
    : "form-control";

  return (
    <div key={id} className="row gx-5">
      <form onSubmit={handleForm} className="col-6">
        <div>
          <h5>{error}</h5>
          {/* <p>{error?.message}</p> */}
        </div>
        <Input
          label="Blog Title"
          input={{
            className: titleInputClasses,
            id: "title_" + id,
            type: "text",
            value: enteredTitle,
            onChange: titleChangedHandler,
            onBlur: titleBlurHandler,
          }}
        />
        <div className="mb-3">
          <label htmlFor="blog-description" className="form-label">
            Create Blog
          </label>
          <textarea
            className={descriptionInputClasses}
            id="blog-description"
            rows="6"
            value={enteredDescription}
            onChange={descriptionChangedHandler}
            onBlur={descriptionBlurHandler}
          ></textarea>
        </div>
        <Input
          label="Author Name"
          input={{
            className: authorInputClasses,
            id: "author_" + id,
            type: "text",
            value: enteredAuthor,
            onChange: authorChangedHandler,
            onBlur: authorBlurHandler,
          }}
        />
        <Input
          label="Image path"
          input={{
            className: imagePathInputClasses,
            id: "imagePathRef_" + id,
            type: "text",
            value: enteredImagePath,
            onChange: imagePathChangedHandler,
            onBlur: imagePathBlurHandler,
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
        {enteredDescription && enteredDescription.length > 0 && (
          <BlogHighlighter description={enteredDescription} />
        )}
      </div>
    </div>
  );
};

export default BlogForm;
