const usernameRegEx = /\S[_a-zA-Z0-9]{5,10}/;
const passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/;

export { usernameRegEx, passwordRegEx };
