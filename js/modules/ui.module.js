import { details } from "./details.module.js";
// import { games } from "./games.module.js";

export class ui {
  constructor(detailsSection) {
    this.detailsSection = detailsSection;
  }

  changeActive(nodeArray, fun, parent, myUi, myDetails) {
    nodeArray.forEach((ele) => {
      ele.addEventListener("click", (e) => {
        nodeArray.forEach((element) => {
          element.children[0].classList.remove("active");
        });
        e.target.classList.add("active");
        fun.renderGames(parent, e.target.id, myUi, myDetails);
      });
    });
  }

  cardsClick(cardsArray, render) {
    cardsArray.forEach((card) => {
      card.addEventListener("click", async (e) => {
        console.log("🚀 ~ ui ~ cardsClick ~ render:", render);
        const obj = await render.getDetails(Number(card.id));
        console.log("🚀 ~ ui ~ card.addEventListener ~ card.id:", card.id);
        console.log("🚀 ~ ui ~ card.addEventListener ~ obj:", obj);
        render.renderDetails(obj, this.hide, this.detailsSection);
        console.log(this.detailsSection);
        this.show(this.detailsSection);
      });
    });
  }

  show(ele) {
    ele.classList.replace("d-none", "d-block");
  }

  showLoading() {
    const loader = document.querySelector(".loader");
    loader.classList.replace("d-none", "d-block");
  }
  hideLoading() {
    const loader = document.querySelector(".loader");
    loader.classList.replace("d-block", "d-none");
  }
}
