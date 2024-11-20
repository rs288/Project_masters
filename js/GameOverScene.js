class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }

    preload() {
        this.load.image('gameover', 'img/gameover.jpg');
    }

    create() {
        const width = this.scale.width;
        const height = this.scale.height;

        const background = this.add.image(width/2, height/2, "gameover");
        background.setDisplaySize(width, height);

        this.time.delayedCall(3000, () => {
            this.scene.start('MapaScene'); 
        }, [], this);
        // Evento resize
        this.scale.on('resize', (gameSize) => {
            const newWidth = gameSize.width;
            const newHeight = gameSize.height;

            // Actualizar fondo
            background.setPosition(newWidth/2, newHeight/2);
            background.setDisplaySize(newWidth, newHeight);

        });
    }
}
