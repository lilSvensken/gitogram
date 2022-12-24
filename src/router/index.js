import { createRouter, createWebHistory } from "vue-router";
import { RouterParams, RouterQuery } from "@/enums/router-params";
import { Errors } from "@/enums/errors";
import { getUser } from "@/api/rest/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/${RouterParams.favourites}`,
      name: RouterParams.favourites,
      component: () => import("@/pages/favourites-page/favourites-page.vue"),
    },
    {
      path: `/${RouterParams.stories}/:${RouterQuery.id}`,
      name: RouterParams.stories,
      component: () => import("@/pages/stories-page/stories-page.vue"),
    },
    {
      path: `/${RouterParams.auth}`,
      name: RouterParams.auth,
      component: () => import("@/pages/auth-page/auth-page.vue"),
    },
    {
      path: `/${RouterParams.lk}`,
      name: RouterParams.lk,
      component: () => import("@/pages/lk-page/lk-page.vue"),
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

router.beforeEach((to, from, next) => {
  getUser()
    .then((data) => {
      const defaultPageName = RouterParams.favourites;

      if (to.name) {
        const authPage = to.name === RouterParams.auth;
        const userAuthorized = data?.response?.status !== Errors.unauthorized;

        // если автроризованный юзер на Авторизации - редирект на главную
        if (authPage && userAuthorized) {
          next({ name: defaultPageName });
          return;
        }

        // если неавторизованный пользователь в приложении - редирект на стр.Авториз
        if (!authPage && !userAuthorized) {
          throw new Error();
        }
        next();
      } else {
        next({ name: defaultPageName });
      }
    })
    .catch(() => {
      next({ name: RouterParams.auth });
    });
});

export default router;
