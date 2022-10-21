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

let s = "12";

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

async function getData() {
  const res = await fetch(urlPten);
  const data = await res.json();

  for (let i = 0; i < data.length; i++) {
    if (data[i].gameMode == "1" && data[i].race == "2") {
      document.querySelector(".mmrPteN").innerHTML = data[i].mmr;
    }
  }

  const resIl = await fetch(urlillisori);
  const dataIl = await resIl.json();
  for (let i = 0; i < dataIl.length; i++) {
    if (dataIl[i].gameMode == "1" && dataIl[i].race == "4") {
      document.querySelector(".mmrIl").innerHTML = dataIl[i].mmr;
    }
  }

  const resKr = await fetch(urlKrasik);
  const dataKr = await resKr.json();
  for (let i = 0; i < dataKr.length; i++) {
    if (dataKr[i].gameMode == "1" && dataKr[i].race == "4") {
      document.querySelector(".mmr-kr").innerHTML = dataKr[i].mmr;
    }
  }

  const resDr = await fetch(urlDraniq);
  const dataDr = await resDr.json();

  for (let i = 0; i < dataDr.length; i++) {
    if (dataDr[i].gameMode == "1" && dataDr[i].race == "2") {
      document.querySelector(".mmrDra").innerHTML = dataDr[i].mmr;
    }
  }

  const resVm = await fetch(urlVama);
  const dataVm = await resVm.json();

  for (let i = 0; i < dataVm.length; i++) {
    if (dataVm[i].gameMode == "1" && dataVm[i].race == "8") {
      document.querySelector(".mmrVam").innerHTML = dataVm[i].mmr;
    }
  }

  const resFi = await fetch(urlFingon);
  const dataFi = await resFi.json();

  for (let i = 0; i < dataFi.length; i++) {
    if (dataFi[i].gameMode == "1" && dataFi[i].race == "4") {
      document.querySelector(".mmrFin").innerHTML = dataFi[i].mmr;
    }
  }

  const resTr = await fetch(urlTrident);
  const dataTr = await resTr.json();

  for (let i = 0; i < dataTr.length; i++) {
    if (dataTr[i].gameMode == "1" && dataTr[i].race == "2") {
      document.querySelector(".mmrTri").innerHTML = dataTr[i].mmr;
    }
  }

  const resFl = await fetch(urlFlamy4);
  const dataFl = await resFl.json();

  for (let i = 0; i < dataFl.length; i++) {
    if (dataFl[i].gameMode == "1" && dataFl[i].race == "4") {
      document.querySelector(".mmrFla").innerHTML = dataFl[i].mmr;
    }
  }

  const resYo = await fetch(urlYolo);
  const dataYo = await resYo.json();

  for (let i = 0; i < dataYo.length; i++) {
    if (dataYo[i].gameMode == "1" && dataYo[i].race == "8") {
      document.querySelector(".mmrYo").innerHTML = dataYo[i].mmr;
    }
  }

  const resSho = await fetch(urlSho);
  const dataSho = await resSho.json();

  for (let i = 0; i < dataSho.length; i++) {
    if (dataSho[i].gameMode == "1" && dataSho[i].race == "1") {
      document.querySelector(".mmrSho").innerHTML = dataSho[i].mmr;
    }
  }

  const resTom = await fetch(urlTom);
  const dataTom = await resTom.json();

  for (let i = 0; i < dataTom.length; i++) {
    if (dataTom[i].gameMode == "1" && dataTom[i].race == "4") {
      document.querySelector(".mmr-tp").innerHTML = dataTom[i].mmr;
    }
  }
}

getData();

let urlPtenSumOne =
  "https://website-backend.w3champions.com/api/matches/search?playerId=PteN%2321803&gateway=0&offset=0&pageSize=100&season=12";

let urlPtenSumTwo =
  "https://website-backend.w3champions.com/api/matches/search?playerId=PteN%2321803&gateway=0&offset=100&pageSize=100&season=12";

let urlPtenSumThree =
  "https://website-backend.w3champions.com/api/matches/search?playerId=PteN%2321803&gateway=0&offset=200&pageSize=100&season=12";

let urlPtenSumFour =
  "https://website-backend.w3champions.com/api/matches/search?playerId=PteN%2321803&gateway=0&offset=300&pageSize=100&season=12";

