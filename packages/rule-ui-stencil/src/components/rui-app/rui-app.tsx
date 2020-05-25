import { Component, h } from "@stencil/core";

@Component({
  tag: "rui-app",
  styleUrl: "rui-app.css",
  shadow: true,
})
export class App {
  render() {
    return (
      <rui-layout direction='column'>
        <rui-box name="app-bar" slot="north">
          Header bar
        </rui-box>
        <rui-box name="main" fill={true} >
          this is the main content
        </rui-box>
      </rui-layout>
    );
  }
}
