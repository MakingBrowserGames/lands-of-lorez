
TimesOfLores.Preloader = function (game) {

	this.preloadBar = null;

	this.ready = false;

};

TimesOfLores.Preloader.prototype = {

	preload: function () {

		this.preloadBar = this.add.sprite(0, 14, 'preloaderBar');

		this.load.setPreloadSprite(this.preloadBar);

		this.load.spritesheet('wall0', 'images/wall0.png', 32, 32);
		this.load.spritesheet('wall1', 'images/wall1.png', 32, 32);
		this.load.spritesheet('wall2', 'images/wall2.png', 32, 32);
		this.load.image('wall3', 'images/wall3.png');
		this.load.spritesheet('wall4', 'images/wall4.png', 32, 32);
		this.load.spritesheet('wall5', 'images/wall5.png', 32, 32);
		this.load.image('wall6', 'images/wall6.png');
		this.load.spritesheet('wall7', 'images/wall7.png', 32, 32);
		this.load.spritesheet('wall8', 'images/wall8.png', 32, 32);

		this.load.spritesheet('itemsFar', 'images/itemsFar.png', 32, 32);
		this.load.spritesheet('itemsMid', 'images/itemsMid.png', 32, 32);
		this.load.spritesheet('itemsNear', 'images/itemsNear.png', 32, 32);
		this.load.spritesheet('itemsPickUp', 'images/itemsPickUp.png', 32, 32);

		this.load.spritesheet('nsew', 'images/nsew.png', 5, 6);
		
		this.load.image('digits', 'images/digits.png');
		this.load.image('help', 'images/help.png');
		this.load.image('intro1', 'images/intro1.png');
		this.load.image('intro2', 'images/intro2.png');

		this.load.image('healthBG', 'images/health-bg.png');
		this.load.image('health', 'images/health-fill.png');

		this.load.image('enemyBG', 'images/enemy-bg.png');
		this.load.image('enemy', 'images/enemy-fill.png');
		this.load.spritesheet('gauge', 'images/enemy-gauge.png', 24, 3);
		this.load.image('attack', 'images/attack-bar.png');

		this.load.image('panel', 'images/panel.png');

		this.load.image('coin', 'images/coin.png');
		
		this.load.image('photonstorm', 'images/photonstorm.png');
		this.load.image('raster', 'images/raster.png');
		this.load.image('creditsScroller', 'images/credits.png');
		
		this.load.image('characterSelect1', 'images/character1.png');
		this.load.image('characterSelect2', 'images/character2.png');
		this.load.image('characterSelect3', 'images/character3.png');
		this.load.image('characterSelectLeft', 'images/select-left.png');
		this.load.image('characterSelectRight', 'images/select-right.png');

		this.load.image('title', 'images/title.png');
		this.load.image('title2', 'images/title2.png');
		this.load.image('titlePlay', 'images/menu-play.png');
		this.load.image('titleHelp', 'images/menu-help.png');
		this.load.image('titleCredits', 'images/menu-credits.png');

		this.load.image('wellDone', 'images/well-done.png');
		this.load.image('gameOver', 'images/gameover.png');

		if (window['mapJSON'])
		{
			console.log('map data loaded from page');
		    this.load.tilemap('map', null, mapJSON, Phaser.Tilemap.TILED_JSON);
		}
		else
		{
			console.log('map data loaded from file');
		    this.load.tilemap('map', 'maps.json', null, Phaser.Tilemap.TILED_JSON);
		}

	},

	create: function () {

		this.preloadBar.cropEnabled = false;

		this.state.start('MainMenu');

	},

	update: function () {

		// if (this.cache.isSoundDecoded('titleMusic') && this.ready == false)
		// {
			// this.ready = true;
			// this.state.start('MainMenu');
		// }

	},

	loadRender: function () {

		TimesOfLores.pixelContext.drawImage(game.canvas, 0, 0, 32, 32, 0, 0, TimesOfLores.width, TimesOfLores.height);

	},

	render: function () {

		TimesOfLores.pixelContext.drawImage(game.canvas, 0, 0, 32, 32, 0, 0, TimesOfLores.width, TimesOfLores.height);

	}

};
