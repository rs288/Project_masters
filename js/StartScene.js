class StartScene extends Phaser.Scene {
    constructor() {
        super('StartScene');
    }

    preload() {
        this.load.image('backgroundImage', '/img/fondo_inicio.jpg');
        this.load.image('personaje1', '/img/personaje1.png');
        this.load.image('personaje2', '/img/personaje2.png');
    }

    create() {
        const background = this.add.image(0, 0, 'backgroundImage');
        background.setOrigin(0, 0);
        background.displayWidth = this.sys.canvas.width;
        background.displayHeight = this.sys.canvas.height;

        this.add.text(400, 200, "Project Masters: Software", {
            fontSize: '26px', 
            fill: '#ffff00',
            fontFamily: '"Press Start 2P"',
            stroke: '#000',
            strokeThickness: 4
        }).setOrigin(0.5);
        this.add.text(400, 250, "Challenge", { 
            fontSize: '26px', 
            fill: '#ffff00', 
            fontFamily: '"Press Start 2P"',  
            stroke: '#000', 
            strokeThickness: 4  
        }).setOrigin(0.5);

        const personaje1 = this.add.image(150, 380, 'personaje1');
        personaje1.setScale(0.8);

        const personaje2 = this.add.image(650, 380, 'personaje2');
        personaje2.setScale(0.8);
        personaje2.setFlipX(true);

        const startButton = this.add.text(400, 420, "Start Game", {
            fontSize: '24px',
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

        const buttonBorder = this.add.rectangle(400, 350, 0, 0, 0x000000)
            .setOrigin(0.5);
        
        buttonBorder.width = startButton.width + 10;
        buttonBorder.height = startButton.height + 10;
        
        buttonBorder.setDepth(startButton.depth - 1);
    }
}
