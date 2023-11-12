const getKeywordDetails = async (keyword) => {
  const url = `/api/keywords/${keyword}`;
  const response = await fetch(url);
  return await response.json();
};

export { getKeywordDetails };
