module.exports = readLine => {
  return currentState => {
    return readLine('Enter user_id value\n').then(user_id => {
      return Object.assign(currentState, {
        enteredKeys: currentState.enteredKeys + 1,
        keys: Object.assign(currentState.keys, {user_id}),
      });
    });
  };
};
