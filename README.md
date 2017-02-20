# Academia Digital
-

## Como começar a desenvolver?
Começar a desenvolver é muito simples e requer apenas alguns passos. Se você não estiver acostumado com as tecnologias de desenvolvimento Web atuais, não se preocupe: o guia é focado em iniciantes.

## Entendendo a estrutura básica do projeto
O projeto tem duas pastas principais: `client` e `server`. A pasta `client` contém o código para a parte de front-end do sistema (ou seja, a parte visual do sistema). Já a pasta `server` contém o código para a parte back-end, que é a parte que o usuário não vê e que geralmente se comunica com o banco de dados.

Logo, se você quiser modificar um código do servidor, pasta `server`. Se quiser modificar um código da parte visual do sistema, pasta `client`.

## É só modificar o código e atualizar o navegador?
Opa, calma lá!

Hoje em dia o desenvolvimento de sistemas exige algumas ferramentas importantíssimas para automatizar algumas tarefas que, se precisassem ser feitas manualmente, exigiria um puta trabalho e um tempo muito grande.

### Primeiro instale as dependências do npm
`npm`? O que é isso? O **N**ode **P**ackage **M**anager é um sistema muito útil: com apenas um comando, a ferramenta baixa várias outras ferramentas muito úteis para automatizar sua tarefa durante o desenvolvimento.

Imagina se todo novo colaborador do projeto que aparecesse precisasse baixar dezenas de ferramentas, uma por uma, e instalando uma de cada vez? Iria levar um tempinho, né!? A ideia do `npm` é baixar tudo pra você com um simples comando:
`$ npm install`

**Oi? Onde digito isso?**
Sempre que você vê uma instrução acompanhada de um **$**, não apenas aqui mas em qualquer outro lugar, significa que você deve digitar aquela expressão em um Terminal (no caso do Windows, Prompt de Comando, Git Bash, entre outros). Note que o **$** em si **não** precisa ser digitado, apenas a instrução que vem em seguida.

**Ué, não aconteceu nada.**
Ah, é importante saber: quando você roda o comando `$ npm install`, o npm procura por um arquivo chamado `packages.json`. Logo, o comando sempre deve ser rodado em um diretório onde exista este arquivo.

Se você navegar na estrutura do projeto, verá que existe um `packages.json` tanto dentro de `client` quando dentro de `server`. Você precisa rodar o comando `$ npm install` em ambos os diretórios, porque ambos os diretórios possuem dependências.

Ao rodar o comando, perceba que o diretório `node_modules` foi criado. É lá que ficam as dependências baixadas. Não se preocupe: você não vai precisar e **nem deve** mexer no código-fonte de nenhuma dependência.

### Agora, instale o Grunt globalmente para facilitar sua vida
O Grunt é um automatizador de tarefa. Existem vários módulos para o Grunt na Internet. A ideia do Grunt é automatizar tarefas como, por exemplo, ler vários arquivos CSSs diferentes e unir todos os códigos em um só arquivo final.

Imagina você ter que fazer isso manualmente toda vez que modificasse um CSS? Mais uma vez, um puta trabalho.

Para rodar o Grunt de qualquer diretório, é importante que você instale-o globalmente na sua máquina. Para isso, rode o comando:
`$ npm install -g grunt`

Se você usa Linux ou Mac OSX, é importante ressaltar que você precisa executar o comando usando `sudo`:
`$ sudo npm install -g grunt`

### Agora só rodar o Grunt toda vez que modificar alguma coisa no código-fonte:
Como nós somos altamente profissionais e ninjas da programação, tentamos sempre buscar as melhores opções de performance para os nossos produtos. Isso inclui concatenação e minimificação dos códigos fontes para serem injetados no arquivo `index.html`.

Sempre que você fazer qualquer modificação no código (tanto na pasta `client` quanto na `server`) você vai precisar rodar o Grunt para fazer umas tarefinhas chatas pra você.

**Se esquecer de rodar o Grunt, suas modificacões não serão geradas e você pode achar que elas não estão funcionando, quando na verdade elas nem sequer foram atualizadas no navegador**.

Em ambas as pastas, para rodar o Grunt basta apenas digitar `$ grunt`. Sim, apenas isso.

### Indo mais a fundo
Se você quiser aprender melhor, é importante ler mais tutoriais sobre Grunt e npm. Ler suas documentações também é válido, mas documentações podem ser confusas pra quem está começando.