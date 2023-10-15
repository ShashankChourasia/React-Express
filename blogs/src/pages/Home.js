import { useDispatch, useSelector } from "react-redux";
import BlogsList from "../components/BlogsList";
import Carousel from "../Layout/Carousel";
import ErrorModal from "../ui/ErrorModal";
import { uiActions } from "../store/ui-slice";

const HomePage = () => {

   const dispatch= useDispatch();
  const allPosts = useSelector((state) => state.post.posts);
  const notification = useSelector((state) => state?.ui.notification);

  const loading= notification?.status === "loading";

  const handleConfirm = () => {
    dispatch(uiActions.resetNotification(null));
  }

  return (
    <>
      {loading && (
        <ErrorModal
          title={notification.title}
          message={notification.message}
          onConfirm={handleConfirm}
        />
      )}
      <Carousel items={allPosts} />
      <BlogsList />
    </>
  );
};

export default HomePage;
