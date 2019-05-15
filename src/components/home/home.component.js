import { ComponentModule } from '../../modules/ComponentModule';

import HomeComponentView from './home.component.html';
import './home.component.scss';

export default class HomeComponent extends ComponentModule {
  constructor() {
    super();
    this.componentRoot = 'app-root';
  }

  render() {
    let navComponent = this.appendNavComponent();
    super.appendComponent(this.componentRoot, HomeComponentView);

    navComponent.then(NavComponent => {
      let app = new NavComponent.default;
      super.appendComponent(app.componentRoot, app.render());
    });

    return HomeComponentView;
  }

  appendNavComponent() {
    return import(/* webpackChunkName: 'home-nav.component' */ './nav/nav.component');
  }

  appendContentComponent() {
    return import(/* webpackChunkName: 'home-content.component' */ './content/main.component');
  }
}