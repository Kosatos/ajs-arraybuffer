import Magician from '../js/Character/Magician';

describe('Class MathChar: ', () => {
  test('\'get attack\' should return correct value of attack', () => {
    const potter = new Magician({ name: 'Harry' });
    potter.attack = 100;
    potter.distance = 2;

    expect(potter.attack).toEqual(90);
    expect(potter.distance).toEqual(2);

    const longbottom = new Magician({ name: 'Neville' });
    longbottom.attack = 10;
    longbottom.distance = 6;
    longbottom.stoned = true;

    expect(longbottom.attack).toEqual(0);
    expect(longbottom.stoned).toEqual(true);

    const malfoy = new Magician({ name: 'Draco' });
    malfoy.attack = 200;
    malfoy.distance = 2;
    malfoy.stoned = true;

    expect(malfoy.attack).toEqual(175);
    malfoy.distance = 12;

    const hagrid = new Magician({ name: 'Hagrid' });
    hagrid.attack = 100;
    hagrid.distance = 12;

    expect(hagrid.attack).toEqual(10);
  });
});
