import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const Root = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Root;
