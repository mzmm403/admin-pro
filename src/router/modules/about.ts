import { RouteRecordRaw } from "vue-router";

export default {
    path: "/about",
    name: "about",
    component: () => import("@/views/about/index.vue"),
    meta: {
        roles: ["admin", "common"],
    },
    children: [],
} as RouteRecordRaw