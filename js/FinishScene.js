class FinishScene extends Phaser.Scene {
    constructor() {
        super('FinishScene');
    }

    preload() {
        this.load.image('backgroundImage', 'img/fondo_inicio.jpg');
    }

    create() {
        const background = this.add.image(0, 0, 'backgroundImage');
        background.setOrigin(0, 0);
        const box = this.createQuestionBox();
        this.showGameOver(box);
        this.showRestartButton(box);
    }

    createQuestionBox() {
        const boxWidth = 700;
        const boxHeight = 300;
        const boxX = this.sys.game.config.width / 2 - boxWidth / 2;
        const boxY = 50;
        const box = this.add.graphics();
        box.fillStyle(0xA8B8A9, 0.88);
        box.lineStyle(3, 0x514A8B, 1);
        box.fillRoundedRect(boxX, boxY, boxWidth, boxHeight, 15);
        box.strokeRoundedRect(boxX, boxY, boxWidth, boxHeight, 15);
        return { x: boxX, y: boxY, width: boxWidth, height: boxHeight };
    }

    showGameOver(box) {
        const gameOverText = this.add.text(
            box.x + box.width / 2, 
            box.y + 50,
            `¡Nivel terminado!`,
            { fontSize: '32px', fill: '#000', align: 'center' }
        ).setOrigin(0.5);

        let finalMessage = '';
        if (this.score === this.totalQuestions) {
            finalMessage = 'Has respondido todas las preguntas correctamente.';
        } 
        const scoreText = this.add.text(
            box.x + box.width / 2, 
            box.y + 120,
            finalMessage,
            { fontSize: '28px', fill: '#000', align: 'center', wordWrap: { width: box.width - 20, useAdvancedWrap: true } }
        ).setOrigin(0.5);
    }

    showRestartButton(box) {
        const restartButton = this.add.text(
            box.x + box.width / 2, 
            box.y + box.height - 50,
            'Ir al Mapa', 
            { 
                fontSize: '24px', 
                fill: '#fff',
                backgroundColor: '#282a1d',
                padding: {
                    left: 15,
                    right: 15,
                    top: 10,
                    bottom: 10
                }
            }
        )
        .setOrigin(0.5)
        .setInteractive({ useHandCursor: true })
        .on('pointerdown', () => this.scene.start('MapaScene'))
        .on('pointerover', function() {
            this.setStyle({ fill: '#ffff00', backgroundColor: '#666666' });
        })
        .on('pointerout', function() {
            this.setStyle({ fill: '#fff', backgroundColor: '#282a1d' });
        });
    }
}
