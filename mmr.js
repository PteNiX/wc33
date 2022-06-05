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

let s = "11";
let y = "11";

let urlPten = `https://website-backend.w3champions.com/api/players/PteN%2321803/game-mode-stats?gateWay=20&season=${s}`;

let urlillisori = `https://website-backend.w3champions.com/api/players/Illisori%232201/game-mode-stats?gateWay=20&season=${s}`;

let urlDraniq = `https://website-backend.w3champions.com/api/players/draniqBLR%232779/game-mode-stats?gateWay=20&season=${s}`;

let urlVama = `https://website-backend.w3champions.com/api/players/vama%2321920/game-mode-stats?gateWay=20&season=${s}`;

let urlFingon = `https://website-backend.w3champions.com/api/players/KawerOrda%232648/game-mode-stats?gateWay=20&season=${s}`;

let urlTrident = `https://website-backend.w3champions.com/api/players/tRid3nt%232910/game-mode-stats?gateWay=20&season=${s}`;

let urlFlamy4 = `https://website-backend.w3champions.com/api/players/Flamy4%232811/game-mode-stats?gateWay=20&season=${y}`;

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

  const seas = () => {
    for (let i = 0; i < dataFl.length; i++) {
      if (dataFl[i].gameMode == "1" && dataFl[i].race == "4") {
        document.querySelector(".mmrFla").innerHTML = dataFl[i].mmr;
      }
    }
    /*     if (document.querySelector(".mmrFla").innerHTML == "0") {
      y = y - 1;
      seas();
    } */
  };

  seas();

  console.log(y);
}

getData();
