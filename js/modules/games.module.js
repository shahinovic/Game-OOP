import { ui } from "./ui.module.js";
const myUi = new ui();

export class games {
  #baseUrl = "https://free-to-play-games-database.p.rapidapi.com/api/games?";

  constructor() {
    this.gamesArray = [];
  }

  async getGames(gameEndPint) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "63bd1ea35emsh7ca307bcc2f4060p1e6c9fjsnd0e0728702b0",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    try {
      myUi.showLoading();
      const res = await fetch(
        `${this.#baseUrl}category=${gameEndPint}`,
        options
      );
      const data = await res.json();

      this.gamesArray = data;
      myUi.hideLoading();
      return this.gamesArray;
    } catch (error) {
      console.error(error);
    }
  }

  renderGame(game, id) {
    return `
    <div class="col-md-4 col-lg-3">
                <div class="card text-bg-dark mb-3 rounded-4" id=${id}>
                <img src=${game.thumbnail} alt="..." />
                <div class="card-body">
                  <h5 class="card-title d-flex">
                    <span class="flex-grow-1">${game.title}</span>
                    <span class="badge text-bg-primary p-2"> Free </span>
                  </h5>
                  <p class="card-text text-secondary py-3">
                    ${game.short_description}
                  </p>
                  <div class="card-footer d-flex justify-content-between">
                    <span class="badge text-bg-secondary p-1">${game.genre}</span>

                    <span class="badge text-bg-secondary p-1"
                      >${game.platform}</span
                    >
                  </div>
                </div>
              </div>
    </div>
    `;
  }

  async renderGames(parent, gameEndPint, myUi, myDetails) {
    await this.getGames(gameEndPint);
    let output = "";
    let myArr = Array.from(this.gamesArray);

    for (const game of myArr) {
      output += this.renderGame(game, game.id);
      if (myArr.indexOf(game) == 50) break;
    }
    parent.innerHTML = output;
    const cards = document.querySelectorAll(".card");
    myUi.cardsClick(cards, myDetails);
  }
}
