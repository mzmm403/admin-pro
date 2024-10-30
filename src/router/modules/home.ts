import { RouteRecordRaw } from "vue-router";

export default {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index.vue"),
    meta: {
        roles: ["admin", "common"],
    },
    children: [],
} as RouteRecordRaw