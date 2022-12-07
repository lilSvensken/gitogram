import { createRouter, createWebHistory } from "vue-router";
import { routerParams } from "@/router/router-params";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/repositories-list",
    //   name: "repositories-list",
    //   component: () => import("@/pages/repositories-list/repositories-list.vue"),
    // },
    {
      path: `/${routerParams.repositoriesList}`,
      name: routerParams.repositoriesList,
      component: () => import("@/pages/secondary-page/secondary-page.vue"),
    },
    {
      path: `/${routerParams.stories}`,
      name: routerParams.stories,
      component: () => import("@/pages/stories-page/stories-page.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: routerParams.repositoriesList },
    },
  ],
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0 };
  },
});
export default router;