let urlPtenSumFive =
  "https://website-backend.w3champions.com/api/matches/search?playerId=PteN%2321803&gateway=0&offset=400&pageSize=100&season=12";

let urlPtenSumSix =
  "https://website-backend.w3champions.com/api/matches/search?playerId=PteN%2321803&gateway=0&offset=500&pageSize=100&season=12";

//ilisori
let urlIllisoriOne =
  "https://website-backend.w3champions.com/api/matches/search?playerId=Illisori%232201&gateway=20&offset=0&pageSize=300&season=12";

//draniq

let urlDraniqOne =
  "https://website-backend.w3champions.com/api/matches/search?playerId=draniqBLR%232779&gateway=20&offset=0&pageSize=300&season=12";
let urlDraniqTwo =
  "https://website-backend.w3champions.com/api/matches/search?playerId=draniqBLR%232779&gateway=20&offset=100&pageSize=300&season=12";
let urlDraniqThree =
  "https://website-backend.w3champions.com/api/matches/search?playerId=draniqBLR%232779&gateway=20&offset=200&pageSize=300&season=12";
/* let urlDraniqFour =
  "https://website-backend.w3champions.com/api/matches/search?playerId=draniqBLR%232779&gateway=20&offset=300&pageSize=300&season=12"; */

//vama

let urlVamaOne =
  "https://website-backend.w3champions.com/api/matches/search?playerId=vama%2321920&gateway=20&offset=0&pageSize=300&season=12&gameMode=1";

//Fingon

let urlFingonOne =
  "https://website-backend.w3champions.com/api/matches/search?playerId=KawerOrda%232648&gateway=20&offset=0&pageSize=300&season=12";
let urlFingonTwo =
  "https://website-backend.w3champions.com/api/matches/search?playerId=KawerOrda%232648&gateway=20&offset=100&pageSize=300&season=12";

//trident

let urlTridentOne =
  "https://website-backend.w3champions.com/api/matches/search?playerId=tRid3nt%232910&gateway=20&offset=0&pageSize=300&season=12&gamemode=1";

//krasik

let urlKrasikOne =
  "https://website-backend.w3champions.com/api/matches/search?playerId=krasik%232848&gateway=20&offset=0&pageSize=300&season=12&gamemode=1";

let urlKrasikTwo =
  "https://website-backend.w3champions.com/api/matches/search?playerId=krasik%232848&gateway=20&offset=100&pageSize=300&season=12&gamemode=1";
//flamy4

let urlFlamy4One =
  "https://website-backend.w3champions.com/api/matches/search?playerId=Flamy4%232811&gateway=20&offset=0&pageSize=300&season=12&gamemode=1";

let urlYoloOne =
  "https://website-backend.w3champions.com/api/matches/search?playerId=Yolostime%232753&gateway=20&offset=0&pageSize=300&season=12&gamemode=1";

let urlYoloTwo =
  "https://website-backend.w3champions.com/api/matches/search?playerId=Yolostime%232753&gateway=20&offset=100&pageSize=300&season=12&gamemode=1";

let urlShoOne =
  "https://website-backend.w3champions.com/api/matches/search?playerId=Shogun%2322192&gateway=20&offset=0&pageSize=300&season=12&gamemode=1";

let urlTomOne =
  "https://website-backend.w3champions.com/api/matches/search?playerId=TomPoncho%2321719&gateway=20&offset=0&pageSize=300&season=12&gamemode=1";

let urlTomTwo =
  "https://website-backend.w3champions.com/api/matches/search?playerId=TomPoncho%2321719&gateway=20&offset=100&pageSize=300&season=12&gamemode=1";

let urlTomThree =
  "https://website-backend.w3champions.com/api/matches/search?playerId=TomPoncho%2321719&gateway=20&offset=200&pageSize=300&season=12&gamemode=1";

let urlTomFour =
  "https://website-backend.w3champions.com/api/matches/search?playerId=TomPoncho%2321719&gateway=20&offset=300&pageSize=300&season=12&gamemode=1";

