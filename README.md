# Jogo da Velha — React

Aplicação React do jogo da velha (tic-tac-toe) para dois jogadores, desenvolvida como atividade avaliativa da Lista 1 da disciplina **Frontend Frameworks**.

## Estudante

**João Batista Moraes Lima Coutinho**

## Funcionalidades

- Tabuleiro 3 × 3 com nove casas interativas.
- X inicia a partida e os jogadores alternam após cada jogada válida.
- Bloqueio de casas já ocupadas (jogada inválida não altera o tabuleiro nem troca o jogador).
- Identificação de vitória em linhas, colunas e diagonais, com a mensagem `Vencedor: X` ou `Vencedor: O`.
- Identificação de empate quando as nove casas são preenchidas sem vencedor.
- Bloqueio de jogadas após o encerramento da partida.
- Botão **Novo Jogo** para limpar o tabuleiro e reiniciar com X.
- Indicação de quem deve jogar em seguida.

## Tecnologias

- React 18
- JavaScript
- JSX
- Vite
- CSS

## Pré-requisitos

- Node.js 18 ou superior
- npm

## Como executar

```bash
npm install
npm run dev
```

Abra no navegador o endereço informado pelo Vite, normalmente `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Estrutura

```text
tic-tac-toe-react/
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── Board.jsx
    │   └── Square.jsx
    └── utils/
        └── game.js
```

O componente `Board` concentra o estado da partida e as regras (alternância, vitória, empate e reinício). O componente `Square` recebe por props o valor a exibir e a função de clique. O `App` apenas compõe o layout da página.

## Conceitos de React praticados

- Componentização com `App`, `Board` e `Square`.
- JSX e composição de componentes.
- Passagem de dados e funções por `props`.
- Estado com `useState` no componente responsável pelo tabuleiro.
- Tratamento de eventos com `onClick`.
- Atualização imutável de arrays com `slice()`.
- Renderização de listas com `map()` e uso de `key`.
- Renderização condicional do status da partida.

## Testes realizados

| Teste | Resultado esperado | Situação |
| --- | --- | --- |
| Abrir a aplicação | Tabuleiro com nove casas vazias | OK |
| Clicar na primeira casa | Exibir X | OK |
| Clicar em outra casa | Exibir O | OK |
| Clicar em casa ocupada | Manter o símbolo original | OK |
| Completar linha, coluna ou diagonal | Exibir o vencedor correto | OK |
| Jogar após a vitória | Tabuleiro não é alterado | OK |
| Preencher nove casas sem vitória | Exibir empate | OK |
| Clicar em Novo Jogo | Limpar o tabuleiro e iniciar com X | OK |
