export const setToken = (token) => {
  localStorage.setItem("token", "Bearer " + token);
};
export const setRefreshToken = (token) => {
  localStorage.setItem("refresh_token", token);
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const getRefreshToken = () => {
  return localStorage.getItem("refresh_token");
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refresh_token");
};
