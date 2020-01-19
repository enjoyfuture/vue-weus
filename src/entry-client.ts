import { createApp } from './main';

const { app, router, store } = createApp();

// @ts-ignore
if (window.__INITIAL_STATE__) {
  // @ts-ignore
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  app.$mount('#app');
});
