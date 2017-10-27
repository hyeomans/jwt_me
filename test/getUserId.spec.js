const getUserId = require('../src/getUserId');

describe('GetUserId tests', () => {
  it('returns userId', () => {
    const readLineMock = sinon.stub().resolves(111221);
    const inputState = {
      enteredKeys: 1,
      keys: {},
    };

    const sut = getUserId(readLineMock);
    const result = sut(inputState);

    return result.then(stateResult => {
      expect(stateResult).to.eql({enteredKeys: 2, keys: {user_id: 111221}});
    });
  });
});
