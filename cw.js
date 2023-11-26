let nwc3lTotal = document.querySelectorAll(".nwc3l-total");
let nwc3lTotalM = document.querySelectorAll(".nwc3l-totalM");

let nwc3lTotalEasy = new Array(nwc3lTotal.length);
let nwc3lTotalEasyM = new Array(nwc3lTotalM.length);

//into innerhtml
for (let i = nwc3lTotal.length; i--; ) {
    nwc3lTotalEasy[i] = nwc3lTotal[i].innerHTML;
}

for (let i = nwc3lTotalM.length; i--; ) {
    nwc3lTotalEasyM[i] = nwc3lTotalM[i].innerHTML;
}

//sum total games
let allEasy = [];

for (let i = 0; i < nwc3lTotal.length; i++) {
    allEasy.push(
        parseInt(nwc3lTotalEasy[i], 10) + parseInt(nwc3lTotalEasyM[i], 10)
    );
}

// return

for (let j = 0; j < allEasy.length; j++) {
    document.querySelectorAll(".all-games")[j].innerHTML = allEasy[j];
}

//nwc3l winrate

let nwc3lWinMap = document.querySelectorAll(".nwc3l-win-map");
let nwc3lLoseMap = document.querySelectorAll(".nwc3l-lose-map");

let nwc3lWinMapEasy = new Array(nwc3lWinMap.length);
let nwc3lLoseMapEasy = new Array(nwc3lLoseMap.length);

//into innerhtml
for (let i = nwc3lWinMap.length; i--; ) {
    nwc3lWinMapEasy[i] = nwc3lWinMap[i].innerHTML;
}

for (let i = nwc3lLoseMap.length; i--; ) {
    nwc3lLoseMapEasy[i] = nwc3lLoseMap[i].innerHTML;
}

//sum

let sumNwc3lMaps = [];

for (let i = 0; i < nwc3lWinMap.length; i++) {
    sumNwc3lMaps.push(
        parseInt(nwc3lWinMapEasy[i], 10) + parseInt(nwc3lLoseMapEasy[i], 10)
    );
}

// return

for (let k = 0; k < allEasy.length; k++) {
    if (sumNwc3lMaps[k] != 0) {
        document.querySelectorAll(".nwc3l-winrate")[k].innerHTML =
            Math.round((nwc3lWinMapEasy[k] / sumNwc3lMaps[k]) * 100) + "%";
    } else {
        document.querySelectorAll(".nwc3l-winrate")[k].innerHTML = 0 + "%";
    }
}

//master winrate

let masterWinMap = document.querySelectorAll(".master-win-map");
let masterLoseMap = document.querySelectorAll(".master-lose-map");

let masterWinMapEasy = new Array(masterWinMap.length);
let masterLoseMapEasy = new Array(masterLoseMap.length);

//into innerhtml
for (let i = masterWinMap.length; i--; ) {
    masterWinMapEasy[i] = masterWinMap[i].innerHTML;
}

for (let i = masterLoseMap.length; i--; ) {
    masterLoseMapEasy[i] = masterLoseMap[i].innerHTML;
}

//sum

let sumMasterMaps = [];

for (let i = 0; i < masterWinMap.length; i++) {
    sumMasterMaps.push(
        parseInt(masterWinMapEasy[i], 10) + parseInt(masterLoseMapEasy[i], 10)
    );
}

// return

for (let k = 0; k < allEasy.length; k++) {
    if (sumMasterMaps[k] != 0) {
        document.querySelectorAll(".master-winrate")[k].innerHTML =
            Math.round((masterWinMapEasy[k] / sumMasterMaps[k]) * 100) + "%";
    } else {
        document.querySelectorAll(".master-winrate")[k].innerHTML = 0 + "%";
    }
}

//Total winrate

let totalWinMap = [];
let totalLoseMap = [];
let totalMap = [];

for (let i = 0; i < masterWinMap.length; i++) {
    totalWinMap.push(
        parseInt(masterWinMapEasy[i], 10) + parseInt(nwc3lWinMapEasy[i], 10)
    );
    totalLoseMap.push(
        parseInt(masterLoseMapEasy[i], 10) + parseInt(nwc3lLoseMapEasy[i], 10)
    );
    totalMap.push(parseInt(totalWinMap[i], 10) + parseInt(totalLoseMap[i], 10));
}

//Total maps
for (let j = 0; j < allEasy.length; j++) {
    document.querySelectorAll(".all-win-map")[j].innerHTML = totalWinMap[j];
}

for (let j = 0; j < allEasy.length; j++) {
    document.querySelectorAll(".all-lose-map")[j].innerHTML = totalLoseMap[j];
}

// return

for (let k = 0; k < totalWinMap.length; k++) {
    if (totalMap[k] != 0) {
        document.querySelectorAll(".total-winrate")[k].innerHTML =
            Math.round((totalWinMap[k] / totalMap[k]) * 100) + "%";
    } else {
        document.querySelectorAll(".total-winrate")[k].innerHTML = 0 + "%";
    }
}

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
