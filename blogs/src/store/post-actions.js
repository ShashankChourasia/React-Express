import { postActions } from "./post-slice";
import { uiActions } from "./ui-slice";

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
      //   console.log(data);
      return data;
    };

    try {
      const postData = await fetchData();
      dispatch(
        postActions.replacePosts({
          posts: postData || [],
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
      const response = await fetch("http://localhost:8080/update-posts", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (!response.ok) {
        throw Error("Could not fetch posts.");
      }
      const data = await response.json();
      dispatch(postActions.updatePost(data));
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
      const response = await fetch("http://localhost:8080/new-posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });

      if (response.status !== 201) {
        throw Error("Could not create new post.");
      }
      const data = await response.json();
      dispatch(postActions.createPost(data));
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
      const response = await fetch(
        "http://localhost:8080/delete-post/" + postId,
        {
          method: "Delete",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

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
