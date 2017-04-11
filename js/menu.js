var menuState = {

    create: function () {

        var platforms;
        var player;

        game.add.plugin(Phaser.Plugin.Debug);
        game.add.plugin(Phaser.Plugin.Inspector);

        game.add.image(0, 0, 'background');

        player = game.add.sprite(32, game.world.height - 150, 'hero');
        //  We need to enable physics on the player
        game.physics.arcade.enable(player);
        //  Player physics properties. Give the little guy a slight bounce.
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;

    }

};
