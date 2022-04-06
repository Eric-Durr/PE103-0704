import { expect } from 'chai';
import { describe, it } from 'mocha';
import defaultFunction from '../src/default';

import { RandomClass } from '../src/randomClass.class';

describe('Default test', () => {
  it('', () => {
    expect(defaultFunction()).to.be.true;
  });
  it('Testing random class', () => {
    const obj: RandomClass = new RandomClass('Eric');
    expect(obj.name).to.be.eq('Eric');
  });
});
