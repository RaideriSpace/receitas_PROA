# 🍳 Receitas Deliciosas

Um site simples e elegante para exibir uma lista de receitas culinárias.  
Feito com **HTML, CSS e JavaScript puro**, este projeto foi desenvolvido para permitir a **adição manual de receitas** em um arquivo JS externo (`receitas.js`), simulando um pequeno catálogo de receitas.

---

## 🧠 Sobre o Projeto

O objetivo é oferecer uma base limpa e bem estruturada para quem quer aprender a:
- Manipular o DOM com JavaScript;
- Separar responsabilidades entre arquivos (HTML, CSS e JS);
- Criar interfaces visuais simples e agradáveis;
- Trabalhar com dados externos em formato JavaScript (simulando um “banco de dados local”).

Cada receita possui:
- 🖼️ Imagem ilustrativa  
- 🍽️ Descrição breve  
- ⏱️ Tempo de preparo  
- 🔥 Nível de dificuldade  
- 👀 Botão para visualizar detalhes  

---

## 🧩 Estrutura de Pastas

```

meu_projeto/
│
├── index.html        # Estrutura principal do site
├── style.css         # Estilos da página
├── receitas.js       # Arquivo com as receitas cadastradas manualmente
└── script.js         # Lógica de exibição e interação

````

---

## ⚙️ Como Usar

1. **Baixe ou clone o repositório:**
   ```bash
   git clone https://github.com/seuusuario/receitas-deliciosas.git
````

2. **Abra o projeto:**
   Basta abrir o arquivo `index.html` no navegador.

3. **Adicione suas receitas:**
   Edite o arquivo `receitas.js` e adicione novas receitas manualmente no formato:

   ```javascript
   const receitas = [
     {
       titulo: "Nome da Receita",
       imagem: "URL_da_imagem.jpg",
       descricao: "Descrição curta da receita.",
       tempo: "45 min",
       dificuldade: "Fácil"
     },
     // Outras receitas...
   ];
   ```

---

## 🎨 Design

O layout é **moderno, responsivo e intuitivo**, utilizando:

* **Grid Layout** para exibir os cards de forma fluida;
* **Sombras e transições suaves** para destacar os elementos;
* **Cores quentes e acolhedoras**, remetendo à culinária caseira.

---

## 🚀 Melhorias Futuras

Algumas ideias para evolução do projeto:

* Modal com o **passo a passo completo** da receita;
* **Campo de busca** para filtrar receitas por nome;
* Sistema de **favoritos** usando LocalStorage;
* Integração com uma **API real de receitas**.

---

## 💡 Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)

---

## 👨‍🍳 Autor

**Lucas Alves Pinheiro**
🎨 UX/UI Designer & Front-end Developer
💻 [GitHub](https://github.com/seuusuario) | 🌐 [Portfolio](#)

---

> “Cozinhar é criar com amor algo que nutre corpo e alma.”
> – Receitas Deliciosas 🍰

```
