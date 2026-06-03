async function carregar() {

    const resposta = await fetch(
        "http://localhost:3000/desempenho"
    );

    const dados = await resposta.json();

    new Chart(
        document.getElementById("grafico"),
        {
            type: "pie",
            data: {
                labels: dados.map(t => t.time),
                datasets: [{
                    label: "Desempenho (%)",
                    data: dados.map(
                        t => Number(t.desempenho.replace("%",""))
                    )
                }]
            }
        }
    );
}

carregar();
