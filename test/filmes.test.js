import { avaliarFilmes } from "../source/filmes.js";
import assert from "assert";

describe("avaliarFilmes", () => {
  const filmes = [
    { nome: "minha mãe é uma peça", avaliacoes: [5, 4, 4, 4, 5] },
    { nome: "saneamento basico", avaliacoes: [3, 4, 2, 3, 4] },
    { nome: "se eu fosse você", avaliacoes: [1, 2, 3] }
  ];

  it("CT 01 - Deve retornar o total de votos de cada filme", () => {
    const resultado = avaliarFilmes(filmes);
    assert.strictEqual(resultado[0].totalVotos, 5);
    assert.strictEqual(resultado[1].totalVotos, 5);
    assert.strictEqual(resultado[2].totalVotos, 3);
  });

  it("CT 02 - Deve calcular a média de notas corretamente", () => {
    const resultado = avaliarFilmes(filmes);
    assert.strictEqual(resultado[0].media, 4.4);
    assert.strictEqual(resultado[1].media, 3.2);
    assert.strictEqual(resultado[2].media, 2);
  });

  it("CT 03 - Deve classificar como 'filme recomendado' quando média >= 4", () => {
    const resultado = avaliarFilmes(filmes);
    assert.strictEqual(resultado[0].classificacao, "filme recomendado");
  });

  it("CT 04 - Deve classificar como 'filme razoável' quando média entre 3 e 4", () => {
    const resultado = avaliarFilmes(filmes);
    assert.strictEqual(resultado[1].classificacao, "filme razoável");
  });

  it("CT 05 - Deve classificar como 'filme ruim' quando média < 3", () => {
    const resultado = avaliarFilmes(filmes);
    assert.strictEqual(resultado[2].classificacao, "filme ruim");
  });
});
