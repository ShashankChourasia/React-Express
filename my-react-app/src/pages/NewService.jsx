import { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import useInput from "../hooks/use-input";
import Input from "../ui/input";
import { createService } from "../store/service-actions";

const NewServicePage = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState();

  const navigate = useNavigate();

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.length > 6);

  const {
    value: enteredDescription,
    isValid: enteredDescriptionIsValid,
    hasError: descriptionInputHasError,
    valueChangeHandler: descriptionChangedHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptionInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredService,
    isValid: enteredServiceIsValid,
    hasError: serviceInputHasError,
    valueChangeHandler: serviceChangedHandler,
    inputBlurHandler: serviceBlurHandler,
    reset: resetServiceInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredVersion,
    isValid: enteredVersionIsValid,
    hasError: versionInputHasError,
    valueChangeHandler: versionChangedHandler,
    inputBlurHandler: versionBlurHandler,
    reset: resetVersionInput,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredDescriptionIsValid &&
    enteredServiceIsValid &&
    enteredVersionIsValid
  ) {
    formIsValid = true;
  }

  const handleForm = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      setError("Form is Invalid");
      return;
    }

    const createdService = {
      name: enteredName,
      description: enteredDescription,
      service: enteredService,
      version: enteredVersion,
    };

    dispatch(createService(createdService));

    resetNameInput();
    resetDescriptionInput();
    resetServiceInput();
    resetVersionInput();
    navigate("/");
  };

  const cancelHandler = () => {
    navigate("/");
  };

  const nameInputClasses = nameInputHasError
    ? "form-control border border-danger bg-danger bg-opacity-10"
    : "form-control";

  const descriptionInputClasses = descriptionInputHasError
    ? "form-control border border-danger bg-danger bg-opacity-10"
    : "form-control";

  const serviceInputClasses = serviceInputHasError
    ? "form-control border border-danger bg-danger bg-opacity-10"
    : "form-control";

  const versionInputClasses = versionInputHasError
    ? "form-control border border-danger bg-danger bg-opacity-10"
    : "form-control";

  return (
    <div className="container">
      <div className="row gx-5">
        <form onSubmit={handleForm} className="col-6">
          <div>
            <h5>{error}</h5>
          </div>
          <Input
            label="Service Name"
            input={{
              className: nameInputClasses,
              id: "name_",
              type: "text",
              value: enteredName,
              onChange: nameChangedHandler,
              onBlur: nameBlurHandler,
            }}
          />
          <div className="mb-3">
            <label htmlFor="service-description" className="form-label">
              Create new Service
            </label>
            <textarea
              className={descriptionInputClasses}
              id="service-description"
              rows="6"
              value={enteredDescription}
              onChange={descriptionChangedHandler}
              onBlur={descriptionBlurHandler}
            ></textarea>
          </div>
          <Input
            label="Service Name"
            input={{
              className: serviceInputClasses,
              id: "service_",
              type: "text",
              value: enteredService,
              onChange: serviceChangedHandler,
              onBlur: serviceBlurHandler,
            }}
          />
          <Input
            label="version"
            input={{
              className: versionInputClasses,
              id: "version_",
              type: "text",
              value: enteredVersion,
              onChange: versionChangedHandler,
              onBlur: versionBlurHandler,
            }}
          />
          <button type="submit" className="btn btn-primary me-3">
            Create Service
          </button>
          <button
            onClick={cancelHandler}
            type="button"
            className="btn btn-warning"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewServicePage;
