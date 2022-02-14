#  Aquecimento Docker
Este repositório faz parte da monitoria matinal da Turma 16 - A da Trybe e contém dois exemplos de uso do docker. Um primeiro bem simples, porém muito útil para quem tiver problemas com a instalação de dependências de projetos, e um segundo um pouco mais complexo, abordando a orquestração de containers com docker-compose.

## 1º exemplo
O primeiro exemplo está na branch **master** do repositório.

### Antes de começar
Assim que clonar o repositório execute o comando: ```npm install``` para baixar todas dependências do projeto.

Se você já possui o mysql instalado na máquina, certifique-se de desligar o serviço antes de seguir para os próximos passos.

- Linux
  - `systemctl stop mysql`
- Mac
  - `brew services stop mysql`

*Obs: Os comandos podem variar dependendo de como foi feita a instalação.*

### Aplicação
A ideia desse primeiro exemplo é demonstrar que podemos realizar uma conexão *node <-> mysql* mesmo sem ter instalado o mysql em nossa máquina, ou com seu serviço desligado.

O arquivo `index.js`, localizado na raiz do projeto, simplesmente cria um banco de dados com o nome passado na variável *dbName* e depois mostra no console todos os bancos existentes na instância mysql em questão.

### Passos
Com as dependências instaladas, primeiramente tente executar o comando `npm start` para rodar a aplicação.

Provavelmente, o seguinte erro será retornado:

![mysql error](https://i.ibb.co/myzqnpD/error-Docker-Mysql.png)

Esse erro indica que não foi possível se conectar com a instância mysql, pois ela não existe ou não está ativa.

Com docker podemos resolver essa questão sem precisar instalar o mysql diretamente na nossa máquina.
Execute o seguinte comando no terminal:

`docker run --name docker-mysql-node -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql`

Esse comando faz com que uma instância do mysql seja executada dentro de um container a partir de uma imagem do mysql, que pode ser consultada em https://hub.docker.com/_/mysql

Depois de ter criado o container docker-mysql-node, execute novamente o `npm start` e verá que a aplicação ira rodar normalmente. A mágica do docker foi realizada com sucesso.

## 2º exemplo
Antes de trocar de branch, delete a pasta `node_modules` e o arquivo `package-lock.json` da branch **master**
Mude para a branch **orquestrando** para iniciar o segundo exemplo.

*Obs: esse repositório faz parte da monitoria em grupo da Turma 16 - Tribo A da Trybe. Não trouxe muitas explicações dentro do repositório pois essas serão abordadas durante a monitoria*
