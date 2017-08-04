import { Component, Element, Method, Prop, State } from '@stencil/core';


@Component({
  tag: 'ion-nav'
})
export class Nav {

  @Element() element: HTMLElement;

  @Prop() rootPage: any;
  @Prop() renderChildren: any;

  @State() pages: any[][] = [];

  @Method()
  push(page: any, params: any = {}) {
    this.pages = this.pages.concat([[page, params]]);
  }

  @Method()
  pop(page: any) {
    this.pages = this.pages.slice(0, -1);
  }

  render() {
    if (this.pages.length === 0 && this.rootPage !== undefined) {
      this.push(this.rootPage);
    }
    if (this.renderChildren) {
      this.renderChildren(this.element, this.push.bind(this), this.pop.bind(this), this.pages);
    }
    return;
  }
}
