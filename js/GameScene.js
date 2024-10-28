        class GameScene extends Phaser.Scene {
            constructor() {
                super('GameScene');
                this.box = null;
            }

            init() {
                this.currentQuestionIndex = 0;
                this.score = 0;
                this.questionTexts = [];
            }


            preload() {
                // Carga la imagen de fondo
                this.load.image('backgroundQuestion', 'img/fondo_preguntas.jpg');
                // Carga personaje 1
                this.load.image('personaje', 'img/personaje1.png');
                // Cargar personaje 2
                //this.load.image('personaje', './img/personaje2.png');
                // Cargar Dragon
                this.load.image('dragon', 'img/dragon.png');
            }

            create() {
                // Añade la imagen de fondo y ajústala para cubrir toda la escena
                const background = this.add.image(0, 0, 'backgroundQuestion');
                background.setOrigin(0, 0);

                // Ajusta el tamaño de la imagen para cubrir toda la escena
                background.displayWidth = this.sys.canvas.width;
                background.displayHeight = this.sys.canvas.height;
                
                this.feedbackText = this.add.text(20, 500, "", { fontSize: '24px', fill: '#000' });
                this.feedbackText = this.add.text(this.sys.game.config.width / 2, this.sys.game.config.height - 50, "", { 
                    fontSize: '24px', 
                    fill: '#000',
                    wordWrap: { width: 350 }, // Limita el ancho del texto a 400 píxeles (600 - 200)
                    align: 'left' // Alinea el texto a la izquierda
                }).setOrigin(0.5);
                this.showQuestion();

                const personaje = this.add.image(150, 500, 'personaje');
                personaje.setScale(0.5);


                const dragon = this.add.image(650, 500, 'dragon');
                dragon.setScale(0.5);
            }

            createQuestionBox() {
                const boxWidth = this.sys.game.config.width * 0.82;  // Aumenté el ancho para que quepa el texto de la pregunta
                const boxHeight = this.sys.game.config.height * 0.45;  // Aumenté la altura para que quepan todas las opciones
                const boxX = this.sys.game.config.width / 2 - boxWidth / 2;
                const boxY = 50;
                const box = this.add.graphics();
                box.fillStyle(0x95a399, 0.8);
                box.lineStyle(3, 0x504a89, 1);
                box.fillRoundedRect(boxX, boxY, boxWidth, boxHeight, 15);
                box.strokeRoundedRect(boxX, boxY, boxWidth, boxHeight, 15);
                return { x: boxX, y: boxY, width: boxWidth, height: boxHeight };
            }

            showQuestion() {
                this.feedbackText.setText("");

                const question = questions[this.currentQuestionIndex];
                const box = this.createQuestionBox();

                // Añadir la pregunta
                const questionText = this.add.text(box.x + 20, box.y + 20, question.question, { 
                    fontSize: '20px',
                    fill: '#000',
                    wordWrap: { width: box.width - 40 }
                });
                this.questionTexts.push(questionText);

                // Calcular el espacio disponible para las opciones
                const availableHeight = box.height - questionText.height - 60; // Espacio para opciones
                const optionHeight = availableHeight / question.options.length;


                question.options.forEach((option, index) => {
                    const text = this.add.text(
                        box.x + 40, 
                        box.y + questionText.height + 60 + (index * optionHeight),
                        `${index + 1}. ${option}`,
                        { 
                            fontSize: '18px', 
                            fill: '#000',
                            wordWrap: { width: box.width - 40 }
                        }
                    )
                    .setInteractive({ useHandCursor: true })
                        .on('pointerdown', () => this.checkAnswer(index))
                        .on('pointerover', () => text.setStyle({ fill: '#d45c56' }))
                        .on('pointerout', () => text.setStyle({ fill: '#000' }));
                    this.questionTexts.push(text);
                });
            }

            checkAnswer(selectedIndex) {
                const question = questions[this.currentQuestionIndex];
                const correctAnswerIndex = question.answer;

                if (selectedIndex === correctAnswerIndex - 1) {
                    this.score++;
                    this.feedbackText.setText("¡Correcto!");
                    this.feedbackText.setColor('#0f0');
                    this.feedbackText.setShadow(2, 2, '#000', 0); // Sombra blanca
                } else {
                    this.feedbackText.setText(`Incorrecto. La respuesta correcta era: ${question.options[correctAnswerIndex - 1]}`);
                    this.feedbackText.setColor('#f00');
                    this.feedbackText.setShadow(2, 2, '#000', 0); // Sombra blanca
                }

                // Aseguramos que el texto esté en la posición correcta
                this.feedbackText.setPosition(400, 500);

                this.currentQuestionIndex++;
                this.time.delayedCall(3000, this.nextQuestion, [], this);
            }



            nextQuestion() {
                this.questionTexts.forEach(text => text.destroy());
                this.questionTexts = [];

                if (this.currentQuestionIndex < questions.length) {
                    this.showQuestion();
                } else {
                    this.scene.start('GameOverScene', { score: this.score,
                    totalQuestions: this.currentQuestionIndex });
            }
        }
    }
