import { tokenLoader } from "../util/auth";
import { postActions } from "./post-slice";
import { uiActions } from "./ui-slice";

const token = tokenLoader();

export const fetchPostData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "loading",
          title: "Loading...",
          message: "Loading data!",
        })
      );
      const response = await fetch("http://localhost:8080/posts");

      if (!response.ok) {
        throw Error("Could not fetch posts.");
      }
      const data = await response.json();
      return data;
    };

    try {
      const postData = await fetchData();
      dispatch(
        postActions.replacePosts({
          posts: postData.posts || [],
        })
      );
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success fetching posts",
          message: "posts fetched successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error fetching posts",
          message: "Fetching posts failed",
        })
      );
    }
  };
};

export const updatePostData = (post) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "sending",
        title: "Sending...",
        message: "Sending post data!",
      })
    );
    try {
      console.log(token);
      const { id, ...updatedPost } = post;
      const response = await fetch(
        `http://localhost:8080/posts/edit-posts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedPost),
        }
      );

      if (!response.ok) {
        throw Error("Could not fetch posts.");
      }
      const data = await response.json();
      dispatch(postActions.updatePost(data.post));
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Post updated successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Update post failed!",
        })
      );
    }
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending post data!",
      })
    );
    try {
      console.log(post);
      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("description", post.description);
      formData.append("author", post.author);
      formData.append("imagePath", post.imagePath);
      formData.append("image", post.image);

      const response = await fetch("http://localhost:8080/posts/new-posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.status !== 201) {
        throw Error("Could not create new post.");
      }
      const data = await response.json();
      dispatch(postActions.createPost(data.post));
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Post created successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "failed",
          title: "Error!",
          message: "Create post failed!",
        })
      );
    }
  };
};

export const deletePost = (postId) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "deleting",
        message: "Deleting post data!",
      })
    );
    try {
      const response = await fetch("http://localhost:8080/posts/" + postId, {
        method: "Delete",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status !== 200) {
        throw Error("Could not delete post.");
      }

      dispatch(postActions.deletePost(postId));
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Post deleted successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "failed",
          title: "Error!",
          message: "Create post failed!",
        })
      );
    }
  };
};
