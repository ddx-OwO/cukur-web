// Router library
import Navigo from 'navigo';
import { ComponentModule } from './modules/ComponentModule';

export default function AppRouting(host, useHash, hash) {
  const router = new Navigo(host, useHash, hash);
  const component = new ComponentModule();

  router.on({
    'about-us': () => {
      import(/* webpackChunkName: 'home.component' */ './components/home/home.component')
      .then(HomeComponent => {
        let app = new HomeComponent.default;

        app.render();
        app.appendContentComponent().then(ContentComponent => {
          let app = new ContentComponent.default;
          component.appendComponent(app.componentRoot, app.renderAbout());
          router.updatePageLinks();
        });

        router.updatePageLinks();
      });
    },
    'contact-us': () => {
      // awd
    },
    'partner': () => {
      // awd
    }
  })
  .resolve();

  router.on(() => {
    import(/* webpackChunkName: 'home.component' */ './components/home/home.component')
    .then(HomeComponent => {
      let app = new HomeComponent.default;

      app.render();
      app.appendContentComponent().then(ContentComponent => {
        let app = new ContentComponent.default;
        component.appendComponent(app.componentRoot, app.render());
        router.updatePageLinks();
      });

      router.updatePageLinks();
    });
  }).resolve();

  router.notFound(() => {
    // Redirect to base path
    component.clearRootElement('app-root');
    router.navigate('/not-found');
  });

  router.resolve();

  return router;
}