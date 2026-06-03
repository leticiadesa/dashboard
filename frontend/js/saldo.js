async function carregarSaldo() {

    const resposta = await fetch(
        "http://localhost:3000/saldo"
    );

    const dados = await resposta.json();

    new Chart(
        document.getElementById("graficoSaldo"),
        {
            type: "bar",
            data: {
                labels: dados.map(t => t.time),
                datasets: [{
                    label: "Saldo",
                    data: dados.map(t => t.sg)
                }]
            }
        }
    );
}

carregarSaldo();