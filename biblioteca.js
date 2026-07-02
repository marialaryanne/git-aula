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
    },

    devolver(nome) {
        for (let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i];
            if (p.nome === nome) {
                if (p.disponivel == false) {
                    p.disponivel = true;
                    p.alugado = false;
                    p.estoque = 1;
                    console.log("Livro", nome, "devolvido com sucesso!");
                    return;
                } else {
                    console.log("O", nome, "ja esta disponivel!")
                    return;
                }
            }
        }
        console.log("O", nome, "Nao foi encontrado!!")
    },
    
    removerLivro(nome){
        for(let i = 0; i < this.livros.length; i++) {
            if(this.livros[i].nome.toLowerCase() === nome.toLowerCase()) {
                const removido = this.livros[i];
                this.livros.splice(i, 1);
                console.log("Livro removido", removido.nome);
                return;
            }
        } console.log("Produto não encontrado");
    },

    buscarLivro(nome) {
        for(let i = 0; i < this.livros.length; i++) {
            const p = this.livros[i]
            if(p.nome.toLowerCase() === nome.toLowerCase()) {
                console.log("Nome: " + p.nome);
                console.log("Estoque: " + p.estoque)
                return p;
            }
        }
        console.log("Livro não encontrado");
        return null
    }
}



biblioteca.adicionarLivros(
    "As 48 Leis do Poder",
    "Robert Grenne",
    "Negócios e Desenvolvimento Pessoal",
    210
);

biblioteca.adicionarLivros(
    "Pai Rico, Pai Pobre",
    "Robert Kiyosaki",
    "Finanças",
    150
);

biblioteca.adicionarLivros(
    "O Homem Mais Rico da Babilônia",
    "George S. Clason",
    "Finanças",
    120
);

biblioteca.adicionarLivros(
    "Hábitos Atômicos",
    "James Clear",
    "Desenvolvimento Pessoal",
    180
);

biblioteca.adicionarLivros(
    "O Poder do Hábito",
    "Charles Duhigg",
    "Desenvolvimento Pessoal",
    160
);

biblioteca.adicionarLivros(
    "A Arte da Guerra",
    "Sun Tzu",
    "Estratégia",
    90
);

biblioteca.adicionarLivros(
    "O Príncipe",
    "Nicolau Maquiavel",
    "Política",
    80
);

biblioteca.adicionarLivros(
    "Mais Esperto que o Diabo",
    "Napoleon Hill",
    "Desenvolvimento Pessoal",
    140
);

biblioteca.adicionarLivros(
    "Pense e Enriqueça",
    "Napoleon Hill",
    "Finanças",
    170
);

biblioteca.adicionarLivros(
    "O Milagre da Manhã",
    "Hal Elrod",
    "Desenvolvimento Pessoal",
    130
);

biblioteca.adicionarLivros(
    "Quem Pensa Enriquece",
    "Napoleon Hill",
    "Finanças",
    110
);

console.log("\n---------------- LISTA DE LIVROS ---------------")

biblioteca.mostrarLivros();

console.log("\n------------------------------------------------")

console.log("\n---------------- ALUGUEL DE LIVROS --------------------")

biblioteca.alugar("As 48 Leis do Poder");

console.log("\n----------------------------------------------------")

console.log("\n---------------- DEVOLUÇÂO DE LIVROS -----------------------")

biblioteca.devolver("As 48 Leis do Poder");

console.log("\n-------------------------------------------------------")

console.log("\n----------------- ALERTA DE LIVROS REMOVIDOS --------------------")

biblioteca.removerLivro("As 48 Leis do Poder")

console.log("\n-------------------------------------------------------")

console.log("\n----------------- BUSCA DE LIVROS --------------------")

biblioteca.buscarLivro("O Príncipe")

console.log("\n-------------------------------------------------------")
