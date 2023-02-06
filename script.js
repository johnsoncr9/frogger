// Grabbing the map and setting borders
const map = document.querySelector("#grid");
const boardWidth = 425;
const boardHeight = 400;

// Grabbing header
const froggerStatus = document.querySelector("#froggerStatus");
const froggerLocation = document.querySelector("#froggerLocation");

// Setting the axis variables
let xAxis = 0;
let yAxis = 0;

// Setting the movement variables
let xDirection = 25;
let yDirection = 25;

// Setting up grass zones
let grassWidth = 425;
let grassHeight = 50;

class Grass {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + grassWidth, yAxis];
    this.topLeft = [xAxis, yAxis + grassHeight];
    this.topRight = [xAxis + grassWidth, yAxis + grassHeight];
  }
}

const grassZones = [new Grass(0, 0), new Grass(0, 175), new Grass(0, 225)];

// Function to add grass
const addGrass = () => {
  for (let i = 0; i < grassZones.length; i++) {
    const grass = document.createElement("div");
    grass.classList.add("grass");
    grass.style.left = grassZones[i].bottomLeft[0] + "px";
    grass.style.bottom = grassZones[i].bottomLeft[1] + "px";
    map.appendChild(grass);
  }
};

addGrass();

// Setting up road
let roadWidth = 425;
let roadHeight = 50;

class Roads {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + roadWidth, yAxis];
    this.topLeft = [xAxis, yAxis + roadHeight];
    this.topRight = [xAxis + roadWidth, yAxis + roadHeight];
  }
}

const roads = [new Roads(0, 50), new Roads(0, 125)];

// Function to add roads
const addRoads = () => {
  for (let i = 0; i < roads.length; i++) {
    const road = document.createElement("div");
    road.classList.add("road");
    road.style.left = roads[i].bottomLeft[0] + "px";
    road.style.bottom = roads[i].bottomLeft[1] + "px";
    map.appendChild(road);
  }
};

addRoads();

// Setting up medianGrass
const medianGrassWidth = 425;
const medianGrassHeight = 25;

// class
class MedianGrass {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + medianGrassWidth, yAxis];
    this.topLeft = [xAxis, yAxis + medianGrassHeight];
    this.topRight = [xAxis + medianGrassWidth, yAxis + medianGrassHeight];
  }
}

const medianGrassZones = [new MedianGrass(0, 100), new MedianGrass(0, 375)];

// Function to add MedianGrass
const addMedianGrass = () => {
  for (let i = 0; i < medianGrassZones.length; i++) {
    const medianGrass = document.createElement("div");
    medianGrass.classList.add("medianGrass");
    medianGrass.style.left = medianGrassZones[i].bottomLeft[0] + "px";
    medianGrass.style.bottom = medianGrassZones[i].bottomLeft[1] + "px";
    map.appendChild(medianGrass);
  }
};

addMedianGrass();

// add water
const waterWidth = 425;
const waterHeight = 400;

class Water {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + waterWidth, yAxis];
    this.topLeft = [xAxis, yAxis + waterHeight];
    this.topRight = [xAxis + waterWidth, yAxis + waterHeight];
  }
}

const waterZones = [new Water(0, 275), new Water(0, 325)];

const addWaterZones = () => {
  for (let i = 0; i < waterZones.length; i++) {
    const water = document.createElement("div");
    water.classList.add("water");
    water.style.left = waterZones[i].bottomLeft[0] + "px";
    water.style.bottom = waterZones[i].bottomLeft[1] + "px";
    map.appendChild(water);
  }
};

addWaterZones();

// CARS
const carWidth = 50;
const carHeight = 25;

// Car One
const carOneStartingPosition = [50, 50];
let carOneXPositionMovement = 25;
let carOneYPositionMovement = 25;
let carOneCurrentPosition = carOneStartingPosition;
const carOne = document.createElement("div");
const carOneWidth = 50;
const carOneHeight = 25;

// Draw carOne
const drawCarOne = () => {
  carOne.style.left = carOneCurrentPosition[0] + "px";
  carOne.style.bottom = carOneCurrentPosition[1] + "px";
};

const createCarOne = () => {
  carOne.classList.add("cars");
  drawCarOne();
  map.appendChild(carOne);
};

createCarOne();

// Move carOne
const movecarOneRight = () => {
  carOneCurrentPosition[0] += carOneXPositionMovement;
  drawCarOne();
};
const movecarOneLeft = () => {
  carOneCurrentPosition[0] -= carOneXPositionMovement;
  drawCarOne();
};

createCarOne();

const moveCarOne = () => {
  if (carOneCurrentPosition[0] < boardWidth) {
    movecarOneRight();
    checkForCarOneCollision();
  }
  if (carOneCurrentPosition[0] === boardWidth) {
    carOneCurrentPosition = [-100, 50];
    drawCarOne();
  }
};

//carOne Collision detection

const checkForCarOneCollision = () => {
  if (
    currentPosition[0] >= carOneCurrentPosition[0] &&
    currentPosition[0] < carOneCurrentPosition[0] + carOneWidth &&
    currentPosition[1] + froggerHeight >=
      carOneCurrentPosition[1] + carOneHeight &&
    currentPosition[1] < carOneCurrentPosition[1] + carOneHeight
  ) {
    froggerStatus.innerHTML = "Frogger was hit by Car One!";
    sendFroggerHome();
  }
};

// Car Two
const carTwoStartingPosition = [250, 50];
let carTwoXPositionMovement = 25;
let carTwoYPositionMovement = 25;
let carTwoCurrentPosition = carTwoStartingPosition;
const carTwo = document.createElement("div");
const carTwoWidth = 50;
const carTwoHeight = 25;

