import { json, redirect } from "react-router-dom";

import AuthForm from "../components/AuthForm";

const AuthenticationPage = () => {
  return (
    <div className="container my-5">
      <AuthForm />
    </div>
  );
};

export default AuthenticationPage;

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  let user;

  const errors = [
    ["Please check your name and password"]
  ];

  if (mode === "signup") {
    user= {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    const response = await fetch("http://localhost:8080/users/" + mode, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw json({ message: "Could not create user." }, { status: 500 });
    }
    const resData = await response.json();
    console.log(resData);
    const token = resData.token;

    localStorage.setItem("token", token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());
    return redirect("/");
  }

  if (mode === "login") {
    user= {
      email: data.get("email"),
      password: data.get("password"),
    }
    const response = await fetch("http://localhost:8080/users/" + mode, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.status === 403 || response.status === 401) {
        console.log(response);
    //   return response;
    return errors;
    }

    if (!response.ok) {
      throw json({ message: "Could not authenticate user." }, { status: 500 });
    }

    const resData = await response.json();
    const token = resData.token;

    localStorage.setItem("token", token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());
    return redirect("/");
  }
}
