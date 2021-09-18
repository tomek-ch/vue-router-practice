import { createRouter, createWebHistory } from "vue-router";
import PostList from "../views/PostList.vue";
import Post from "../views/Post.vue";
import NewPost from "../views/NewPost.vue";
import EditPost from "../views/EditPost.vue";

const routes = [
  {
    path: "/new",
    name: "NewPost",
    component: NewPost,
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post,
  },
  {
    path: "/post/:id/edit",
    name: "EditPost",
    component: EditPost,
  },
  {
    path: "/",
    name: "PostList",
    component: PostList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
