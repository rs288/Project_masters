class StartScene extends Phaser.Scene {
    constructor() {
        super('StartScene');
        this.titleText = null;
        this.subtitleText = null;
        this.startButton = null;
        this.personaje1 = null;
        this.personaje2 = null;
    }

    preload() {
        this.load.image('backgroundImage', 'img/fondo_inicio.jpg');
        this.load.image('personaje1', 'img/personaje1.png');
        this.load.image('personaje2', 'img/personaje2.png');
    }

    // Método para crear/actualizar textos y personajes
    updateTexts(width, height) {
        // Si los textos ya existen, destruirlos
        if (this.titleText) this.titleText.destroy();
        if (this.subtitleText) this.subtitleText.destroy();
        if (this.startButton) this.startButton.destroy();
        if (this.personaje1) this.personaje1.destroy();
        if (this.personaje2) this.personaje2.destroy();

        // Crear personajes
        this.personaje1 = this.add.image(width * 0.2, height * 0.6, 'personaje1');
        this.personaje1.setScale(Math.min(width/800, height/600) * 0.8);

        this.personaje2 = this.add.image(width * 0.8, height * 0.6, 'personaje2');
        this.personaje2.setScale(Math.min(width/800, height/600) * 0.8);
        this.personaje2.setFlipX(true);

        // Crear nuevos textos
        this.titleText = this.add.text(width/2, height * 0.2, "Project Masters: Software", {
            fontSize: Math.min(width * 0.05, 30) + 'px', 
            fill: '#ffff00',
            fontFamily: '"Press Start 2P"',
            stroke: '#000',
            strokeThickness: 4
        }).setOrigin(0.5);

        this.subtitleText = this.add.text(width/2, height * 0.3, "Challenge", {
            fontSize: Math.min(width * 0.05, 30) + 'px',
            fill: '#ffff00', 
            fontFamily: '"Press Start 2P"',  
            stroke: '#000', 
            strokeThickness: 4  
        }).setOrigin(0.5);

        this.startButton = this.add.text(width/2, height * 0.6, "Start Game", {
            fontSize: Math.min(width * 0.03, 24) + 'px',
            fill: '#eee3cf',
            fontFamily: '"Press Start 2P"',
            backgroundColor: '#282a1d',
            padding: {
                left: 15,
                right: 15,
                top: 10,
                bottom: 10
            }
        })
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => this.scene.start('GameScene'))
        .on('pointerover', function() {
            this.setStyle({ fill: '#ffff00', backgroundColor: '#666666' });
        })
        .on('pointerout', function() {
            this.setStyle({ fill: '#eee3cf', backgroundColor: '#282a1d' });
        });
    }

    create() {
        const width = this.scale.width;
        const height = this.scale.height;

        const background = this.add.image(width/2, height/2, "backgroundImage");
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
}
