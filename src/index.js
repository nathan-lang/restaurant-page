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
  logo.src =
    "https://nathan-lang.github.io/restaurant-page/src/sweethomenew.png";
  logo.style.height = "150px";
  const navSection = document.createElement("div");
  navSection.style.display = "flex";
  navSection.style.gap = "25px";
  const home = document.createElement("button");
  home.addEventListener("click", loadHomePage);
  home.style.border = "none";
  home.style.background = "transparent";
  home.textContent = "Home";
  home.style.height = "50px";
  home.style.width = "50px";
  home.style.fontFamily = "'Poppins', sans-serif";
  const menu = document.createElement("button");
  menu.style.border = "none";
  menu.style.background = "transparent";
  menu.textContent = "Menu";
  menu.style.height = "50px";
  menu.style.width = "50px";
  menu.style.fontFamily = "'Poppins', sans-serif";
  menu.addEventListener("click", loadMenuPage);
  const contacts = document.createElement("button");
  contacts.style.border = "none";
  contacts.style.background = "transparent";
  contacts.textContent = "Contacts";
  contacts.style.height = "50px";
  contacts.style.width = "50px";
  contacts.style.fontFamily = "'Poppins', sans-serif";
  contacts.addEventListener("click", loadContactsPage);
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
  slogan.textContent = "Feel More At Home Than Ever";
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
  //location.style.border = "2px solid black";
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

function menu() {
  const menu = document.createElement("div");
  menu.style.position = "relative";
  menu.style.paddingTop = "10vh";
  menu.style.height = "80vh";
  //menu.style.border = "2px solid black";
  menu.style.display = "flex";
  menu.style.flexDirection = "column";
  menu.style.alignItems = "center";
  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Our Menu";
  const menuList = document.createElement("div");
  //menuList.style.border = "2px solid black";
  menuList.style.height = "60vh";
  menuList.style.width = "60vw";
  menuList.style.display = "inline-grid";
  menuList.style.gridTemplate = "repeat(2,25vh) / repeat(3,15vw)";
  menuList.style.rowGap = "10vh"; // rowGap = gap between an element's rows.
  menuList.style.columnGap = "calc(calc(60vw - 45vw) / 2)";

  // Adding the menu items.
  const i1 = document.createElement("div");
  i1.style.display = "flex";
  i1.style.flexDirection = "column";
  i1.style.alignItems = "center";
  const i1img = document.createElement("img");
  i1img.src =
    "https://i.pinimg.com/564x/ce/65/8c/ce658ceca5ee71e424a9dea6209e7b2c.jpg";
  i1img.style.border = "10px solid #70587c";
  i1img.style.height = "20vh";
  const i1p = document.createElement("p");
  i1p.textContent = "Grape Cheesecake";
  i1.appendChild(i1img);
  i1.appendChild(i1p);

  const i2 = document.createElement("div");
  i2.style.display = "flex";
  i2.style.flexDirection = "column";
  i2.style.alignItems = "center";
  const i2img = document.createElement("img");
  i2img.src =
    "https://i.pinimg.com/736x/3e/a0/98/3ea0987758a40fa9e66341b0597cde09.jpg";
  i2img.style.border = "10px solid #70587c";
  i2img.style.height = "20vh";
  const i2p = document.createElement("p");
  i2p.textContent = "Chocolate Mousse Cake With Strawberry";
  i2p.style.textAlign = "center";
  i2.appendChild(i2img);
  i2.appendChild(i2p);

  const i3 = document.createElement("div");
  i3.style.display = "flex";
  i3.style.flexDirection = "column";
  i3.style.alignItems = "center";
  const i3img = document.createElement("img");
  i3img.src =
    "https://i.pinimg.com/564x/1b/69/8c/1b698cccf41a84ed1a31664e26b6bbad.jpg";
  i3img.style.border = "10px solid #70587c";
  i3img.style.height = "20vh";
  const i3p = document.createElement("p");
  i3p.textContent = "Pancakes with Whipped Cream and Strawberry";
  i3p.style.textAlign = "center";
  i3.appendChild(i3img);
  i3.appendChild(i3p);

  const i4 = document.createElement("div");
  i4.style.display = "flex";
  i4.style.flexDirection = "column";
  i4.style.alignItems = "center";
  const i4img = document.createElement("img");
  i4img.src =
    "https://i.pinimg.com/564x/59/67/e7/5967e7c9a367d35b3f9604f177587f9a.jpg";
  i4img.style.border = "10px solid #70587c";
  i4img.style.height = "20vh";
  const i4p = document.createElement("p");
  i4p.textContent = "Matcha Strawberry Mini Cake With Macarons";
  i4p.style.textAlign = "center";
  i4.appendChild(i4img);
  i4.appendChild(i4p);

  const i5 = document.createElement("div");
  i5.style.display = "flex";
  i5.style.flexDirection = "column";
  i5.style.alignItems = "center";
  const i5img = document.createElement("img");
  i5img.src =
    "https://i.pinimg.com/564x/83/7d/b8/837db802326c97181f36b526a3b145a9.jpg";
  i5img.style.border = "10px solid #70587c";
  i5img.style.height = "20vh";
  const i5p = document.createElement("p");
  i5p.textContent = "Egg, Tomato, Lettuce and Carrot Sandwich";
  i5p.style.textAlign = "center";
  i5.appendChild(i5img);
  i5.appendChild(i5p);

  const i6 = document.createElement("div");
  i6.style.display = "flex";
  i6.style.flexDirection = "column";
  i6.style.alignItems = "center";
  const i6img = document.createElement("img");
  i6img.src =
    "https://i.pinimg.com/736x/5c/d3/d2/5cd3d2d7384540b42f2f81b69f529709.jpg";
  i6img.style.border = "10px solid #70587c";
  i6img.style.height = "20vh";
  const i6p = document.createElement("p");
  i6p.textContent = "Mocha Strawberry Latte";
  i6p.style.textAlign = "center";
  i6.appendChild(i6img);
  i6.appendChild(i6p);

  // Appending them all.
  menuList.appendChild(i1);
  menuList.appendChild(i2);
  menuList.appendChild(i3);
  menuList.appendChild(i4);
  menuList.appendChild(i5);
  menuList.appendChild(i6);

  // Appending all components.
  menu.appendChild(menuTitle);
  menu.appendChild(menuList);
  return menu;
}

