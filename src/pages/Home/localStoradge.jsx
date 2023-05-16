
export const retrieveRecentSearches = () => {
    const storedSearches = localStorage.getItem('recentSearches');
    return storedSearches ? JSON.parse(storedSearches) : [];
};

export const saveRecentSearches = (search) => {
    const recentSearches = retrieveRecentSearches();
    const updatedSearches = [search, ...recentSearches.slice(0, 4)];
    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
};

export const retrieveResultSearches = () => {
    const storedResult = localStorage.getItem('recentResult');
    return storedResult ? JSON.parse(storedResult) : [];
};
export const saveResultSearches = (vin) => {
    const recentResult = retrieveResultSearches();
    const updatedResult = [vin, ...recentResult.slice(0, 4)];
    localStorage.setItem('recentResult', JSON.stringify(updatedResult));
};