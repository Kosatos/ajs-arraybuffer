import Character from './Character';
import MathChar from './MathChar';

export default class Magician extends MathChar {
  constructor(options) {
    super({ ...options, type: 'Magician' });
    this.attack = 10;
    this.defence = 40;
  }
}
