        class GameScene extends Phaser.Scene {
            constructor() {
                super('GameScene');
                this.box = null;
                this.dragon = null;  // Añade esta línea
                this.personaje = null;  // añade esta línea
                this.questionBox = null;
            }

            init() {
                this.currentQuestionIndex = 0;
                this.score = 0;
                this.questionTexts = [];
                this.hearts = []; 
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
                this.load.image('corazon', 'img/corazon.png')
                this.load.image('fireball', 'img/fuego.png');
                this.load.image('espada', 'img/espada.png');
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
             //   this.showQuestion();
                
                this.personaje = this.add.image(150, 500, 'personaje');
                this.personaje.setScale(0.5);

                this.corazonPersonaje = this.add.image(150, 400, 'corazon');
                this.corazonPersonaje.setScale(0.4);

                this.dragon = this.add.image(650, 500, 'dragon');
                this.dragon.setScale(0.5);

                // Añadir la imagen del corazón encima del dragón
                this.drawHearts();
                // Llamar al método createQuestionBox para dibujar el cuadro
                this.questionBox = this.createQuestionBox();

                // Mostrar la pregunta centrada en el cuadro
                this.showQuestion(this.questionBox);

                // Dibujar tres óvalos dentro del cuadro
                this.drawOvals(this.questionBox);

                 const scrumText = this.add.text(this.questionBox.x / 2, this.questionBox.y + 20, "Scrum\nNivel 1", {
                     fontSize: '16px',
                     fill: '#DED947',
                     align: 'center'
                 }).setOrigin(0.5); 
            }

            drawHearts() {
                const heartWidth = 30; // Ancho de cada corazón
                const heartHeight = 30; // Alto de cada corazón
                const spacing = 10; // Espaciado entre corazones
                const startX = 550; // Posición X inicial
                const startY = 400; // Posición Y inicial
                for (let i = 0; i < 5; i++) {
                    const heart = this.add.image(startX + i * (heartWidth + spacing), startY, 'corazon');
                    heart.setScale(0.4); // Ajusta el tamaño según necesites
                    this.hearts.push(heart);
                }
            }

            removeHeart() {
                if (this.hearts.length > 0) {
                    // Elimina el último corazón de la lista y de la pantalla
                    const heart = this.hearts.pop();
                    heart.destroy(); // Destruye el objeto del corazón en la escena
                    //console.log('Un corazón ha sido eliminado.');
                }
            }
            
            createQuestionBox() {
                const boxWidth = this.sys.game.config.width * 0.75;  // Aumenté el ancho para que quepa el texto de la pregunta
                const boxHeight = this.sys.game.config.height * 0.45;  // Aumenté la altura para que quepan todas las opciones
                const boxX = this.sys.game.config.width / 2 - boxWidth / 2;
                const boxY = 50;
                const box = this.add.graphics();
                box.fillStyle(0xA8B8A9, 0.88);
                box.lineStyle(3, 0x514A8B, 1);
                box.fillRoundedRect(boxX, boxY, boxWidth, boxHeight, 15);
                box.strokeRoundedRect(boxX, boxY, boxWidth, boxHeight, 15);
                return { x: boxX, y: boxY, width: boxWidth, height: boxHeight };
            }

            drawOvals(questionBox) {
                const ovalWidth = 180; // Ancho de los óvalos
                const ovalHeight = 70; // Alto de los óvalos
                const spacing = 10; // Espaciado entre los óvalos

                const startX = questionBox.x + (questionBox.width - (ovalWidth * 3 + spacing * 2)) / 2; // Centra los óvalos dentro del cuadro
                const startY = questionBox.y + questionBox.height - ovalHeight - 10; // Coloca los óvalos 10 píxeles menos que la altura del cuadro

                const graphics = this.add.graphics();
                const opciones = questions[this.currentQuestionIndex].options;
                // Dibuja tres óvalos
                for (let i = 0; i < 3; i++) {
                    graphics.fillStyle(0xA8B8A9, 1); // Color de los óvalos
                    graphics.fillRoundedRect(startX + i * (ovalWidth + spacing), startY - ovalHeight / 2, ovalWidth, ovalHeight, ovalHeight / 2); // Dibuja el óvalo
                    // Dibuja el borde del óvalo
                    graphics.lineStyle(2, 0x514A8B, 0.98); // Borde morado
                    graphics.strokeRoundedRect(startX + i * (ovalWidth + spacing), startY - ovalHeight / 2, ovalWidth, ovalHeight, ovalHeight / 2); // Dibuja el borde
                    // Agrega la opción dentro del óvalo
                    const text = this.add.text(
                        startX + i * (ovalWidth + spacing) + ovalWidth / 2, // Centra el texto horizontalmente dentro del óvalo
                        startY, // Posición Y
                        opciones[i], // Opción correspondiente
                        { 
                            fontSize: '13px', 
                            fill: '#000',
                            align: 'center',
                            padding: { x: 10, y: 5 }, // Agrega un poco de padding interno
                            wordWrap: { width: ovalWidth - 20 } 
                        }
                    ).setOrigin(0.5) // Centra el texto
                      .setInteractive({ useHandCursor: true }) // Habilita el cursor de mano
                      //.on('pointerdown', () => console.log(`Índice seleccionado: ${i}`)) // Imprime la respuesta seleccionada en consola
                        .on('pointerdown', () => this.checkAnswer(i))
                     // .on('pointerover', () => text.setStyle({ fill: '#fff' })) // Cambia el color a amarillo al pasar el mouse
                      .on('pointerout', () => text.setStyle({ fill: '#000' })); // Vuelve al color original al salir
                    this.questionTexts.push(text);
                }
            }

            showQuestion(questionBox) {
                const question = questions[this.currentQuestionIndex]; // Obtén la pregunta actual
                
                const questionText = this.add.text(questionBox.x + questionBox.width / 2, questionBox.y + questionBox.height / 4, question.question,{
                    // Asumiendo que `question.text` contiene el texto de la pregunta
                    fontSize: '24px',
                    fill: '#000',
                    wordWrap: { width: questionBox.width - 40 }, // Ajustar el ancho del texto
                    align: 'center'
                }).setOrigin(0.5); // Centra el texto horizontalmente

                this.questionTexts.push(questionText);
            }

            checkAnswer(selectedIndex) {
                const question = questions[this.currentQuestionIndex];
                const correctAnswerIndex = question.answer;
                //console.log(`Índice seleccionado: ${correctAnswerIndex}`);
                 // Encuentra el texto de la opción seleccionada (está en el array questionTexts)
                const selectedText = this.questionTexts[selectedIndex + 1]; // +1 porque el primer elemento es la pregunta
                const correctText = this.questionTexts[correctAnswerIndex]; // el texto de la respuesta correcta

                if (selectedIndex === correctAnswerIndex - 1) {
                    this.score++;
                    // Marca la respuesta correcta en verde
                    selectedText.setStyle({ fill: '#1A942C' }); // Color verde
                    this.lanzarEspada();
                    this.time.delayedCall(1400, this.removeHeart, [], this);
                    this.currentQuestionIndex++;
                    this.time.delayedCall(3200, this.nextQuestion, [], this);
                } else {
                    // Marca la respuesta incorrecta en rojo
                    selectedText.setStyle({ fill: '#F91010' }); // Color rojo
                    this.launchFireball();
                    this.time.delayedCall(2100, () => {
                        
                        this.corazonPersonaje.destroy();
                    }, [], this);
                    this.time.delayedCall(3500, () => {
                        this.scene.start('GameOverScene', { 
                        score: this.score,
                        totalQuestions: this.currentQuestionIndex 
                        }); 
                    }, [], this);

                }

                // Aseguramos que el texto esté en la posición correcta
                this.feedbackText.setPosition(400, 500);

                // Desactivar la interactividad de todas las opciones después de responder
                this.questionTexts.slice(1).forEach(text => {
                    text.removeInteractive();
                });

            }
            
            launchFireball() {
                const fireball = this.add.image(650, 500, 'fireball');
                fireball.setScale(2); // Ajusta el tamaño según necesites
                this.tweens.add({
                    targets: fireball,
                    x: 150,
                    y: 500,
                    duration: 2000,
                    ease: 'Linear',
                    onComplete: () => {
                        fireball.destroy();
                    }
                });
            }
            
            lanzarEspada() {
                const espada = this.add.image(this.personaje.x+40, this.personaje.y+20, 'espada');
                espada.setScale(0.1); // Ajusta el tamaño según necesites
                this.tweens.add({
                    targets: espada,
                    x: 630,
                    y: this.dragon,
                    duration: 1200,
                    ease: 'Linear',
                    onComplete: () => {
                        // Al llegar al objetivo, comenzamos a regresar la espada
                        this.tweens.add({
                            targets: espada,
                            x: this.personaje.x+35,
                            y: this.personaje.y+20,
                                angle: -740, // Rotación para regresar
                            duration: 1500, // Tiempo para regresar
                            ease: 'Linear',
                            onComplete: () => {
                                espada.destroy();
                            }
                        });
                    }
                });
            }
            
            nextQuestion() {
                this.questionTexts.forEach(text => text.destroy());
                this.questionTexts = [];

                if (this.currentQuestionIndex < questions.length) {
                    this.showQuestion(this.questionBox);
                    this.drawOvals(this.questionBox);
                }  else {
                    this.scene.start('GameOverScene', { score: this.score,
                    totalQuestions: this.currentQuestionIndex });
                }
            }
    }
