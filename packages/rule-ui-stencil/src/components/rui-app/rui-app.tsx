import { Component, h } from "@stencil/core";

@Component({
  tag: "rui-app",
  styleUrl: "rui-app.css",
  shadow: true,
})
export class App {
  render() {
    return (
      <rui-layout>

        <rui-box name="app-bar" slot="north" height={64}>
          <rui-layout>
            <rui-box slot="west" width={256}>
              Header name thing
            </rui-box>
            <rui-box fill={true} >
              search bar thing
            </rui-box>

            <rui-box slot="east" width={256}>
              user thing
            </rui-box>
          </rui-layout>
        </rui-box>

        <rui-box name="app-bar" slot="west" width={256}>
          Sidebad west
        </rui-box>

        <rui-box name="main" fill={true} gutter={0}>

          <rui-layout>

            <rui-box name="app-bar" slot="north" height={48}>
            toooool bar
            </rui-box>

            <rui-box name="item list" slot="west" width={344}>
              Items list
            </rui-box>
            <rui-box name="main" fill={true}>

            </rui-box>
            </rui-layout>

        </rui-box>


      </rui-layout>
    );
  }
}
