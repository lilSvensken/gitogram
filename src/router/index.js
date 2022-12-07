import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/news-list",
    //   name: "news-list",
    //   component: () => import("@/pages/news-list/repositories-list.vue"),
    // },
    {
      path: "/news-list",
      name: "news-list",
      component: () => import("@/pages/secondary-page/secondary-page.vue"),
    },
    // {
    //   path: "/secondary",
    //   name: "secondary-page",
    //   component: () => import("@/pages/secondary-page/secondary-page.vue"),
    // },
    {
      path: "/:pathMatch(.*)*",
      redirect: { name: "news-list" },
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
