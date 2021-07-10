const getUserName = state => state.auth.user.name;
const getUserToken = state => state.auth.user.token;
const getAuthStatus = state => state.auth.isLoggedIn;

const exports = {
  getUserName,
  getAuthStatus,
  getUserToken,
};
export default exports;
