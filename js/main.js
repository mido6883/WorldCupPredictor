const next = document.getElementById("next");
const back = document.getElementById("back");
const groups = document.querySelectorAll(".group");
const indicator = document.getElementById("indicator");
const letters = ["A","B","C","D","E","F","G","H"];
let counter = 0;
let arr;
let first = 1;
const winners = [];
const runnerUps = [];
const roundOf16 = document.getElementById("round-of-16");
const fixtures = document.querySelectorAll(".fixture div");
const next1 = document.getElementById("next1");
let roundOf16Winners;
const quarterFinals = document.getElementById("quarter-finals");
const semiFinals = document.getElementById("semi-finals");
const thirdPlace = document.getElementById("third-place");
const final = document.getElementById("final");

window.onload = function () {
    arr = Array.from(document.querySelectorAll(".group div"));
    changer();
}
but.onclick = function () {
    window.location.reload();
}

next.onclick = function() {
    if(first != -1 || counter === 7) {
        if(counter === 7) {
            nextMove();
            roundOf16.classList.add("active");
        } else {
            false;
        }
    } else {
   groups[counter].classList.remove("active");
   counter++;
   indicator.textContent = indicator.textContent.slice(0,-1) + letters[counter]; 
   groups[counter].classList.add("active");
   first = parseInt(groups[counter].getAttribute("data-state"));
   if(groups[counter].getAttribute("data-state") == -1) {
    next.classList.add("active");
   } else {
    next.classList.remove("active");
   }

   back.classList.add("active");
}
}


back.onclick = function() {
    if(counter === 0) {
      false;
    } else {
   groups[counter].classList.remove("active");
   counter--;
   indicator.textContent = indicator.textContent.slice(0,-1) + letters[counter]; 
   groups[counter].classList.add("active");
   first = parseInt(groups[counter].getAttribute("data-state"));
   if(groups[counter].getAttribute("data-state") == -1) {
    next.classList.add("active");
   } else {
    next.classList.remove("active");
   }
   }
   if(counter === 0) {
    back.classList.remove("active");
   } else {
    back.classList.add("active");
   }
}





function changer () {
    arr.forEach(el => {
        el.addEventListener("click", function () {
            if(first == 1  && !this.classList.contains("first")) {
                el.classList.add("first");
                first = 0;
                el.parentElement.setAttribute("data-state", first);
            }  else if (first == 0 && this.classList.contains("first")) {
                el.classList.remove("first");
                first = 1;
                el.parentElement.setAttribute("data-state", first);
            }  else if (first == 0 && !this.classList.contains("first")) {
                el.classList.add("second");
                first = -1;
                next.classList.add("active");
                el.parentElement.setAttribute("data-state", first);
            } else if (first == -1 && this.classList.contains("second")) {
                el.classList.remove("second");
                first = 0;
                next.classList.remove("active");
                el.parentElement.setAttribute("data-state", first);
            }
        })
})
}


