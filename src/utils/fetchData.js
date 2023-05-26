export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "28c5cf6ad9msh76c01752fcab230p1fe5a0jsn1762530c2aa6",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "28c5cf6ad9msh76c01752fcab230p1fe5a0jsn1762530c2aa6",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
