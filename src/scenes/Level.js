
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// backgroundContainer
		const backgroundContainer = this.add.container(0, 0);

		// gameBackground
		const gameBackground = this.add.image(540, 960, "game-background");
		backgroundContainer.add(gameBackground);

		// diceRollContainer
		const diceRollContainer = this.add.container(0, 0);

		// diceBackground
		const diceBackground = this.add.image(540, 1750, "dice-background");
		diceBackground.scaleX = 0.5;
		diceBackground.scaleY = 0.5;
		diceRollContainer.add(diceBackground);

		// dice
		const dice = this.add.sprite(540, 1750, "diceValues", 0);
		dice.scaleX = 0.7;
		dice.scaleY = 0.7;
		diceRollContainer.add(dice);

		// gameBoardPrefab
		const gameBoardPrefab = new GameBoard(this, 540, 906);
		this.add.existing(gameBoardPrefab);
		gameBoardPrefab.scaleX = 1;
		gameBoardPrefab.scaleY = 1;

		// ping_background
		const ping_background = this.add.image(540, 100, "ping-background");
		ping_background.scaleX = 2;
		ping_background.scaleY = 2;

		// playerPawnTurn
		const playerPawnTurn = this.add.sprite(540, 100, "red");

		this.diceRollContainer = diceRollContainer;
		this.diceBackground = diceBackground;
		this.dice = dice;
		this.gameBoardPrefab = gameBoardPrefab;
		this.playerPawnTurn = playerPawnTurn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	diceRollContainer;
	/** @type {Phaser.GameObjects.Image} */
	diceBackground;
	/** @type {Phaser.GameObjects.Sprite} */
	dice;
	/** @type {GameBoard} */
	gameBoardPrefab;
	/** @type {Phaser.GameObjects.Sprite} */
	playerPawnTurn;

	/* START-USER-CODE */

	// Write more your code here
	create() {
		this.editorCreate();
		this.pawnCaller = 0;
		this.nDiceValue = 0;
		this.playerTurn = 0;

		this.handlePlayerTurn();

		this.dice.setInteractive().on("pointerdown", () => {
			this.dice.disableInteractive();
			this.dice.anims.play("diceRollAnimation", true).once('animationcomplete', () => {
				this.nDiceValue = Math.floor(Math.random() * 6);
				this.rollDice(this.nDiceValue);
				this.gameBoardPrefab.playMove(this.nDiceValue + 1);
				// this.gameBoardPrefab.playMove(27);
			});
		});

		this.myJsonObject = [
			//Ladders
			{ nStart: 4, nEnd: 16 },
			{ nStart: 8, nEnd: 29 },
			{ nStart: 20, nEnd: 64 },
			{ nStart: 30, nEnd: 32 },
			{ nStart: 40, nEnd: 60 },
			{ nStart: 49, nEnd: 68 },
			{ nStart: 61, nEnd: 79 },
			{ nStart: 66, nEnd: 74 },
			{ nStart: 77, nEnd: 95 },
			{ nStart: 80, nEnd: 99 },
			{ nStart: 90, nEnd: 92 },
		];
	}

	handlePlayerTurn() {
		switch(this.playerTurn) {
			case 0:
				this.playerPawnTurn.setTexture("red");
				break;
			case 1:
				this.playerPawnTurn.setTexture("green");
				break;
			case 2:
				this.playerPawnTurn.setTexture("blue");
				break;
			case 3:
				this.playerPawnTurn.setTexture("yellow");
				break;
		}
	}

	rollDice(nDiceValue) {
		this.dice.setTexture("diceValues", nDiceValue);
	}

	searchValueInStart(nValue) {
		for(let i = 0; i < this.myJsonObject.length; i++) {
			if(this.myJsonObject[i].nStart == nValue) {
				console.log("Value Found! nStart: ", nValue, " , nEnd: ", this.myJsonObject[i].nEnd);
			}
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
