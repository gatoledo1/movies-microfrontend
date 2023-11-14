
# Portal de Filmes com Microfrontend 🚀

Este repositório contém duas aplicações React criada com `create-react-app`. 

### ✨ Informações adicionais

Bibliotecas utilizadas e recursos desenvolvidos:

1. `Webpack e Module Federation` - Para trabalhar com a construção do projeto, criando o Front remoto e acoplando ao projeto principal
2. `react-router-dom` - Para trabalhar com rotas do SPA
3. `axios` - Para trabalhar com requisições de dados
4. `sass` - Para estilizar
5. `react-intersection-observer` - Observador da View para fazer uma nova requisição, adiocionando filmes a lista
6. `concurrently` - Ferramenta para iniciar dois aplicativos separados simultaneamente.
   

O objetivo é transformar esse design em um sistema funcional na web, integrando-o com a biblioteca [JSON Server](https://github.com/typicode/json-server) junto com o JSON fornecido, para simular um back-end para a aplicação. O sistema inclui funcionalidades de listagem com filtros, inclusão, edição e remoção de recebedores de pagamento.

<img src="https://github.com/gatoledo1/movies-microfrontend/assets/19327889/2b1eed24-260e-494b-8dea-89a7770a2b58" width="390" height="240">
<img src="https://github.com/gatoledo1/movies-microfrontend/assets/19327889/b0174a56-8bbe-4289-8aff-d5e1bf081311" width="390" height="240"> 

---

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

3. Instale as dependências dos projetos internos executando:

   ```bash
   npm install
   ```

## 💻 Executando a aplicação

1. Para iniciar o servidor de desenvolvimento e executar o aplicativo, utilize o seguinte comando em uma aba do terminal:

   ```bash
   npm run server
   ```

2. Em outra aba do terminal execute o app:

   ```bash
   npm start
   ```
Isso iniciará o servidor de desenvolvimento e abrirá o aplicativo no seu navegador padrão. 
   
OBS: A aplicação não quebrará se o server for iniciado depois, mas para obter os dados, a página deverá ser recarregada.









