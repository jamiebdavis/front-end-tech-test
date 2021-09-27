// api.test.js
const { fetchResults } = require("../api");
const axios = require("axios");

jest.mock("axios");

it("should fetch results", async () => {
    axios.get.mockResolvedValue({
        data: {
            results: {
                docs: [
                    {
                        country: "United Kingdom",
                        lng: -2.27472,
                        city: "Manchester",
                        searchType: "L",
                        alternative: ["GB,UK,England,Manchester Airport"],
                        index: 1,
                        bookingId: "airport-38566",
                        placeType: "A",
                        placeKey: "1472187",
                        iata: "MAN",
                        countryIso: "gb",
                        locationId: "38566",
                        name: "Manchester Airport",
                        ufi: 900038550,
                        isPopular: true,
                        region: "Greater Manchester",
                        lang: "en",
                        lat: 53.3536,
                    },
                ],
            },
        },
    });

    const results = await fetchResults("Manchester");
    expect(results[0].name).toEqual("Manchester Airport");
});
