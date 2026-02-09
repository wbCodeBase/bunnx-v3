
export default async function graphqlRequest(query) {
    const url = "https://wordpress-1228935-4384187.cloudwaysapps.com/graphql";
    const headers = { "content-type": 'application/json' };

    const res = await fetch(url, {
        headers,
        method: 'POST',
        body: JSON.stringify(query),
        next: { revalidate: 60 }, // ISR: Updates data every 60 seconds
    });

    const resJson = await res.json();
    return resJson

}