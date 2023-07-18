## Projeto "winnin" - Leitor de Posts do Reddit

O projeto "winnin" é uma aplicação web desenvolvida em React.js com TypeScript, seguindo a arquitetura Clean Architecture. O objetivo dessa aplicação é permitir que os usuários leiam e visualizem os posts do Reddit de um subreddit específico. Os usuários poderão escolher entre as opções "hot", "new" e "rising" para visualizar os posts mais populares, recentes e em destaque.

**Resultado Esperado**

<p align="center">
  <img src="/doc/welcome.jpg" width="100%" />
</p>

### Arquitetura Clean Architecture

A Clean Architecture é um padrão de arquitetura de software que visa criar projetos altamente coesos e com baixo acoplamento. O projeto é dividido em camadas, permitindo que as responsabilidades sejam bem separadas. As camadas principais são:

- **data**: Contém a implementação de toda a lógica de interação com fontes de dados externas, como APIs e bancos de dados. Dentro da pasta `api`, você encontra os módulos responsáveis por fazer as requisições para a API do Reddit e outras APIs (se houver). A pasta `repositories` contém as interfaces que definem os contratos de acesso a dados para as entidades do domínio.

- **domain**: Nesta pasta, estão as regras de negócio da aplicação, os modelos de dados (ou entidades) e as interfaces dos repositórios (interfaces de acesso aos dados). Os modelos de dados na pasta `models` representam as entidades principais da aplicação, como `Post` e `User`. A pasta `usecases` contém as implementações dos casos de uso, como `GetRedditPosts` e `SavePost`.

- **presentation**: É responsável pela interface de usuário e a interação do usuário com o sistema. Na pasta `components`, você encontrará os componentes React reutilizáveis, como `PostList` e `PostItem`. A pasta `pages` contém as páginas React, como a `HomePage` e a `PostDetailsPage`. A pasta `styles` pode conter os arquivos de estilo global e outros arquivos relacionados a estilos.

#### Estrutura de pastas


```
winnin/
  ├── src/
  │    ├── data/
  │    │    ├── api/
  │    │    │    ├── redditApi.ts
  │    │    │    └── otherApi.ts
  │    │    ├── repositories/
  │    │    │    ├── PostRepository.ts
  │    │    │    └── UserRepository.ts
  │    │    └── ...
  │    │
  │    ├── domain/
  │    │    ├── models/
  │    │    │    ├── Post.ts
  │    │    │    └── User.ts
  │    │    ├── repositories/
  │    │    │    ├── PostRepository.ts
  │    │    │    └── UserRepository.ts
  │    │    ├── usecases/
  │    │    │    ├── GetRedditPosts.ts
  │    │    │    ├── SavePost.ts
  │    │    │    └── ...
  │    │    └── ...
  │    │
  │    ├── presentation/
  │    │    ├── components/
  │    │    │    ├── PostList.tsx
  │    │    │    ├── PostItem.tsx
  │    │    │    └── ...
  │    │    ├── pages/
  │    │    │    ├── HomePage.tsx
  │    │    │    ├── PostDetailsPage.tsx
  │    │    │    └── ...
  │    │    ├── styles/
  │    │    │    ├── global.css
  │    │    │    └── ...
  │    │    └── ...
  │    │
  │    └── index.tsx
  └── ...
```

### Tecnologias Utilizadas

- [X] React.js
- [X] TypeScript
- [X] Axios
- [X] Jest
- [X] React Testing Library
- [X] Clean Architecture
- [X] Styled Component


### Como Rodar o Projeto

Para executar o projeto "winnin" em sua máquina local, siga os passos abaixo:

1. Certifique-se de ter o Node.js instalado. Se ainda não tiver, faça o download em https://nodejs.org/ e siga as instruções de instalação.

2. Clone este repositório para a sua máquina:

```bash
git clone https://github.com/seu-usuario/winnin.git
```

3. Navegue para a pasta do projeto:

```bash
cd winnin
```

4. Instale as dependências do projeto:

```bash
npm install
```

5. Execute o projeto em modo de desenvolvimento:

```bash
npm start
```

O servidor de desenvolvimento será iniciado e o projeto estará disponível em http://localhost:3000.

### Como Executar os Testes

Para executar os testes unitários, utilize o seguinte comando:

```bash
npm test
```

Os testes serão executados, e você poderá ver os resultados no terminal.

### Link de resultado do projeto
<a href="https://bucolic-palmier-5d21cf.netlify.app/">https://bucolic-palmier-5d21cf.netlify.app/</a>

### Contatos

<a href="https://www.linkedin.com/in/davidson-sim%C3%B5es-78b2225a/">
  <img alt="Connect with me" src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
<a href="https://www.davidsonsimoes.com.br/">
  <img alt="Connect with me" src="https://img.shields.io/badge/Website-FE7A16?style=for-the-badge" />
</a>


