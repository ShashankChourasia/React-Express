import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import Header from "../components/Header";
import { getTokenDuration } from "../util/auth";
import { useEffect } from "react";

const RootLayout = () => {
  const token = useLoaderData();
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }
  
    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" });
      return;
    }
  
    const tokenDuration = getTokenDuration();
  
    const logoutTimer = setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration);
  
    return () => {
      clearTimeout(logoutTimer); // This clears the timer when the component unmounts or when the dependencies change.
    };
  }, [token, submit]);
  

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