// Draw carTwo
const drawCarTwo = () => {
  carTwo.style.left = carTwoCurrentPosition[0] + "px";
  carTwo.style.bottom = carTwoCurrentPosition[1] + "px";
};

const createCarTwo = () => {
  carTwo.classList.add("cars");
  drawCarTwo();
  map.appendChild(carTwo);
};

createCarTwo();

// Move carTwo
const movecarTwoRight = () => {
  carTwoCurrentPosition[0] += carTwoXPositionMovement;
  drawCarTwo();
};
const movecarTwoLeft = () => {
  carTwoCurrentPosition[0] -= carTwoXPositionMovement;
  drawCarTwo();
};

const moveCarTwo = () => {
  if (carTwoCurrentPosition[0] < boardWidth) {
    movecarTwoRight();
    checkForCarTwoCollision();
  }
  if (carTwoCurrentPosition[0] === boardWidth) {
    carTwoCurrentPosition = [-25, 50];
    drawCarTwo();
  }
};

//carTwo Collision detection

const checkForCarTwoCollision = () => {
  if (
    currentPosition[0] >= carTwoCurrentPosition[0] &&
    currentPosition[0] < carTwoCurrentPosition[0] + carTwoWidth &&
    currentPosition[1] + froggerHeight >=
      carTwoCurrentPosition[1] + carTwoHeight &&
    currentPosition[1] < carTwoCurrentPosition[1] + carTwoHeight
  ) {
    froggerStatus.innerHTML = "Frogger was hit by Car Two!";
    sendFroggerHome();
  }
};

// Car Three
const carThreeStartingPosition = [125, 75];
let carThreeXPositionMovement = 25;
let carThreeYPositionMovement = 25;
let carThreeCurrentPosition = carThreeStartingPosition;
const carThree = document.createElement("div");
const carThreeWidth = 50;
const carThreeHeight = 25;

// Draw carThree
const drawCarThree = () => {
  carThree.style.left = carThreeCurrentPosition[0] + "px";
  carThree.style.bottom = carThreeCurrentPosition[1] + "px";
};

const createCarThree = () => {
  carThree.classList.add("cars");
  drawCarThree();
  map.appendChild(carThree);
};

createCarThree();

// Move carThree
const movecarThreeRight = () => {
  carThreeCurrentPosition[0] += carThreeXPositionMovement;
  drawCarThree();
};
const movecarThreeLeft = () => {
  carThreeCurrentPosition[0] -= carThreeXPositionMovement;
  drawCarThree();
};

const moveCarThree = () => {
  if (carThreeCurrentPosition[0] < boardWidth) {
    movecarThreeRight();
    checkForCarThreeCollision();
  }
  if (carThreeCurrentPosition[0] === boardWidth) {
    carThreeCurrentPosition = [0, 75];
    drawCarThree();
  }
};

//carThree Collision detection
const checkForCarThreeCollision = () => {
  if (
    currentPosition[0] >= carThreeCurrentPosition[0] &&
    currentPosition[0] < carThreeCurrentPosition[0] + carThreeWidth &&
    currentPosition[1] + froggerHeight >=
      carThreeCurrentPosition[1] + carThreeHeight &&
    currentPosition[1] < carThreeCurrentPosition[1] + carThreeHeight
  ) {
    froggerStatus.innerHTML = "Frogger was hit by Car Three!";
    sendFroggerHome();
  }
};

// Car Four
const carFourStartingPosition = [275, 75];
let carFourXPositionMovement = 25;
let carFourYPositionMovement = 25;
let carFourCurrentPosition = carFourStartingPosition;
const carFour = document.createElement("div");
const carFourWidth = 50;
const carFourHeight = 25;

// Draw carFour
const drawCarFour = () => {
  carFour.style.left = carFourCurrentPosition[0] + "px";
  carFour.style.bottom = carFourCurrentPosition[1] + "px";
};

const createCarFour = () => {
  carFour.classList.add("cars");
  drawCarFour();
  map.appendChild(carFour);
};

createCarFour();

// Move carFour
const movecarFourRight = () => {
  carFourCurrentPosition[0] += carFourXPositionMovement;
  drawCarFour();
};
const movecarFourLeft = () => {
  carFourCurrentPosition[0] -= carFourXPositionMovement;
  drawCarFour();
};

const moveCarFour = () => {
  if (carFourCurrentPosition[0] < boardWidth) {
    movecarFourRight();
    checkForCarFourCollision();
  }
  if (carFourCurrentPosition[0] === boardWidth) {
    carFourCurrentPosition = [-50, 75];
    drawCarFour();
  }
};

//carFour Collision detection
const checkForCarFourCollision = () => {
  if (
    currentPosition[0] >= carFourCurrentPosition[0] &&
    currentPosition[0] < carFourCurrentPosition[0] + carFourWidth &&
    currentPosition[1] + froggerHeight >=
      carFourCurrentPosition[1] + carFourHeight &&
    currentPosition[1] < carFourCurrentPosition[1] + carFourHeight
  ) {
    froggerStatus.innerHTML = "Frogger was hit by Car Four!";
    sendFroggerHome();
  }
};

// Car Five
const carFiveStartingPosition = [150, 125];
let carFiveXPositionMovement = 25;
let carFiveYPositionMovement = 25;
let carFiveCurrentPosition = carFiveStartingPosition;
const carFive = document.createElement("div");
const carFiveWidth = 50;
const carFiveHeight = 25;

// Draw carFive
const drawCarFive = () => {
  carFive.style.left = carFiveCurrentPosition[0] + "px";
  carFive.style.bottom = carFiveCurrentPosition[1] + "px";
};

const createCarFive = () => {
  carFive.classList.add("cars");
  drawCarFive();
  map.appendChild(carFive);
};

createCarFive();

