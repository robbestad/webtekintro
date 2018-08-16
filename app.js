const cards = document.querySelector("#cards");
fetch("https://acandodogapi.azurewebsites.net/dogs.json")
    .then(data => data.json())
    .then(json => {
        json.forEach(entry=>{
            const cardentry = document.createElement("div");
            const img = document.createElement("img");
            img.src="https://acandodogapi.azurewebsites.net/"+entry.imageUrl;
            cardentry.append(img);
            cards.append(cardentry);
        })

    })

