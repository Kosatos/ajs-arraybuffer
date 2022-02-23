import Character from './Character';
import MathChar from './MathChar';

export default class Daemon extends MathChar {
  constructor(options) {
    super({ ...options, type: 'Daemon' });
    this.attack = 10;
    this.defence = 40;
  }
}
