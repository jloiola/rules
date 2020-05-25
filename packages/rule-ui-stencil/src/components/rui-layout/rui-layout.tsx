import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'rui-layout',
  styleUrl: 'rui-layout.css',
  shadow: true
})
export class Layout {
  slots: object;

  @Prop() name: string;
  @Prop() direction: string = 'column';
  @Prop() gutter: number = 0;
  @Prop() gap: number = 0;
  @Prop() horizontal: string = 'stretch';
  @Prop() vertical: string = 'stretch';

  @Element() el: HTMLElement;

  getSlots() {
    this.slots = Array.from(this.el.children).reduce((acc, el) => {
      if(el.slot) {
        acc[el.slot] = true;
      }
      return acc;
    }, {})
  }

  render() {
    return (
      <Host style={{
          flexDirection: this.direction,
          alignItems: this.direction === 'column' ? this.horizontal : this.vertical,
          justifyContent: this.direction === 'column' ? this.vertical : this.horizontal,
          padding: `var(--space-${this.gutter})`,
          margin: `var(--space-${this.gap})`,
        }}>
        <rui-box fill={true} gutter={0} fixed={true} direction={this.direction}>
          <slot name="north"></slot>
          <rui-box gutter={0} fill={true} fixed={true} direction={this.direction === 'column' ? 'row' : 'column'}>
            <slot name="west"></slot>
            <slot></slot>
            <slot name="east"></slot>
          </rui-box>
          <slot name="south"></slot>
        </rui-box>
      </Host>
    );
  }
}
