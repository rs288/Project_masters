class MapaScene extends Phaser.Scene {
    constructor() {
        super('MapaScene');
        this.nivel1Button = null;
    }

    preload() {
        this.load.image('Mapa', 'img/mapa.png');
    }

    // Método para crear/actualizar textos y personajes
    updateTexts(width, height) {
        // Si los textos ya existen, destruirlos
        if (this.Nivel1Button) this.Nivel1Button.destroy();
        if (this.Nivel2Button) this.Nivel2Button.destroy();
        if (this.Nivel3Button) this.Nivel3Button.destroy();

        this.Nivel1Button = this.createLevelButton(width / 8, height * 0.75, "1", "GameScene", width, height);
        this.Nivel2Button = this.createLevelButton(width / 3.8, height * 0.48, "2", "StartScene", width, height);
        this.Nivel3Button = this.createLevelButton(width / 2.1, height * 0.17, "3", "GameOverScene", width, height);
        this.Nivel4Button = this.createLevelButton(width / 1.45, height * 0.45, "4", "GameScene", width, height);
        this.Nivel5Button = this.createLevelButton(width / 1.23, height * 0.79, "5", "GameScene", width, height);
        this.Nivel6Button = this.createLevelButton(width / 1.1, height * 0.3, "6", "GameScene", width, height);
    }

    create() {
        const width = this.scale.width;
        const height = this.scale.height;

        const background = this.add.image(width/2, height/2, "Mapa");
        background.setDisplaySize(width, height);

        // Crear textos y personajes iniciales
        this.updateTexts(width, height);

        // Evento resize
        this.scale.on('resize', (gameSize) => {
            const newWidth = gameSize.width;
            const newHeight = gameSize.height;

            // Actualizar fondo
            background.setPosition(newWidth/2, newHeight/2);
            background.setDisplaySize(newWidth, newHeight);

            // Actualizar todos los textos y personajes
            this.updateTexts(newWidth, newHeight);
        });
    }

        createLevelButton(x, y, text, Scene, width, height) {
            const button = this.add.text(x, y, text, {
                fontSize: Math.min(width * 0.03, 40) + 'px',
                fill: '#2f0a0d',
                fontFamily: '"Press Start 2P"',
                padding: {
                    left: 15,
                    right: 15,
                    top: 10,
                    bottom: 10
                }
            })
                .setOrigin(0.5)
                .setInteractive({ useHandCursor: true })
                .on('pointerdown', () => this.scene.start(Scene))
                .on('pointerover', function() {
                    this.setStyle({ fill: '#ffff00'});
                })
                .on('pointerout', function() {
                    this.setStyle({ fill: '#2f0a0d' });
                });
            return button;
        }
    
}
