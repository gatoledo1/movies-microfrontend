
# Portal de Filmes com Microfrontend 🚀

Este repositório contém duas aplicações React criada com `create-react-app`. 

### ✨ Informações adicionais

*Consume a API: https://developer.themoviedb.org/reference/intro/getting-started*

Bibliotecas utilizadas e recursos desenvolvidos:

1. `Webpack e Module Federation` - Para trabalhar com a construção do projeto, criando o Front remoto e acoplando ao projeto principal
2. `react-router-dom` - Para trabalhar com rotas do SPA
3. `axios` - Para trabalhar com requisições de dados
4. `sass` - Para estilizar
5. `react-intersection-observer` - Observador da View para fazer uma nova requisição, adiocionando filmes a lista
6. `concurrently` - Ferramenta para iniciar dois aplicativos separados simultaneamente.
   

## 👉 Desafio

Crie uma aplicação com estilo livre usando Micro-Frontend usando React + Algum framework de sua escolha, onde a parte superior deve ser um menu e a parte inferior o corpo deve consumir uma a API de sua escolha
- Se uma hospedagem online na Vercel (Gratuito);
- Você deverá desenvolver 1 interface com 2 projetos;
- Consumir uma API de sua preferência;
- Utilizar o module federation do webpack ou similar do vitejs;
- Utilizar SASS ou CSS;
- Trabalhar com componentização;


---


<img src="https://github.com/gatoledo1/movies-microfrontend/assets/19327889/2b1eed24-260e-494b-8dea-89a7770a2b58" width="390" height="283">
<img src="https://github.com/gatoledo1/movies-microfrontend/assets/19327889/b0174a56-8bbe-4289-8aff-d5e1bf081311" width="390" height="283"> 


Abaixo estão instruções detalhadas sobre como configurar e executar o projeto.

## ✅ Pré-requisitos

Certifique-se de que você tenha o [Node.js](https://nodejs.org/) e o [npm](https://www.npmjs.com/) instalados no seu sistema.

## 🎉 Instalação

1. Clone este repositório no seu ambiente local:

   ```bash
   git clone https://github.com/gatoledo1/movies-microfrontend.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd movies-microfrontend
   ```

3. Instale as dependências do projeto executando:

   ```bash
   npm install
   ```

#### OBS: Os frontends estão agrupados dentro desse diretorio, o start será feito nele (movies-microfrontend) daqui a pouco, primeiro vamos instalar as dependencias de cada projeto:

1. Navegue até o diretório kenlo-test-movies e execute o comando:

  ```bash
   cd kenlo-test-movies
   ```
depois:
   ```bash
   npm install
   ```
   
3. Despois faça o mesmo com o diretório header-app:

  ```bash
   cd header-app
   ```
depois:
   ```bash
   npm install
   ```
4. Agora retorne a raiz movies-microfrontend

   ```bash
   cd ..
   ```

5. Pronto, agora pode iniciar o projeto!

   ```bash
   npm start
   ```

## 💻 Estrutura

O projeto header-app consiste em uma aplicação react somente com o menu, na configuração do Webpack do projeto, a aplicação é externalizada em `http://localhost:3001/remoteEntry.js`

<img src="https://github.com/gatoledo1/movies-microfrontend/assets/19327889/22e008ac-f397-48a5-970c-0d4de2005e64" width="290" height="267"> 

No projeto kenlo-test-movies, onde contém o container da aplicação (sem o menu), é feita a captura da aplicação remota.

OBS: O start simultâneo serve para facilitar a execução local, acesse também o link da [Vercel](https://app-movies-microfrontend.vercel.app/) 


✨ Divirta-se navegando entre os filmes 







