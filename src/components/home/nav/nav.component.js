import { ComponentModule } from '../../../modules/ComponentModule';

import NavComponentView from './nav.component.html';
import './nav.component.scss';

export default class NavComponent extends ComponentModule {
  constructor() {
    super();
    this.componentRoot = 'app-nav';
  }

  render() {
    return NavComponentView;
  }
}