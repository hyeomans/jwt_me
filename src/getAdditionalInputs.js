module.exports = readLine => {
  return getAditionalInputs;

  function getAditionalInputs(currentState) {
    return readLine('Any additional inputs? (yes/no)\n').then(response => {
      if (response.toLowerCase() === 'no') {
        return currentState;
      }

      return getInput(currentState);
    });
  }

  function getInput(currentState) {
    return readLine('Enter name of new key\n')
      .then(keyName => {
        return readLine(`Enter value of ${keyName}\n`).then(value => {
          const newKey = {};
          newKey[keyName] = value;
          return Object.assign(currentState, {
            enteredKeys: currentState.enteredKeys + 1,
            keys: Object.assign(currentState.keys, newKey),
          });
        });
      })
      .then(currentState => getAditionalInputs(currentState));
  }
};
