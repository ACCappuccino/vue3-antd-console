/*
 * @Author: Mocha
 * @Date: 2022-07-25 16:49:29
 * @LastEditors:
 * @LastEditTime: 2022-07-25 16:50:36
 * @Description:
 */
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: "/",
        redirect: "/Layout",
    },
    {
        path: "/Layout",
        name: "Layout",
        component: () => import("@/views/layout/index.vue"),
        children: [],
    },
    {
        path: "/404",
        name: "Page404",
        component: () => import("@/views/404.vue"),
    },
    { path: "/:pathMatch(.*)", redirect: "/404" },
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
