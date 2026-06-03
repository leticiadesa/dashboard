async function buscarTime() {

    const nome = document.getElementById("nomeTime").value;

    const resposta = await fetch(
        `http://localhost:3000/times/${nome}`
    );

    const time = await resposta.json();

    document.getElementById("resultado").innerHTML = `
        <h2>${time.time}</h2>
        <p>Jogos: ${time.j}</p>
        <p>Vitórias: ${time.v}</p>
        <p>Empates: ${time.e}</p>
        <p>Derrotas: ${time.d}</p>
        <p>Gols Pró: ${time.gp}</p>
        <p>Gols Contra: ${time.gc}</p>
        <p>Pontos: ${time.pts}</p>
        <p>Saldo: ${time.sg}</p>
    `;
}