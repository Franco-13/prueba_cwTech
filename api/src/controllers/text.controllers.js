const textTransformController = (text) => {
  const regExp = /^[A-Z]+$/i;

  if (text.length > 0 && typeof text === "string" && regExp.test(text)) {
    const reverseStr = text.split("").reverse().join("");

    if (reverseStr.toLowerCase() === text.toLowerCase()) {
      return { reverseStr, palindrome: true, error: false };
    }

    return { reverseStr, palindrome: false, error: false };
  } else {
    return { error: true };
  }
};

module.exports = textTransformController;
