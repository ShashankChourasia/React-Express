import { useUsers } from "./stores/users";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import ShowPost from "./views/ShowPost.vue";
import NewPost from "./views/NewPost.vue";
import EditPost from "./views/EditPost.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/posts/new",
      component: NewPost,
      beforeEnter: () => {
        const usersStore = useUsers();

        if (!usersStore.currentUserId) {
          return {
            path: "/",
          };
        }
      },
    },
    {
      path: "/posts/:id/edit",
      component: EditPost,
      beforeEnter: () => {
        const usersStore = useUsers();

        if (!usersStore.currentUserId) {
          return {
            path: "/",
          };
        }
      },
    },
    {
      path: "/posts/:id",
      component: ShowPost,
    },
  ],
});
