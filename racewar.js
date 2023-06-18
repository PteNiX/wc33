let orc_list = document.querySelectorAll(".game-score-orc");
let elf_list = document.querySelectorAll(".game-score-elf");

let orc_array = new Array(orc_list.length);
let elf_array = new Array(elf_list.length);

//to innerHTML
for (let i = orc_array.length; i--; ) {
    orc_array[i] = orc_list[i].innerHTML;
    elf_array[i] = elf_list[i].innerHTML;
}

console.log(orc_array, elf_array);
for (let i = orc_array.length; i--; ) {
    if (orc_array[i] == 2) {
        document
            .querySelectorAll(".game-racewars-orc")
            [i].classList.add("green-color");
        document
            .querySelectorAll(".game-score-orc")
            [i].classList.add("green-color");

        if (elf_array[i] == 0 || elf_array[i] == 1) {
            document
                .querySelectorAll(".game-racewars-elf")
                [i].classList.add("red-color");
            document
                .querySelectorAll(".game-score-elf")
                [i].classList.add("red-color");
        }
    }

    if (elf_array[i] == 2) {
        document
            .querySelectorAll(".game-racewars-elf")
            [i].classList.add("green-color");
        document
            .querySelectorAll(".game-score-elf")
            [i].classList.add("green-color");

        if (orc_array[i] == 0 || orc_array[i] == 1) {
            document
                .querySelectorAll(".game-racewars-orc")
                [i].classList.add("red-color");
            document
                .querySelectorAll(".game-score-orc")
                [i].classList.add("red-color");
        }
    }
}
// to points

for (let i = orc_array.length; i--; ) {
    if (orc_array[i] == 0 && elf_array[i] == 2) {
        elf_array[i] = 3;
    }
    if (elf_array[i] == 0 && orc_array[i] == 2) {
        orc_array[i] = 3;
    }
}

let totalScoreOrc = orc_array.reduce((a, b) => +a + +b);
let totalScoreElf = elf_array.reduce((a, b) => +a + +b);
console.log(totalScoreOrc, totalScoreElf);

document.querySelector(".total-score-orc").innerHTML = totalScoreOrc;
document.querySelector(".total-score-elf").innerHTML = totalScoreElf;
