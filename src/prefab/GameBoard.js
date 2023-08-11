
// You can write more code here

/* START OF COMPILED CODE */

class GameBoard extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// gameboard
		const gameboard = scene.add.image(0, 0, "game-board");
		this.add(gameboard);

		// playerPawnContainer
		const playerPawnContainer = scene.add.container(0, 0);
		this.add(playerPawnContainer);

		// red
		const red = scene.add.image(-475, 425, "red");
		red.scaleX = 0.6;
		red.scaleY = 0.6;
		playerPawnContainer.add(red);

		// green
		const green = scene.add.image(-425, 425, "green");
		green.scaleX = 0.6;
		green.scaleY = 0.6;
		playerPawnContainer.add(green);

		// yellow
		const yellow = scene.add.image(-475, 475, "yellow");
		yellow.scaleX = 0.6;
		yellow.scaleY = 0.6;
		playerPawnContainer.add(yellow);

		// blue
		const blue = scene.add.image(-425, 475, "blue");
		blue.scaleX = 0.6;
		blue.scaleY = 0.6;
		playerPawnContainer.add(blue);

		// tilemapContainer
		const tilemapContainer = scene.add.container(0, 0);
		this.add(tilemapContainer);

		// one
		const one = scene.add.rectangle(-450, 451, 95, 95);
		one.name = "one";
		one.alpha = 0.1;
		tilemapContainer.add(one);

		// two
		const two = scene.add.rectangle(-350, 449, 95, 95);
		two.name = "two";
		two.alpha = 0;
		tilemapContainer.add(two);

		// three
		const three = scene.add.rectangle(-250, 449, 95, 95);
		three.name = "three";
		three.alpha = 0;
		tilemapContainer.add(three);

		// four
		const four = scene.add.rectangle(-150, 449, 95, 95);
		four.name = "four";
		four.alpha = 0;
		tilemapContainer.add(four);

		// five
		const five = scene.add.rectangle(-50, 449, 95, 95);
		five.name = "five";
		five.alpha = 0;
		tilemapContainer.add(five);

		// six
		const six = scene.add.rectangle(50, 449, 95, 95);
		six.name = "six";
		six.alpha = 0;
		tilemapContainer.add(six);

		// seven
		const seven = scene.add.rectangle(150, 449, 95, 95);
		seven.name = "seven";
		seven.alpha = 0;
		tilemapContainer.add(seven);

		// eight
		const eight = scene.add.rectangle(250, 449, 95, 95);
		eight.name = "eight";
		eight.alpha = 0;
		tilemapContainer.add(eight);

		// nine
		const nine = scene.add.rectangle(350, 449, 95, 95);
		nine.name = "nine";
		nine.alpha = 0;
		tilemapContainer.add(nine);

		// ten
		const ten = scene.add.rectangle(450, 449, 95, 95);
		ten.name = "ten";
		ten.alpha = 0;
		tilemapContainer.add(ten);

		// eleven
		const eleven = scene.add.rectangle(455, 349, 95, 95);
		eleven.name = "eleven";
		eleven.alpha = 0;
		tilemapContainer.add(eleven);

		// twelve
		const twelve = scene.add.rectangle(355, 349, 95, 95);
		twelve.name = "twelve";
		twelve.alpha = 0;
		tilemapContainer.add(twelve);

		// thirteen
		const thirteen = scene.add.rectangle(255, 349, 95, 95);
		thirteen.name = "thirteen";
		thirteen.alpha = 0;
		tilemapContainer.add(thirteen);

		// fourteen
		const fourteen = scene.add.rectangle(150, 349, 95, 95);
		fourteen.name = "fourteen";
		fourteen.alpha = 0;
		tilemapContainer.add(fourteen);

		// fifteen
		const fifteen = scene.add.rectangle(50, 349, 95, 95);
		fifteen.name = "fifteen";
		fifteen.alpha = 0;
		tilemapContainer.add(fifteen);

		// sixteen
		const sixteen = scene.add.rectangle(-50, 349, 95, 95);
		sixteen.name = "sixteen";
		sixteen.alpha = 0;
		tilemapContainer.add(sixteen);

		// seventeen
		const seventeen = scene.add.rectangle(-150, 349, 95, 95);
		seventeen.name = "seventeen";
		seventeen.alpha = 0;
		tilemapContainer.add(seventeen);

		// eighteen
		const eighteen = scene.add.rectangle(-250, 349, 95, 95);
		eighteen.name = "eighteen";
		eighteen.alpha = 0;
		tilemapContainer.add(eighteen);

		// nineteen
		const nineteen = scene.add.rectangle(-350, 349, 95, 95);
		nineteen.name = "nineteen";
		nineteen.alpha = 0;
		tilemapContainer.add(nineteen);

		// twenty
		const twenty = scene.add.rectangle(-450, 349, 95, 95);
		twenty.name = "twenty";
		twenty.alpha = 0;
		tilemapContainer.add(twenty);

		// twenty_one
		const twenty_one = scene.add.rectangle(-450, 249, 95, 95);
		twenty_one.name = "twenty_one";
		twenty_one.alpha = 0.1;
		tilemapContainer.add(twenty_one);

		// twenty_two
		const twenty_two = scene.add.rectangle(-350, 249, 95, 95);
		twenty_two.name = "twenty_two";
		twenty_two.alpha = 0;
		tilemapContainer.add(twenty_two);

		// twenty_three
		const twenty_three = scene.add.rectangle(-250, 250, 95, 95);
		twenty_three.name = "twenty_three";
		twenty_three.alpha = 0;
		tilemapContainer.add(twenty_three);

		// twenty_four
		const twenty_four = scene.add.rectangle(-150, 249, 95, 95);
		twenty_four.name = "twenty_four";
		twenty_four.alpha = 0;
		tilemapContainer.add(twenty_four);

		// twenty_five
		const twenty_five = scene.add.rectangle(-50, 250, 95, 95);
		twenty_five.name = "twenty_five";
		twenty_five.alpha = 0;
		tilemapContainer.add(twenty_five);

		// twenty_six
		const twenty_six = scene.add.rectangle(50, 249, 95, 95);
		twenty_six.name = "twenty_six";
		twenty_six.alpha = 0;
		tilemapContainer.add(twenty_six);

		// twenty_seven
		const twenty_seven = scene.add.rectangle(150, 249, 95, 95);
		twenty_seven.name = "twenty_seven";
		twenty_seven.alpha = 0;
		tilemapContainer.add(twenty_seven);

		// twenty_eight
		const twenty_eight = scene.add.rectangle(250, 248, 95, 95);
		twenty_eight.name = "twenty_eight";
		twenty_eight.alpha = 0;
		tilemapContainer.add(twenty_eight);

		// twenty_nine
		const twenty_nine = scene.add.rectangle(350, 250, 95, 95);
		twenty_nine.name = "twenty_nine";
		twenty_nine.alpha = 0;
		tilemapContainer.add(twenty_nine);

		// thirty
		const thirty = scene.add.rectangle(450, 250, 95, 95);
		thirty.name = "thirty";
		thirty.alpha = 0;
		tilemapContainer.add(thirty);

		// thirty_one
		const thirty_one = scene.add.rectangle(450, 150, 95, 95);
		thirty_one.name = "thirty_one";
		thirty_one.alpha = 0;
		tilemapContainer.add(thirty_one);

		// thirty_two
		const thirty_two = scene.add.rectangle(350, 149, 95, 95);
		thirty_two.name = "thirty_two";
		thirty_two.alpha = 0;
		tilemapContainer.add(thirty_two);

		// thirty_three
		const thirty_three = scene.add.rectangle(250, 149, 95, 95);
		thirty_three.name = "thirty_three";
		thirty_three.alpha = 0;
		tilemapContainer.add(thirty_three);

		// thirty_four
		const thirty_four = scene.add.rectangle(150, 149, 95, 95);
		thirty_four.name = "thirty_four";
		thirty_four.alpha = 0;
		tilemapContainer.add(thirty_four);

		// thirty_five
		const thirty_five = scene.add.rectangle(50, 149, 95, 95);
		thirty_five.name = "thirty_five";
		thirty_five.alpha = 0;
		tilemapContainer.add(thirty_five);

		// thirty_six
		const thirty_six = scene.add.rectangle(-50, 149, 95, 95);
		thirty_six.name = "thirty_six";
		thirty_six.alpha = 0;
		tilemapContainer.add(thirty_six);

		// thirty_seven
		const thirty_seven = scene.add.rectangle(-150, 149, 95, 95);
		thirty_seven.name = "thirty_seven";
		thirty_seven.alpha = 0;
		tilemapContainer.add(thirty_seven);

		// thirty_eight
		const thirty_eight = scene.add.rectangle(-250, 149, 95, 95);
		thirty_eight.name = "thirty_eight";
		thirty_eight.alpha = 0;
		tilemapContainer.add(thirty_eight);

		// thirty_nine
		const thirty_nine = scene.add.rectangle(-350, 149, 95, 95);
		thirty_nine.name = "thirty_nine";
		thirty_nine.alpha = 0;
		tilemapContainer.add(thirty_nine);

		// forty
		const forty = scene.add.rectangle(-450, 149, 95, 95);
		forty.name = "forty";
		forty.alpha = 0;
		tilemapContainer.add(forty);

		// forty_one
		const forty_one = scene.add.rectangle(-450, 49, 95, 95);
		forty_one.name = "forty_one";
		forty_one.alpha = 0.1;
		tilemapContainer.add(forty_one);

		// forty_two
		const forty_two = scene.add.rectangle(-350, 49, 95, 95);
		forty_two.name = "forty_two";
		forty_two.alpha = 0;
		tilemapContainer.add(forty_two);

		// forty_three
		const forty_three = scene.add.rectangle(-250, 49, 95, 95);
		forty_three.name = "forty_three";
		forty_three.alpha = 0;
		tilemapContainer.add(forty_three);

		// forty_four
		const forty_four = scene.add.rectangle(-150, 49, 95, 95);
		forty_four.name = "forty_four";
		forty_four.alpha = 0;
		tilemapContainer.add(forty_four);

		// forty_five
		const forty_five = scene.add.rectangle(-50, 49, 95, 95);
		forty_five.name = "forty_five";
		forty_five.alpha = 0;
		tilemapContainer.add(forty_five);

		// forty_six
		const forty_six = scene.add.rectangle(50, 50, 95, 95);
		forty_six.name = "forty_six";
		forty_six.alpha = 0;
		tilemapContainer.add(forty_six);

		// forty_seven
		const forty_seven = scene.add.rectangle(150, 47, 95, 95);
		forty_seven.name = "forty_seven";
		forty_seven.alpha = 0;
		tilemapContainer.add(forty_seven);

		// forty_eight
		const forty_eight = scene.add.rectangle(250, 49, 95, 95);
		forty_eight.name = "forty_eight";
		forty_eight.alpha = 0;
		tilemapContainer.add(forty_eight);

		// forty_nine
		const forty_nine = scene.add.rectangle(350, 49, 95, 95);
		forty_nine.name = "forty_nine";
		forty_nine.alpha = 0;
		tilemapContainer.add(forty_nine);

		// fifty
		const fifty = scene.add.rectangle(450, 49, 95, 95);
		fifty.name = "fifty";
		fifty.alpha = 0;
		tilemapContainer.add(fifty);

		// fifty_one
		const fifty_one = scene.add.rectangle(450, -51, 95, 95);
		fifty_one.name = "fifty_one";
		fifty_one.alpha = 0;
		tilemapContainer.add(fifty_one);

		// fifty_two
		const fifty_two = scene.add.rectangle(350, -51, 95, 95);
		fifty_two.name = "fifty_two";
		fifty_two.alpha = 0;
		tilemapContainer.add(fifty_two);

		// fifty_three
		const fifty_three = scene.add.rectangle(250, -51, 95, 95);
		fifty_three.name = "fifty_three";
		fifty_three.alpha = 0;
		tilemapContainer.add(fifty_three);

		// fifty_four
		const fifty_four = scene.add.rectangle(150, -51, 95, 95);
		fifty_four.name = "fifty_four";
		fifty_four.alpha = 0;
		tilemapContainer.add(fifty_four);

		// fifty_five
		const fifty_five = scene.add.rectangle(50, -51, 95, 95);
		fifty_five.name = "fifty_five";
		fifty_five.alpha = 0;
		tilemapContainer.add(fifty_five);

		// fifty_six
		const fifty_six = scene.add.rectangle(-50, -51, 95, 95);
		fifty_six.name = "fifty_six";
		fifty_six.alpha = 0;
		tilemapContainer.add(fifty_six);

		// fifty_seven
		const fifty_seven = scene.add.rectangle(-150, -51, 95, 95);
		fifty_seven.name = "fifty_seven";
		fifty_seven.alpha = 0;
		tilemapContainer.add(fifty_seven);

		// fifty_eight
		const fifty_eight = scene.add.rectangle(-250, -51, 95, 95);
		fifty_eight.name = "fifty_eight";
		fifty_eight.alpha = 0;
		tilemapContainer.add(fifty_eight);

		// fifty_nine
		const fifty_nine = scene.add.rectangle(-350, -51, 95, 95);
		fifty_nine.name = "fifty_nine";
		fifty_nine.alpha = 0;
		tilemapContainer.add(fifty_nine);

		// sixty
		const sixty = scene.add.rectangle(-450, -51, 95, 95);
		sixty.name = "sixty";
		sixty.alpha = 0;
		tilemapContainer.add(sixty);

		// sixty_one
		const sixty_one = scene.add.rectangle(-450, -150, 95, 95);
		sixty_one.name = "sixty_one";
		sixty_one.alpha = 0.1;
		tilemapContainer.add(sixty_one);

		// sixty_two
		const sixty_two = scene.add.rectangle(-350, -150, 95, 95);
		sixty_two.name = "sixty_two";
		sixty_two.alpha = 0;
		tilemapContainer.add(sixty_two);

		// sixty_three
		const sixty_three = scene.add.rectangle(-250, -150, 95, 95);
		sixty_three.name = "sixty_three";
		sixty_three.alpha = 0;
		tilemapContainer.add(sixty_three);

		// sixty_four
		const sixty_four = scene.add.rectangle(-150, -150, 95, 95);
		sixty_four.name = "sixty_four";
		sixty_four.alpha = 0;
		tilemapContainer.add(sixty_four);

		// sixty_five
		const sixty_five = scene.add.rectangle(-50, -150, 95, 95);
		sixty_five.name = "sixty_five";
		sixty_five.alpha = 0;
		tilemapContainer.add(sixty_five);

		// sixty_six
		const sixty_six = scene.add.rectangle(51, -150, 95, 95);
		sixty_six.name = "sixty_six";
		sixty_six.alpha = 0;
		tilemapContainer.add(sixty_six);

		// sixty_seven
		const sixty_seven = scene.add.rectangle(150, -150, 95, 95);
		sixty_seven.name = "sixty_seven";
		sixty_seven.alpha = 0;
		tilemapContainer.add(sixty_seven);

		// sixty_eight
		const sixty_eight = scene.add.rectangle(251, -150, 95, 95);
		sixty_eight.name = "sixty_eight";
		sixty_eight.alpha = 0;
		tilemapContainer.add(sixty_eight);

		// sixty_nine
		const sixty_nine = scene.add.rectangle(351, -149, 95, 95);
		sixty_nine.name = "sixty_nine";
		sixty_nine.alpha = 0;
		tilemapContainer.add(sixty_nine);

		// seventy
		const seventy = scene.add.rectangle(450, -152, 95, 95);
		seventy.name = "seventy";
		seventy.alpha = 0;
		tilemapContainer.add(seventy);

		// seventy_one
		const seventy_one = scene.add.rectangle(453, -250, 95, 95);
		seventy_one.name = "seventy_one";
		seventy_one.alpha = 0;
		tilemapContainer.add(seventy_one);

		// seventy_two
		const seventy_two = scene.add.rectangle(350, -249, 95, 95);
		seventy_two.name = "seventy_two";
		seventy_two.alpha = 0;
		tilemapContainer.add(seventy_two);

		// seventy_three
		const seventy_three = scene.add.rectangle(250, -249, 95, 95);
		seventy_three.name = "seventy_three";
		seventy_three.alpha = 0;
		tilemapContainer.add(seventy_three);

		// seventy_four
		const seventy_four = scene.add.rectangle(150, -249, 95, 95);
		seventy_four.name = "seventy_four";
		seventy_four.alpha = 0;
		tilemapContainer.add(seventy_four);

		// seventy_five
		const seventy_five = scene.add.rectangle(50, -249, 95, 95);
		seventy_five.name = "seventy_five";
		seventy_five.alpha = 0;
		tilemapContainer.add(seventy_five);

		// seventy_six
		const seventy_six = scene.add.rectangle(-50, -249, 95, 95);
		seventy_six.name = "seventy_six";
		seventy_six.alpha = 0;
		tilemapContainer.add(seventy_six);

		// seventy_seven
		const seventy_seven = scene.add.rectangle(-150, -249, 95, 95);
		seventy_seven.name = "seventy_seven";
		seventy_seven.alpha = 0;
		tilemapContainer.add(seventy_seven);

		// seventy_eight
		const seventy_eight = scene.add.rectangle(-250, -249, 95, 95);
		seventy_eight.name = "seventy_eight";
		seventy_eight.alpha = 0;
		tilemapContainer.add(seventy_eight);

		// seventy_nine
		const seventy_nine = scene.add.rectangle(-350, -249, 95, 95);
		seventy_nine.name = "seventy_nine";
		seventy_nine.alpha = 0;
		tilemapContainer.add(seventy_nine);

		// eighty
		const eighty = scene.add.rectangle(-450, -249, 95, 95);
		eighty.name = "eighty";
		eighty.alpha = 0;
		tilemapContainer.add(eighty);

		// eighty_one
		const eighty_one = scene.add.rectangle(-450, -350, 95, 95);
		eighty_one.name = "eighty_one";
		eighty_one.alpha = 0.1;
		tilemapContainer.add(eighty_one);

		// eighty_two
		const eighty_two = scene.add.rectangle(-350, -350, 95, 95);
		eighty_two.name = "eighty_two";
		eighty_two.alpha = 0;
		tilemapContainer.add(eighty_two);

		// eigthy_three
		const eigthy_three = scene.add.rectangle(-250, -350, 95, 95);
		eigthy_three.name = "eigthy_three";
		eigthy_three.alpha = 0;
		tilemapContainer.add(eigthy_three);

		// eighty_four
		const eighty_four = scene.add.rectangle(-150, -350, 95, 95);
		eighty_four.name = "eighty_four";
		eighty_four.alpha = 0;
		tilemapContainer.add(eighty_four);

		// eighty_five
		const eighty_five = scene.add.rectangle(-50, -350, 95, 95);
		eighty_five.name = "eighty_five";
		eighty_five.alpha = 0;
		tilemapContainer.add(eighty_five);

		// eighty_six
		const eighty_six = scene.add.rectangle(50, -350, 95, 95);
		eighty_six.name = "eighty_six";
		eighty_six.alpha = 0;
		tilemapContainer.add(eighty_six);

		// eighty_seven
		const eighty_seven = scene.add.rectangle(150, -350, 95, 95);
		eighty_seven.name = "eighty_seven";
		eighty_seven.alpha = 0;
		tilemapContainer.add(eighty_seven);

		// eighty_eight
		const eighty_eight = scene.add.rectangle(250, -350, 95, 95);
		eighty_eight.name = "eighty_eight";
		eighty_eight.alpha = 0;
		tilemapContainer.add(eighty_eight);

		// eighty_nine
		const eighty_nine = scene.add.rectangle(350, -350, 95, 95);
		eighty_nine.name = "eighty_nine";
		eighty_nine.alpha = 0;
		tilemapContainer.add(eighty_nine);

		// ninety
		const ninety = scene.add.rectangle(450, -350, 95, 95);
		ninety.name = "ninety";
		ninety.alpha = 0;
		tilemapContainer.add(ninety);

		// ninety_one
		const ninety_one = scene.add.rectangle(450, -450, 95, 95);
		ninety_one.name = "ninety_one";
		ninety_one.alpha = 0;
		tilemapContainer.add(ninety_one);

		// ninety_two
		const ninety_two = scene.add.rectangle(350, -450, 95, 95);
		ninety_two.name = "ninety_two";
		ninety_two.alpha = 0;
		tilemapContainer.add(ninety_two);

		// ninety_three
		const ninety_three = scene.add.rectangle(250, -450, 95, 95);
		ninety_three.name = "ninety_three";
		ninety_three.alpha = 0;
		tilemapContainer.add(ninety_three);

		// ninety_four
		const ninety_four = scene.add.rectangle(150, -450, 95, 95);
		ninety_four.name = "ninety_four";
		ninety_four.alpha = 0;
		tilemapContainer.add(ninety_four);

		// ninety_five
		const ninety_five = scene.add.rectangle(50, -450, 95, 95);
		ninety_five.name = "ninety_five";
		ninety_five.alpha = 0;
		tilemapContainer.add(ninety_five);

		// ninety_six
		const ninety_six = scene.add.rectangle(-50, -450, 95, 95);
		ninety_six.name = "ninety_six";
		ninety_six.alpha = 0;
		tilemapContainer.add(ninety_six);

		// ninety_seven
		const ninety_seven = scene.add.rectangle(-150, -450, 95, 95);
		ninety_seven.name = "ninety_seven";
		ninety_seven.alpha = 0;
		tilemapContainer.add(ninety_seven);

		// ninety_eight
		const ninety_eight = scene.add.rectangle(-250, -450, 95, 95);
		ninety_eight.name = "ninety_eight";
		ninety_eight.alpha = 0;
		tilemapContainer.add(ninety_eight);

		// ninety_nine
		const ninety_nine = scene.add.rectangle(-350, -450, 95, 95);
		ninety_nine.name = "ninety_nine";
		ninety_nine.alpha = 0;
		tilemapContainer.add(ninety_nine);

		// hundred
		const hundred = scene.add.rectangle(-450, -450, 95, 95);
		hundred.name = "hundred";
		hundred.alpha = 0;
		tilemapContainer.add(hundred);

		this.playerPawnContainer = playerPawnContainer;
		this.red = red;
		this.green = green;
		this.yellow = yellow;
		this.blue = blue;
		this.tilemapContainer = tilemapContainer;
		this.one = one;
		this.two = two;
		this.three = three;
		this.four = four;
		this.five = five;
		this.six = six;
		this.seven = seven;
		this.eight = eight;
		this.nine = nine;
		this.ten = ten;
		this.eleven = eleven;
		this.twelve = twelve;
		this.thirteen = thirteen;
		this.fourteen = fourteen;
		this.fifteen = fifteen;
		this.sixteen = sixteen;
		this.seventeen = seventeen;
		this.eighteen = eighteen;
		this.nineteen = nineteen;
		this.twenty = twenty;
		this.twenty_one = twenty_one;
		this.twenty_two = twenty_two;
		this.twenty_three = twenty_three;
		this.twenty_four = twenty_four;
		this.twenty_five = twenty_five;
		this.twenty_six = twenty_six;
		this.twenty_seven = twenty_seven;
		this.twenty_eight = twenty_eight;
		this.twenty_nine = twenty_nine;
		this.thirty = thirty;
		this.thirty_one = thirty_one;
		this.thirty_two = thirty_two;
		this.thirty_three = thirty_three;
		this.thirty_four = thirty_four;
		this.thirty_five = thirty_five;
		this.thirty_six = thirty_six;
		this.thirty_seven = thirty_seven;
		this.thirty_eight = thirty_eight;
		this.thirty_nine = thirty_nine;
		this.forty = forty;
		this.forty_one = forty_one;
		this.forty_two = forty_two;
		this.forty_three = forty_three;
		this.forty_four = forty_four;
		this.forty_five = forty_five;
		this.forty_six = forty_six;
		this.forty_seven = forty_seven;
		this.forty_eight = forty_eight;
		this.forty_nine = forty_nine;
		this.fifty = fifty;
		this.fifty_one = fifty_one;
		this.fifty_two = fifty_two;
		this.fifty_three = fifty_three;
		this.fifty_four = fifty_four;
		this.fifty_five = fifty_five;
		this.fifty_six = fifty_six;
		this.fifty_seven = fifty_seven;
		this.fifty_eight = fifty_eight;
		this.fifty_nine = fifty_nine;
		this.sixty = sixty;
		this.sixty_one = sixty_one;
		this.sixty_two = sixty_two;
		this.sixty_three = sixty_three;
		this.sixty_four = sixty_four;
		this.sixty_five = sixty_five;
		this.sixty_six = sixty_six;
		this.sixty_seven = sixty_seven;
		this.sixty_eight = sixty_eight;
		this.sixty_nine = sixty_nine;
		this.seventy = seventy;
		this.seventy_one = seventy_one;
		this.seventy_two = seventy_two;
		this.seventy_three = seventy_three;
		this.seventy_four = seventy_four;
		this.seventy_five = seventy_five;
		this.seventy_six = seventy_six;
		this.seventy_seven = seventy_seven;
		this.seventy_eight = seventy_eight;
		this.seventy_nine = seventy_nine;
		this.eighty = eighty;
		this.eighty_one = eighty_one;
		this.eighty_two = eighty_two;
		this.eigthy_three = eigthy_three;
		this.eighty_four = eighty_four;
		this.eighty_five = eighty_five;
		this.eighty_six = eighty_six;
		this.eighty_seven = eighty_seven;
		this.eighty_eight = eighty_eight;
		this.eighty_nine = eighty_nine;
		this.ninety = ninety;
		this.ninety_one = ninety_one;
		this.ninety_two = ninety_two;
		this.ninety_three = ninety_three;
		this.ninety_four = ninety_four;
		this.ninety_five = ninety_five;
		this.ninety_six = ninety_six;
		this.ninety_seven = ninety_seven;
		this.ninety_eight = ninety_eight;
		this.ninety_nine = ninety_nine;
		this.hundred = hundred;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.oScene = scene;
		this.pawnPosition = [1, 1, 1, 1];
		this.nPawn = 0;

		this.myPath = [
			//Snakes
			{ nStart: 98, nEnd: 24, route:[292,454,273,486,324,481,353,540,352,607,337,682,364,711,470,704,541,728,604,824,605,869,578,886,440,891,380,934,368,981,396,1054,405,1084,404,1113,399,1147,394,1157]},
			{ nStart: 93, nEnd: 67, route:[794,452,775,486,829,480,885,568,939,603,938,652,881,684,803,694,764,725,727,762,687,788,690,752]},
			{ nStart: 88, nEnd: 76, route:[795,555,794,579,742,571,712,599,734,615,781,640,768,676,741,690,685,656,641,597,580,593,553,645,522,665,486,671,488,653]},
			{ nStart: 71, nEnd: 48, route:[995,654,1017,682,960,683,946,697,920,704,895,713,914,749,937,758,977,756,981,790,956,805,887,762,835,748,783,766,748,809,744,878,766,912,786,934,792,956]},
			{ nStart: 62, nEnd: 42, route:[192,756,172,787,222,783,266,810,289,837,277,865,224,874,185,878,157,900,145,919,144,947,152,970,170,982,190,985,192,953]},
			{ nStart: 51, nEnd: 31, route:[994,855,960,880,1004,883,1018,908,1018,931,1008,956,982,973,938,985,899,989,873,1004,874,1030,904,1047,938,1056,964,1068,980,1086,995,1054]},
			{ nStart: 38, nEnd: 18, route:[292,1056,272,1080,321,1080,352,1114,368,1143,368,1174,351,1195,328,1206,285,1192,226,1187,211,1201,206,1224,217,1255,255,1275,280,1286,290,1255]},
			{ nStart: 35, nEnd: 15, route:[593,1083,610,1083,560,1084,493,1109,463,1109,463,1133,454,1161,458,1190,486,1210,525,1213,583,1202,638,1194,663,1217,657,1254,657,1254,629,1279,596,1296,593,1255]},
			{ nStart: 28, nEnd: 6, route: [795,1175,766,1169,744,1178,727,1196,729,1282,719,1300,696,1319,677,1321,592,1323,567,1327,552,1347,557,1366,588,1387,590,1357]},
		];

		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Container} */
	playerPawnContainer;
	/** @type {Phaser.GameObjects.Image} */
	red;
	/** @type {Phaser.GameObjects.Image} */
	green;
	/** @type {Phaser.GameObjects.Image} */
	yellow;
	/** @type {Phaser.GameObjects.Image} */
	blue;
	/** @type {Phaser.GameObjects.Container} */
	tilemapContainer;
	/** @type {Phaser.GameObjects.Rectangle} */
	one;
	/** @type {Phaser.GameObjects.Rectangle} */
	two;
	/** @type {Phaser.GameObjects.Rectangle} */
	three;
	/** @type {Phaser.GameObjects.Rectangle} */
	four;
	/** @type {Phaser.GameObjects.Rectangle} */
	five;
	/** @type {Phaser.GameObjects.Rectangle} */
	six;
	/** @type {Phaser.GameObjects.Rectangle} */
	seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	ten;
	/** @type {Phaser.GameObjects.Rectangle} */
	eleven;
	/** @type {Phaser.GameObjects.Rectangle} */
	twelve;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	fourteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventeen;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	nineteen;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	twenty_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	thirty_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	forty_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	fifty_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	sixty_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	seventy_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	eigthy_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	eighty_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_one;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_two;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_three;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_four;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_five;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_six;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_seven;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_eight;
	/** @type {Phaser.GameObjects.Rectangle} */
	ninety_nine;
	/** @type {Phaser.GameObjects.Rectangle} */
	hundred;

	/* START-USER-CODE */

	// Write your code here.

	playMove(nDiceValue) {
		console.log(nDiceValue);
		let pawnDelay = 0;
		let pawnTurn = this.oScene.playerTurn;
		let pawnIndex = this.pawnPosition[pawnTurn];
		let pawn = pawnIndex;

		if(pawnIndex + nDiceValue > this.tilemapContainer.list.length) {
			this.oScene.playerTurn++;
			if(this.pawnPosition[this.oScene.playerTurn] == 100) {
				this.oScene.playerTurn++;
			}
			if(this.oScene.playerTurn == 4) {
				this.oScene.playerTurn = 0;
				if(this.pawnPosition[this.oScene.playerTurn] == 100) {
					this.oScene.playerTurn++;
				}
			}
			this.oScene.handlePlayerTurn();
			this.oScene.dice.setInteractive();
			return;
		}

		for (let i = 0; i < nDiceValue; i++) {
			this.scene.tweens.add({
				targets: eval("this." + this.oScene.playerPawnTurn.texture.key),
				x: this.tilemapContainer.list[pawnIndex + i].x,
				y: this.tilemapContainer.list[pawnIndex + i].y,
				ease: "Power3",
				duration: 500,
				delay: pawnDelay,
				onComplete: () => {
					this.pawnPosition[pawnTurn] += 1;
					if(i == nDiceValue - 1) {
						this.checkSnakesLaddersPosition(eval("this." + this.oScene.playerPawnTurn.texture.key), pawnTurn, this.oScene.myJsonObject,this.myPath, this.pawnPosition[pawnTurn], 200);
						this.oScene.playerTurn++;
						if(this.pawnPosition[this.oScene.playerTurn] == 100) {
							this.oScene.playerTurn++;
						}
						if(this.oScene.playerTurn == 4) {
							this.oScene.playerTurn = 0;
							if(this.pawnPosition[this.oScene.playerTurn] == 100) {
								this.oScene.playerTurn++;
							}
						}
						this.oScene.handlePlayerTurn();
					}
					this.oScene.dice.setInteractive();
				}
			});
			if (i != nDiceValue) {
				pawn++;
				pawnDelay += 500;
			}
		}
	}

	checkSnakesLaddersPosition(pawnPlayer, pawnTurn,myJsonObject, myPath, pawnPosition, pawnDelay){

		//for ladders
		for(let i=0; i<myJsonObject.length;i++){
			if(myJsonObject[i].nStart == pawnPosition){
				this.oScene.tweens.add({
					targets:pawnPlayer,
					ease:"Power4",
					delay:1500,
					onComplete:()=>{
						pawnPlayer.x = this.tilemapContainer.list[myJsonObject[i].nEnd - 1].x;
						pawnPlayer.y = this.tilemapContainer.list[myJsonObject[i].nEnd - 1].y;
						pawnPlayer = myJsonObject[i].nEnd;
						this.pawnPosition[pawnTurn] = myJsonObject[i].nEnd;
					}
				})
			}
		}
		//for snakes
		for(let i=0; i<myPath.length; i++) {
				if(myPath[i].nStart == pawnPosition) {
					const aRoute = this.myPath[i].route; 
					const routeX = aRoute[0];
					const routeY = aRoute[1];
					const path = new Phaser.Curves.Path(routeX,routeY);
					path.splineTo(aRoute);
					const move = this.oScene.add.follower(path, routeX,routeY, pawnPlayer.texture).setScale(0.6);
					pawnPlayer.setVisible(false);
					move.startFollow({
						duration: 2000,
						repeat: 0,
						verticalAdjust: true,
						onComplete: () => {
							aRoute.splice(0,1)
							move.destroy();
							pawnPlayer.x = this.tilemapContainer.list[myPath[i].nEnd - 1].x;
							pawnPlayer.y = this.tilemapContainer.list[myPath[i].nEnd - 1].y;
							pawnPlayer.setVisible(true);
							pawnPlayer = myPath[i].nEnd;
							this.pawnPosition[pawnTurn] = myPath[i].nEnd;
						}
					})
				}
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
