import Character from './Character';

export default class MathChar extends Character {
  constructor(options) {
    super(options);
    this._stoned = false;
    this._distance = 1;
    this.attackRatio = [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1];
  }

  get distance() {
    return this._distance;
  }

  set distance(value) {
    this._distance = value;
  }

  get stoned() {
    return this._stoned;
  }

  set stoned(value) {
    this._stoned = value;
  }

  get attack() {
    const ratio = this._distance <= this.attackRatio.length
      ? this._distance - 1
      : this.attackRatio.length - 1;

    if (!this._stoned) {
      return this._attack * this.attackRatio[ratio];
    }
    const stonedAttack = this._attack * this.attackRatio[ratio] - Math.log2(this._distance) * 5;
    if (stonedAttack > 0) {
      return stonedAttack;
    }
    return 0;
  }

  set attack(value) {
    this._attack = value;
  }
}
