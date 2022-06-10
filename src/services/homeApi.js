import axios from 'axios';

export function fetchHomeData() {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res)
    .catch(function (error) {
      // handle error
      console.log(error);
    });
}
