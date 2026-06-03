async function carregarGrafico() {

    const resposta = await fetch(
        "http://localhost:3000/classificacao"
    );

    const dados = await resposta.json();

    const nomes = dados.map(t => t.time);
    const pontos = dados.map(t => t.pts);

    new Chart(
        document.getElementById("grafico"),
        {
            type: "line",
            data: {
                labels: nomes,
                datasets: [{
                    label: "Pontos",
                    data: pontos
                }]
            }
        }
    );
}

carregarGrafico();