function contacts() {
  const contacts = document.createElement("div");
  contacts.style.position = "relative";
  contacts.style.paddingTop = "10vh";
  contacts.style.height = "80vh";
  //contacts.style.border = "2px solid black";
  contacts.style.display = "flex";
  contacts.style.flexDirection = "column";
  contacts.style.alignItems = "center";
  const contactsTitle = document.createElement("h2");
  contactsTitle.textContent = "Contacts";
  const contactList = document.createElement("div");
  //contactList.style.border = "2px solid black";
  contactList.style.height = "30vh";
  contactList.style.width = "60vw";
  contactList.style.display = "flex";
  contactList.style.justifyContent = "center";
  contactList.style.gap = "10vw"; // rowGap = gap between an element's rows.

  // Adding contacts items.
  const insta = document.createElement("div");
  insta.style.display = "flex";
  insta.style.flexDirection = "column";
  insta.style.alignItems = "center";
  const instaImg = document.createElement("img");
  instaImg.src =
    "https://i.pinimg.com/564x/17/62/90/17629063be10c5db393ddc5416b3319e.jpg";
  instaImg.style.border = "10px solid #70587c";
  instaImg.style.height = "20vh";
  const instaP = document.createElement("p");
  instaP.textContent = "Instagram";
  insta.appendChild(instaImg);
  insta.appendChild(instaP);

  const yt = document.createElement("div");
  yt.style.display = "flex";
  yt.style.flexDirection = "column";
  yt.style.alignItems = "center";
  const ytImg = document.createElement("img");
  ytImg.src =
    "https://i.pinimg.com/564x/6f/aa/25/6faa257895a374ecb29ec3d9f330d794.jpg";
  ytImg.style.border = "10px solid #70587c";
  ytImg.style.height = "20vh";
  const ytP = document.createElement("p");
  ytP.textContent = "YouTube";
  yt.appendChild(ytImg);
  yt.appendChild(ytP);

  const phone = document.createElement("div");
  phone.style.display = "flex";
  phone.style.flexDirection = "column";
  phone.style.alignItems = "center";
  const phoneImg = document.createElement("img");
  phoneImg.src =
    "https://i.pinimg.com/564x/9c/d6/b3/9cd6b307c04dbacda2a841c350f464c5.jpg";
  phoneImg.style.border = "10px solid #70587c";
  phoneImg.style.height = "20vh";
  const phoneP = document.createElement("p");
  phoneP.textContent = "Phone";
  phone.appendChild(phoneImg);
  phone.appendChild(phoneP);

  contactList.append(insta);
  contactList.append(yt);
  contactList.append(phone);

  contacts.appendChild(contactsTitle);
  contacts.appendChild(contactList);
  return contacts;
}

function loadHomePage() {
  //console.log("called load home page!");
  document.body.innerHTML = "";
  document.body.appendChild(navbar());
  document.body.appendChild(intro());
  document.body.appendChild(bg());
  document.body.appendChild(rec());
  document.body.appendChild(location());
}

function loadMenuPage() {
  //console.log("called load menu page!");
  document.body.innerHTML = "";
  document.body.appendChild(navbar());
  document.body.appendChild(menu());
}

function loadContactsPage() {
  //console.log("called load contacts page!");
  document.body.innerHTML = "";
  document.body.appendChild(navbar());
  document.body.appendChild(contacts());
}

document.body.style.margin = "0px";
document.body.style.background = "#f9f4f5";
document.body.appendChild(navbar());
document.body.appendChild(intro());
document.body.appendChild(bg());
document.body.appendChild(rec());
document.body.appendChild(location());
