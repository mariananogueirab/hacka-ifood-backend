# Backend Developer Challenge - HackaIFood

## Contexto:

---

Dentro da nossa vertical de Restaurantes, temos um time que olha para o catálogo. Eles usam informações de receitas e ingredientes para saber se algum item do cardápio potencialmente pode ter glúten, ser vegetariano ou vegano. Essa identificação acontece através de uma inteligência artificial construída aqui dentro do iFood. Agora, nosso desafio é desbravar outras oportunidades em que a identificação de receitas e/ou ingredientes possa ser aplicada - seja na nossa vertical de Restaurantes, seja na de Mercado.

Por isso, perguntamos: que outros produtos ou modelos de negócio você enxerga que podem ser construídos levando em consideração receitas e ingredientes? Está permitido o uso de tecnologias dos mais diversos tipos, desde que
contribuam para nosso objetivo de tornar a vida dos nossos consumidores mais prática e potencializar as vendas dos nossos parceiros.

Então, chame seus amigos e traga suas ideias mais incríveis para repensar o
processo de compras de alimentos, das prateleiras dos mercados às nossas casas,
utilizando inteligência artificial, dados, e qualquer outro recurso que sua
imaginação permitir!

---

## Funcionalidades:
Cadastrar um usuário novo;
Fazer login;
Cadastro de restrições alimentares;
Sugestão de receitas;

---

## Instruções para rodar o projeto local

1. Pre-requisitos para rodar o projeto:

- NPM

2. Clone o repositório:

- Copie o ssh do projeto `git@github.com:mariananogueirab/hacka-ifood-backend.git`

- Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

  * `git clone git@github.com:mariananogueirab/hacka-ifood-backend.git`
  * `cd hacka-ifood-backend`
  * `npm install`
  * `npm start`

---

## Modo de utilização

A API consta com 4 rotas principais: 
* `/user`
  * `/` [`POST`]  Cria um novo usuário;
  * `/restrictions` [`PUT`] Atualiza as restrições alimentares;
* `/login`
  * `/` [`POST`]  Faz login;

---

## Modo de desenvolvimento

---

### Tecnologias

---

Foi utilizado para o desenvolvimento desse projeto o NodeJS com Express para a criação básica da api, Mocha/Chai para a criação dos testes de integração.

---

### Banco de dados

O banco escolhido para a aplicação foi `Mongodb`, pela agilidade no desenvolvimento, facilidade de adição de novas informações sem necessitar re-estruturar toda a estrutura e pela robustes para lidar com grande volume de requisições.

---

#### Collections:

* Users

O banco terá uma coleção chamada `Users`.
As requisições serão feitas através da rota `/user`.

A requisição para a criação de usuário seguirá o formato:

```json
{
  "username": "mariananogueira_",
  "email": "mariananbp@gmail.com",
  "password": "mari123",
  "restrictions": ["intolerancia a lactose", "castanhas"]
}
```

A requisição para login seguirá o formato:

```json
{
  "email": "mariananbp@gmail.com",
  "password": "mari123"
}
```

Estrutura da tabela:

|   username   |  email   |  password   |  restrictions   |
| :----------: | :------: | :---------: | :-------------: |
|   `string`   | `string` |   `string`  |     `array`     |

---

## Para testar o projeto

- Para testar os arquivos separadamente, digite no seu terminal:

`NAME=<nome_do_arquivo> npm test`

- Para testar todos os arquivos juntos, digite no seu terminal:

`npm test`

---