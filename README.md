# Glestter

Projeto pessoal de conteúdo sobre astronomia, neurociência, tecnologia e outros assuntos, conforme a descrição original. A implementação é um frontend React com uma listagem de posts; a área de newsletter ainda mostra uma mensagem de desenvolvimento.

## Mapa do projeto

- `src/paginas/Inicio/index.jsx` lista posts importados de `src/json/posts.json`.
- `src/paginas/Newlestter/index.jsx` exibe a mensagem de desenvolvimento. Esse componente não implementa inscrição ou envio de e-mails.
- `src/routes.jsx` organiza as páginas; `src/componentes` reúne elementos da interface.

## Ambiente local

O manifesto usa React 18 e react-scripts 5. Com Node.js e npm:

```sh
npm install
npm start
```

Também há scripts `npm run build` e `npm test`. A newsletter é uma interface em desenvolvimento, sem serviço de inscrição ou envio de e-mails nesse componente.

Consulte o arquivo [LICENSE](LICENSE) para os termos de licença.
