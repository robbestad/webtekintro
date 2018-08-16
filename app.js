const cards = document.querySelector("#cards");
fetch("cats.json")
    .then(data => data.json())
    .then(json => {
        json.forEach(entry=>{
            const cardentry = document.createElement("div");
            const img = document.createElement("img");
            img.src=entry.imageUrl;
            cardentry.append(img);
            cards.append(cardentry);
        })

    })

