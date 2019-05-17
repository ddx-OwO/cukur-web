import { ComponentModule } from '../../modules/ComponentModule';

import HomeComponentView from './home.component.html';
import './home.component.scss';

export default class HomeComponent extends ComponentModule {
  constructor() {
    super();
    this.componentRoot = 'app-home';
  }

  render() {
    return HomeComponentView;
  }

  getNavComponent() {
    return import(/* webpackChunkName: 'home-nav.component' */ './nav/nav.component');
  }

  getContentComponent() {
    return import(/* webpackChunkName: 'home-content.component' */ './content/main.component');
  }

  getFooterComponent() {
    return import(/* webpackChunkName: 'home-footer.component' */ './footer/footer.component');
  }
}