// Move carFive
const movecarFiveRight = () => {
  carFiveCurrentPosition[0] += carFiveXPositionMovement;
  drawCarFive();
};
const movecarFiveLeft = () => {
  carFiveCurrentPosition[0] -= carFiveXPositionMovement;
  drawCarFive();
};

const moveCarFive = () => {
  if (carFiveCurrentPosition[0] >= 0 - carFiveWidth) {
    movecarFiveLeft();
    checkForCarFiveCollision();
  }
  if (carFiveCurrentPosition[0] === -50) {
    carFiveCurrentPosition = [450, 125];
    drawCarFive();
  }
};

// Car Five Collision detection
const checkForCarFiveCollision = () => {
  if (
    currentPosition[0] >= carFiveCurrentPosition[0] &&
    currentPosition[0] < carFiveCurrentPosition[0] + carFiveWidth &&
    currentPosition[1] + froggerHeight >=
      carFiveCurrentPosition[1] + carFiveHeight &&
    currentPosition[1] < carFiveCurrentPosition[1] + carFiveHeight
  ) {
    froggerStatus.innerHTML = "Frogger was hit by Car Five!";
    sendFroggerHome();
  }
};

// Car Six
const carSixStartingPosition = [250, 125];
let carSixXPositionMovement = 25;
let carSixYPositionMovement = 25;
let carSixCurrentPosition = carSixStartingPosition;
const carSix = document.createElement("div");
const carSixWidth = 50;
const carSixHeight = 25;

// Draw carSix
const drawCarSix = () => {
  carSix.style.left = carSixCurrentPosition[0] + "px";
  carSix.style.bottom = carSixCurrentPosition[1] + "px";
};

const createCarSix = () => {
  carSix.classList.add("cars");
  drawCarSix();
  map.appendChild(carSix);
};

createCarSix();

// Move carSix
const movecarSixRight = () => {
  carSixCurrentPosition[0] += carSixXPositionMovement;
  drawCarSix();
};
const movecarSixLeft = () => {
  carSixCurrentPosition[0] -= carSixXPositionMovement;
  drawCarSix();
};

const moveCarSix = () => {
  if (carSixCurrentPosition[0] > 0 - carSixWidth) {
    movecarSixLeft();
    checkForCarSixCollision();
  }
  if (carSixCurrentPosition[0] === -50) {
    carSixCurrentPosition = [450, 125];
    drawCarSix();
  }
};

//Car Six Collision detection
const checkForCarSixCollision = () => {
  if (
    currentPosition[0] >= carSixCurrentPosition[0] &&
    currentPosition[0] < carSixCurrentPosition[0] + carSixWidth &&
    currentPosition[1] + froggerHeight >=
      carSixCurrentPosition[1] + carSixHeight &&
    currentPosition[1] < carSixCurrentPosition[1] + carSixHeight
  ) {
    froggerStatus.innerHTML = "Frogger was hit by Car Six!";
    sendFroggerHome();
  }
};

// Car Seven
const carSevenStartingPosition = [50, 150];
let carSevenXPositionMovement = 25;
let carSevenYPositionMovement = 25;
let carSevenCurrentPosition = carSevenStartingPosition;
const carSeven = document.createElement("div");
const carSevenWidth = 50;
const carSevenHeight = 25;

// Draw carSeven
const drawCarSeven = () => {
  carSeven.style.left = carSevenCurrentPosition[0] + "px";
  carSeven.style.bottom = carSevenCurrentPosition[1] + "px";
};

const createCarSeven = () => {
  carSeven.classList.add("cars");
  drawCarSeven();
  map.appendChild(carSeven);
};

createCarSeven();

// Move carSeven
const movecarSevenRight = () => {
  carSevenCurrentPosition[0] += carSevenXPositionMovement;
  drawCarSeven();
};
const movecarSevenLeft = () => {
  carSevenCurrentPosition[0] -= carSevenXPositionMovement;
  drawCarSeven();
};

const moveCarSeven = () => {
  if (carSevenCurrentPosition[0] > 0 - carSevenWidth) {
    movecarSevenLeft();
    checkForCarSevenCollision();
  }
  if (carSevenCurrentPosition[0] === -50) {
    carSevenCurrentPosition = [450, 150];
    drawCarSeven();
  }
};

//carSeven Collision detection

const checkForCarSevenCollision = () => {
  if (
    currentPosition[0] >= carSevenCurrentPosition[0] &&
    currentPosition[0] < carSevenCurrentPosition[0] + carSevenWidth &&
    currentPosition[1] + froggerHeight >=
      carSevenCurrentPosition[1] + carSevenHeight &&
    currentPosition[1] < carSevenCurrentPosition[1] + carSevenHeight
  ) {
    froggerStatus.innerHTML = "Frogger was hit by Car Seven!";
    sendFroggerHome();
  }
};

// Car Eight
const carEightStartingPosition = [175, 150];
let carEightXPositionMovement = 25;
let carEightYPositionMovement = 25;
let carEightCurrentPosition = carEightStartingPosition;
const carEight = document.createElement("div");
const carEightWidth = 50;
const carEightHeight = 25;

// Draw carEight
const drawCarEight = () => {
  carEight.style.left = carEightCurrentPosition[0] + "px";
  carEight.style.bottom = carEightCurrentPosition[1] + "px";
};

const createCarEight = () => {
  carEight.classList.add("cars");
  drawCarEight();
  map.appendChild(carEight);
};

createCarEight();

// Move carEight
const movecarEightRight = () => {
  carEightCurrentPosition[0] += carEightXPositionMovement;
  drawCarEight();
};
const movecarEightLeft = () => {
  carEightCurrentPosition[0] -= carEightXPositionMovement;
  drawCarEight();
};

