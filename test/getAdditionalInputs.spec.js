const getAdditionalInputs = require(path.join(
  process.cwd(),
  'src',
  'getAdditionalInputs'
));

describe('GetAditionalInputs tests', () => {
  describe('When user needs more keys', () => {
    it('adds keys to expected object', () => {
      const readLineMock = sinon.stub();
      readLineMock.onFirstCall().resolves('yes');
      readLineMock.onSecondCall().resolves('sampleKey');
      readLineMock.onThirdCall().resolves('sampleValue');
      readLineMock.onCall(3).resolves('no');

      const inputState = {
        enteredKeys: 2,
        keys: {},
      };

      const sut = getAdditionalInputs(readLineMock);
      const result = sut(inputState);

      return result.then(stateResult => {
        expect(stateResult).to.eql({
          enteredKeys: 3,
          keys: {sampleKey: 'sampleValue'},
        });
      });
    });
  });

  describe('When user does not need more keys', () => {
    it('returns same object', () => {
      const readLineMock = sinon.stub();
      readLineMock.onFirstCall().resolves('No');

      const inputState = {enteredKeys: 0, keys: {}};

      const sut = getAdditionalInputs(readLineMock);
      const result = sut(inputState);

      return result.then(stateResult => {
        expect(stateResult).to.eql({
          enteredKeys: 0,
          keys: {},
        });
      });
    });
  });
});
