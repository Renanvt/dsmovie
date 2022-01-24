# Parte estática

# Tópicos

[Ferramentas de desenvolvimento Windows](#ferramentas-de-desenvolvimento-windows)

[Extensões Utilizadas](#extensões-utilizadas)

[Criar Projeto](#criar-projeto-front-end)

[Limpando Projeto React](#limpar-o-projeto-reactjs)

[Spring Tool](#spring-tool)

[Bootstrap](#bootstrap)

[Componente Nav Bar](#componente-nav-bar)

[Rotas](#rotas)

[Tela de Formulário](#tela-de-formulário)

[Layout de Paginação](#cria-o-layout-de-paginação)

[Movie Card](#fazer-o-movie-card)

[Movie Card 2](#movie-card-2)

[Score Card](#movie-score)

[Implantação Netlify](#implantação-netlify)

# Ferramentas de desenvolvimento Windows

### Instalar o Postgres e pgAdmin

https://www.postgresql.org/download/windows/

**Download The installer**

### Instalar o Spring Boot

https://spring.io/tools

Spring Tools 4 for Eclipse

### Instalar o postman

https://www.postman.com/downloads/

### Instalar o Heroku

https://devcenter.heroku.com/articles/heroku-cli

```bash
heroku -v
```

### Instalar o NPM

https://nodejs.org/en/download/

**Windows Installer (.msi)**

# Extensões utilizadas
```
Color Highlight
ESLint
JSX HTML <tags/>
Live Server
Markdown Preview Github Styling
Visual Studio InteliCode
```

# Criar projeto Front End

```bash
yarn create react-app frontend --template typescript
```
Deletar a subpasta .git dentro de frontend

### Executar projeto

```bash
yarn start
```

# Criar projeto Backend

1. Utilizar o spring initializer https://start.spring.io/
2. Utilizar Project **Maven**, Language **Java**, Project Metadata - Group **com.devsuperior**, Artifact **dsmovie**,
Description **Projeto criado na semana Spring React**, Package name **com.devsuperior.dsmovie
3. Packaging **Jar**
4. Versão do java **17**

### Criar projeto Spring Boot no Spring Initializr com as seguintes dependências:

- Web
- JPA
- H2
- Postgres
- Security

1. Generate
2. Extrai a pasta para a raíz do projeto e renomeia pra backend

# Limpar o projeto ReactJS

- Deletar arquivos não usados
- **COMMIT**: *Project Clean*

1. pasta Public
 Apaga todo mundo e deixa só index.html

2. index.html
 Apaga os comentários
 Fazer a seguinte alteração:
 ```ts
    <meta
      name="DSMovie"

 <title>DSMovie</title>

  <noscript>Você precisa habilitar o JavaScript para este app.</noscript>
```

3. Pasta src
  Deletar os seguintes arquivos - **App.test.tsx**, **App.css**, *logo.svg**, **reportWebVitals.ts**, **setupTests.ts**

4. App.tsx
  Apaga todo a tag ```<div></div>```
  Coloca o ```<h1>```Página principal```</h1>```
  Apaga todos os imports

5. Index.css
  Apaga todo o css e deixa vazio

6. Index.tsx
  Apaga os comentários
  Apaga o **reportWebVitals** e seu import

# Spring Tool

Select a directory as workspace

D:\Jonatan-SSD\Documentos\workspaces

### Colocar o maven pra baixar as depêndencias definidas pelo spring initlzer

Project -> import -> Maven -> Existing Maven Projects -> back-end

### Ajuste no pom.xml

#### Colocar o plugin do maven para ajustar problemas
```xml
<plugin>
	<groupId>org.apache.maven.plugins</groupId>
	<artifactId>maven-resources-plugin</artifactId>
	<version>3.1.0</version>
</plugin>
```
CTRL + SHIFT + F para identar

### Evitar problema de configuração do maven
2. Clickar com o botão direito no nome do projeto -> Maven -> update project -> marcar a caixinha "force update"
   
# Bootstrap

**COMMIT**: *Bootstrap*

### Faz o seguinte comando na pasta **frontend**
```bash
yarn add bootstrap@5.1.3
```

### Testar o bootstrap

1. Faz a alteração no arquivo index.css em src
 ```css
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');

  :root {
    --color-primary: #4D41C0;
  }

  * {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  html, body {
    background-color: #E5E5E5;
  }

  a, a:hover {
    text-decoration: none;
    color: unset;
  }
```
2. Faz a alteração no arquivo index.tsx
```tsx
 import 'bootstrap/dist/css/bootstrap.css';
 import './index.css';
 ```

# Componente Nav Bar

Componente NavBar - Barra de navegação que fica na parte superior do site
**COMMIT**: *Navbar*

1. Exportar a imagem para src/assets/img
 ```ts
  import {ReactComponent as GithubIcon} from './assets/img/github.svg';
  ```
2. Mostrar imagem no componente **O componente react pode ser utilizado como sintaxe de tag**
   ```<GithubIcon />```
3. Components/NavBar/index.tsx
```ts
  import { ReactComponent as GithubIcon } from 'assets/img/github.svg';

  function Navbar() {
    return (
        <header>
    	<nav className="container">
        	<div className="dsmovie-nav-content">
            		<h1>DSMovie</h1>
            		<a href="https://github.com/devsuperior" target="_blank" rel="noreferrer">
                		<div className="dsmovie-contact-container">
                			<GithubIcon />
                 			<p className="dsmovie-contact-link">/devsuperior</p>
                		</div>
            		</a>
       		</div>
    	</nav>
	</header>
    );
  }

  export default Navbar;
  //default - só estou exportanto 1 função
```
4. ATENÇÃO: no arquivo **tsconfig.json**: 

```json   
"baseUrl": "./src" (reinicie o app)  em "compilerOptions"
```
```css
className="container"> 
```
Classe do bootstrap que demilita a largura do conteúdo

1. Aplicar o azul em toda a largura, arquivo **components/Navbar/styles.css**

```css
  header{
    background-color: var(--color-primary);
  }
```
Dessa forma irá preencher a cor azul em toda a NavBar

6. Coloca um elemento do lado do outro
```css
 .dsmovie-nav-content{
    display: flex; /*Coloca um elemento do lado do outro*/
    justify-content: space-between; /*Coloca os elementos um em cada ponta no espaço*/
 }
```

7. Muda o styles.css
```css
 header{
    background-color: var(--color-primary);
    height: 60px;
    display: flex;
    align-items:center;/*Alinhar os elementos ao centro dentro de um container verticalmente*/
 }

 .dsmovie-nav-content{
    display: flex; /*Coloca um elemento do lado do outro*/
    justify-content: space-between; /*Coloca os elementos um em cada ponta no espaço*/
    align-items: center;
    color: #FFF
 }
 .dsmovie-nav-content h1{
    margin: 0;
    font-weight: 700;
    font-size: 24px;
 }
 .dsmovie-contact-container{
    display: flex;
    align-items: center; /*Alinhando o item ao centro*/
 }

 .dsmovie-contact-link{
    margin: 0 0 0 10px;
    font-size: 12px;
 }
 ```

# Rotas

**COMMIT**: *Routes*

## Instala a biblioteca React Router DOM

```bash
yarn add react-router-dom@6.2.1 @types/react-router-dom@5.3.2
```

1. Edita o arquivo App.tsx
```tsx
  import {
    /*Componentes do React Router DOM */
    BrowserRouter, /* Inicia a configuração das rotas*/
    Routes, /* Responsável por configurar cada rota individualmente */
    Route
  } from "react-router-dom";
  import Listing from 'pages/Listing'; /*Página de listagem */
  import Form from 'pages/Form'; /*Página de formulário */
  import Navbar from "components/Navbar";

function App() {

  /*A NavBar dentro de BrowserRouter Indica que toda a página por padrão terá a NavBar */

  /*
  Route
   path="{caminho}" element={<página />}
   
   */

   /*  Rota com passagem de parâmetro cujo parametro é movieIddentro da página form
   <Route path=":movieId" element={<Form />} />
   
   Irá ficar assim:
   localhost:300/form/1
   localhost:300/form/2
   localhost:300/form/3
   ...
   */


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  }

  export default App;
```
1. Diferenciar o componente que corresponde a uma rota de um componente de pedaço de tela
  Cria a pasta **pages** em src
  Cria a pasta src/pages/**Listing**
  Cria o arquivo src/pages/Listing/**index.tsx**
  Cria a pasta src/pages/**Form**
  Cria o arquivo src/pages/Form/**index.tsx**

3. Edita o arquivo **Listing/index.tsx**
```ts
  function Listing(){
    return(
        <h1>Página de listagem</h1>
    );
  }

  export default Listing;
```

4. Edita o arquivo **Form/index.tsx**

```ts
 function Form(){
    return(
        <h1>Página de formulário</h1>
    );
 }

export default Form;
```

# Tela de Formulário

### Criando a Tela de formulário, em http://localhost:3000/form/1
**COMMIT**: *Form Layout*
1. Cria a constante movie no componente Form/index.tsx

```tsx
import './styles.css';

 Function Form() {
  const movie = {
    id: 1,
    image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
    title: "The Witcher",
    count: 2,
    score: 4.5
  };
}
```

2. cria o formulário dentro de **return()** em Form/index.tsx

```tsx
 <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <form className="dsmovie-form">
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form >
                <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
            </div >
        </div >
```
3. Cria o estilo em **Form/styles.css**

```css
.dsmovie-form-container {
    max-width: 480px;
    margin: 40px auto;
    padding: 20px;
}

.dsmovie-form {
    width: calc(100% - 20px);
}

.dsmovie-form-group {
    margin-bottom: 20px;
}

.dsmovie-form-group label {
    font-size: 12px;
    color: #aaa;
}

.dsmovie-form-btn-container {
    display: flex;
    justify-content: center;
}

.dsmovie-movie-card-image {
    width: 100%;
    border-radius: 8px 8px 0 0;
}

.dsmovie-card-bottom-container {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 10px 20px 10px;
    border-radius: 0 0 8px 8px;
}

.dsmovie-card-bottom-container h3 {
    color: #4A4A4A;
    text-align: center;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
    min-height: 40px;
}

.dsmovie-btn {
    background-color: var(--color-primary);
    font-size: 14px;
    font-weight: 700;
    height: 40px;
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```

# Cria o layout de paginação
**COMMIT**: *Pagination Layout*

1. Cria o componente Pagination em components/Pagination/index.tsx

2. Edita a page Listing

```ts
import Pagination from "components/Pagination";


function Listing(){
    return(
        <Pagination/>
    );
}

export default Listing;
```

3. Cria o arquivo **Styles.css**

```css
.dsmovie-pagination-container {
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.dsmovie-pagination-box {
    width: 180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dsmovie-pagination-box form {
    width: 100%;
    display: flex;
}

.dsmovie-pagination-button {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-primary);
    cursor: pointer;
}

.dsmovie-pagination-button svg {
    filter: brightness(0) saturate(100%) invert(26%) sepia(19%) saturate(7395%) hue-rotate(234deg) brightness(89%) contrast(92%);
}

.dsmovie-pagination-button:disabled {
    border: 1px solid #c2c2c2;
    cursor: unset;
}

.dsmovie-pagination-button:disabled svg {
    filter: none;
}

.dsmovie-pagination-container p {
    margin: 0;
    font-size: 12px;
    color: var(--color-primary);
}

.dsmovie-flip-horizontal {
    transform: rotate(180deg);
}

```

# Fazer o movie card

**COMMIT**: *MovieStars 1*
1. Exporta as imagens das estrelas para assets/img

2. Criar o componente **MovieStars/index.tsx**

```tsx
import { ReactComponent as StarFull } from 'assets/img/star-full.svg';
import { ReactComponent as StarHalf } from 'assets/img/star-half.svg';
import { ReactComponent as StarEmpty } from 'assets/img/star-empty.svg';
import './styles.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}
 

export default MovieStars;

```
3. Edita o arquivo pages/Listing/**index.tsx**
```tsx
import MovieStars from "components/MovieStars";
import Pagination from "components/Pagination";

function Listing() {
    return (
        //A função só pode exportar 1 componente, então foi colocado dentro do div ou fragment <>
        <>
            <Pagination />
            <MovieStars />
            
        </>
      );
}

export default Listing;

```
4. Estilizar o componente Movie Stars em **MavieStars/styles.css**

```css
.dsmovie-stars-container {
    width: 130px;
    display: flex;
    justify-content: space-between;
}

.dsmovie-stars-container svg {
    width: 22px;
    height: auto;
}
```

# Movie Score 
1. Cria o componente MovieScore e edita o seu index.tsx
**COMMIT**: *MovieScore*

```ts
import MovieStars from "components/MovieStars";
import './styles.css';

function MovieScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="dsmovie-score-container">
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="dsmovie-score-count">{count} avaliações</p>
        </div>
    );
}

export default MovieScore;

```
2. Cria o estilo

```css
.dsmovie-score-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.dsmovie-score-value {
    margin: 0;
    color: #FFBB3A;
    font-size: 16px;
    font-weight: 700;
}

.dsmovie-score-count {
    font-size: 12px;
    color: #989898;
    margin: 4px 0 10px 0;
}
```

3. Altera o **Listing/index.tsx**

```ts

import MovieScore from "components/MovieScore";
import Pagination from "components/Pagination";

function Listing() {
    return (
        //A função só pode exportar 1 componente, então foi colocado dentro do div ou fragment <>
        <>
            <Pagination />
            <MovieScore />
            
        </>
      );
}

export default Listing;

```
# Movie Card 2

1- Continua o componente Movie Card 2

**COMMIT**: *MovieCard2*

1. Cria o componente Movie Card em **components/MovieCard/index.tsx**

```ts
import MovieScore from "components/MovieScore";

function MovieCard() {

    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };
    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore />
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </div>
        </div>
    );
}

export default MovieCard;
```

1. Edita o **Listing/index.tsx**


```ts
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

function Listing() {
    return (
        //A função só pode exportar 1 componente, então foi colocado dentro do div ou fragment <>

        // className="row" organiza os componentes em linha e "col" em coluna

        //Por padrão o col total é 12

        //div className="col-sm-6"
        /*Esse div irá ocupar 6 colunas das 12 colunas do grid system do bootstrap ou seja cada card irá ocupar metade do meu container do bootstrap */

        /*Bootstrap Breakpoints */

        /*A partir da largura lg que é 992px, cada card vai ocupar 4 das 12 colunas, resultando em 3 cards por linha*/
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-lg-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Listing;

```

# Implantação Netlify

https://app.netlify.com/
add new site - site existente
conectar ao github

### Configuração de Deploy básico

- Base directory: frontend
- Build command: yarn build
- Publish directory: frontend/build

### Arquivo _redirects

/* /index.html 200

### Configurações adicionais

- Site settings -> Domain Management: (colocar o nome que você quiser)
- Deploys -> Trigger deploy


### Problemas de publicação 

```json
Package.json
 "resolutions": {
    "mini-css-extract-plugin": "2.4.5"
  },
```
Use o comando abaixo para npm
```bash
npm i -D --save-exact mini-css-extract-plugin@2.4.5
```

Alterar build settings para

build command: ```CI= npm run build```

Environment:
```
CI   false
```

