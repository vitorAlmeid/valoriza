# valoriza

## Sobre o Projeto:

Api que possibilita o cadastro de usuários, tags e elogios. Possibilita também que um usuário envie um elogio para outro usuário, com uma mensagem e uma tag.

O projeto foi desenvolvido durante a sexta edição da next level week, uma semana com aulas online com algumas trilhas de diferentes tecnologias.


## Tecnologias utilizadas:
* Typescript
* Express
* SQLite
* JWT
* typeorm
* bcrypt

## Como rodar o projeto:

### clone e entre no projeto:
```bash
$ git clone https://github.com/vitorAlmeid/valoriza
$ cd valoriza
```
### installe as dependencias necessárias:
```bash
$ yarn install
```
### rode as migrations:
```bash
$ yarn typeorm migrations:run
```
### inicie o servidor:
```bash
$ yarn start
```
#### o servidor vai iniciar na porta 3000.

## rotas
### GET
* /tags
* /users
* /users/compliments/sent
* /users/compliments/received

### POST
* login
* users
* tags
* compliments


