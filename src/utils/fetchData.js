export const exerciseOptions = {
  method: "GET",
  port: null,
  path: "/status",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return "No Relevant Data Found";
  }
};
