import { RouteRecordRaw } from "vue-router";

export default {
    path: "/",
    name: "layout",
    component: () => import("@/layout/index.vue"),
    meta: {
        roles: ["admin", "common"],
    },
    children: [{
        path: "/",
        name: "HomePage",
        component: () => import("@/views/home/index.vue"),
        meta: {},
        children: []
    }],
} as RouteRecordRaw