

async function fetchDataJson() {

    let response = await fetch("https://thronesapi.com/api/v2/Characters");
    let responseAsJson = await response.json();
    renderTerms(responseAsJson);
}

function renderTerms(characters) {

    let termsRef = document.getElementById('content');
    termsRef.innerHTML = ''; 

    for (let i = 0; i < characters.length; i++) {
        let character = characters[i];

        termsRef.innerHTML += `
            <div class="card">
                <img src="${character.imageUrl}">
                <h3>${character.fullName}</h3>
                <p>${character.title}</p>
                <p>${character.family}</p>
            </div>
        `;
    }
}
