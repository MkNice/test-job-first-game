import Phaser from 'phaser';

export default class Game extends Phaser.Scene {

  constructor() {
    super('game');
  }

  preload() { }

  create() {
    this.scene.launch('Intro');
    this.time.delayedCall(5000, () => {
      this.scene.stop('Intro');
      this.scene.launch('TestScene');
    });
  }
}