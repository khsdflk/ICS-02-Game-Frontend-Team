import { getGlobal } from "../globals.js";
import { canMove } from "./canMove.js"

let speed = getGlobal("speed");

let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let length = getGlobal("mapLength");
let width = getGlobal("mapWidth");


// Add event listeners for key presses
document.addEventListener("keydown", function(event) {

  if (event.code === "KeyA") {
    leftPressed = true;
  } else if (event.code === "KeyD") {
    rightPressed = true;
  } else if (event.code === "KeyW") {
    upPressed = true;
  } else if (event.code === "KeyS") {
    downPressed = true;
  }

});

document.addEventListener("keyup", function(event) {

  if (event.code === "KeyA") {
    leftPressed = false;
  } else if (event.code === "KeyD") {
    rightPressed = false;
  } else if (event.code === "KeyW") {
    upPressed = false;
  } else if (event.code === "KeyS") {
    downPressed = false;
  }

});

export function keyPress() {

  let playerposition = getGlobal('playerposition');

  if (leftPressed && canMove('left')) {
    playerposition.x -= speed;
  }
  if (rightPressed && canMove('right')) {
    playerposition.x += speed;
  }
  if (upPressed && canMove('up')) {
    playerposition.y -= speed;
  }
  if (downPressed && canMove('down')) {
    playerposition.y += speed;
  }

  // Limit the movement of the sprite within the map
  if (playerposition.x <= 0) {
    playerposition.x = 0;
  }
  if (playerposition.y <= 0) {
    playerposition.y = 0;
  }
  if (playerposition.x >= width) {
    playerposition.x = width;
  }
  if (playerposition.y >= length) {
    playerposition.y = length;
  }
}
