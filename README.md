# node-extras

Uma coleção de exemplos, exercícios e pequenos utilitários em **Node.js** para aprender conceitos básicos e intermediários da plataforma.

##  Sobre o projeto

Este repositório reúne vários exemplos práticos, incluindo:

- Manipulação de arquivos e pastas (sync e async)
- Agendamento de tarefas com `setTimeout` / `setInterval`
- Operações assíncronas (Promises, async/await)
- Leitura e processamento de CSV
- Pequeno servidor web com **Express**
- Uso de bibliotecas como `cowsay` e `progress`
- Desafios com dados de estados e campeonato brasileiro

##  Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/gutoffline/node-extras.git
   cd node-extras
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. (Opcional) Crie um arquivo `.env` na raiz para personalizar a porta do servidor:
   ```env
   PORTA=3000
   ```

> Se você não criar `.env`, o servidor usará a porta padrão `3000`.

##  Execução

### Servidor principal (Express)

- `npm start`  inicia o servidor em `http://localhost:3000`
- `npm run dev`  inicia o servidor com **nodemon** (recarrega automaticamente)

### Scripts individuais (Node)

Execute diretamente com `node`:

- `node agendamento.js`  agendamento com `setTimeout` e `setInterval` + `cowsay`
- `node arquivo.js`  manipulação assíncrona de arquivos (`clientes.txt`)
- `node arquivo2.js`  manipulação síncrona de arquivos
- `node assincrono.js`  exemplo de async/await + Promises
- `node barra.js`  barra de progresso usando `progress`
- `node frota.js`  módulo de exemplo que exporta objetos de carros
- `node pastas.js`  cria, verifica e renomeia pastas
- `node sistema.js`  mostra informações do sistema (CPU, memória, plataforma)
- `node vaca.js`  usa `cowsay` para exibir mensagem no terminal

### Desafios

- `node desafio01/campeonato.js`  lê dados do CSV (`desafio01/times_brasileirao.csv`) e exibe informações dos times
- `node desafio02/uf.js`  gera o arquivo `desafio02/estados.txt` com a lista de estados brasileiros
- `node desafio03/04.js`  (exercício em `desafio03`) demonstra lógica adicional (ver arquivo para detalhes)

##  Estrutura do Projeto

```
node-extras/
 agendamento.js               # Agendamento e cowsay
 arquivo.js                   # Manipulação assíncrona de arquivos
 arquivo2.js                  # Manipulação síncrona de arquivos
 assincrono.js                # Operações assíncronas
 barra.js                     # Barra de progresso
 clientes.txt                 # Dados de exemplo de clientes
 frota.js                     # Módulo de frota de carros
 index.js                     # Servidor Express simples
 package.json                 # Dependências e scripts
 pastas.js                    # Operações com pastas
 sistema.js                   # Informações do sistema
 vaca.js                      # Exemplo com cowsay
 vendas.txt                   # Dados de exemplo de vendas
 desafio01/                   # Desafio 1: Campeonato
    campeonato.js            # Leitura de CSV de times
    times_brasileirao.csv    # Dados dos times
 desafio02/                   # Desafio 2: Estados
    estados.txt              # Lista de estados gerada
    uf.js                    # Script para gerar estados
 desafio03/                   # Desafio 3: (exercícios adicionais)
    01.js
    02.js
    03.js
    04.js
 fotos/                       # Pasta para fotos
 icones/                      # Ícones (português)
 icons/                       # Ícones (inglês)
 README.md                    # Documentação do projeto
```

##  Dependências

- `express`  framework web para Node.js
- `dotenv`  carregamento de variáveis de ambiente
- `fs-extra`  utilitários adicionais do sistema de arquivos (pode não ser usado em todos os scripts)
- `cowsay`  mensagem divertida no terminal
- `progress`  barra de progresso
- `nodemon`  reinicia o servidor automaticamente em desenvolvimento

##  Licença

Este projeto está licenciado sob a **ISC License**. Veja o arquivo `LICENSE` para mais detalhes.

##  Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request com melhorias, correções ou novos exemplos.

##  Autor

Gutoffline
