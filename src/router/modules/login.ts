import { RouteRecordRaw } from "vue-router";

export default {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index.vue"),
    meta: {
        roles: ["admin", "common"],
    },
    children: [],
} as RouteRecordRaw