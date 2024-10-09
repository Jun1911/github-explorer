import { createRouter, createWebHashHistory } from "vue-router";
import SearchView from "../views/SearchView.vue";
import RepoDetailView from "../views/RepoDetailView.vue";

const routes = [
  {
    path: "/",
    name: "search",
    component: SearchView,
  },
  {
    path: "/repo-detail",
    name: "repo-detail",
    component: RepoDetailView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
