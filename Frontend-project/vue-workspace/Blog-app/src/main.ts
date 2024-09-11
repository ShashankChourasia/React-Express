import { createApp } from 'vue'
import { createPinia } from "pinia"
import { router } from "./router"
import App from './App.vue'
import { useUsers } from './stores/users';
import { usePosts } from './stores/posts';
import piniaPluginPersistedState from "pinia-plugin-persistedstate"

const app = createApp(App)
const pinia = createPinia();
pinia.use(piniaPluginPersistedState)
app.use(pinia)

const usersStore = useUsers();
const postsStore = usePosts();

Promise.all([
  // usersStore.authenticate(),
  postsStore.fetchPosts()
]).then(() => {
  app.use(router)
  app.mount('#app')
})
