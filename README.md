# node-extras

Este projeto é uma coleção de exemplos e exercícios em Node.js. Ele inclui scripts para manipulação de arquivos, agendamento de tarefas, operações assíncronas, leitura de dados CSV, e um servidor Express simples.

## Descrição

O repositório `node-extras` contém exemplos práticos de Node.js, incluindo:

- Manipulação de arquivos e pastas
- Operações assíncronas e síncronas
- Agendamento de tarefas
- Leitura de arquivos CSV
- Servidor web básico com Express
- Utilização de bibliotecas como `cowsay` e `progress`

## Instalação

1. Clone o repositório:
   ```
   git clone https://github.com/gutoffline/node-extras.git
   cd node-extras
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente: Crie um arquivo `.env` na raiz com as configurações necessárias (ex: `PORTA=3000`).

## Uso

### Servidor Principal

- `npm start`: Executa o servidor Express (`index.js`) em `http://localhost:3000`.
- `npm run dev`: Executa o servidor em modo de desenvolvimento com Nodemon.

### Exemplos Individuais

Execute os scripts diretamente com Node.js:

- `node agendamento.js`: Demonstra agendamento com `setTimeout` e `setInterval`, exibindo mensagens e usando `cowsay`.
- `node arquivo.js`: Manipulação assíncrona de arquivos (leitura e escrita em `clientes.txt`).
- `node arquivo2.js`: Manipulação síncrona de arquivos (similar ao arquivo.js).
- `node assincrono.js`: Exemplo de operações assíncronas com Promises e async/await vs `setTimeout`.
- `node barra.js`: Exibe uma barra de progresso usando a biblioteca `progress`.
- `node frota.js`: (Módulo) Exporta objetos de carros (usado pelo index.js).
- `node pastas.js`: Demonstra criação, verificação e renomeação de pastas.
- `node sistema.js`: Exibe informações do sistema operacional (arquitetura, CPUs, memória livre).
- `node vaca.js`: Usa `cowsay` para exibir uma mensagem divertida.
- `node desafio01/campeonato.js`: Lê e exibe dados de times do Brasileirão de um arquivo CSV.
- `node desafio02/uf.js`: Gera uma lista de estados brasileiros em um arquivo de texto.

## Estrutura do Projeto

```
node-extras/
├── agendamento.js          # Agendamento e cowsay
├── arquivo.js              # Manipulação assíncrona de arquivos
├── arquivo2.js             # Manipulação síncrona de arquivos
├── assincrono.js           # Operações assíncronas
├── barra.js                # Barra de progresso
├── clientes.txt            # Arquivo de dados de clientes
├── frota.js                # Módulo de frota de carros
├── index.js                # Servidor Express simples
├── package.json            # Dependências do projeto
├── pastas.js               # Operações com pastas
├── sistema.js              # Informações do sistema
├── vaca.js                 # Exemplo com cowsay
├── vendas.txt              # Arquivo de vendas
├── desafio01/              # Desafio 1: Campeonato
│   ├── campeonato.js       # Leitura de CSV de times
│   └── times_brasileirao.csv # Dados dos times
├── desafio02/              # Desafio 2: Estados
│   ├── estados.txt         # Lista de estados gerada
│   └── uf.js               # Script para gerar estados
├── fotos/                  # Pasta para fotos
├── icones/                 # Ícones
├── icons/                  # Mais ícones
├── routes/                 # Rotas (exemplo)
│   └── produtosRoutes.js   # Rotas para produtos (não integrado)
└── README.md               # Esta documentação
```

## Dependências

- `express`: Framework web para Node.js.
- `dotenv`: Carregamento de variáveis de ambiente.
- `fs-extra`: Utilitários para sistema de arquivos (embora não usado diretamente).
- `cowsay`: Biblioteca para mensagens divertidas no terminal.
- `progress`: Barra de progresso.
- `nodemon`: Ferramenta para reinicialização automática durante desenvolvimento.

## Licença

Este projeto está licenciado sob a ISC License. Veja o arquivo `LICENSE` para mais detalhes.

## Contribuição

Sinta-se à vontade para contribuir com melhorias, correções ou novos exemplos. Abra uma issue ou envie um pull request.

## Autor

Gutoffline

