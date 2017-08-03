import { Component, Element, Method, Prop } from '@stencil/core';


@Component({
  tag: 'ion-nav'
})
export class Nav {

  @Element() element: HTMLElement;

  @Prop() root: string;

  ionViewDidLoad() {
    this.setRoot(this.root);
  }

  @Method()
  push(tagName: string) {
    (this.element.lastChild as any).originalStyle = (this.element.lastChild as HTMLElement).style.display;
    (this.element.lastChild as HTMLElement).style.display = 'none';
    const newElement = document.createElement(tagName);
    this.element.appendChild(newElement);
    return Promise.resolve();
  }

  @Method()
  pop() {
    this.element.removeChild(this.element.lastChild);
    (this.element.lastChild as HTMLElement).style.display = (this.element.lastChild as any).originalStyle;
    return Promise.resolve();
  }

  @Method()
  setRoot(tagName: string) {
    while (this.element.hasChildNodes()) {
      this.element.removeChild(this.element.lastChild);
    }

    const newElement = document.createElement(tagName);
    this.element.appendChild(newElement);

    return Promise.resolve();
  }


  render() {
    return <div>
      What up
    </div>;
  }
}
