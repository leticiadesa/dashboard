async function carregar() {

    const resposta = await fetch(
        "http://localhost:3000/ordenados"
    );

    const dados = await resposta.json();

    new Chart(
        document.getElementById("grafico"),
        {
            type: "bar",
            data: {
                labels: dados.map(t => t.time),
                datasets: [{
                    label: "Pontos",
                    data: dados.map(t => t.pts)
                }]
            }
        }
    );
}

carregar();