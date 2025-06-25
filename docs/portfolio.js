import * as wasm from "./portfolio_bg.wasm";
import { __wbg_set_wasm } from "./portfolio_bg.js";
__wbg_set_wasm(wasm);
export * from "./portfolio_bg.js";

wasm.__wbindgen_start();
