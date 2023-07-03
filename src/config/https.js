import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: "https://api.spoonacular.com/",
//   headers: {
//     "Content-Type": "application/json",
//     "x-api-key": "7ba649eaab104f77b4960286f3646b46"
//   }
// });

export const axiosInstance = axios.create({
    baseURL: 'https://moviesdatabase.p.rapidapi.com/',
    headers: {
        'X-RapidAPI-Key': '2664b360b1msh9e5411aacde5777p12fdfajsn81d237da9dc6',
        'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
});

axiosInstance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }
);
