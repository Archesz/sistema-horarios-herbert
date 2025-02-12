# Sistema de Agendamento - Herbert de Souza

Este é um sistema de agendamento desenvolvido para facilitar o processo de marcação de horários para aulas no Cursinho Herbert de Souza. Ele permite que os professores insiram suas informações e disponibilidades de horários para que os alunos possam se agendar de acordo com a disponibilidade do professor.

## Funcionalidades

- Cadastro de Agendamentos: Professores podem inserir seus horários disponíveis para aulas.
- Disponibilidade de Horários: O sistema permite que o professor escolha quais horários ele está disponível para lecionar.
- Formulário Interativo: O sistema usa checkboxes para marcar a disponibilidade de horários e um formulário interativo para o preenchimento das informações.
- Integração com Firebase: Os dados são armazenados em tempo real no Firebase Firestore, garantindo que todas as informações estejam sempre atualizadas e acessíveis.

## Tecnologias Utilizadas

- React.js: Framework JavaScript para criação da interface do usuário.
- Firebase: Plataforma de desenvolvimento para autenticação, banco de dados em tempo real e análises.
- Framer Motion: Biblioteca para animações fluidas e interações.
- SCSS: Pré-processador CSS para uma estilização mais flexível e escalável.
- Firebase Analytics: Para monitorar eventos de interação e melhorar a experiência do usuário.

## Como Rodar o Projeto

#### Pré-Requisitos

- Node.js;
- NPM;
- conta no Firebase;

#### Passos

1. Clone o repositório
    ```
    git clone https://github.com/seu-usuario/cursinho-herbert.git
    cd cursinho-herbert
    ```

2. Instale as dependências: Se estiver usando NPM:
    ```
    npm install
    ```
    ou
    ```
    yarn install
    ```

3. Configuração do Firebase:
    - Crie um novo projeto no Firebase Console.
    - Crie uma nova aplicação e copie as credenciais de configuração do Firebase (API Key, AuthDomain, etc.).
    - Substitua as credenciais no arquivo src/firebaseConfig.js pelo seu projeto Firebase.

4. Rodando o projeto localmente: Após a configuração, inicie o servidor de desenvolvimento:
    ```
    npm start
    ```
    ou
    ```
    yarn start
    ```

## Funcionalidade do Sistema

1. Página de Agendamento:

    - O usuário (professor) preenche seu nome, a disciplina e a disponibilidade nos dias da semana.
    - Para cada dia, ele pode marcar ou desmarcar os horários em que está disponível para aulas.
    - As informações são enviadas para o Firebase Firestore e o sistema exibe um feedback visual quando o agendamento é realizado com sucesso.

2. Análises no Firebase:

    - O sistema registra interações como cliques e ações para monitorar o uso da plataforma, facilitando futuras melhorias.

3. Responsividade:
    - O design foi projetado para ser responsivo e adaptável a diferentes tamanhos de tela, incluindo dispositivos móveis.

## Contribuindo

Contribuições são bem-vindas! Se você deseja contribuir para o desenvolvimento do sistema, siga os passos abaixo:

1. Fork o repositório.
2. Crie uma nova branch para suas modificações.
3. Faça as alterações e adicione testes, se necessário.
4. Faça um pull request explicando suas alterações e os motivos delas.

## Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.
