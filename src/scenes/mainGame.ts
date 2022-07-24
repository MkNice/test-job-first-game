export default class MainGame extends Phaser.Scene {

  constructor() {
    super('MainGame');
  }

  preload() {
    this.load.image('bg-beach', './backgrounds/background-beach.png');
    this.load.image('bg-ferry', './backgrounds/background-ferry.png');

    this.load.image('progress-bar', './other-blocks/progress-bar/progress-bar.png');
    this.load.image('progress-bar-25', './other-blocks/progress-bar/progress-bar-25.png');
    this.load.image('progress-bar-50', './other-blocks/progress-bar/progress-bar-50.png');
    this.load.image('progress-bar-75', './other-blocks/progress-bar/progress-bar-75.png');

    this.load.image('w-dress', './characters/woman/dress/woman-dress.png');

    this.load.image('w-dress-with-brown-bag', './characters/woman/dress/dress-with-brown-bag.png');
    this.load.image('w-dress-with-brown-bag-glasses', './characters/woman/dress/dress-with-brown-bag-glasses.png');
    this.load.image('w-dress-with-brown-bag-bijouterie', './characters/woman/dress/dress-with-brown-bag-bijouterie-2.png');

    this.load.image('w-dress-with-blue-bag', './characters/woman/dress/dress-with-blue-bag.png');
    this.load.image('w-dress-with-blue-bag-glasses', './characters/woman/dress/dress-with-blue-bag-glasses.png');
    this.load.image('w-dress-with-blue-bag-bijouterie', './characters/woman/dressdress-with-blue-bag-bijouterie-2.png');

    this.load.image('w-beach-outfit', './characters/woman/boutfit/woman-BOutfit.png');

    this.load.image('w-BOutfit-with-blue-bag', './characters/woman/boutfit/BOutfit-with-blue-bag.png');
    this.load.image('w-BOutfit-with-blue-bag-glasses', './characters/woman/boutfit/BOutfit-with-blue-bag-glasses.png');
    this.load.image('w-BOutfit-with-blue-bag-bijouterie', './characters/woman/boutfit/BOutfit-with-blue-bag-bijouterie-1.png');

    this.load.image('w-BOutfit-with-brown-bag', './characters/woman/boutfit/BOutfit-with-brown-bag.png');
    this.load.image('w-BOutfit-with-brown-bag-glasses', './characters/woman/boutfit/BOutfit-with-brown-bag-glasses.png');
    this.load.image('w-BOutfit-with-brown-bag-bijouterie', './characters/woman/boutfit/BOutfit-with-brown-bag-bijouterie-1.png');


  }
  create() {
    const choosesPlayer = [];
    const 
    const shape: Phaser.Geom.Rectangle = new Phaser.Geom.Rectangle(125, 130, 140, 180);
    const bg = this.add.image(0, 0, 'bg-blur').setOrigin(0, 0);
    const woman = this.add.image(0, 0, 'woman-casual-2');
    const progressBar = this.add.image(0, 0, 'progress-bar').setOrigin(0, 0);
    const rectangleFirst = this.add.image(165, 700, 'rectangle-clother-first').setOrigin(0.5, 0.5).setInteractive(shape, this.handler).on('pointerdown', () => {
      this.tweens.add({
        targets: woman,
        duration: 500,
        x: this.scale.width + woman.displayWidth / 2,
        yoyo: 1,
        hold: 300,
        onYoyo: () => {
          woman.setTexture('woman-dress');
          progressBar.setTexture('progress-bar-25');
        },
        ease: "Quad.easeOut"
      });
    });
    const dressOutfit = this.add.image(0, 0, 'dress').setOrigin(0.5, 0.5);
    const rectangleSecond = this.add.image(435, 700, 'rectangle-clother-second').setOrigin(0.5, 0.5).setInteractive(shape, this.handler).on('pointerdown', () => {
      this.tweens.add({
        targets: woman,
        duration: 500,
        x: this.scale.width + woman.displayWidth / 2,
        yoyo: 1,
        hold: 300,
        onYoyo: () => {
          woman.setTexture('woman-beach-outfit');
          progressBar.setTexture('progress-bar-25');
        },
        ease: "Quad.easeOut"
      });
    });
    const beachOutfit = this.add.image(0, 0, 'beach-outfit').setOrigin(0.5, 0.5);
    Phaser.Display.Align.In.Center(dressOutfit, rectangleFirst);
    Phaser.Display.Align.In.Center(beachOutfit, rectangleSecond);
    Phaser.Display.Align.In.Center(woman, bg, 0, 16);
    Phaser.Display.Align.In.Center(progressBar, bg, 0, -420);
  }
  handler(shape: Phaser.Geom.Rectangle, x: number, y: number): boolean {
    let dx = (shape.x - x) * (shape.x - x);
    let dy = (shape.y - y) * (shape.y - y);
    return (dx + dy) <= (shape.x * shape.y);
  }
}