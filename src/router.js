import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import NotFound from "./views/404";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () => import(/* webpackChunkName: "layout" */ "@/views")
    },
    {
      path: "/vuex",
      component: () => import(/* webpackChunkName: "layout" */ "@/views/Vuex")
    },
    {
      path: "/router",
      component: () => import(/* webpackChunkName: "layout" */ "@/views/Router"),
      children:[
        {
          path: "/router/link1",
          name: "link1",
        /*  component: { render: h => {h("router-view")} },*/
        },
        {
          path: "/router/link2",
          name: "link2",
          // component: { render: h => {h("router-view")} },
        },
        {
          path: "/router/link3/:name",
          name: "link3",
          // component: { render: h => {h("router-view")} },
        },
        { path: '/router/link4/:id/:msgId',component:  () => import(/* webpackChunkName: "layout" */ "@/views/Router/Router1"), props: true },
      ]
    },
    {
      path: "/axios",
      component: () => import(/* webpackChunkName: "layout" */ "@/views/Axios")
    },
    {
      path: "/user",
      // 自定义标志位
      hideInMenu: true,
      // 异步加载
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/UserLayout"),
      children: [
        {
          path: "/user",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          name: "login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Login")
        },
        {
          path: "/user/register",
          name: "register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/User/Register")
        }
      ]
    },
    {
      path: "/menu",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layouts/BasicLayout"),
      children: [
        // dashboard
        /* {
          path: "/",
          redirect: "/dashboard/analysis"
        },*/
        {
          path: "/dashboard",
          name: "dashboard",
          meta: { icon: "dashboard", title: "仪表盘" },
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/analysis",
              name: "analysis",
              meta: { title: "分析页" },
              component: () =>
                import(
                  /* webpackChunkName: "dashboard" */ "./views/Dashboard/Analysis"
                )
            }
          ]
        },
        {
          path: "/form",
          name: "form",
          component: { render: h => h("router-view") },
          meta: { icon: "form", title: "表单" },
          children: [
            {
              path: "/form",
              redirect: "/form/basic-form"
            },
            {
              path: "/form/basic-form",
              name: "basicform",
              meta: { title: "基础表单" },
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/BasicForm")
            },
            {
              path: "/form/step-form",
              name: "stepform",
              hideChildrenInMenu: true,
              meta: { title: "分布表单" },
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/StepForm"),
              children: [
                {
                  path: "/form/step-form",
                  redirect: "/form/step-form/info"
                },
                {
                  path: "/form/step-form/info",
                  name: "info",
                  component: () =>
                    import(
                      /* webpackChunkName: "form" */ "./views/Forms/StepForm/Step1"
                    )
                },
                {
                  path: "/form/step-form/confirm",
                  name: "confirm",
                  component: () =>
                    import(
                      /* webpackChunkName: "form" */ "./views/Forms/StepForm/Step2"
                    )
                },
                {
                  path: "/form/step-form/result",
                  name: "result",
                  component: () =>
                    import(
                      /* webpackChunkName: "form" */ "./views/Forms/StepForm/Step3"
                    )
                }
              ]
            }
          ]
        }
      ]
    },
    {
      path: "*",
      name: "404",
      hideInMenu: true,
      component: NotFound
    }
  ]
});

let asyncRouter;

router.beforeEach((to, from, next) => {
  console.log(to);
  if (to.path != from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

function go(to, next) {
  asyncRouter = filterAsyncRouter(asyncRouter);
  router.addRoutes(asyncRouter);
  next({ ...to, replace: true });
}

function filterAsyncRouter(routes) {
  return routes.filter(route => {
    let component = route.component;
    console.log(component);
    if (component) {
      switch (route.component) {
        /* case 'MenuView':
                    route.component = MenuView
                    break
                case 'PageView':
                    route.component = PageView
                    break
                case 'EmptyPageView':
                    route.component = EmptyPageView
                    break
                case 'HomePageView':
                    route.component = HomePageView
                    break*/
        default:
          route.component = view(component);
      }
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children);
      }
      return true;
    }
  });
}

function view(path) {
  return function(resolve) {
    import(/* webpackChunkName: "form" */ `@/views/${path}`).then(mod => {
      resolve(mod);
    });
  };
}

// 解决路由重复点击报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err)
};

export default router;