function nextMove () {
    for(i = 0; i < groups.length; i++) {
        for(k = 0; k < groups[i].children.length; k++) {
            if(groups[i].children[k].classList.contains("first")) {
                winners.push(groups[i].children[k]);}}}
    for(i = 0; i < groups.length; i++) {
        for(k = 0; k < groups[i].children.length; k++) {
            if(groups[i].children[k].classList.contains("second")) {
                runnerUps.push(groups[i].children[k]);
            }}}
    roundOf16.children[1].children[0].children[0].children[0].src = winners[0].children[0].src;
    roundOf16.children[1].children[0].children[0].children[1].textContent = winners[0].children[1].textContent;
    roundOf16.children[1].children[0].children[2].children[0].src = runnerUps[1].children[0].src;
    roundOf16.children[1].children[0].children[2].children[1].textContent = runnerUps[1].children[1].textContent;
    roundOf16.children[1].children[1].children[0].children[0].src = winners[2].children[0].src;
    roundOf16.children[1].children[1].children[0].children[1].textContent = winners[2].children[1].textContent;
    roundOf16.children[1].children[1].children[2].children[0].src = runnerUps[3].children[0].src;
    roundOf16.children[1].children[1].children[2].children[1].textContent = runnerUps[3].children[1].textContent;
    roundOf16.children[1].children[2].children[0].children[0].src = winners[4].children[0].src;
    roundOf16.children[1].children[2].children[0].children[1].textContent = winners[4].children[1].textContent;
    roundOf16.children[1].children[2].children[2].children[0].src = runnerUps[5].children[0].src;
    roundOf16.children[1].children[2].children[2].children[1].textContent = runnerUps[5].children[1].textContent;
    roundOf16.children[1].children[3].children[0].children[0].src = winners[6].children[0].src;
    roundOf16.children[1].children[3].children[0].children[1].textContent = winners[6].children[1].textContent;
    roundOf16.children[1].children[3].children[2].children[0].src = runnerUps[7].children[0].src;
    roundOf16.children[1].children[3].children[2].children[1].textContent = runnerUps[7].children[1].textContent;
    roundOf16.children[1].children[4].children[0].children[0].src = winners[1].children[0].src;
    roundOf16.children[1].children[4].children[0].children[1].textContent = winners[1].children[1].textContent;
    roundOf16.children[1].children[4].children[2].children[0].src = runnerUps[0].children[0].src;
    roundOf16.children[1].children[4].children[2].children[1].textContent = runnerUps[0].children[1].textContent;
    roundOf16.children[1].children[5].children[0].children[0].src = winners[3].children[0].src;
    roundOf16.children[1].children[5].children[0].children[1].textContent = winners[3].children[1].textContent;
    roundOf16.children[1].children[5].children[2].children[0].src = runnerUps[2].children[0].src;
    roundOf16.children[1].children[5].children[2].children[1].textContent = runnerUps[2].children[1].textContent;
    roundOf16.children[1].children[6].children[0].children[0].src = winners[5].children[0].src;
    roundOf16.children[1].children[6].children[0].children[1].textContent = winners[5].children[1].textContent;
    roundOf16.children[1].children[6].children[2].children[0].src = runnerUps[4].children[0].src;
    roundOf16.children[1].children[6].children[2].children[1].textContent = runnerUps[4].children[1].textContent;
    roundOf16.children[1].children[7].children[0].children[0].src = winners[7].children[0].src;
    roundOf16.children[1].children[7].children[0].children[1].textContent = winners[7].children[1].textContent;
    roundOf16.children[1].children[7].children[2].children[0].src = runnerUps[6].children[0].src;
    roundOf16.children[1].children[7].children[2].children[1].textContent = runnerUps[6].children[1].textContent;
}


fixtures.forEach(ele => {
    ele.addEventListener("click", function() {
        let arr1 = Array.from(this.parentElement.children);
        arr1.splice(1,1);
        for(i = 0; i < arr1.length; i++) {
            arr1[i].classList.remove("winner");
            arr1[i].classList.remove("loser");
        }
        this.classList.add("winner");
        for(i = 0; i < arr1.length; i++) {
            if(arr1[i].classList.contains("winner")) {
                false;
            } else {
                arr1[i].classList.add("loser");
            }
        }
        checker();
    }
)})


function checker() {
    let arr = Array.from(document.querySelectorAll(".fixture div"));
    roundOf16Winners = arr.filter(ele => ele.classList.contains("winner"));
    if(roundOf16Winners.length === 8) {
        next1.classList.add("active");
    } else if (roundOf16Winners.length === 12) {
        next2.classList.add("active");
    } else if(roundOf16Winners.length === 14) {
        next3.classList.add("active");
    } else if(roundOf16Winners.length === 15) {
        next4.classList.add("active");
    } else if (roundOf16Winners.length === 16) {
        next5.classList.add("active");
    }
}  

