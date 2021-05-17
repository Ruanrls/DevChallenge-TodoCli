<p align="center">
  <h1>tasker cli</h1>
</p>

## Como começar?
Antes de tudo é necessário rodar ```yarn install``` para que o yarn instale todas as dependências necessárias do projeto (incluindo as tipagens do TS).
(Você pode optar também por npm install).

Em seguida, basta usar ```yarn dev``` ou ```npm run dev```.

## Dependências / Tecnologias
  - Chalk
  - cli-table
  - figlet
  - inquirer
  - inquirer-date-prompt
  - inquirer-search-checkbox
  - reflect-metadata
  - sqlite3
  - typeorm
  - uuid

## Teclas de apoio
  -  Setinhas para cima e para baixo (arrows up and down), são teclas de apoio para selecionar a opção desejada.
  -  Tecla de espaço (spacebar), seleciona a opção da lista (marca os checkbox das listas).
  -  Tecla enter, confirma a ação

## Como usar?
#### 1 - Welcome!
Antes de tudo, seja bem vindo ao tasker cli
![Welcome](public/welcome.png)

#### 2 - Adicionando Tasks
Você pode adicionar uma nova tarefa através do menu "add new task", logo em seguida você deve responder algumas perguntas como, a descrição da tarefa
a prioridade e a data que pretende concluí-la.

![Adicionando Tasks](public/addTask.png)

#### 3 - Atualizando como concluída
O menu "Todo list" irá listar todas as suas tarefas que ainda não foram concluídas, assim você pode "marcar" as tarefas e 
confirmar. Assim, todas as tarefas que foram marcadas serão passadas a um estado de 'concluída'.
![Atualizando Tasks](public/todo.png)

#### 3 - Removendo tasks
o menu "Remove task" irá listar todas as tasks. Da mesma forma que o menu anterior, você pode marcar tasks, contudo, as tasks marcadas neste menu serão
completamente removidas do banco de dados.
![Removendo Tasks](public/removeTask.png)

#### 4 - Próximas tarefas
O menu "Next tasks" lista as próximas 3 tasks que você deve executar, sendo cada uma de 1 prioridade distinta, ou seja: uma prioridade alta (high), média (medium) e baixa (low). 

![Próximas Tasks](public/nextTasks.png)

#### 5 - Listagem de tarefas
O menu "All tasks" irá listar todas as tasks cadastradas na plataforma.

![Próximas Tasks](public/allTasks.png)
