//@ts-check
const SASSAsset = require("parcel-bundler/src/assets/SASSAsset");
const scss = require("node-sass");

class LitSCSSAsset extends SASSAsset {
  type="ts"
  async parse(source) {
    return await super.parse(source)
  }
  generate() {
    const generated = super.generate();
    return [{
      ...generated[0],
      type:"ts",
      value: `
        import { css } from "lit-element";
        export default css\`${this.ast.css.toString()}\`;
      `
    }];
  }
}

module.exports = LitSCSSAsset;
