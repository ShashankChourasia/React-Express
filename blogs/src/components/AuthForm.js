import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";
import Input from "../ui/input";

const AuthForm = () => {
  const data = useActionData();
  console.log(data);
  const navigation = useNavigation();

  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const isSubmitting= navigation.state === 'submitting';

  return (
    <div className="w-50 mx-auto">
      <Form method="post">
      <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
        {data && data.errors && (
          <ul className="list-group">
            {Object.values(data.errors).map((err) => (
              <li className="list-group-item d-block" key={err}>{err}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        {data}
        {!isLogin && <Input
          label="Enter Name"
          input={{
            id: "name",
            type: "text",
            className: "form-control",
            name: "name",
            required: true,
            placeholder: "Enter your name...",
          }}
        />}
        <Input
          label="Enter Email"
          input={{
            id: "email",
            type: "email",
            className: "form-control",
            name: "email",
            required: true,
            placeholder: "Enter your email...",
          }}
        />
        <Input
          label="Password"
          input={{
            id: "password",
            type: "password",
            className: "form-control",
            name: "password",
            required: true,
            placeholder: "Enter password",
          }}
        />
        <Link
          to={`?mode=${isLogin ? "signup" : "login"}`}
          className="btn btn-primary me-3"
        >
          {isLogin ? "Create new user" : "Login"}
        </Link>
        <button disabled={isSubmitting} className="btn btn-warning">
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </Form>
    </div>
  );
};

export default AuthForm;


