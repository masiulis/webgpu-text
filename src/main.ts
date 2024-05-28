import "./style.css";
import { pages } from "./pages.ts";

const path = window.location.pathname;
const appNode = document.querySelector<HTMLDivElement>("#app")!;

if (path === pages.all) {
  appNode.innerHTML = `
  <p>
    The quick brown fox jumps over the lazy dog
  </p>
  <p>
    <b>Hello,</b> <i>World!</i>
  </p>
  <p>
    ABC אבג DEF
  </p>
  <p>
    خشت اول گر نهد معمار کج ― تا ثریا می‌رود دیوار کج
  </p>
`;
}

if (path === pages.allWebGPU) {
  appNode.innerHTML = `
  <canvas id="canvas"/>
`;
}
