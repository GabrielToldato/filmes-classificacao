export function avaliarFilmes(filmes) {
  const resultados = [];

  for (let i = 0; i < filmes.length; i++) {
    const filme = filmes[i];
    const avaliacoes = filme.avaliacoes;

    let soma = 0;
    for (let j = 0; j < avaliacoes.length; j++) {
      soma += avaliacoes[j];
    }

    const totalVotos = avaliacoes.length;
    const media = soma / totalVotos;

    let classificacao;
    if (media >= 4) {
      classificacao = "filme recomendado";
    } else if (media >= 3) {
      classificacao = "filme razoável";
    } else {
      classificacao = "filme ruim";
    }

    resultados.push({
      nome: filme.nome,
      totalVotos,
      media: Number(media.toFixed(2)),
      classificacao
    });
  }

  return resultados;
}
