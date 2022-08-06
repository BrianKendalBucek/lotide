const findKeyByValue = (obj, find) => {
  
  for (const key of Object.keys(obj)) {
    const value = obj[key];
    if (value === find) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

