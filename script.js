const lista = document.getElementById("lista-receitas");

function exibirReceitas() {
	lista.innerHTML = receitas
		.map(
			(receita) => `
    <article class="receita">
      <img src="${receita.imagem}" alt="${receita.titulo}">
      <div class="receita-content">
        <h2>${receita.titulo}</h2>
        <div class="info">
          <span>⏱️ ${receita.tempo}</span>
          <span>🔥 ${receita.dificuldade}</span>
        </div>
        <p>${receita.descricao}</p>
        <button onclick="verReceita('${receita.titulo}')">Ver receita</button>
      </div>
    </article>
  `
		)
		.join("");
}

function verReceita(titulo) {
	alert(`📖 Em breve: detalhes da receita "${titulo}"!`);
}

document.addEventListener("DOMContentLoaded", exibirReceitas);
