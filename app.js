var dogs = []
var cards = document.querySelector("#cards");
fetch("cats.json")
    .then(data => data.json())
    .then(json => {
        json.forEach(entry=>{
            console.log(entry.imageUrl)
            let cardentry = document.createElement("div");
            let img = document.createElement("img");
            img.src=entry.imageUrl;
            cardentry.append(img)
            cards.append(cardentry)
        })

    })

