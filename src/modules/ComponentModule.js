export class ComponentModule {
  clearRootElement(element) {
    let appRoot = document.querySelector(element);

    while (appRoot.hasChildNodes()) {
      appRoot.removeChild(appRoot.firstChild);
    }
  }

  appendComponent(element, data) {
    let appRootComponent = document.querySelector(element);
    this.clearRootElement(element);
    appRootComponent.innerHTML = data;
  }
}