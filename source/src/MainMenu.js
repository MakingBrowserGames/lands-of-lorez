
TimesOfLores.MainMenu = function (game) {

	this.music = null;
	this.map = null;

	this.walker;

	this.wall0;
	this.wall1;
	this.wall2;
	this.wall3;
	this.wall4;
	this.wall5;
	this.wall6;
	this.wall7;
	this.wall8;

	this.walls = [];

	this.lock3;
	this.lock6;

	this.potion3;
	this.potion6;

	this.key3;
	this.key6;

	this.frog3;
	this.frog6;

	//	UI
	this.healthBG;
	this.health;
	this.nsew;

	this.levelFont;
	this.level;

	this.keysFont;
	this.keys;

	this.goldFont;
	this.gold;

	this.cursors;

};

TimesOfLores.MainMenu.prototype = {

	create: function () {

		//	bg
    	this.wall0 = this.add.image(0, 0, 'wall0');

    	//	far
    	this.wall1 = this.add.image(0, 0, 'wall1');
    	this.wall2 = this.add.image(0, 0, 'wall2');
    	this.wall3 = this.add.image(0, 0, 'wall3');

    	//	far middle items
    	this.lock3 = this.add.image(0, 0, 'lock3');
    	this.potion3 = this.add.image(0, 0, 'potion3');
    	this.key3 = this.add.image(0, 0, 'key3');
    	this.frog3 = this.add.image(0, 0, 'frog3');

    	//	mid
    	this.wall4 = this.add.image(0, 0, 'wall4');
    	this.wall5 = this.add.image(0, 0, 'wall5');
    	this.wall6 = this.add.image(0, 0, 'wall6');

    	//	middle items
    	this.lock6 = this.add.image(0, 0, 'lock6');
    	this.potion6 = this.add.image(0, 0, 'potion6');
    	this.key6 = this.add.image(0, 0, 'key6');
    	this.frog6 = this.add.image(0, 0, 'frog6');

    	//	near
    	this.wall7 = this.add.image(0, 0, 'wall7');
    	this.wall8 = this.add.image(0, 0, 'wall8');

    	//	Map
    	this.walls = [
    		[ this.wall1, this.wall3, this.wall2 ],
    		[ this.wall4, this.wall6, this.wall5 ],
    		[ this.wall7, this.wall0, this.wall8 ]
    	];

    	//	UI
    	this.healthBG = this.add.image(1, 1, 'healthBG');
    	this.health = this.add.image(1, 1, 'health');
    	this.health.width = 8;
    	this.nsew = this.add.image(14, 0, 'nsew', 0);

	    this.levelFont = this.add.retroFont('digits', 4, 6, 'L0123456789');
	    this.levelFont.text = 'L3';
	    this.level = this.add.image(24, 0, this.levelFont);

	    this.panel = this.add.image(0, 25, 'panel');

	    this.keysFont = this.add.retroFont('digits', 4, 6, 'L0123456789');
	    this.keysFont.text = '2';
	    this.keys = this.add.image(20, 26, this.keysFont);

	    this.goldFont = this.add.retroFont('digits', 4, 6, 'L0123456789');
	    this.goldFont.text = '32';
	    this.gold = this.add.image(5, 26, this.goldFont);

    	this.map = this.add.tilemap('map');

	    this.map.setCollisionByIndex(2);

		this.walker = new Phaser.Plugin.TilemapWalker(this.game, this.map, this.map.currentLayer, 1, 14);

		this.buildView();

    	this.cursors = game.input.keyboard.createCursorKeys();

    	this.cursors.up.onDown.add(this.moveForward, this);
    	this.cursors.down.onDown.add(this.moveBackward, this);
    	this.cursors.left.onDown.add(this.turnLeft, this);
    	this.cursors.right.onDown.add(this.turnRight, this);

	},

	moveForward: function () {

		this.walker.moveForward();
		console.log('\nmoveForward');
		this.buildView();

	},

	moveBackward: function () {

		this.walker.moveBackward();
		console.log('\nmoveBackward');
		this.buildView();

	},

	turnLeft: function () {

		this.walker.turnLeft();
		console.log('\nturnLeft');
		this.buildView();

	},

	turnRight: function () {

		this.walker.turnRight();
		console.log('\nturnRight');
		this.buildView();

	},

	buildView: function () {

		console.log('X:', this.walker.location.x, 'Y:', this.walker.location.y, '\n');

		this.wall1.visible = false;
		this.wall2.visible = false;
		this.wall3.visible = false;
		this.wall4.visible = false;
		this.wall5.visible = false;
		this.wall6.visible = false;
		this.wall7.visible = false;
		this.wall8.visible = false;

		this.lock3.visible = false;
		this.lock6.visible = false;

		this.key3.visible = false;
		this.key6.visible = false;

		this.potion3.visible = false;
		this.potion6.visible = false;

		this.frog3.visible = false;
		this.frog6.visible = false;

		this.nsew.frame = this.walker.facing;

		var tiles = this.walker.getTiles(3, 3);
		var i = 0;

		for (y = 0; y < 3; y++)
		{
			for (x = 0; x < 3; x++)
			{
				i = tiles[y][x];

				if (i === 2)
				{
					this.walls[y][x].visible = true;
				}
				else if (i === 3)
				{
					if (x === 1 && y === 0)
					{
						this.lock3.visible = true;
					}
					else if (x === 1 && y === 1)
					{
						this.lock6.visible = true;
					}
				}
				else if (i === 4)
				{
					if (x === 1 && y === 0)
					{
						this.key3.visible = true;
					}
					else if (x === 1 && y === 1)
					{
						this.key6.visible = true;
					}
				}
				else if (i === 5)
				{
					if (x === 1 && y === 0)
					{
						this.potion3.visible = true;
					}
					else if (x === 1 && y === 1)
					{
						this.potion6.visible = true;
					}
				}
				else if (i === 6)
				{
					if (x === 1 && y === 0)
					{
						this.frog3.visible = true;
					}
					else if (x === 1 && y === 1)
					{
						this.frog6.visible = true;
					}
				}

			}
		}

	},

	update: function () {

	},

	render: function () {

		TimesOfLores.pixelContext.drawImage(game.canvas, 0, 0, 32, 32, 0, 0, TimesOfLores.width, TimesOfLores.height);

	}

};
