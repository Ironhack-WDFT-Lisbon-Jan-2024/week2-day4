class Game {
  constructor() {
    // Get all Game Screens.
    // gameScreen and gameEndScreen are initially not displayed.
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-end");

    // I am going to create a player in the future. For this moment of the code-along, I'll leave it to null.
    this.player = null;

    // Style for the Game Board
    this.height = 600;
    this.width = 500;

    // Obstacles
    this.obstacles = [];

    // Score
    this.score = 0;

    // Lives
    this.lives = 3;

    // Variable to Check if the Game is Over
    this.gameIsOver = false;
  }

  start() {
    //Sets the height and width of the game screen.
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    //Hides the start screen.
    this.startScreen.style.display = "none";

    //Shows the game screen.
    this.gameScreen.style.display = "block";

    //Starts the game loop
    this.gameLoop();
  }

  gameLoop() {
    if (this.gameIsOver) {
      return;
    }

    this.update();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  update() {
    let score = document.getElementById("score");
    let lives = document.getElementById("lives");

    score.innerHTML = this.score;
    lives.innerHTML = this.lives;
  }
}