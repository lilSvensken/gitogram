import { createRouter, createWebHistory } from "vue-router";
import { routerParams, routerQuery } from "@/enums/router-params";
import { errors } from "@/enums/errors";
import { getUser } from "@/api/rest/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: `/${routerParams.favourites}`,
      name: routerParams.favourites,
      component: () => import("@/pages/favourites-page/favourites-page.vue"),
    },
    {
      path: `/${routerParams.stories}/:${routerQuery.id}`,
      name: routerParams.stories,
      component: () => import("@/pages/stories-page/stories-page.vue"),
    },
    {
      path: `/${routerParams.auth}`,
      name: routerParams.auth,
      component: () => import("@/pages/auth-page/auth-page.vue"),
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
      const defaultPageName = routerParams.favourites;

      if (to.name) {
        const authPage = to.name === routerParams.auth;
        const userAuthorized = data?.response?.status !== errors.unauthorized;

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
      next({ name: routerParams.auth });
    });
});

export default router;
