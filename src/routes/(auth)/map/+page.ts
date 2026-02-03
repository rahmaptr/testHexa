import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
    const response = await fetch("https://r2.datahub.io/clvyjaryy0000la0cxieg4o8o/main/raw/data/countries.geojson", {
        method: "GET"
    })

    const data = await response.json();

    return { data: data };
}