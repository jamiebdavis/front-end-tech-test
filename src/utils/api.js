// API search function
const axios = require("axios");

export const fetchResults = async (search, count = 6) => {
    try {
        const res = await axios.get(
            `https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=${count}&solrTerm=${search}`
        );
        const data = await res.data.results.docs;
        return data;
    } catch (error) {
        console.log("error", error);
        return [];
    }
};
