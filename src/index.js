import { cube } from "./math.js";
import Icon from "./logo.png";
import "./style.css";

if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
}
function component() {
  var el = document.createElement("div");
  var btn = document.createElement("button");
  var icon = new Image();
  btn.innerHTML = `5的立方为${cube(5)}`;
  icon.src = Icon;

  el.appendChild(btn);
  el.appendChild(icon);

  return el;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept("./print.js", function () {
    console.log("print模块更新了");
    Print();
  });
}
