import { Component } from '../component';

import AuthComponentView from './auth.component.html';
import './auth.component.scss';

export default class AuthComponent extends Component {
  constructor() {
    super();
  }

  render(component) {
    let appRoot = document.querySelector('app-root');
    // let appElement = 'app-' + component;

    while (appRoot.hasChildNodes()) {
      appRoot.removeChild(appRoot.firstChild);
    }
    appRoot.innerHTML = AuthComponentView;

    switch(component) {
      case 'login':
        this.appendLoginComponent();
        break;
      case 'register':
        break;
      default:
        this.appendLoginComponent();
        break;
    }
  }

  appendLoginComponent() {
    import(/* webpackChunkName: 'login.component' */ './login/login.component')
    .then(LoginComponent => {
      const component = new LoginComponent.default;
      component.render();
      console.log(component);
    });
  }
}
