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
    this.load.image('woman-casual', './characters/woman/woman-casual.png');

    this.load.image('message-man', './messages/message-man.png');
    this.load.image('message-woman', './messages/message-woman.png');

    this.load.image('background', './backgrounds//bg_repeat_340x640.png');

  }

  public create() {
    const centerHorizontal: number = this.scale.width / 13.5

    const backgroundNoneBlur: Phaser.GameObjects.Image = this.add
      .image(0, 0, 'bg-none-blur')
      .setOrigin(0, 0);
    const backgroundBlur: Phaser.GameObjects.Image = this.add
      .image(0, 0, 'bg-blur')
      .setOrigin(0, 0)
      .setScale(0);
    const backgroundBlack: Phaser.GameObjects.Image = this.add
      .image(0, 0, 'bg-black')
      .setOrigin(0, 0);
    const woman: Phaser.GameObjects.Image = this.add
      .sprite(120,0, 'woman-casual')
      .setOrigin(0, 0)
      .setScale(0);
    const messageWoman: Phaser.GameObjects.Image = this.add
      .image((centerHorizontal), 0, 'message-woman')
      .setOrigin(0, -2.4)
      .setScale(0);
    const man: Phaser.GameObjects.Image = this.add
      .image(0, 0, 'man')
      .setOrigin(0, 0)
      .setScale(0);
    const messageMan: Phaser.GameObjects.Image = this.add
      .image(centerHorizontal, 0, 'message-man')
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
        x: this.scale.width + man.displayWidth / 2, // Assumes origin at 0.5.
        yoyo: 1, // Makes it come back.
        hold: 300, // How long to wait before going back up.
        onYoyo: () => {
          man.setTexture('woman-casual');
          messageMan.setTexture('message-woman');
          backgroundNoneBlur.setTexture('bg-blur');
        },
        // Function to do when going back up.
        ease: "Quad.easeOut"
      });
    });
    man.clearAlpha().clearMask().clearTint();
  }
}

/*
    this.time.delayedCall(1000, () => { ... });
    this.tweens.add({
    targets: man,
    duration: 500,
    y: this.scale.height + man.displayHeight / 2, // Assumes origin at 0.5.
    yoyo: 1, // Makes it come back.
    hold: 500, // How long to wait before going back up.
    onYoyo: () => man.setTexture('woman-casual'), // Function to do when going back up.
    ease: "Quad.easeOut"
});
    this.tweens.add({
      delay: 400,
      targets: manText,
      duration: 500,
      scaleX: 0.3,
      scaleY: 0.3,
      onStart() {
        manPlayer.play("face-man-anims");
      },
      onComplete() {
        playerChangePosition.play();
      },
    });
     */