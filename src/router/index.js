import { createRouter, createWebHistory } from "vue-router";
import { routerParams, routerQuery } from "@/enums/router-params";
import { errors } from "@/enums/errors";

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
      path: `/${routerParams.stories}/:${routerQuery.id}`,
      name: routerParams.stories,
      component: () => import("@/pages/stories-page/stories-page.vue"),
    },
    {
      path: `/${routerParams.auth}`,
      name: routerParams.auth,
      component: () => import("@/pages/auth-page/auth-page.vue"),
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

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === routerParams.auth;
  if (authRoute) {
    next();
    return;
  }

  try {
    const response = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `token ${localStorage.getItem("token")}`,
      },
    });

    if (response.status === errors.unauthorized) {
      // TODO возможно обработать визуальное состояние ошибки "Не авторизован"
      console.log("Не авторизован");
      throw new Error();
    }
    next();
  } catch (error) {
    next({ name: routerParams.auth });
  }
});

export default router;
