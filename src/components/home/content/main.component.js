import { ComponentModule } from '../../../modules/ComponentModule';

import MainComponentView from './main.component.html';
import AboutComponentView from './about.component.html';
import './main.component.scss';

export default class MainComponent extends ComponentModule {
  constructor() {
    super();
    this.componentRoot = 'app-content';
  }

  render() {
    return MainComponentView;
  }

  renderAbout() {
    return AboutComponentView;
  }
}