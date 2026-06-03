async function carregar() {

    const resposta = await fetch(
        "http://localhost:3000/classificados"
    );

    const dados = await resposta.json();

    const lista = document.getElementById("lista");

    dados.forEach(time => {

        lista.innerHTML += `
            <li>${time.time} - ${time.pts} pts</li>
        `;
    });
}

carregar();