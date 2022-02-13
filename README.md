#  Aquecimento Docker
Este repositório faz parte da monitoria matinal da Turma 16 - A da Trybe e contém dois exemplos de uso do docker. Um primeiro bem simples, porém muito útil para quem tiver problemas com a instalação de dependências de projetos, e um segundo um pouco mais complexo, abordando a orquestração de containers com docker-compose.

## 2º exemplo
O segundo exemplo está na branch **orquestrando**.

### Antes de começar
Se você já possui o mysql instalado na máquina, certifique-se de desligar o serviço antes de seguir para os próximos passos.

- Linux
  - `systemctl stop mysql`
- Mac
  - `brew services stop mysql`

*Obs: Os comandos podem variar dependendo de como foi feita a instalação.*

### Aplicação
A ideia desse exemplo é demonstrar que podemos automatizar o processo de criar multiplos containers e realizar uma conexão entre esses diferentes containers, mesmo sem ter instalado o mysql ou o node em nossa máquina.

O seu funcionamento é bem simples. A aplicação conecta com o banco mysql e retorna todas as linhas da tabela `Product` na rota "/" (http://localhost:5000/),

*Obs: Essa tabela é inicialmente populada a partir do arquivo `/db/initialdata.sql`.*

### Passos
Com apenas um comando, conseguimos rodar nossa aplicação em um container, o banco de dados em outro container e ainda fazer a conexão entre esses dois servições.

Na raiz do repositório, execute:
`docker-compose up`

Esse comando ira orquestrar nossos containers com base no conteúdo do arquivo `docker-compose.yaml`.
Aguarde uma mensagem semelhante a seguinte:

![status ok](https://i.ibb.co/wzgR11b/docker-Compose-Ok.png)

Podemos então checar na rota http://localhost:5000/ se nossa aplicação está rodando como esperamos.

*Obs: esse repositório faz parte da monitoria em grupo da Turma 16 - Tribo A da Trybe. Não trouxe muitas explicações dentro do repositório pois essas serão abordadas durante a monitoria*