next1.onclick = function () {
    if(roundOf16Winners.length < 8) {
        false;
    } else {
      quarterFinals.children[1].children[0].children[0].children[0].src = roundOf16Winners[0].children[0].src;
      quarterFinals.children[1].children[0].children[0].children[1].textContent = roundOf16Winners[0].children[1].textContent;
      quarterFinals.children[1].children[0].children[2].children[0].src = roundOf16Winners[1].children[0].src;
      quarterFinals.children[1].children[0].children[2].children[1].textContent = roundOf16Winners[1].children[1].textContent;
      quarterFinals.children[1].children[1].children[0].children[0].src = roundOf16Winners[2].children[0].src;
      quarterFinals.children[1].children[1].children[0].children[1].textContent = roundOf16Winners[2].children[1].textContent;
      quarterFinals.children[1].children[1].children[2].children[0].src = roundOf16Winners[3].children[0].src;
      quarterFinals.children[1].children[1].children[2].children[1].textContent = roundOf16Winners[3].children[1].textContent;
      quarterFinals.children[1].children[2].children[0].children[0].src = roundOf16Winners[4].children[0].src;
      quarterFinals.children[1].children[2].children[0].children[1].textContent = roundOf16Winners[4].children[1].textContent;
      quarterFinals.children[1].children[2].children[2].children[0].src = roundOf16Winners[5].children[0].src;
      quarterFinals.children[1].children[2].children[2].children[1].textContent = roundOf16Winners[5].children[1].textContent;
      quarterFinals.children[1].children[3].children[0].children[0].src = roundOf16Winners[6].children[0].src;
      quarterFinals.children[1].children[3].children[0].children[1].textContent = roundOf16Winners[6].children[1].textContent;
      quarterFinals.children[1].children[3].children[2].children[0].src = roundOf16Winners[7].children[0].src;
      quarterFinals.children[1].children[3].children[2].children[1].textContent = roundOf16Winners[7].children[1].textContent;
      quarterFinals.classList.add("active");
    }
}

next2.onclick = function () {
    if(roundOf16Winners.length < 12) {
        false;
    } else {
        semiFinals.children[1].children[0].children[0].children[0].src = roundOf16Winners[8].children[0].src;
        semiFinals.children[1].children[0].children[0].children[1].textContent = roundOf16Winners[8].children[1].textContent;
        semiFinals.children[1].children[0].children[2].children[0].src = roundOf16Winners[9].children[0].src;
        semiFinals.children[1].children[0].children[2].children[1].textContent = roundOf16Winners[9].children[1].textContent;
        semiFinals.children[1].children[1].children[0].children[0].src = roundOf16Winners[10].children[0].src; 
        semiFinals.children[1].children[1].children[0].children[1].textContent = roundOf16Winners[10].children[1].textContent;
        semiFinals.children[1].children[1].children[2].children[0].src = roundOf16Winners[11].children[0].src;
        semiFinals.children[1].children[1].children[2].children[1].textContent = roundOf16Winners[11].children[1].textContent;
        semiFinals.classList.add("active");
    }
}

next3.onclick = function () {
    if(roundOf16Winners.length < 14) {
        false;
    } else {
      let loser = document.querySelectorAll(".semi-finals .loser");
      final.children[1].children[0].children[0].children[0].src = roundOf16Winners[12].children[0].src;
      final.children[1].children[0].children[0].children[1].textContent = roundOf16Winners[12].children[1].textContent;
      final.children[1].children[0].children[2].children[0].src = roundOf16Winners[13].children[0].src;
      final.children[1].children[0].children[2].children[1].textContent = roundOf16Winners[13].children[1].textContent;
      thirdPlace.children[1].children[0].children[0].children[0].src = loser[0].children[0].src;
      thirdPlace.children[1].children[0].children[0].children[1].textContent = loser[0].children[1].textContent;
      thirdPlace.children[1].children[0].children[2].children[0].src = loser[1].children[0].src;
      thirdPlace.children[1].children[0].children[2].children[1].textContent = loser[1].children[1].textContent;
      thirdPlace.classList.add("active");
}
}

next4.onclick = function () {
    if(roundOf16Winners.length < 15) {
        false;
    } else {
        final.classList.add("active");
    }
}

next5.onclick = function () {
    if(roundOf16Winners.length < 16) {
        false;
    } else {
        console.log(`1 - ${roundOf16Winners[roundOf16Winners.length - 1].children[1].textContent}`);
        console.log(`2 - ${document.querySelector(".final .loser").children[1].textContent}`);
        console.log(`3 - ${roundOf16Winners[roundOf16Winners.length - 2].children[1].textContent}`);
        console.log(`4 - ${document.querySelector(".third-place .loser").children[1].textContent}`);
    }
}


String.prototype.sd = function () {
    let x = this.slice(1);
    return x;
}