import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  routes: (_routes) => [
    {
      name: "knowledge-hub",
      path: "/",
      component: () =>
        import("~/pages/knowledge-hub.vue").then((r) => r.default || r),
    },
  ],
};
