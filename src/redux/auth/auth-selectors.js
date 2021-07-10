const getUserName = state => state.auth.user.name;
const getUserEmail = state => state.auth.user.email;
const getUserToken = state => state.auth.user.token;
const getAuthStatus = state => state.auth.isLoggedIn;

const exports = {
  getUserName,
  getUserEmail,
  getAuthStatus,
  getUserToken,
};
export default exports;
