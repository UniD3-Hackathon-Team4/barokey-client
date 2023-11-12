const getKeywordDetails = async (keyword) => {
    const url = `/api/keywords/${keyword}`
    console.log(url)
    const response = await fetch(url)
    return await response.json()
}

export {
    getKeywordDetails
}