async function getDataPteN() {
  const resPtenSum = await fetch(urlPtenSumOne);
  const resPtenSumTwo = await fetch(urlPtenSumTwo);
  const resPtenSumThree = await fetch(urlPtenSumThree);
  const resPtenSumFour = await fetch(urlPtenSumFour);
  const resPtenSumFive = await fetch(urlPtenSumFive);
  const resPtenSumSix = await fetch(urlPtenSumSix);

  const dataPteNSum = await resPtenSum.json();
  const dataPteNSumTwo = await resPtenSumTwo.json();
  const dataPteNSumThree = await resPtenSumThree.json();
  const dataPteNSumFour = await resPtenSumFour.json();
  const dataPteNSumFive = await resPtenSumFive.json();
  const dataPteNSumSix = await resPtenSumSix.json();

  let array = [];

  for (let i = 0; i < dataPteNSum.matches.length; i++) {
    if (
      dataPteNSum.matches[i].teams[0].players[0].battleTag == "PteN#21803" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[0].players[0].race == "2"
    ) {
      array.push(dataPteNSum.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSum.matches[i].teams[1].players[0].battleTag == "PteN#21803" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[1].players[0].race == "2"
    ) {
      array.push(dataPteNSum.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumTwo.matches.length; i++) {
    if (
      dataPteNSumTwo.matches[i].teams[0].players[0].battleTag == "PteN#21803" &&
      dataPteNSumTwo.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[0].players[0].race == "2"
    ) {
      array.push(dataPteNSumTwo.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumTwo.matches[i].teams[1].players[0].battleTag == "PteN#21803" &&
      dataPteNSumTwo.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[1].players[0].race == "2"
    ) {
      array.push(dataPteNSumTwo.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumThree.matches.length; i++) {
    if (
      dataPteNSumThree.matches[i].teams[0].players[0].battleTag ==
        "PteN#21803" &&
      dataPteNSumThree.matches[i].gameMode == "1" &&
      dataPteNSumThree.matches[i].teams[0].players[0].race == "2"
    ) {
      array.push(dataPteNSumThree.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumThree.matches[i].teams[1].players[0].battleTag ==
        "PteN#21803" &&
      dataPteNSumThree.matches[i].gameMode == "1" &&
      dataPteNSumThree.matches[i].teams[1].players[0].race == "2"
    ) {
      array.push(dataPteNSumThree.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumFour.matches.length; i++) {
    if (
      dataPteNSumFour.matches[i].teams[0].players[0].battleTag ==
        "PteN#21803" &&
      dataPteNSumFour.matches[i].gameMode == "1" &&
      dataPteNSumFour.matches[i].teams[0].players[0].race == "2"
    ) {
      array.push(dataPteNSumFour.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumFour.matches[i].teams[1].players[0].battleTag ==
        "PteN#21803" &&
      dataPteNSumFour.matches[i].gameMode == "1" &&
      dataPteNSumFour.matches[i].teams[1].players[0].race == "2"
    ) {
      array.push(dataPteNSumFour.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumFive.matches.length; i++) {
    if (
      dataPteNSumFive.matches[i].teams[0].players[0].battleTag ==
        "PteN#21803" &&
      dataPteNSumFive.matches[i].gameMode == "1" &&
      dataPteNSumFive.matches[i].teams[0].players[0].race == "2"
    ) {
      array.push(dataPteNSumFive.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumFive.matches[i].teams[1].players[0].battleTag ==
        "PteN#21803" &&
      dataPteNSumFive.matches[i].gameMode == "1" &&
      dataPteNSumFive.matches[i].teams[1].players[0].race == "2"
    ) {
      array.push(dataPteNSumFive.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumSix.matches.length; i++) {
    if (
      dataPteNSumSix.matches[i].teams[0].players[0].battleTag == "PteN#21803" &&
      dataPteNSumSix.matches[i].gameMode == "1" &&
      dataPteNSumSix.matches[i].teams[0].players[0].race == "2"
    ) {
      array.push(dataPteNSumSix.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumSix.matches[i].teams[1].players[0].battleTag == "PteN#21803" &&
      dataPteNSumSix.matches[i].gameMode == "1" &&
      dataPteNSumSix.matches[i].teams[1].players[0].race == "2"
    ) {
      array.push(dataPteNSumSix.matches[i].teams[1].players[0].currentMmr);
    }
  }

  document.querySelector(".mmr-min-PteN").innerHTML = Math.min.apply(
    null,
    array
  );

  document.querySelector(".mmr-max-PteN").innerHTML = Math.max.apply(
    null,
    array
  );

  document.querySelector(".mmr-av-PteN").innerHTML =
    (Math.max.apply(null, array) + Math.min.apply(null, array)) / 2;
}

getDataPteN();

//ilisori
async function getDataIllisori() {
  const resPtenSum = await fetch(urlIllisoriOne);

  const dataPteNSum = await resPtenSum.json();

  let array = [];

  for (let i = 0; i < dataPteNSum.matches.length; i++) {
    if (
      dataPteNSum.matches[i].teams[0].players[0].battleTag == "Illisori#2201" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[0].players[0].race == "4"
    ) {
      array.push(dataPteNSum.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSum.matches[i].teams[1].players[0].battleTag == "Illisori#2201" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[1].players[0].race == "4"
    ) {
      array.push(dataPteNSum.matches[i].teams[1].players[0].currentMmr);
    }
  }

  document.querySelector(".mmr-min-il").innerHTML = Math.min.apply(null, array);

  document.querySelector(".mmr-max-il").innerHTML = Math.max.apply(null, array);

  document.querySelector(".mmr-av-il").innerHTML =
    (Math.max.apply(null, array) + Math.min.apply(null, array)) / 2;
}

getDataIllisori();

async function getDataDraniq() {
  const resPtenSum = await fetch(urlDraniqOne);
  const resPtenSumTwo = await fetch(urlDraniqTwo);
  const resPtenSumThree = await fetch(urlDraniqThree);
  //const resPtenSumFour = await fetch(urlDraniqFour);

  const dataPteNSum = await resPtenSum.json();
  const dataPteNSumTwo = await resPtenSumTwo.json();
  const dataPteNSumThree = await resPtenSumThree.json();
  //const dataPteNSumFour = await resPtenSumFour.json();

  let array = [];

  for (let i = 0; i < dataPteNSum.matches.length; i++) {
    if (
      dataPteNSum.matches[i].teams[0].players[0].battleTag ==
        "draniqBLR#2779" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[0].players[0].race == "2"
    ) {
      array.push(dataPteNSum.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSum.matches[i].teams[1].players[0].battleTag ==
        "draniqBLR#2779" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[1].players[0].race == "2"
    ) {
      array.push(dataPteNSum.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumTwo.matches.length; i++) {
    if (
      dataPteNSumTwo.matches[i].teams[0].players[0].battleTag ==
        "draniqBLR#2779" &&
      dataPteNSumTwo.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[0].players[0].race == "2"
    ) {
      array.push(dataPteNSumTwo.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumTwo.matches[i].teams[1].players[0].battleTag ==
        "draniqBLR#2779" &&
      dataPteNSumTwo.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[1].players[0].race == "2"
    ) {
      array.push(dataPteNSumTwo.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumThree.matches.length; i++) {
    if (
      dataPteNSumThree.matches[i].teams[0].players[0].battleTag ==
        "draniqBLR#2779" &&
      dataPteNSumThree.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[0].players[0].race == "2"
    ) {
      array.push(dataPteNSumThree.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumThree.matches[i].teams[1].players[0].battleTag ==
        "draniqBLR#2779" &&
      dataPteNSumThree.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[1].players[0].race == "2"
    ) {
      array.push(dataPteNSumThree.matches[i].teams[1].players[0].currentMmr);
    }
  }

  document.querySelector(".mmr-min-dr").innerHTML = Math.min.apply(null, array);

  document.querySelector(".mmr-max-dr").innerHTML = Math.max.apply(null, array);
  document.querySelector(".mmr-av-dr").innerHTML =
    (Math.max.apply(null, array) + Math.min.apply(null, array)) / 2;
}

getDataDraniq();

//vama

async function getDataVama() {
  const resPtenSum = await fetch(urlVamaOne);

  const dataPteNSum = await resPtenSum.json();

  let array = [];

  for (let i = 0; i < dataPteNSum.matches.length; i++) {
    if (
      dataPteNSum.matches[i].teams[0].players[0].battleTag == "vama#21920" &&
      dataPteNSum.matches[i].gameMode == "1"
    ) {
      array.push(dataPteNSum.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSum.matches[i].teams[1].players[0].battleTag == "vama#21920" &&
      dataPteNSum.matches[i].gameMode == "1"
    ) {
      array.push(dataPteNSum.matches[i].teams[1].players[0].currentMmr);
    }
  }

  document.querySelector(".mmr-min-va").innerHTML = Math.min.apply(null, array);

  document.querySelector(".mmr-max-va").innerHTML = Math.max.apply(null, array);

  document.querySelector(".mmr-av-va").innerHTML =
    (Math.max.apply(null, array) + Math.min.apply(null, array)) / 2;
}

getDataVama();

//fingon

async function getDataFingon() {
  const resPtenSum = await fetch(urlFingonOne);
  const resPtenSumTwo = await fetch(urlFingonTwo);

  const dataPteNSum = await resPtenSum.json();
  const dataPteNSumTwo = await resPtenSumTwo.json();

  let array = [];

  for (let i = 0; i < dataPteNSum.matches.length; i++) {
    if (
      dataPteNSum.matches[i].teams[0].players[0].battleTag ==
        "KawerOrda#2648" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[0].players[0].race == "4"
    ) {
      array.push(dataPteNSum.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSum.matches[i].teams[1].players[0].battleTag ==
        "KawerOrda#2648" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[1].players[0].race == "4"
    ) {
      array.push(dataPteNSum.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumTwo.matches.length; i++) {
    if (
      dataPteNSumTwo.matches[i].teams[0].players[0].battleTag ==
        "KawerOrda#2648" &&
      dataPteNSumTwo.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[0].players[0].race == "4"
    ) {
      array.push(dataPteNSumTwo.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumTwo.matches[i].teams[1].players[0].battleTag ==
        "KawerOrda#2648" &&
      dataPteNSumTwo.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[1].players[0].race == "4"
    ) {
      array.push(dataPteNSumTwo.matches[i].teams[1].players[0].currentMmr);
    }
  }

  if (Math.min.apply(null, array) < 4000 && Math.min.apply(null, array) > 0) {
    document.querySelector(".mmr-min-fin").innerHTML = Math.min.apply(
      null,
      array
    );
  }

  if (Math.max.apply(null, array) < 4000 && Math.max.apply(null, array) > 0) {
    document.querySelector(".mmr-max-fin").innerHTML = Math.max.apply(
      null,
      array
    );
  }

  document.querySelector(".mmr-av-fin").innerHTML =
    (Math.max.apply(null, array) + Math.min.apply(null, array)) / 2;

  if (document.querySelector(".mmr-av-fin").innerHTML == "NaN") {
    document.querySelector(".mmr-av-fin").innerHTML = 0;
  }
}

getDataFingon();

//trident

async function getDataTrident() {
  const resPtenSum = await fetch(urlTridentOne);

  const dataPteNSum = await resPtenSum.json();

  let array = [];

  for (let i = 0; i < dataPteNSum.matches.length; i++) {
    if (
      dataPteNSum.matches[i].teams[0].players[0].battleTag == "tRid3nt#2910" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[0].players[0].race == "2"
    ) {
      array.push(dataPteNSum.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSum.matches[i].teams[1].players[0].battleTag == "tRid3nt#2910" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[1].players[0].race == "2"
    ) {
      array.push(dataPteNSum.matches[i].teams[1].players[0].currentMmr);
    }
  }

  if (Math.min.apply(null, array) < 4000 && Math.min.apply(null, array) > 0) {
    document.querySelector(".mmr-min-tr").innerHTML = Math.min.apply(
      null,
      array
    );
  }

  if (Math.max.apply(null, array) < 4000 && Math.max.apply(null, array) > 0) {
    document.querySelector(".mmr-max-tr").innerHTML = Math.max.apply(
      null,
      array
    );
  }

  document.querySelector(".mmr-av-tr").innerHTML =
    (Math.max.apply(null, array) + Math.min.apply(null, array)) / 2;

  if (document.querySelector(".mmr-av-tr").innerHTML == "NaN") {
    document.querySelector(".mmr-av-tr").innerHTML = 0;
  }
}

getDataTrident();

//krasik

async function getDataKrasik() {
  const resPtenSum = await fetch(urlKrasikOne);
  const resPtenSumTwo = await fetch(urlKrasikTwo);

  const dataPteNSum = await resPtenSum.json();
  const dataPteNSumTwo = await resPtenSumTwo.json();

  let array = [];

  for (let i = 0; i < dataPteNSum.matches.length; i++) {
    if (
      dataPteNSum.matches[i].teams[0].players[0].battleTag == "krasik#2848" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[0].players[0].race == "4"
    ) {
      array.push(dataPteNSum.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSum.matches[i].teams[1].players[0].battleTag == "krasik#2848" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[1].players[0].race == "4"
    ) {
      array.push(dataPteNSum.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumTwo.matches.length; i++) {
    if (
      dataPteNSumTwo.matches[i].teams[0].players[0].battleTag ==
        "krasik#2848" &&
      dataPteNSumTwo.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[0].players[0].race == "4"
    ) {
      array.push(dataPteNSumTwo.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumTwo.matches[i].teams[1].players[0].battleTag ==
        "krasik#2848" &&
      dataPteNSumTwo.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[1].players[0].race == "4"
    ) {
      array.push(dataPteNSum.matches[i].teams[1].players[0].currentMmr);
    }
  }

  if (Math.min.apply(null, array) < 4000 && Math.min.apply(null, array) > 0) {
    document.querySelector(".mmr-min-kr").innerHTML = Math.min.apply(
      null,
      array
    );
  }
  if (Math.max.apply(null, array) < 4000 && Math.max.apply(null, array) > 0) {
    document.querySelector(".mmr-max-kr").innerHTML = Math.max.apply(
      null,
      array
    );
  }
  document.querySelector(".mmr-av-kr").innerHTML =
    (Math.max.apply(null, array) + Math.min.apply(null, array)) / 2;
}

getDataKrasik();

//flamy4

async function getDataFlamy4() {
  const resPtenSum = await fetch(urlFlamy4One);

  const dataPteNSum = await resPtenSum.json();

  let array = [];

  for (let i = 0; i < dataPteNSum.matches.length; i++) {
    if (
      dataPteNSum.matches[i].teams[0].players[0].battleTag == "Flamy4#2811" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[0].players[0].race == "4"
    ) {
      array.push(dataPteNSum.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSum.matches[i].teams[1].players[0].battleTag == "Flamy4#2811" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[1].players[0].race == "4"
    ) {
      array.push(dataPteNSum.matches[i].teams[1].players[0].currentMmr);
    }
  }

  document.querySelector(".mmr-min-fl").innerHTML = Math.min.apply(null, array);

  document.querySelector(".mmr-max-fl").innerHTML = Math.max.apply(null, array);

  document.querySelector(".mmr-av-fl").innerHTML =
    (Math.max.apply(null, array) + Math.min.apply(null, array)) / 2;
}

getDataFlamy4();

//vama

async function getDataYolo() {
  const resPtenSum = await fetch(urlYoloOne);
  const resPtenSumTwo = await fetch(urlYoloTwo);

  const dataPteNSum = await resPtenSum.json();
  const dataPteNSumTwo = await resPtenSumTwo.json();

  let array = [];

  for (let i = 0; i < dataPteNSum.matches.length; i++) {
    if (
      dataPteNSum.matches[i].teams[0].players[0].battleTag ==
        "Yolostime#2753" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[0].players[0].race == "8"
    ) {
      array.push(dataPteNSum.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSum.matches[i].teams[1].players[0].battleTag ==
        "Yolostime#2753" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[1].players[0].race == "8"
    ) {
      array.push(dataPteNSum.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumTwo.matches.length; i++) {
    if (
      dataPteNSumTwo.matches[i].teams[0].players[0].battleTag ==
        "Yolostime#2753" &&
      dataPteNSumTwo.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[0].players[0].race == "8"
    ) {
      array.push(dataPteNSumTwo.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumTwo.matches[i].teams[1].players[0].battleTag ==
        "Yolostime#2753" &&
      dataPteNSumTwo.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[1].players[0].race == "8"
    ) {
      array.push(dataPteNSumTwo.matches[i].teams[1].players[0].currentMmr);
    }
  }

  document.querySelector(".mmr-min-yo").innerHTML = Math.min.apply(null, array);

  document.querySelector(".mmr-max-yo").innerHTML = Math.max.apply(null, array);

  document.querySelector(".mmr-av-yo").innerHTML =
    (Math.max.apply(null, array) + Math.min.apply(null, array)) / 2;
}

getDataYolo();

async function getDataShogun() {
  const resPtenSum = await fetch(urlShoOne);

  const dataPteNSum = await resPtenSum.json();

  let array = [];

  for (let i = 0; i < dataPteNSum.matches.length; i++) {
    if (
      dataPteNSum.matches[i].teams[0].players[0].battleTag == "Shogun#22192" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[0].players[0].race == "1"
    ) {
      array.push(dataPteNSum.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSum.matches[i].teams[1].players[0].battleTag == "Shogun#22192" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[1].players[0].race == "1"
    ) {
      array.push(dataPteNSum.matches[i].teams[1].players[0].currentMmr);
    }
  }

  document.querySelector(".mmr-min-sho").innerHTML = Math.min.apply(
    null,
    array
  );

  document.querySelector(".mmr-max-sho").innerHTML = Math.max.apply(
    null,
    array
  );

  document.querySelector(".mmr-av-sho").innerHTML =
    (Math.max.apply(null, array) + Math.min.apply(null, array)) / 2;
}

getDataShogun();

async function getDataTom() {
  const resPtenSum = await fetch(urlTomOne);
  const resPtenSumTwo = await fetch(urlTomTwo);
  const resPtenSumThree = await fetch(urlTomThree);
  const resPtenSumFour = await fetch(urlTomFour);

  const dataPteNSum = await resPtenSum.json();
  const dataPteNSumTwo = await resPtenSumTwo.json();
  const dataPteNSumThree = await resPtenSumThree.json();
  const dataPteNSumFour = await resPtenSumFour.json();

  let array = [];

  for (let i = 0; i < dataPteNSum.matches.length; i++) {
    if (
      dataPteNSum.matches[i].teams[0].players[0].battleTag ==
        "TomPoncho#21719" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[0].players[0].race == "4"
    ) {
      array.push(dataPteNSum.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSum.matches[i].teams[1].players[0].battleTag ==
        "TomPoncho#21719" &&
      dataPteNSum.matches[i].gameMode == "1" &&
      dataPteNSum.matches[i].teams[1].players[0].race == "4"
    ) {
      array.push(dataPteNSum.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumTwo.matches.length; i++) {
    if (
      dataPteNSumTwo.matches[i].teams[0].players[0].battleTag ==
        "TomPoncho#21719" &&
      dataPteNSumTwo.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[0].players[0].race == "4"
    ) {
      array.push(dataPteNSumTwo.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumTwo.matches[i].teams[1].players[0].battleTag ==
        "TomPoncho#21719" &&
      dataPteNSumTwo.matches[i].gameMode == "1" &&
      dataPteNSumTwo.matches[i].teams[1].players[0].race == "4"
    ) {
      array.push(dataPteNSumTwo.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumThree.matches.length; i++) {
    if (
      dataPteNSumThree.matches[i].teams[0].players[0].battleTag ==
        "TomPoncho#21719" &&
      dataPteNSumThree.matches[i].gameMode == "1" &&
      dataPteNSumThree.matches[i].teams[0].players[0].race == "4"
    ) {
      array.push(dataPteNSumThree.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumThree.matches[i].teams[1].players[0].battleTag ==
        "TomPoncho#21719" &&
      dataPteNSumThree.matches[i].gameMode == "1" &&
      dataPteNSumThree.matches[i].teams[1].players[0].race == "4"
    ) {
      array.push(dataPteNSumThree.matches[i].teams[1].players[0].currentMmr);
    }
  }

  for (let i = 0; i < dataPteNSumFour.matches.length; i++) {
    if (
      dataPteNSumFour.matches[i].teams[0].players[0].battleTag ==
        "TomPoncho#21719" &&
      dataPteNSumFour.matches[i].gameMode == "1" &&
      dataPteNSumFour.matches[i].teams[0].players[0].race == "4"
    ) {
      array.push(dataPteNSumFour.matches[i].teams[0].players[0].currentMmr);
    }
    if (
      dataPteNSumFour.matches[i].teams[1].players[0].battleTag ==
        "TomPoncho#21719" &&
      dataPteNSumFour.matches[i].gameMode == "1" &&
      dataPteNSumFour.matches[i].teams[1].players[0].race == "4"
    ) {
      array.push(dataPteNSumFour.matches[i].teams[1].players[0].currentMmr);
    }
  }

  document.querySelector(".mmr-min-tp").innerHTML = Math.min.apply(null, array);

  document.querySelector(".mmr-max-tp").innerHTML = Math.max.apply(null, array);

  document.querySelector(".mmr-av-tp").innerHTML =
    (Math.max.apply(null, array) + Math.min.apply(null, array)) / 2;
}

getDataTom();
