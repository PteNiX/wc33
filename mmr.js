//sort by

document.addEventListener("DOMContentLoaded", () => {
  const getSort = ({ target }) => {
    const order = (target.dataset.order = -(target.dataset.order || -1));
    const index = [...target.parentNode.cells].indexOf(target);
    const collator = new Intl.Collator(["en", "ru"], { numeric: true });
    const comparator = (index, order) => (a, b) =>
      order *
      collator.compare(
        a.children[index].innerHTML,
        b.children[index].innerHTML
      );

    for (const tBody of target.closest("table").tBodies)
      tBody.append(...[...tBody.rows].sort(comparator(index, order)));

    for (const cell of target.parentNode.cells)
      cell.classList.toggle("sorted", cell === target);
  };

  document
    .querySelectorAll(".table_sort thead")
    .forEach((tableTH) =>
      tableTH.addEventListener("click", () => getSort(event))
    );
});

document.querySelector(".select").value = 13;
let s = document.querySelector(".select").value;

let urlPten = `https://website-backend.w3champions.com/api/players/PteN%2321803/game-mode-stats?gateWay=20&season=${s}`;

let urlillisori = `https://website-backend.w3champions.com/api/players/Illisori%232201/game-mode-stats?gateWay=20&season=${s}`;

let urlDraniq = `https://website-backend.w3champions.com/api/players/draniqBLR%232779/game-mode-stats?gateWay=20&season=${s}`;

let urlVama = `https://website-backend.w3champions.com/api/players/vama%2321920/game-mode-stats?gateWay=20&season=${s}`;

let urlFingon = `https://website-backend.w3champions.com/api/players/KawerOrda%232648/game-mode-stats?gateWay=20&season=${s}`;

let urlTrident = `https://website-backend.w3champions.com/api/players/tRid3nt%232910/game-mode-stats?gateWay=20&season=${s}`;

let urlFlamy4 = `https://website-backend.w3champions.com/api/players/Flamy4%232811/game-mode-stats?gateWay=20&season=${s}`;

let urlKrasik = `https://website-backend.w3champions.com/api/players/krasik%232848/game-mode-stats?gateWay=20&season=${s}`;

let urlYolo = `https://website-backend.w3champions.com/api/players/Yolostime%232753/game-mode-stats?gateWay=20&season=${s}`;

let urlSho = `https://website-backend.w3champions.com/api/players/Shogun%2322192/game-mode-stats?gateWay=20&season=${s}`;

let urlTom = `https://website-backend.w3champions.com/api/players/TomPoncho%2321719/game-mode-stats?gateWay=20&season=${s}`;

let urlGla = `https://website-backend.w3champions.com/api/players/Glare%232264/game-mode-stats?gateWay=20&season=${s}`;

let pten = "PteN#21803";
let illisori = "Illisori#2201";
let draniq = "draniqBLR#2779";
let vama = "vama#21920";
let flamy4 = "Flamy4#2811";
let krasik = "krasik#2848";
let yolostime = "Yolostime#2753";
let shogun = "Shogun#2322192";
let poncho = "Poncho#21692";
let glare = "Glare#2264";
let fingon = "KawerOrda#2648";

async function showMaxMmr(tag, season, race) {
  let preUrlMax = `https://website-backend.w3champions.com/api/matches/search?playerId=${tag
    .trim()
    .replace(
      "#",
      "%23"
    )}&gateway=0&offset=0&pageSize=100&season=${season}&gamemode=1`;

  const preres = await fetch(preUrlMax);
  const predata = await preres.json();

  let countGames = Math.floor(predata.count / 100);
  let array = [];

  for (let j = 0; j < countGames + 1; j++) {
    let urlMax = `https://website-backend.w3champions.com/api/matches/search?playerId=${tag
      .trim()
      .replace("#", "%23")}&gateway=0&offset=${
      j + "00"
    }&pageSize=100&season=${season}&gamemode=1`;

    console.log(urlMax);
    const res = await fetch(urlMax);
    const data = await res.json();

    for (let i = 0; i < data.matches.length; i++) {
      if (
        data.matches[i].teams[0].players[0].battleTag == `${tag}` &&
        data.matches[i].teams[0].players[0].race == `${race}`
      ) {
        array.push(data.matches[i].teams[0].players[0].currentMmr);
      }
      if (
        data.matches[i].teams[1].players[0].battleTag == `${tag}` &&
        data.matches[i].teams[1].players[0].race == `${race}`
      ) {
        array.push(data.matches[i].teams[1].players[0].currentMmr);
      }
    }
  }

  let sumOfNumbers = Math.round(
    array.reduce((acc, number) => acc + number, 0) / array.length
  );
  let aveOfSumb = Math.round(
    (Math.max.apply(null, array) + Math.min.apply(null, array)) / 2
  );

  let maxmmr = Math.max.apply(null, array);
  let minmmr = Math.min.apply(null, array);

  if (predata.count == 0) {
    maxmmr = 0;
    minmmr = 0;
    aveOfSumb = 0;
    sumOfNumbers = 0;
  }

  document.querySelector(
    `.games-${tag.toLowerCase().split("#")[0]}`
  ).innerHTML = predata.count;

  document.querySelector(
    `.mmr-min-${tag.toLowerCase().split("#")[0]}`
  ).innerHTML = minmmr;

  document.querySelector(
    `.mmr-max-${tag.toLowerCase().split("#")[0]}`
  ).innerHTML = maxmmr;

  document.querySelector(
    `.mmr-av-${tag.toLowerCase().split("#")[0]}`
  ).innerHTML = sumOfNumbers;

  document.querySelector(
    `.mmr-me-${tag.toLowerCase().split("#")[0]}`
  ).innerHTML = aveOfSumb;

  let url = `https://website-backend.w3champions.com/api/players/${tag
    .trim()
    .replace("#", "%23")}/game-mode-stats?gateWay=20&season=${s}`;

  const res = await fetch(url);
  const data = await res.json();

  for (let i = 0; i < data.length; i++) {
    if (data[i].gameMode == "1" && data[i].race == race) {
      document.querySelector(
        `.mmr-${tag.toLowerCase().split("#")[0]}`
      ).innerHTML = data[i].mmr;
    }
  }
}

showMaxMmr(pten, s, 2);
showMaxMmr(illisori, s, 4);
showMaxMmr(draniq, s, 2);
showMaxMmr(flamy4, s, 4);
showMaxMmr(vama, s, 8);
showMaxMmr(fingon, s, 4);
showMaxMmr(krasik, s, 4);
showMaxMmr(yolostime, s, 8);
showMaxMmr(poncho, s, 4);
showMaxMmr(shogun, s, 1);
showMaxMmr(glare, s, 4);

function changeSeason() {
  s = document.querySelector(".select").value;
  showMaxMmr(pten, s, 2);
  showMaxMmr(illisori, s, 4);
  showMaxMmr(draniq, s, 2);
  showMaxMmr(flamy4, s, 4);
  showMaxMmr(vama, s, 8);
  showMaxMmr(fingon, s, 4);
  showMaxMmr(krasik, s, 4);
  showMaxMmr(yolostime, s, 8);
  showMaxMmr(poncho, s, 4);
  showMaxMmr(shogun, s, 1);
  showMaxMmr(glare, s, 4);
}

let show = document.querySelector(".button");
show.addEventListener("click", changeSeason);
