import _ from "lodash";
import "./style.css";

function navbar() {
  const bar = document.createElement("div");
  bar.style.display = "flex";
  bar.style.position = "fixed";
  bar.style.height = "10vh";
  bar.style.width = "100vw";
  bar.style.gap = "15px";
  bar.style.justifyContent = "flex-end";
  bar.style.boxSizing = "border-box";
  bar.style.paddingRight = "30px";
  bar.style.alignItems = "center";
  bar.style.background = "#C8B8DB";
  bar.style.zIndex = "1";
  const home = document.createElement("div");
  home.textContent = "Home";
  const menu = document.createElement("div");
  menu.textContent = "Menu";
  const contacts = document.createElement("div");
  contacts.textContent = "Contacts";
  bar.appendChild(home);
  bar.appendChild(menu);
  bar.appendChild(contacts);
  return bar;
}

function intro() {
  const intro = document.createElement("div");
  intro.style.position = "absolute";
  intro.style.marginTop = "10vh";
  intro.style.height = "55vh";
  intro.style.width = "100vw";
  intro.style.display = "flex";
  intro.style.border = "2px solid black";
  intro.style.justifyContent = "space-evenly";
  intro.style.padding = "25px 0px";
  intro.style.boxSizing = "border-box";
  const pic = document.createElement("img");
  pic.src =
    "https://i.pinimg.com/564x/f7/af/3e/f7af3e751d5584606903a399caf82173.jpg";
  pic.style.border = "10px solid #70587C";
  const info = document.createElement("div");
  info.style.width = "35vw";
  info.style.display = "flex";
  info.style.flexDirection = "column";
  info.style.alignItems = "center";
  info.style.justifyContent = "center";
  const slogan = document.createElement("h2");
  slogan.textContent = "Homier Than Home";
  const text = document.createElement("p");
  text.textContent =
    "Simple, home-baked treats, easy to indulge in, made with passion. Serving baked goods in NYC since 2020.";
  text.style.textAlign = "center";
  info.appendChild(slogan);
  info.appendChild(text);
  intro.appendChild(pic);
  intro.appendChild(info);
  return intro;
}

function bg() {
  const bg = document.createElement("div");
  bg.style.position = "absolute";
  bg.style.marginTop = "65vh";
  bg.style.height = "55vh";
  bg.style.width = "100vw";
  bg.style.background = "#502F4C";
  bg.style.border = "2px solid black";
  return bg;
}

document.body.style.margin = "0px";
document.body.appendChild(navbar());
document.body.appendChild(intro());
document.body.appendChild(bg());
