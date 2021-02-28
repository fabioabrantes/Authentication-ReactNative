// criando o projeto react native com template typescript
# npx react-native init authrn --template react-native-template-typescript
// rodar o projeto
# yarn android
//instalar a lib de navegação para o fluxo de autenticação
# yarn add @react-navigation/native
# yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-masked-view/masked-view
[https://reactnavigation.org/docs/getting-started] (https://reactnavigation.org/docs/getting-started)

// instalando a navegação  em pilha
# yarn add @react-navigation/stack
[https://reactnavigation.org/docs/hello-react-navigation] (https://reactnavigation.org/docs/hello-react-navigation)

//quando dar um reload na aplicação volta para o signIn. pq perde o valor do contexto. é necessário armazenar o valor para quando o usuario abrir novamente o app ele já vir logado
# yarn add @react-native-async-storage/async-storage
[https://react-native-async-storage.github.io/async-storage/docs/install/](https://react-native-async-storage.github.io/async-storage/docs/install/)

// Instalar o axios para fazer requisições. vai ser usado para que o token seja enviado em toda requisição do axios
# yarn add axios

// Fonte - Autenticação no React Native / ReactJS com Context API & Hooks | Masterclass #12
[https://www.youtube.com/watch?v=KISMYYXSIX8&ab_channel=Rocketseat](https://www.youtube.com/watch?v=KISMYYXSIX8&ab_channel=Rocketseat)