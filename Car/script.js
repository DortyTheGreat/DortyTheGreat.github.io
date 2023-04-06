'use strict';

let playerX;
let playerY;
let playerDirY;
let playerSpeed;

let barrelX;

let carWidth = 100;
let carHeight = 60;

let barrelWidth = 50;
let barrelHeight = 50;

function createPlayer() {
    let player = document.createElement("DIV");
    player.classList.add("car");
    document.body.appendChild(player);

    playerX = 40;
    playerY = 0;
    playerDirY = 0;
    playerSpeed = 5;

    return player;
}

function createBarrel(startX, startY) {
    let barrel = document.createElement("DIV");
    barrel.classList.add('barrel');
    document.body.appendChild(barrel);

    barrel.style.left = startX + "px";
    barrel.style.top = startY + "px";

    barrelX = startX;
    return barrel;
}

function collisionDetection(barrel, car) {
    let ax = parseInt(car.style.left);
    let ay = parseInt(car.style.top);
    let ax1 = parseInt(car.style.left) + carWidth;
    let ay1 = parseInt(car.style.top) + carHeight;


    let bx = parseInt(barrel.style.left);
    let by = parseInt(barrel.style.top);
    let bx1 = parseInt(barrel.style.left) + barrelWidth;
    let by1 = parseInt(barrel.style.top) + barrelHeight;

    return ( ay > by1 || ay1 < by || ax1 < bx || ax > bx1 );
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") playerDirY = -1;
    if (e.key === "ArrowDown") playerDirY = 1;
});

document.addEventListener("keyup", function (e) {
    playerDirY = 0;
});

function game() {
    playerY += playerDirY * playerSpeed;
    if (playerY < 0) {
        playerY = 0;
    }
    if (playerY > 350) {
        playerY = 350;
    }

    barrelX -= 5;

    if (barrelX < -20) {
        barrelX = 550;
        barrel.style.top = Math.floor(Math.random() * 350) + "px";
    }

    player.style.top = playerY + "px";
    player.style.left = playerX + "px";

    barrel.style.left = barrelX + "px";

    if (!collisionDetection(player, barrel)) {
        player.style.backgroundColor = "red";
    } else {
        player.style.backgroundColor = "gray";
    }

    requestAnimationFrame(game);
}
let player = createPlayer();
let barrel = createBarrel(550, Math.floor(Math.random() * 350));
game();
