module.exports = readLine => {
  return getRequiredKeys;

  function getRequiredKeys(currentState) {
    if (ifCompletedRequiredKeys(currentState)) {
      return Promise.resolve(currentState);
    }

    return enterKey(currentState.enteredKeys + 1).then(key => {
      const currentFn = currentState.requiredKeys[key];
      if (!currentFn) {
        console.log('Fill in required keys first and then additional ones.\n');
        return getRequiredKeys(currentState);
      }

      return currentFn(currentState).then(resultState =>
        getRequiredKeys(resultState)
      );
    });
  }

  function ifCompletedRequiredKeys(currentState) {
    const currentKeys = Object.keys(currentState.keys);
    const requiredKeys = Object.keys(currentState.requiredKeys);
    return currentKeys.length === requiredKeys.length;
  }

  function enterKey(number) {
    return readLine(`Enter key ${number}\n`);
  }
};
