import Phaser from 'phaser';
import Game from './scenes/game';
import Intro from './scenes/intro';
import MainGame from './scenes/mainGame';
import TestScene from './scenes/test-scene';

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 600,
	height: 900,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [Game, Intro, TestScene,MainGame]
};


export default new Phaser.Game(config);
