// Problema da utilização de Objetos Literais

const usuario1 = {
    noma: 'Ana',
    email: 'ana@ana.com',
    senha: '123456',
    cadastro: new Date()
}

const usuario2 = {
    noma: 'Carlos',
    email: 'carlos@caros.com',
    dataCadastro: new Date()
}

console.log(usuario1, usuario2)