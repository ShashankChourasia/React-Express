import { useRef, useState } from "react";

import Input from "../ui/input";
import BlogHighlighter from "../Layout/BlogHiglighter";


const BlogForm= (props) => {
    const titleRef= useRef();
    const [description, setDescription]= useState();

    const handleDescription= (event)=> {
        setDescription(event.target.value);
    };

    const handleForm= (event) => {
        event.preventDefault();
        console.log('Success');}

    return(

        <div className="row gx-5">
            <form onSubmit={handleForm} className="col-6">
                <Input 
                    ref={titleRef}
                    label='Blog Title'
                    input={{
                        id:'amount_'+ props.id,
                        type: 'text',

                    }} />
                <div className="mb-3">
                    <label htmlFor="blog-description" className="form-label">Create Blog</label>
                    <textarea onChange={handleDescription} className="form-control" id="blog-description" rows="10"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <div className="col-6 border border-info p-0">
                {description && description.length > 0 && <BlogHighlighter description={description} />}
            </div>
        </div>
        // <form>
        //     <div className="mb-3">
        //         <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        //         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        //         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        //     </div>
        //     <div className="mb-3">
        //         <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        //         <input type="password" className="form-control" id="exampleInputPassword1" />
        //     </div>
        //     <div className="mb-3 form-check">
        //         <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        //         <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        //     </div>
        //     <button type="submit" className="btn btn-primary">Submit</button>
        // </form>
    );
};

export default BlogForm;