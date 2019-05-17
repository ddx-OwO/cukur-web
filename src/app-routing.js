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

        component.appendToRoot(app.render());
        app.getNavComponent().then(NavComponent => {
          let app = new NavComponent.default;
          component.appendComponent(app.componentRoot, app.render());
        });
        app.getContentComponent().then(ContentComponent => {
          let app = new ContentComponent.default;
          component.appendComponent(app.componentRoot, app.renderAbout());
          router.updatePageLinks();
        });
        app.getFooterComponent().then(FooterComponent => {
          let app = new FooterComponent.default;
          component.appendComponent(app.componentRoot, app.render());
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

        component.appendToRoot(app.render());
        app.getNavComponent().then(NavComponent => {
          let app = new NavComponent.default;
          component.appendComponent(app.componentRoot, app.render());
        });
        app.getContentComponent().then(ContentComponent => {
          let app = new ContentComponent.default;
          component.appendComponent(app.componentRoot, app.render());
          router.updatePageLinks();
        });
        app.getFooterComponent().then(FooterComponent => {
          let app = new FooterComponent.default;
          component.appendComponent(app.componentRoot, app.render());
          router.updatePageLinks();
        });

        router.updatePageLinks();
      });
  }).resolve();

  router.notFound(() => {
    component.clearRootElement('app-root');
    router.navigate('/not-found');
  });

  router.resolve();

  return router;
}