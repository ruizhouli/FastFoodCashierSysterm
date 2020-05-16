import Home from '_v/Home.vue'
export default [
  {
    path:"/",
    redirect: "/tabs"
  },
    {
      path: '/home',
     component: Home,
      children:[
          {
            path: '/about',
            name: 'About',
            component: () => import('_v/About.vue')
          },
          {
            path: '/tabs',
            name: 'Tabs',
            component: () => import('_v/tabs.vue')
          },
      ]
    },
    {
      path:"*",
      component:()=>import("_v/404.vue")
    }
    
  ]