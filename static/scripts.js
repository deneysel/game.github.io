const games = [
    {
        title: "Oyun 1",
        description: "Oyun 1'in açıklaması...",
        logo: "https://example.com/game1-logo.png",
    },
    {
        title: "Oyun 2",
        description: "Oyun 2'nin açıklaması...",
        logo: "https://example.com/game2-logo.png",
    },
    {
        title: "Oyun 3",
        description: "Oyun 3'ün açıklaması...",
        logo: "https://example.com/game3-logo.png",
    },
];

const gameContainer = document.getElementById("gameContainer");

games.forEach(game => {
    const listItem = document.createElement("li");

    const gameLogo = document.createElement("img");
    gameLogo.src = game.logo;
    gameLogo.className = "game-logo";
    listItem.appendChild(gameLogo);

    const gameTitle = document.createElement("span");
    gameTitle.textContent = game.title;
    gameTitle.className = "game-title";
    listItem.appendChild(gameTitle);

    const gameDescription = document.createElement("p");
    gameDescription.textContent = game.description;
    listItem.appendChild(gameDescription);

    gameContainer.appendChild(listItem);
});

const gpuList = [
    "NVIDIA GeForce RTX 3080",
    "AMD Radeon RX 6800 XT",
    "NVIDIA GeForce GTX 1660 Ti",
];

const fetchGames = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/games");
        if (!response.ok) {
            throw new Error("API isteği başarısız oldu.");
        }
        const games = await response.json();

        games.forEach(game => {
            const gameItem = document.createElement("li");

            const gameLogo = document.createElement("img");
            gameLogo.src = game.logo;
            gameItem.appendChild(gameLogo);

            const gameTitle = document.createElement("h3");
            gameTitle.textContent = game.title;
            gameItem.appendChild(gameTitle);

            const gameDescription = document.createElement("p");
            gameDescription.textContent = game.description;
            gameItem.appendChild(gameDescription);

            gameContainer.appendChild(gameItem);
        });
    } catch (error) {
        console.error("Oyunlar alınamadı:", error);
    }
};

fetchGames();

const gpuListElement = document.getElementById("gpuList");

gpuList.forEach(gpu => {
    const gpuItem = document.createElement("div");
    gpuItem.textContent = gpu;
    gpuItem.className = "gpu-item";
    gpuItem.onclick = () => {
        searchInput.value = gpu;
        gpuListElement.classList.remove("show");
    };
    gpuListElement.appendChild(gpuItem);
});

const fetchGpus = async () => {
    try {
        const response = await fetch("http://localhost:5000/api/gpus");
        if (!response.ok) {
            throw new Error("API isteği başarısız oldu.");
        }
        const gpuList = await response.json();

        gpuList.forEach(gpu => {
            const gpuItem = document.createElement("div");
            gpuItem.textContent = gpu;
            gpuItem.className = "gpu-item";
            gpuItem.onclick = () => {
                searchInput.value = gpu;
                gpuListElement.classList.remove("show");
            };
            gpuListElement.appendChild(gpuItem);
        });
    } catch (error) {
        console.error("Ekran kartı listesi alınamadı:", error);
    }
};

const searchInput = document.getElementById("search");

searchInput.addEventListener("focus", () => {
    gpuListElement.classList.add("show");
});

searchInput.addEventListener("blur", () => {
    setTimeout(() => {
        gpuListElement.classList.remove("show");
    }, 200);
});

searchInput.addEventListener("focus", () => {
    gpuListElement.classList.add("show");
    fetchGpus();
});

searchInput.addEventListener("blur", () => {
    setTimeout(() => {
        gpuListElement.classList.remove("show");
    }, 200);
});