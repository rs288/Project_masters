class GameOverScene extends Phaser.Scene {
    constructor() {
        super('GameOverScene');
    }

    init(data) {
        this.score = data.score;
        this.totalQuestions = data.totalQuestions;
    }

    create() {
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
        box.fillStyle(0x95a399, 0.8);
        box.lineStyle(3, 0x504a89, 1);
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

        console.log('Score:', this.score);
        console.log('Total Questions:', this.totalQuestions);

        let finalMessage = '';
        if (this.score === this.totalQuestions) {
            finalMessage = 'Has respondido todas las preguntas correctamente.';
        } else {
            finalMessage = `Tu puntaje: ${this.score}/${this.totalQuestions}`;
        }

        const scoreText = this.add.text(
            box.x + box.width / 2, 
            box.y + 120,
            finalMessage,
            { fontSize: '28px', fill: '#000', align: 'center' }
        ).setOrigin(0.5);
    }

    showRestartButton(box) {
        const restartButton = this.add.text(
            box.x + box.width / 2, 
            box.y + box.height - 50,
            'Reiniciar Juego', 
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
        .on('pointerdown', () => this.scene.start('StartScene'))
        .on('pointerover', function() {
            this.setStyle({ fill: '#ffff00', backgroundColor: '#666666' });
        })
        .on('pointerout', function() {
            this.setStyle({ fill: '#fff', backgroundColor: '#282a1d' });
        });
    }
}