const moveCarEight = () => {
  if (carEightCurrentPosition[0] >= 0 - carEightWidth) {
    movecarEightLeft();
    checkForCarEightCollision();
  }
  if (carEightCurrentPosition[0] === -50) {
    carEightCurrentPosition = [425, 150];
    drawCarEight();
  }
};

//Car Eight Collision detection
const checkForCarEightCollision = () => {
  if (
    currentPosition[0] >= carEightCurrentPosition[0] &&
    currentPosition[0] < carEightCurrentPosition[0] + carEightWidth &&
    currentPosition[1] + froggerHeight >=
      carEightCurrentPosition[1] + carEightHeight &&
    currentPosition[1] < carEightCurrentPosition[1] + carEightHeight
  ) {
    froggerStatus.innerHTML = "Frogger was hit by Car Eight!";
    sendFroggerHome();
  }
};

const moveCars = () => {
  moveCarOne();
  moveCarTwo();
  moveCarThree();
  moveCarFour();
  moveCarFive();
  moveCarSix();
  moveCarSeven();
  moveCarEight();
};

const checkForAllCarsCollision = () => {
  checkForCarOneCollision();
  checkForCarTwoCollision();
  checkForCarThreeCollision();
  checkForCarFourCollision();
  checkForCarFiveCollision();
  checkForCarSixCollision();
  checkForCarSevenCollision();
  checkForCarEightCollision();
};

// Create Frogger
// Setting Frogger (User) Start Position
let froggerWidth = 25;
let froggerHeight = 25;
const frogger = document.createElement("div");
const userStart = [200, 0];
let currentPosition = userStart;

// Draw function to set up starting point
const drawFrogger = () => {
  frogger.style.left = currentPosition[0] + "px";
  frogger.style.bottom = currentPosition[1] + "px";
};

// Function to send frogger back to Start Position
const sendFroggerHome = () => {
  frogger.classList.remove("frogger");
  map.removeChild(frogger);
  currentPosition = [200, 0];
  createFrogger();
};

// Function to create and add frogger div
const createFrogger = () => {
  frogger.classList.add("frogger");
  map.appendChild(frogger);
  drawFrogger();
};

//Running Create Frogger Function
createFrogger();

// Frogger movement
const moveFrogger = (e) => {
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 25;
        drawFrogger();
        froggerLocation.innerHTML = currentPosition;
        checkForAllCarsCollision();
        checkForLawnMowerCollision();
        checkForInWaterorOnLog();
        winCheck(winningZone1, currentPosition);
        winCheck(winningZone2, currentPosition);
        winCheck(winningZone3, currentPosition);
      }
      break;
    case "ArrowRight":
      if (currentPosition[0] < boardWidth - froggerWidth) {
        currentPosition[0] += 25;
        drawFrogger();
        froggerLocation.innerHTML = currentPosition;
        checkForAllCarsCollision();
        checkForLawnMowerCollision();
        checkForInWaterorOnLog();
        winCheck(winningZone1, currentPosition);
        winCheck(winningZone2, currentPosition);
        winCheck(winningZone3, currentPosition);
      }
      break;
    case "ArrowUp":
      if (currentPosition[1] < boardHeight - froggerHeight) {
        currentPosition[1] += 25;
        drawFrogger();
        froggerLocation.innerHTML = currentPosition;
        checkForAllCarsCollision();
        checkForLawnMowerCollision();
        checkForInWaterorOnLog();
        winCheck(winningZone1, currentPosition);
        winCheck(winningZone2, currentPosition);
        winCheck(winningZone3, currentPosition);
      }
      break;
    case "ArrowDown":
      if (currentPosition[1] > 0) {
        currentPosition[1] -= 25;
        drawFrogger();
        froggerLocation.innerHTML = currentPosition;
        checkForAllCarsCollision();
        checkForLawnMowerCollision();
        checkForInWaterorOnLog();
        winCheck(winningZone1, currentPosition);
        winCheck(winningZone2, currentPosition);
        winCheck(winningZone3, currentPosition);
      }
      break;
  }
};

// Adding move frogger function to an addEventListener
document.addEventListener("keydown", moveFrogger);

//Winning Zones
// Setting up winningzone
let winningZoneWidth = 25;
let winningZoneHeight = 25;

// class
class WinZone {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + winningZoneWidth, yAxis];
    this.topLeft = [xAxis, yAxis + winningZoneHeight];
    this.topRight = [xAxis + winningZoneWidth, yAxis + winningZoneHeight];
  }
}

const winningZones = [
  new WinZone(75, 375),
  new WinZone(200, 375),
  new WinZone(325, 375),
];

const winningZone1 = winningZones[0].bottomLeft;
const winningZone2 = winningZones[1].bottomLeft;
const winningZone3 = winningZones[2].bottomLeft;

// Function to add winning zones
const addWinningSquares = () => {
  for (let i = 0; i < winningZones.length; i++) {
    const winningZone = document.createElement("div");
    winningZone.classList.add("winningZone");
    winningZone.style.left = winningZones[i].bottomLeft[0] + "px";
    winningZone.style.bottom = winningZones[i].bottomLeft[1] + "px";
    map.appendChild(winningZone);
  }
};

// running addWinningSquares
addWinningSquares();

