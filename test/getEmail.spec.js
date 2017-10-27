const getEmail = require(path.join(process.cwd(), 'src', 'getEmail'));

describe('GetEmail tests', () => {
  describe('When email is invalid', () => {
    it('asks for email again', () => {
      const loggerMock = sinon.stub();
      const readLineMock = sinon.stub();
      readLineMock.onFirstCall().resolves('invalidEmail');
      readLineMock.onSecondCall().resolves('valid@email.com');

      const inputState = {
        enteredKeys: 0,
        keys: {},
      };

      const sut = getEmail(readLineMock, loggerMock);
      const result = sut(inputState);

      return result.then(resultState => {
        expect(loggerMock.calledOnce).to.be.true;
        expect(resultState).to.eql({
          enteredKeys: 1,
          keys: {email: 'valid@email.com'},
        });
      });
    });
  });

  describe('When email is valid', () => {
    it('returns expected object', () => {
      const loggerMock = sinon.stub();
      const readLineMock = sinon.stub().resolves('valid@email.com');
      const inputState = {enteredKeys: 1, keys: {}};

      const sut = getEmail(readLineMock, loggerMock);
      const result = sut(inputState);

      return result.then(resultState => {
        expect(resultState).to.eql({
          enteredKeys: 2,
          keys: {email: 'valid@email.com'},
        });
      });
    });
  });
});
