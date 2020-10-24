import Alert from 'react-s-alert';
var axios = require("axios");

export const jwtToken = localStorage.getItem("authorization");

axios.interceptors.request.use(
  function(config) {
    if (jwtToken) {
      
      config.headers["Authorization"] = "Bearer " + jwtToken;
      config.headers["Access-Control-Allow-Origin"] =  "*";
      config.headers["Access-Control-Allow-Headers"] =  "Origin, Content-Type, Authorization";
      
    }
    return config;
  },
  function(err) {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use((response) => {
  if(response.status === 401 || response.status === 403) {
      Alert.error('Vous n\'êtes pas autorisé.', {
      position: 'bottom-left',
      effect: 'stackslide',
      timeout: 'none'});
  }
  return response;
}, (error) => {
  if (error.response && error.response.data) {
      return Promise.reject(error.response.data);
  }
  return Promise.reject(error.message);
});