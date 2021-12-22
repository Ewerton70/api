const customExpress = require('./config/customExpress.js')
const conexao = require('./infraestrutura/conexao')
const table = require('./infraestrutura/table')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        
        table.init(conexao)
        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))

    }
})
