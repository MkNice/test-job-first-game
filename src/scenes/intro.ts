import Phaser from 'phaser';

export default class Intro extends Phaser.Scene {

  constructor() {
    super('Intro');
  }

  public preload() {
    this.load.image('bg-blur', './backgrounds/background-with-blur.png');
    this.load.image('bg-none-blur', './backgrounds/background-without-blur.png');
    this.load.image('bg-black', './backgrounds/Rectangle-black.png');

    this.load.image('man', './characters/man/man.png');
    this.load.image('woman-casual', './characters/woman/casual/woman-casual.png');
    this.load.image('woman-casual-2', './characters/woman/casual/woman-casual-2.png');

    this.load.image('message-man', './messages/message-man.png');
    this.load.image('message-woman', './messages/message-woman.png');

    this.load.image('background', './backgrounds//bg_repeat_340x640.png');
  }

  public create() {
    const backgroundNoneBlur: Phaser.GameObjects.Image = this.add
      .image(0, 0, 'bg-none-blur')
      .setOrigin(0, 0);
    const backgroundBlack: Phaser.GameObjects.Image = this.add
      .image(0, 0, 'bg-black')
      .setOrigin(0, 0);
    const man: Phaser.GameObjects.Image = this.add
      .image(0, 0, 'man')
      .setOrigin(0, 0)
      .setScale(0);
    Phaser.Display.Align.In.Center(man, backgroundNoneBlur, 0, 0);
    const messageMan: Phaser.GameObjects.Image = this.add
      .image(0, 0, 'message-man')
      .setOrigin(0, -2.4)
      .setScale(0);

    this.time.delayedCall(50, () => {
      man.setScale(1);
    });
    this.time.delayedCall(400, () => {
      messageMan.setScale(1);
    });
    this.time.delayedCall(600, () => {
      this.tweens.add({
        targets: [man, messageMan],
        duration: 500,
        x: this.scale.width + man.displayWidth / 2,
        yoyo: 1,
        hold: 300,
        onYoyo: () => {
          man.setTexture('woman-casual');
          messageMan.setTexture('message-woman');
          backgroundNoneBlur.setTexture('bg-blur');
        },
        ease: "Quad.easeOut"
      });
    });
    this.time.delayedCall(2500, () => {
      this.tweens.add({
        targets: [man, messageMan],
        duration: 500,
        x: this.scale.width + man.displayWidth / 2,
        yoyo: 1,
        hold: 300,
        onYoyo: () => {
          man.setTexture('woman-casual-2').setOrigin(-0.32, -0.035);
          messageMan.setScale(0);
        },
        ease: "Quad.easeOut"
      });
    });
  }
}