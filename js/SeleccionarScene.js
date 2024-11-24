class SeleccionarScene extends Phaser.Scene {
    constructor() {
        super('SeleccionarScene');
        this.personaje1 = null;
        this.personaje2 = null;
    }

    preload() {
        this.load.image('backgroundSelect', 'img/fondo_seleccionar.jpg');
        this.load.image('personaje1', 'img/personaje1.png');
        this.load.image('personaje2', 'img/personaje2.png');
    }

    // Método para crear/actualizar textos y personajes
    updateTexts(width, height) {
        // Si los textos ya existen, destruirlos
        if (this.personaje1) this.personaje1.destroy();
        if (this.personaje2) this.personaje2.destroy();

        // Crear personajes
        this.personaje1 = this.add.image(width * 0.33, height * 0.6, 'personaje1');
        this.personaje1.setScale(Math.min(width/800, height/600) * 0.7);

        // Hacer que la imagen sea interactiva y usar el cursor de mano
        this.personaje1.setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                // Aquí guardas el valor en el caché de datos
                const valueToStore = 'personaje1'; // Reemplaza esto con el valor que deseas almacenar
                this.registry.set('personaje', valueToStore); // Almacena en el registro
                //console.log('Valor guardado en caché:', this.registry.get('valor'));
                this.scene.start('MapaScene'); 
            })
            .on('pointerover', () => {
                // Aumenta el tamaño al pasar el cursor
                this.personaje1.setScale(0.72);
            })
            .on('pointerout', () => {
                // Vuelve al tamaño original
                this.personaje1.setScale(0.7);
            });

        this.personaje2 = this.add.image(width * 0.69, height * 0.6, 'personaje2');
        this.personaje2.setScale(Math.min(width/800, height/600) * 0.7);
        this.personaje2.setFlipX(true);
        
        this.personaje2.setInteractive({ useHandCursor: true })
            .on('pointerdown', () => {
                // Aquí guardas el valor en el caché de datos
                const valueToStore = 'personaje2'; // Reemplaza esto con el valor que deseas almacenar
                this.registry.set('personaje', valueToStore); // Almacena en el registro
                //console.log('Valor guardado en caché:', this.registry.get('valor'));
                this.scene.start('MapaScene'); 
            })
            .on('pointerover', () => {
                // Aumenta el tamaño al pasar el cursor
                this.personaje2.setScale(0.72);
            })
            .on('pointerout', () => {
                // Vuelve al tamaño original
                this.personaje2.setScale(0.7);
            });

    }

    create() {
        const width = this.scale.width;
        const height = this.scale.height;
        if (this.background) this.personaje2.destroy();

        const background = this.add.image(width/2, height/2, "backgroundSelect");
        background.setDisplaySize(width, height);

        this.titleText = this.add.text(width/1.96, height * 0.3, "Seleccionar Personaje", {
            fontSize: Math.min(width * 0.06, 22) + 'px', 
            fill: '#FFF4DD',
            fontFamily: '"Press Start 2P"',
        }).setOrigin(0.5);

        const rectX = width * 0.23;
        const rectX2 = width * 0.59;
        const rectY = width * 0.33;
        const borderRadius = 20; // Radio de los bordes redondeados

        // Dibuja el rectángulo utilizando Graphics
        const graphics = this.add.graphics();
        graphics.lineStyle(5, 0x5A7D2E, 1); // Color y grosor del borde
        graphics.fillStyle(0xA8B8A9, 0.88); // Color de fondo con opacidad
        graphics.fillRoundedRect(rectX, rectY, 150, 190, borderRadius); // Dibuja el rectángulo redondeado
        graphics.strokeRoundedRect(rectX, rectY, 150, 190, borderRadius); // Dibuja el borde del rectángulo redondeado
        // Dibuja el rectángulo utilizando Graphics
        const graphics2 = this.add.graphics();
        graphics2.lineStyle(5, 0x5A7D2E, 1); // Color y grosor del borde
        graphics2.fillStyle(0xA8B8A9, 0.88); // Color de fondo con opacidad
        graphics2.fillRoundedRect(rectX2, rectY, 150, 190, borderRadius); // Dibuja el rectángulo redondeado
        graphics2.strokeRoundedRect(rectX2, rectY, 150, 190, borderRadius); // Dibuja el borde del rectángulo redondeado
        
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
