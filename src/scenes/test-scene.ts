import Phaser from 'phaser';

export default class TestScene extends Phaser.Scene {

  constructor() {
    super('TestScene');
  }

  preload() {
    this.load.image('bg-blur', './backgrounds/background-with-blur.png');
    this.load.image('bg-black', './backgrounds/rectangle-black.png');

    this.load.image('dress', './clothes/pink-dress.png');
    this.load.image('beach-outfit', './clothes/beach-outfit.png');
    this.load.image('rectangle-clother-first', './clothes/rectangle-for-clother.png');
    this.load.image('rectangle-clother-second', './clothes/rectangle-for-clother.png');
    this.load.image('woman-casual-2', './characters/woman/casual/woman-casual-2.png');

    this.load.image('recangle-text', './other-blocks/txt/rectangle-for-text.png');
    this.load.image('text', './other-blocks/txt/txt-dress.png');
    this.load.image('hand', './other-blocks/hand.png');
  }

  create() {
    const shape: Phaser.Geom.Rectangle = new Phaser.Geom.Rectangle(125, 130, 140, 180);
    const hand = this.add
      .image(200, 850, 'hand')
      .setOrigin(0.5, 0.5)
      .setScale(0);

    this.add
      .image(0, 0, 'bg-blur')
      .setOrigin(0, 0);
    this.add
      .image(0, 0, 'bg-black')
      .setOrigin(0, 0);
    this.add
      .image(125, 31, 'woman-casual-2')
      .setOrigin(0, 0);
    this.add.image(300, 35, 'recangle-text')
      .setOrigin(0.5, 0.5)
      .setScale(0.5);
    this.add
      .image(300, 35, 'text')
      .setOrigin(0.5, 0.5);
    this.add
      .image(165, 700, 'rectangle-clother-first')
      .setOrigin(0.5, 0.5)
      .setInteractive(shape, this.handler)
      .on('pointerdown', () => {
        this.scene.start('MainGame');
      });
    this.add
      .image(165, 700, 'dress'
      ).setOrigin(0.5, 0.5);
    this.add
      .image(435, 700, 'rectangle-clother-second')
      .setOrigin(0.5, 0.5)
      .setInteractive(shape, this.handler)
      .on('pointerdown', () => {
        this.scene.start('MainGame');
      });
    this.add
      .image(435, 700, 'beach-outfit')
      .setOrigin(0.5, 0.5);

    this.time.delayedCall(300, () => hand.setScale(1));
    this.time.delayedCall(1000, () => {
      this.tweens.add({
        targets: hand,
        duration: 500,
        x: this.scale.width - 100,
        yoyo: 1,
        repeat: 2,
        hold: 300,
        onYoyo: () => {
          hand;
        },
        ease: "Quad.easeOut"
      });
    });
    this.time.delayedCall(3000, () => hand.setScale(0));
  }

  handler(shape: Phaser.Geom.Rectangle, x: number, y: number):boolean {
    let dx = (shape.x - x) * (shape.x - x);
    let dy = (shape.y - y) * (shape.y - y);
    return (dx + dy) <= (shape.x * shape.y);
  }
}