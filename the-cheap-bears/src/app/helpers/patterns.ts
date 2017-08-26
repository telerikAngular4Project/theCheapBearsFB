const  usernameRegEx = new RegExp('\S[_a-zA-Z0-9]{5,10}');
const passwordRegEx = new RegExp('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}');

export { usernameRegEx, passwordRegEx };
