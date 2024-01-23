import { ui } from "./modules/ui.module.js";
import { games } from "./modules/games.module.js";
import { details } from "./modules/details.module.js";

const description = document.querySelector(".details");
const links = document.querySelectorAll(".nav-item");
const parent = document.querySelector(".render-games .row");
const myUi = new ui(description);
const myGames = new games();
const myDetails = new details();

myUi.changeActive(links, myGames, parent, myUi, myDetails);
myGames.renderGames(parent, "mmorpg", myUi, myDetails);
