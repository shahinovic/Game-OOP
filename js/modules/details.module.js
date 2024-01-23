export class details {
  #detailsBaseUrl =
    "https://free-to-play-games-database.p.rapidapi.com/api/game?";
  constructor() {
    this.detailsObj = {};
  }

  async getDetails(id) {
    console.log("start");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "63bd1ea35emsh7ca307bcc2f4060p1e6c9fjsnd0e0728702b0",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const res = await fetch(`${this.#detailsBaseUrl}id=${id}`, options);
      const data = await res.json();
      // this.detailsObj = data;
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  renderDetails(detailsObject) {
    const output = `
    <div class="details-content w-100 py-5">
          <h2 class="details-title d-flex justify-content-between">
            <span>Details Game</span
            ><button
              type="button"
              class="btn-close btn-close-white"
              id="close-details"
              onclick="this.parentElement.parentElement.parentElement.parentElement.classList.replace('d-block', 'd-none')"
              
            >
              X
            </button>
          </h2>

          <div class="box w-100 d-flex justify-content-between">
            <div class="img-container" style="width: 40%">
              <img class="img-fluid" src=${detailsObject?.thumbnail} alt="" />
            </div>
            <div class="content" style="width: 60%">
              <h3>Title: <span class="game-title">${detailsObject?.title}</span></h3>
              <p>
                Category:
                <span class="game-category badge text-bg-info">${detailsObject?.genre}</span>
              </p>
              <p>
                Platform:
                <span class="game-platform badge text-bg-info">${detailsObject?.platform}</span>
              </p>
              <p class="mb-4">
                Status:
                <span class="game-status badge text-bg-info">${detailsObject?.status}</span>
              </p>
              <div class="game-description mb-4">
                ${detailsObject?.description}
              </div>
              <a href=${detailsObject?.game_url} target="_blank" class="btn btn-outline-warning p-2"
              >Show Game</a>
            </div>
          </div>
        </div>
    `;

    document.querySelector(".details > .container").innerHTML = output;
  }
}
