import Phaser from 'phaser';

export default class Game extends Phaser.Scene {

  constructor() {
    super('game');
  }

  preload() {
    this.load.audio("backgroundSound", [
      './music/alexey-anisimov-tropical-pop.mp3'
    ]);
  }

  create() {
    this.sound.add("backgroundSound", { volume: 0.05 }).play();
    this.scene.launch('Intro');
    this.time.delayedCall(5000, () => {
      this.scene.stop('Intro');
      this.scene.launch('TestScene');
    });
  }
}