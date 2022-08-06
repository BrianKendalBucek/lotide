const countLetters = str => {
  const results = {};
  
  for (const char of str) {
    
    if (char === ' ') {
      continue;
    }
    
    if (!results[char]) {
      results[char] = 0;
    }

    results[char] ++;
  }
  return results;
};

module.exports = countLetters;