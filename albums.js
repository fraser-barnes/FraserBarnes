const myHeaders = new Headers();
myHeaders.append("User-Agent", "FrasersAlbums/1.0 +https://fraserbarnes.com/albums.html");

async function getAlbums() {
    const url = "https://api.discogs.com/users/fraserbarnes/wants";
    try {
        const response = await fetch(url, {
            headers: myHeaders
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}