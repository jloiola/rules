import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'rui-box',
  styleUrl: 'rui-box.css',
  shadow: true
})
export class Box {

  @Prop() name: string;
  @Prop() fill: boolean;
  @Prop() height: number;
  @Prop() width: number;
  @Prop() fixed: boolean = false;
  @Prop() direction: string = 'column';
  @Prop() gutter: number = 2;
  @Prop() gap: number = 0;
  @Prop() horizontal: string = 'stretch';
  @Prop() vertical: string = 'stretch';

  render() {
    return (
      <Host
        style={{
          height: `${this.height}px`,
          width: `${this.width}px`,
          flex: this.fill ? '1' : 'none',
          overflow: this.fixed ? 'hidden' : 'auto',
          flexDirection: this.direction,
          alignItems: this.direction === 'column' ? this.horizontal : this.vertical,
          justifyContent: this.direction === 'column' ? this.vertical : this.horizontal,
          padding: `var(--space-${this.gutter})`,
          margin: `var(--space-${this.gap})`,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
