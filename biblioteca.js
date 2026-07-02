const biblioteca = {
    livros: [],

    adicionarLivros(nome, autor, categoria, estoque) {
        const livro = {
            nome: nome,
            autor: autor,
            categoria: categoria,
            estoque: estoque,
            disponivel: true,
            alugado: false,
            vezesAlugado: 0
        };

        this.livros.push(livro);

        console.log("Livro adicionado:", livro.nome);
    },

    mostrarLivros() {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];
            console.log(`${p.nome} - ${p.autor}`);
        }
    },

    alugar(nome) {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];

            if (p.nome === nome) {
                if (p.disponivel && p.estoque > 0) {
                    p.disponivel = false;
                    p.alugado = true;
                    p.vezesAlugado++;
                    p.estoque--;

                    console.log(nome + " alugado com sucesso");
                } else if (p.estoque <= 0) {
                    console.log("O livro " + nome + " está sem estoque!");
                } else {
                    console.log("O livro " + nome + " já está alugado!");
                }

                return; // encerra a função quando encontra o livro
            }
        }

        console.log("O livro " + nome + " não existe.");
    }
}



biblioteca.adicionarLivros(
    "magico de oz",
    "L. Frank Baum",
    "o mundo preto e branco",
    122
);

biblioteca.mostrarLivros();

biblioteca.alugar("magico de oz");