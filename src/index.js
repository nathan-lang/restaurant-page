import _ from "lodash";
import "./style.css";

function navbar() {
  const bar = document.createElement("div");
  bar.style.display = "flex";
  bar.style.position = "fixed";
  bar.style.height = "10vh";
  bar.style.width = "100vw";
  bar.style.gap = "15px";
  bar.style.justifyContent = "space-around";
  bar.style.boxSizing = "border-box";
  bar.style.paddingRight = "30px";
  bar.style.alignItems = "center";
  bar.style.background = "#C8B8DB";
  bar.style.zIndex = "1";
  const logo = document.createElement("img");
  logo.src = "../src/sweethomenew.png";
  logo.style.height = "150px";
  const navSection = document.createElement("div");
  navSection.style.display = "flex";
  navSection.style.gap = "25px";
  const home = document.createElement("div");
  home.textContent = "Home";
  const menu = document.createElement("div");
  menu.textContent = "Menu";
  const contacts = document.createElement("div");
  contacts.textContent = "Contacts";
  navSection.appendChild(home);
  navSection.appendChild(menu);
  navSection.appendChild(contacts);
  bar.appendChild(logo);
  bar.appendChild(navSection);
  return bar;
}

function intro() {
  const intro = document.createElement("div");
  intro.style.position = "absolute";
  intro.style.marginTop = "10vh";
  intro.style.height = "55vh";
  intro.style.width = "100vw";
  intro.style.display = "flex";
  //intro.style.border = "2px solid black";
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
  slogan.textContent = "Feel More At Home Than Home";
  const text = document.createElement("p");
  text.textContent =
    "Simple, home-baked treats and pastries, made to be indulged. Serving baked goods in NYC since 2020.";
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
  //bg.style.border = "2px solid black";
  bg.style.display = "flex";
  bg.style.justifyContent = "space-evenly";
  bg.style.padding = "25px 0px";
  bg.style.boxSizing = "border-box";
  const moreInfo = document.createElement("div");
  moreInfo.style.display = "flex";
  moreInfo.style.flexDirection = "column";
  moreInfo.style.alignItems = "center";
  moreInfo.style.justifyContent = "center";
  moreInfo.style.width = "35vw";
  const moreInfoTitle = document.createElement("h2");
  moreInfoTitle.textContent = "A Place To Feel Together";
  moreInfoTitle.style.color = "#f9f4f5";
  const moreInfoText = document.createElement("p");
  moreInfoText.textContent =
    "Starting during the pandemic, our café has helped thousands of people feel more at comfort with our goods and growing community.";
  moreInfoText.style.color = "#f9f4f5";
  moreInfoText.style.textAlign = "center";
  moreInfo.appendChild(moreInfoTitle);
  moreInfo.appendChild(moreInfoText);
  const insideCafe = document.createElement("img");
  insideCafe.src =
    "https://i.pinimg.com/564x/67/07/49/670749dd5a07df6f9964602ffb0b72db.jpg";
  insideCafe.style.border = "10px solid #70587C";
  bg.appendChild(moreInfo);
  bg.appendChild(insideCafe);
  return bg;
}

function rec() {
  const rec = document.createElement("div");
  rec.style.position = "absolute";
  rec.style.marginTop = "120vh";
  rec.style.height = "55vh";
  rec.style.width = "100vw";
  //rec.style.border = "2px solid black";
  rec.style.display = "flex";
  rec.style.justifyContent = "space-evenly";
  rec.style.padding = "25px 0px";
  rec.style.boxSizing = "border-box";
  const special = document.createElement("img");
  special.src =
    "https://i.pinimg.com/564x/59/67/e7/5967e7c9a367d35b3f9604f177587f9a.jpg";
  special.style.border = "10px solid #C8B8DB";
  const recInfo = document.createElement("div");
  recInfo.style.display = "flex";
  recInfo.style.flexDirection = "column";
  recInfo.style.alignItems = "center";
  recInfo.style.justifyContent = "center";
  recInfo.style.width = "35vw";
  const recInfoTitle = document.createElement("h2");
  recInfoTitle.textContent = "Café's Recommendation Of The Week";
  const recInfoText = document.createElement("p");
  recInfoText.textContent =
    "Try our Matcha Strawberry Mini Cake with Macarons. A popular treat to share with friends and family! There is a 50% discount that ends next week!";
  recInfoText.style.textAlign = "center";
  recInfo.appendChild(recInfoTitle);
  recInfo.appendChild(recInfoText);
  rec.appendChild(special);
  rec.appendChild(recInfo);
  return rec;
}

function location() {
  const location = document.createElement("div");
  location.style.position = "absolute";
  location.style.marginTop = "175vh";
  location.style.height = "55vh";
  location.style.width = "100vw";
  location.style.border = "2px solid black";
  location.style.display = "flex";
  location.style.justifyContent = "space-evenly";
  location.style.padding = "25px 0px";
  location.style.boxSizing = "border-box";
  location.style.background = "#502f4c";
  const locInfo = document.createElement("div");
  locInfo.style.display = "flex";
  locInfo.style.flexDirection = "column";
  locInfo.style.alignItems = "center";
  locInfo.style.justifyContent = "center";
  locInfo.style.width = "35vw";
  const locInfoTitle = document.createElement("h2");
  locInfoTitle.textContent = "Where To Find Us";
  locInfoTitle.style.color = "#f9f4f5";
  const locInfoText = document.createElement("p");
  locInfoText.textContent =
    "We are located in Manhattan, in NYC. Come visit and explore our wide range of desserts, including sandwiches and drinks! (Note: This is not a real business. Images are also not owned by me. Credits to the original owners.)";
  locInfoText.style.textAlign = "center";
  locInfoText.style.color = "#f9f4f5";
  const map = document.createElement("img");
  map.src =
    "https://i.pinimg.com/564x/bc/e9/40/bce940f898ffa1f1aee10a7682ee8eda.jpg";
  map.style.border = "10px solid #C8B8DB";
  locInfo.appendChild(locInfoTitle);
  locInfo.appendChild(locInfoText);
  location.appendChild(locInfo);
  location.appendChild(map);
  return location;
}

document.body.style.margin = "0px";
document.body.style.background = "#f9f4f5";
document.body.appendChild(navbar());
document.body.appendChild(intro());
document.body.appendChild(bg());
document.body.appendChild(rec());
document.body.appendChild(location());
