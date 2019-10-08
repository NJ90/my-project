export default [{
    path: '/',
    name: 'home',
    component: () => lazyLoadView(import('@pages/home')),
    meta: {
      authRequired: true,
    },
    // props: (route) => ({ user: store.state.auth.currentUser || {} }),
  },
  {
    path: '/login',
    name: 'login',
    component: () => lazyLoadView(import('@pages/login')),
    meta: {
      beforeResolve(routeTo, routeFrom, next) {
        if (store.getters['authenticate/loggedIn']) {
          next({
            name: 'home'
          })
        } else {
          next()
        }
      },
    },
  }]