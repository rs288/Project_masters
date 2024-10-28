window.onload = function() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        scene: [StartScene, GameScene, GameOverScene]
    };

    new Phaser.Game(config);
}
