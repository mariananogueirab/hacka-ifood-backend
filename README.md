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
Detalhes de uma receita;

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

A API consta com 3 rotas principais: 
* `/user`
  * `/` [`POST`]  Cria um novo usuário;
  * `/restrictions` [`PUT`] Atualiza as restrições alimentares;
* `/login`
  * `/` [`POST`]  Faz login;
* `/recipes`
  * `/` [`POST`]  Cria uma nova receita;
  * `/insert-many` [`POST`] Cria várias receitas de uma vez;
  * `/all` [`GET`] Exibe todas as receitas de acordo com o perfil do usuário;
  * `/:id` [`GET`] Exibe os detalhes de uma receita;
  * `/` [`GET`]  Exibe as receitas filtradas de acordo com o título;

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
  "name": "mariananogueira_",
  "email": "mariananbp@gmail.com",
  "password": "mari123",
  "address": "Rua 1033A",
  "restrictions": ["intolerancia a lactose", "castanhas"],
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

|   name   |  email   |  password   |  address   |  restrictions   |
| :------: | :------: | :---------: | :--------: | :-------------: |
| `string` | `string` |   `string`  |  `string`  |     `array`     |

---

* Recipes

O banco terá uma coleção chamada `Recipes`, apenas para meios de visibilidade. O ideal é usar o banco disponível em RecipeNLG, pois contém cerca de 2 milhões de receitas. Como o tempo era limitado e não tínhamos o conhecimento para importar um banco em Python, decidimos por mockar algumas receitas no mongoDB.

A estrutura da receita segue a mesma de RecipeNLG, adicionamos apenas uma imagem para melhorar a visualização do usuário.

```json
{
    "title": "No-Bake Nut Cookies",
    "ingredients": ["1 c. firmly packed brown sugar", "1/2 c. evaporated milk", "1/2 tsp. vanilla", "1/2 c. broken nuts (pecans)", "2 Tbsp. butter or margarine", "3 1/2 c. bite size shredded rice biscuits"],
    "directions": ["In a heavy 2-quart saucepan, mix brown sugar, nuts, evaporated milk and butter or margarine.", "Stir over medium heat until mixture bubbles all over top.", "Boil and stir 5 minutes more. Take off heat.", "Stir in vanilla and cereal; mix well.", "Using 2 teaspoons, drop and shape into 30 clusters on wax paper.", "Let stand until firm, about 30 minutes."],
    "link": "www.cookbooks.com/Recipe-Details.aspx?id=44874",
    "source": "Gathered",
    "NER": ["brown sugar", "milk", "vanilla", "nuts", "butter", "bite size shredded rice biscuits"],
    "image": "https://i.pinimg.com/originals/62/49/18/624918bd9cb58d152378c924ab84c4b0.jpg",
  }
```

A receita está em inglês, então será necessário utilizar uma biblioteca de tradução automática. Como o tempo é curto, não implementamos essa função.


Estrutura da tabela:

|   title   |  ingredients |  directions  |   link   |  source   |   NER   |   image   |
| :-------: | :----------: | :----------: | :------: | :-------: | :-----: | :-------: |
| `string`  |   `array`    |    `array`   | `string` |  `string` | `array` |  `string` |

---

## Para testar o projeto

- Para testar os arquivos separadamente, digite no seu terminal:

`NAME=<nome_do_arquivo> npm test`

- Para testar todos os arquivos juntos, digite no seu terminal:

`npm test`

---