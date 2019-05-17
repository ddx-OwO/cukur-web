import { ComponentModule } from '../../../modules/ComponentModule';

import FooterComponentView from './footer.component.html';
import './footer.component.scss';

export default class FooterComponent extends ComponentModule {
  constructor() {
    super();
    this.componentRoot = 'app-footer';
  }

  render() {
    return FooterComponentView;
  }
}