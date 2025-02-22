document.getElementById("fetchcat-button").addEventListener("click", fetchcatData);

async function fetchcatData() {

    renderLoadingState();

    try {
        const response = await fetch("https://catfact.ninja/fact");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        renderData(data);
        console.log(data)
    } catch (error) {
        renderErrorState();

    }
}
fetchcatData()


function renderErrorState() {
    const container = document.getElementById("datagato-container");
    container.innerHTML = ""; // Clear previous data
    container.innerHTML = "<p>Failed to load data</p>";
    console.log("Failed to load data");
}

function renderLoadingState() {
    const container = document.getElementById("datagato-container");
    container.innerHTML = ""; // Clear previous data
    container.innerHTML = "<p>Loading...</p>";
    console.log("Loading...");
}

function renderData(data) {
    const container = document.getElementById("datagato-container");
    container.innerHTML = ""; // Clear previous data

    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = ` <p>${data?.fact}</p>`;
    container.appendChild(div);
}

document.getElementById("genterandom-button").addEventListener("click", fetchpeopleData);

async function fetchpeopleData() {

    renderpeopleLoadingState();

    try {
        const peopleresponse = await fetch("https://randomuser.me/api/");
        if (!peopleresponse.ok) {
            throw new Error("Network response was not ok");
        }
        const peopledata = await peopleresponse.json();
        renderpeopleData(peopledata);
        console.log(peopledata)
    } catch (error) {
        renderpeopleErrorState();

    }
}
fetchpeopleData()


function renderpeopleErrorState() {
    const container = document.getElementById("genterandom-container");
    container.innerHTML = ""; // Clear previous data
    container.innerHTML = "<p>Failed to load data</p>";
    console.log("Failed to load data");
}

function renderpeopleLoadingState() {
    const container = document.getElementById("genterandom-container");
    container.innerHTML = ""; // Clear previous data
    container.innerHTML = "<p>Loading...</p>";
    console.log("Loading...");
}

function renderpeopleData(person) {
    const container = document.getElementById("genterandom-container");
    container.innerHTML = ""; // Clear previous data

    const div = document.createElement("div");
    div.className = "item2";
    div.innerHTML = ` <img src="${person?.results[0].picture.large}" alt="Person">`;
    container.appendChild(div);
}

document.getElementById("anime-button").addEventListener("click", fetchAnimeData);

        async function fetchAnimeData() {
            let name = document.getElementById("name").value;
            let type = document.getElementById("type").value;
            let limit = document.getElementById("limit").value;

            const URL = `https://api.jikan.moe/v4/anime?q=${name}&type=${type}&limit=${limit}`;
            
            try {
                renderAnimeLoadingState(); 
                const response = await fetch(URL);
                const data = await response.json();

                if (data.data && data.data.length > 0) {
                    renderAnimeData(data.data);
                } else {
                    renderAnimeErrorState();
                }
            } catch (error) {
                console.error("Error al obtener datos:", error);
                renderAnimeErrorState();
            }
        }

        function renderAnimeLoadingState() {
            const container = document.getElementById("anime-container");
            container.innerHTML = "<p>Cargando...</p>";
        }

        function renderAnimeErrorState() {
            const container = document.getElementById("anime-container");
            container.innerHTML = "<p>No se encontraron resultados o hubo un error.</p>";
        }

        function renderAnimeData(animeList) {
            const container = document.getElementById("anime-container");
            container.innerHTML = ""; 

            animeList.forEach(anime => {
                const div = document.createElement("div");
                div.className = "item";
                div.innerHTML = `
                    <h3>${anime.title}</h3>
                    <p>Tipo: ${anime.type}</p>
                    <p>Episodios: ${anime.episodes ?? 'Desconocido'}</p>
                    <img src="${anime.images.jpg.image_url}" alt="${anime.title}" width="150">
                `;
                container.appendChild(div);
            });
        }



