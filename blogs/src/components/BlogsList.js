import { useSelector } from "react-redux";

const BlogsList= () => {

    const allPosts= useSelector((state) =>  state.post.posts);

    return (
        <section className="container py-5">
            <h1>All Blogs</h1>
            <div className="row">
            { allPosts.map((post)=>
                (<div className="col-12 col-md-6 col-lg-4" key={post.title}>
                    <div className="card my-2">
                        <div className="card-body">
                            <h3 className="card-title mb-3">{post.title}</h3>
                            <img src={post.imagePath} className="img-fluid rounded card-img-top" alt={post.author}/>
                            <p className="card-text mt-3">{post.description}</p>
                            <h4 className="card-title">{post.author}</h4>
                            <div className="d-flex justify-content-between align-items-center">
                                <em className="card-title">Published Date: {post.dateCreated}</em>
                                <button className="btn btn-primary">Know more..</button>
                            </div>
                        </div>
                    </div>
                </div>)
            )}
            </div>
            
        </section>
    );
};

export default BlogsList;