// check for win
const winCheck = (a, b) => {
  if (a === b) return true;
  if (a === null || b === null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  alert("Frogger made it!");
  sendFroggerHome();
};

// LawnMower Enemy
// add LawnMower
const lawnMowerWidth = 25;
const lawnMowerHeight = 25;
const lawnMowerStartingPosition = [25, 225];
let lawnMowerXPositionMovement = 25;
let lawnMowerYPositionMovement = 25;
const lawnMowerCurrentPosition = lawnMowerStartingPosition;
const lawnMower = document.createElement("div");

// Draw LanwMower
const drawLawnMower = () => {
  lawnMower.style.left = lawnMowerCurrentPosition[0] + "px";
  lawnMower.style.bottom = lawnMowerCurrentPosition[1] + "px";
};

const createLawnMower = () => {
  lawnMower.classList.add("lawnMower");
  drawLawnMower();
  map.appendChild(lawnMower);
};

// Move LawnMower
const moveLawnMowerRight = () => {
  lawnMowerCurrentPosition[0] += lawnMowerXPositionMovement;
  drawLawnMower();
};
const moveLawnMowerLeft = () => {
  lawnMowerCurrentPosition[0] -= lawnMowerXPositionMovement;
  drawLawnMower();
};
const moveLawnMowerUp = () => {
  lawnMowerCurrentPosition[1] += lawnMowerXPositionMovement;
  drawLawnMower();
};
const moveLawnMowerDown = () => {
  lawnMowerCurrentPosition[1] -= lawnMowerXPositionMovement;
  drawLawnMower();
};

createLawnMower();

const moveLawnMower = () => {
  let lawnMowerDirection;
  if (
    lawnMowerCurrentPosition[0] <= boardWidth - lawnMowerHeight &&
    lawnMowerCurrentPosition[1] === 225
  ) {
    lawnMowerDirection = "right";
    checkForLawnMowerCollision();
    moveLawnMowerRight();
  }
  if (
    lawnMowerCurrentPosition[0] === boardWidth &&
    lawnMowerCurrentPosition[1] === 225
  ) {
    lawnMowerDirection = "down";
    checkForLawnMowerCollision();
    moveLawnMowerDown();
  }
  if (lawnMowerCurrentPosition[0] > 0 && lawnMowerCurrentPosition[1] === 200) {
    lawnMowerDirection = "left";
    checkForLawnMowerCollision();
    moveLawnMowerLeft();
  }

  if (
    lawnMowerCurrentPosition[0] === 0 &&
    lawnMowerCurrentPosition[1] === 200 &&
    lawnMowerDirection === "left"
  ) {
    lawnMowerDirection = "up";
    checkForLawnMowerCollision();
    moveLawnMowerUp();
  }
};

//LawnMower Collision detection
const checkForLawnMowerCollision = () => {
  if (
    currentPosition[0] >= lawnMowerCurrentPosition[0] &&
    currentPosition[0] < lawnMowerCurrentPosition[0] + lawnMowerWidth &&
    currentPosition[1] + froggerHeight >=
      lawnMowerCurrentPosition[1] + lawnMowerHeight &&
    currentPosition[1] < lawnMowerCurrentPosition[1] + lawnMowerHeight
  ) {
    froggerStatus.innerHTML = "Frogger was hit by a Lawn Mower!";
    sendFroggerHome();
  }
};

// Logs
// Log One
const logOneStartingPosition = [100, 275];
let logOneXPositionMovement = 50;
let logOneYPositionMovement = 275;
let logOneCurrentPosition = logOneStartingPosition;
const logOne = document.createElement("div");
const logOneWidth = 75;
const logOneHeight = 25;
let onLogOne;
let onLog;

// Draw logOne
const drawlogOne = () => {
  logOne.style.left = logOneCurrentPosition[0] + "px";
  logOne.style.bottom = logOneCurrentPosition[1] + "px";
};

const createlogOne = () => {
  logOne.classList.add("logs");
  drawlogOne();
  map.appendChild(logOne);
};

createlogOne();

// Move logOne
const movelogOneRight = () => {
  logOneCurrentPosition[0] += logOneXPositionMovement;
  drawlogOne();
};
const movelogOneLeft = () => {
  logOneCurrentPosition[0] -= logOneXPositionMovement;
  drawlogOne();
};

createlogOne();

const movelogOne = () => {
  let logOneDirection;
  if (logOneCurrentPosition[0] < boardWidth) {
    logOneDirection = "right";
    movelogOneRight();
    checkForInWaterorOnLog();
  }
  if (logOneCurrentPosition[0] > boardWidth) {
    logOneDirection = "right";
    logOneCurrentPosition = [-100, 275];
    drawlogOne();
  }
};

//logOne Collision detection

const checkForlogOneCollision = () => {
  if (
    currentPosition[0] >= logOneCurrentPosition[0] &&
    currentPosition[0] < logOneCurrentPosition[0] + logOneWidth &&
    currentPosition[1] + froggerHeight >=
      logOneCurrentPosition[1] + logOneHeight &&
    currentPosition[1] < logOneCurrentPosition[1] + logOneHeight
  ) {
    froggerStatus.innerHTML = "Frogger is on log One!";
    console.log("Frogger is on log One!");
    return (onLogOne = true);
  } else {
    return (onLogOne = false);
  }
};

const checkForInWaterorOnLogOne = () => {
  if (275 <= currentPosition[1] && currentPosition[1] <= 350) {
    checkForlogOneCollision();
    if (onLogOne === true) {
      froggerStatus.innerHTML = "On log!";
      onLogOne = true;
    } else {
      onLogOne === false;
    }
  }
};

// Log Two
const logTwoStartingPosition = [150, 300];
let logTwoXPositionMovement = 50;
let logTwoYPositionMovement = 275;
let logTwoCurrentPosition = logTwoStartingPosition;
const logTwo = document.createElement("div");
const logTwoWidth = 75;
const logTwoHeight = 25;
let onLogTwo;

// Draw logTwo
const drawlogTwo = () => {
  logTwo.style.left = logTwoCurrentPosition[0] + "px";
  logTwo.style.bottom = logTwoCurrentPosition[1] + "px";
};

const createlogTwo = () => {
  logTwo.classList.add("logs");
  drawlogTwo();
  map.appendChild(logTwo);
};

createlogTwo();

// Move logTwo
const movelogTwoRight = () => {
  logTwoCurrentPosition[0] += logTwoXPositionMovement;
  drawlogTwo();
};
const movelogTwoLeft = () => {
  logTwoCurrentPosition[0] -= logTwoXPositionMovement;
  drawlogTwo();
};

createlogTwo();

const movelogTwo = () => {
  let logTwoDirection;
  if (logTwoCurrentPosition[0] > 0 - logTwoWidth) {
    logTwoDirection = "left";
    movelogTwoLeft();
    checkForInWaterorOnLogTwo();
  }
  if (logTwoCurrentPosition[0] === -100) {
    logTwoDirection = "right";
    logTwoCurrentPosition = [450, 300];
    drawlogTwo();
  }
};

//logTwo Collision detection

const checkForlogTwoCollision = () => {
  if (
    currentPosition[0] >= logTwoCurrentPosition[0] &&
    currentPosition[0] < logTwoCurrentPosition[0] + logTwoWidth &&
    currentPosition[1] + froggerHeight >=
      logTwoCurrentPosition[1] + logTwoHeight &&
    currentPosition[1] < logTwoCurrentPosition[1] + logTwoHeight
  ) {
    froggerStatus.innerHTML = "Frogger is on log Two!";
    console.log("Frogger is on log Two!");
    return (onLogTwo = true);
  } else {
    return (onLogTwo = false);
  }
};

const checkForInWaterorOnLogTwo = () => {
  if (275 <= currentPosition[1] && currentPosition[1] <= 350) {
    checkForlogTwoCollision();
    if (onLogTwo === true) {
      froggerStatus.innerHTML = "On log!";
      onLogTwo = true;
    } else {
      onLogTwo === false;
    }
  }
};

// Log Three
const logThreeStartingPosition = [100, 325];
let logThreeXPositionMovement = 50;
let logThreeYPositionMovement = 275;
let logThreeCurrentPosition = logThreeStartingPosition;
const logThree = document.createElement("div");
const logThreeWidth = 75;
const logThreeHeight = 25;
let onLogThree;
// Draw logThree
const drawlogThree = () => {
  logThree.style.left = logThreeCurrentPosition[0] + "px";
  logThree.style.bottom = logThreeCurrentPosition[1] + "px";
};

const createlogThree = () => {
  logThree.classList.add("logs");
  drawlogThree();
  map.appendChild(logThree);
};

createlogThree();

// Move logThree
const movelogThreeRight = () => {
  logThreeCurrentPosition[0] += logThreeXPositionMovement;
  drawlogThree();
};
const movelogThreeLeft = () => {
  logThreeCurrentPosition[0] -= logThreeXPositionMovement;
  drawlogThree();
};

createlogThree();

const movelogThree = () => {
  let logThreeDirection;
  if (logThreeCurrentPosition[0] < boardWidth) {
    logThreeDirection = "right";
    movelogThreeRight();
    checkForInWaterorOnLogThree();
  }
  if (logThreeCurrentPosition[0] > boardWidth) {
    logThreeDirection = "right";
    logThreeCurrentPosition = [-100, 325];
    drawlogThree();
  }
};

//logThree Collision detection

const checkForlogThreeCollision = () => {
  if (
    currentPosition[0] >= logThreeCurrentPosition[0] &&
    currentPosition[0] < logThreeCurrentPosition[0] + logThreeWidth &&
    currentPosition[1] + froggerHeight >=
      logThreeCurrentPosition[1] + logThreeHeight &&
    currentPosition[1] < logThreeCurrentPosition[1] + logThreeHeight
  ) {
    froggerStatus.innerHTML = "Frogger is on log Three!";
    console.log("Frogger is on log Three!");
    return (onLogThree = true);
  } else {
    return (onLogThree = false);
  }
};

const checkForInWaterorOnLogThree = () => {
  if (275 <= currentPosition[1] && currentPosition[1] <= 350) {
    checkForlogThreeCollision();
    if (onLogThree === true) {
      froggerStatus.innerHTML = "On log!";
      onLogThree = true;
    } else {
      onLogThree === false;
    }
  }
};

// Log Four
const logFourStartingPosition = [150, 350];
let logFourXPositionMovement = 50;
let logFourYPositionMovement = 275;
let logFourCurrentPosition = logFourStartingPosition;
const logFour = document.createElement("div");
const logFourWidth = 75;
const logFourHeight = 25;
let onLogFour;

// Draw logFour
const drawlogFour = () => {
  logFour.style.left = logFourCurrentPosition[0] + "px";
  logFour.style.bottom = logFourCurrentPosition[1] + "px";
};

const createlogFour = () => {
  logFour.classList.add("logs");
  drawlogFour();
  map.appendChild(logFour);
};

createlogFour();

// Move logFour
const movelogFourRight = () => {
  logFourCurrentPosition[0] += logFourXPositionMovement;
  drawlogFour();
};
const movelogFourLeft = () => {
  logFourCurrentPosition[0] -= logFourXPositionMovement;
  drawlogFour();
};

createlogFour();

const movelogFour = () => {
  let logFourDirection;
  if (logFourCurrentPosition[0] > 0 - logFourWidth) {
    logFourDirection = "left";
    movelogFourLeft();
    checkForInWaterorOnLogFour();
  }
  if (logFourCurrentPosition[0] === -50) {
    logFourDirection = "left";
    logFourCurrentPosition = [450, 350];
    drawlogFour();
  }
};

//logFour Collision detection

const checkForlogFourCollision = () => {
  if (
    currentPosition[0] >= logFourCurrentPosition[0] &&
    currentPosition[0] < logFourCurrentPosition[0] + logFourWidth &&
    currentPosition[1] + froggerHeight >=
      logFourCurrentPosition[1] + logFourHeight &&
    currentPosition[1] < logFourCurrentPosition[1] + logFourHeight
  ) {
    froggerStatus.innerHTML = "Frogger is on log Four!";
    console.log("Frogger is on log Four!");
    return (onLogFour = true);
  } else {
    return (onLogFour = false);
  }
};

const checkForInWaterorOnLogFour = () => {
  if (275 <= currentPosition[1] && currentPosition[1] <= 350) {
    checkForlogFourCollision();
    if (onLogFour === true) {
      froggerStatus.innerHTML = "On log!";
      onLogFour = true;
    } else {
      onLogFour === false;
    }
    if (
      275 <= currentPosition[1] &&
      currentPosition[1] <= 350 &&
      onLogFour === false
    ) {
      onLogFour = false;
      //sendFroggerHome();
    }
  }
};
// Logs
//log Five
const logFiveStartingPosition = [325, 275];
let logFiveXPositionMovement = 50;
let logFiveYPositionMovement = 275;
let logFiveCurrentPosition = logFiveStartingPosition;
const logFive = document.createElement("div");
const logFiveWidth = 75;
const logFiveHeight = 25;
let onLogFive;

// Draw logFive
const drawlogFive = () => {
  logFive.style.left = logFiveCurrentPosition[0] + "px";
  logFive.style.bottom = logFiveCurrentPosition[1] + "px";
};

const createlogFive = () => {
  logFive.classList.add("logs");
  drawlogFive();
  map.appendChild(logFive);
};

createlogFive();

// Move logFive
const movelogFiveRight = () => {
  logFiveCurrentPosition[0] += logFiveXPositionMovement;
  drawlogFive();
};
const movelogFiveLeft = () => {
  logFiveCurrentPosition[0] -= logFiveXPositionMovement;
  drawlogFive();
};

createlogFive();

const movelogFive = () => {
  let logFiveDirection;
  if (logFiveCurrentPosition[0] < boardWidth) {
    logFiveDirection = "right";
    movelogFiveRight();
    checkForInWaterorOnLogFive();
  }
  if (logFiveCurrentPosition[0] >= boardWidth) {
    logFiveDirection = "right";
    logFiveCurrentPosition = [-100, 275];
    drawlogFive();
  }
};

//logFive Collision detection

const checkForlogFiveCollision = () => {
  if (
    currentPosition[0] >= logFiveCurrentPosition[0] &&
    currentPosition[0] < logFiveCurrentPosition[0] + logFiveWidth &&
    currentPosition[1] + froggerHeight >=
      logFiveCurrentPosition[1] + logFiveHeight &&
    currentPosition[1] < logFiveCurrentPosition[1] + logFiveHeight
  ) {
    froggerStatus.innerHTML = "Frogger is on log Five!";
    console.log("Frogger is on log Five!");
    return (onLogFive = true);
  } else {
    return (onLogFive = false);
  }
};

const checkForInWaterorOnLogFive = () => {
  if (275 <= currentPosition[1] && currentPosition[1] <= 350) {
    checkForlogFiveCollision();
    if (onLogFive === true) {
      froggerStatus.innerHTML = "On log!";
      onLogFive = true;
    } else {
      onLogFive === false;
    }
  }
};

// Log Six
const logSixStartingPosition = [250, 300];
let logSixXPositionMovement = 50;
let logSixYPositionMovement = 275;
let logSixCurrentPosition = logSixStartingPosition;
const logSix = document.createElement("div");
const logSixWidth = 75;
const logSixHeight = 25;
let onLogSix;

// Draw logSix
const drawlogSix = () => {
  logSix.style.left = logSixCurrentPosition[0] + "px";
  logSix.style.bottom = logSixCurrentPosition[1] + "px";
};

const createlogSix = () => {
  logSix.classList.add("logs");
  drawlogSix();
  map.appendChild(logSix);
};

createlogSix();

// Move logSix
const movelogSixRight = () => {
  logSixCurrentPosition[0] += logSixXPositionMovement;
  drawlogSix();
};
const movelogSixLeft = () => {
  logSixCurrentPosition[0] -= logSixXPositionMovement;
  drawlogSix();
};

createlogSix();

const movelogSix = () => {
  let logSixDirection;
  if (logSixCurrentPosition[0] > 0 - logSixWidth) {
    logSixDirection = "left";
    movelogSixLeft();
    checkForInWaterorOnLogSix();
  }
  if (logSixCurrentPosition[0] === -100) {
    logSixDirection = "left";
    logSixCurrentPosition = [450, 300];
    drawlogSix();
  }
};

//logSix Collision detection

const checkForlogSixCollision = () => {
  if (
    currentPosition[0] >= logSixCurrentPosition[0] &&
    currentPosition[0] < logSixCurrentPosition[0] + logSixWidth &&
    currentPosition[1] + froggerHeight >=
      logSixCurrentPosition[1] + logSixHeight &&
    currentPosition[1] < logSixCurrentPosition[1] + logSixHeight
  ) {
    froggerStatus.innerHTML = "Frogger is on log Six!";
    console.log("Frogger is on log Six!");
    return (onLogSix = true);
  } else {
    return (onLogSix = false);
  }
};

const checkForInWaterorOnLogSix = () => {
  if (275 <= currentPosition[1] && currentPosition[1] <= 350) {
    checkForlogSixCollision();
    if (onLogSix === true) {
      froggerStatus.innerHTML = "On log!";
      onLogSix = true;
    } else {
      onLogSix === false;
    }
  }
};

// Log Seven
const logSevenStartingPosition = [200, 325];
let logSevenXPositionMovement = 50;
let logSevenYPositionMovement = 275;
let logSevenCurrentPosition = logSevenStartingPosition;
const logSeven = document.createElement("div");
const logSevenWidth = 75;
const logSevenHeight = 25;
let onLogSeven;

// Draw logSeven
const drawlogSeven = () => {
  logSeven.style.left = logSevenCurrentPosition[0] + "px";
  logSeven.style.bottom = logSevenCurrentPosition[1] + "px";
};

const createlogSeven = () => {
  logSeven.classList.add("logs");
  drawlogSeven();
  map.appendChild(logSeven);
};

createlogSeven();

// Move logSeven
const movelogSevenRight = () => {
  logSevenCurrentPosition[0] += logSevenXPositionMovement;
  drawlogSeven();
};
const movelogSevenLeft = () => {
  logSevenCurrentPosition[0] -= logSevenXPositionMovement;
  drawlogSeven();
};

createlogSeven();

const movelogSeven = () => {
  let logSevenDirection;
  if (logSevenCurrentPosition[0] < boardWidth) {
    logSevenDirection = "right";
    movelogSevenRight();
    checkForInWaterorOnLogSeven();
  }
  if (logSevenCurrentPosition[0] > boardWidth) {
    logSevenDirection = "right";
    logSevenCurrentPosition = [-100, 325];
    drawlogSeven();
  }
};

//logSeven Collision detection

const checkForlogSevenCollision = () => {
  if (
    currentPosition[0] >= logSevenCurrentPosition[0] &&
    currentPosition[0] < logSevenCurrentPosition[0] + logSevenWidth &&
    currentPosition[1] + froggerHeight >=
      logSevenCurrentPosition[1] + logSevenHeight &&
    currentPosition[1] < logSevenCurrentPosition[1] + logSevenHeight
  ) {
    froggerStatus.innerHTML = "Frogger is on log Seven!";
    console.log("Frogger is on log Seven!");
    return (onLogSeven = true);
  } else {
    return (onLogSeven = false);
  }
};

const checkForInWaterorOnLogSeven = () => {
  if (275 <= currentPosition[1] && currentPosition[1] <= 350) {
    checkForlogSevenCollision();
    if (onLogSeven === true) {
      froggerStatus.innerHTML = "On log!";
      onLogSeven = true;
    } else {
      onLogSeven === false;
    }
  }
};

// Log Eight
const logEightStartingPosition = [250, 350];
let logEightXPositionMovement = 50;
let logEightYPositionMovement = 275;
let logEightCurrentPosition = logEightStartingPosition;
const logEight = document.createElement("div");
const logEightWidth = 75;
const logEightHeight = 25;
let onLogEight;

// Draw logEight
const drawlogEight = () => {
  logEight.style.left = logEightCurrentPosition[0] + "px";
  logEight.style.bottom = logEightCurrentPosition[1] + "px";
};

const createlogEight = () => {
  logEight.classList.add("logs");
  drawlogEight();
  map.appendChild(logEight);
};

createlogEight();

// Move logEight
const movelogEightRight = () => {
  logEightCurrentPosition[0] += logEightXPositionMovement;
  drawlogEight();
};
const movelogEightLeft = () => {
  logEightCurrentPosition[0] -= logEightXPositionMovement;
  drawlogEight();
};

createlogEight();

const movelogEight = () => {
  let logEightDirection;
  if (logEightCurrentPosition[0] > 0 - logEightWidth) {
    logEightDirection = "left";
    movelogEightLeft();
    checkForInWaterorOnLogEight();
  }
  if (logEightCurrentPosition[0] === -100) {
    logEightDirection = "right";
    logEightCurrentPosition = [450, 350];
    drawlogEight();
  }
};

//logEight Collision detection
const checkForlogEightCollision = () => {
  if (
    currentPosition[0] >= logEightCurrentPosition[0] &&
    currentPosition[0] < logEightCurrentPosition[0] + logEightWidth &&
    currentPosition[1] + froggerHeight >=
      logEightCurrentPosition[1] + logEightHeight &&
    currentPosition[1] < logEightCurrentPosition[1] + logEightHeight
  ) {
    froggerStatus.innerHTML = "Frogger is on log Eight!";
    console.log("Frogger is on log Eight!");
    return (onLogEight = true);
  } else {
    return (onLogEight = false);
  }
};

const checkForInWaterorOnLogEight = () => {
  if (275 <= currentPosition[1] && currentPosition[1] <= 350) {
    checkForlogEightCollision();
    if (onLogEight === true) {
      froggerStatus.innerHTML = "On log!";
      onLogEight = true;
    } else {
      onLogEight === false;
    }
  }
};

const moveLogs = () => {
  movelogOne();
  movelogTwo();
  movelogThree();
  movelogFour();
  movelogFive();
  movelogSix();
  movelogSeven();
  movelogEight();
};

const checkForInWaterorOnLog = () => {
  checkForInWaterorOnLogOne();
  checkForInWaterorOnLogTwo();
  checkForInWaterorOnLogThree();
  checkForInWaterorOnLogFour();
  checkForInWaterorOnLogFive();
  checkForInWaterorOnLogSix();
  checkForInWaterorOnLogSeven();
  checkForInWaterorOnLogEight();

  if (
    275 <= currentPosition[1] &&
    currentPosition[1] <= 350 &&
    onLogOne === false &&
    onLogTwo === false &&
    onLogThree === false &&
    onLogFour === false &&
    onLogFive === false &&
    onLogSix === false &&
    onLogSeven === false &&
    onLogEight === false
  ) {
    console.log("Frogger is not on a log!!");
    froggerStatus.innerHTML = "Frogger Drowned!";
    sendFroggerHome();
  }
};

setInterval(moveCars, 500);
lawnMowerTimer = setInterval(moveLawnMower, 500);
logsTimeer = setInterval(moveLogs, 1000);
