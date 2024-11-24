window.onload = function() {
    const config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'game-canvas',
        scale: {
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: 800,
            height: 600,
            min: {
                width: 320,
                height: 240
            },
            max: {
                width: 1600,
                height: 1200
            }
        },
        scene: [StartScene, SeleccionarScene, MapaScene, Nivel1Scene, Nivel2Scene, Nivel3Scene, Nivel4Scene, Nivel5Scene, Nivel6Scene, GameOverScene, FinishScene]
    };

    new Phaser.Game(config);
}
