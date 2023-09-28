import { useSelector } from "react-redux";
import BlogsList from "../components/BlogsList";
import Carousel from "../Layout/Carousel";


const HomePage= () =>{

    const allPosts= useSelector((state) =>  state.post.posts);

    return (
        <>
            <Carousel items={allPosts}/>
           <BlogsList/>
        </>
    );
};

export default HomePage;