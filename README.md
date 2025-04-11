# MyContacts

Este é um projeto desenvolvido em **JavaScript** que tem como objetivo gerenciar contatos, permitindo que usuários adicionem, editem, visualizem e excluam contatos de forma simples e eficiente.

## 🚀 Funcionalidades

- Adicionar novos contatos.
- Editar informações de contatos existentes.
- Visualizar a lista de contatos.
- Excluir contatos.

## 📂 Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `src/`
  - `app/`
    - `controllers/`
      - `ContactController.js`: Controlador responsável por gerenciar as operações relacionadas aos contatos.
    - `repositories/`
      - `ContactsRepository.js`: Responsável por interagir com a base de dados para manipulação de dados de contatos.
  - `database/`
    - `schema.sql`: Script de criação do esquema do banco de dados.
  - `index.js`: Arquivo principal para inicialização do servidor.
  - `routes.js`: Gerencia as rotas da aplicação.
- `.editorconfig`: Configurações de editor para padronização de código.
- `.gitignore`: Arquivo para ignorar arquivos e pastas no versionamento.
- `biome.json`: Configurações relacionadas ao Biome.
- `package.json`: Gerenciamento de dependências e scripts do projeto.

## 📚 API Endpoints

| Método | Endpoint         | Descrição                    |
|--------|-------------------|------------------------------|
| GET    | `/contacts`       | Lista todos os contatos      |
| GET    | `/contacts/:id`   | Obtém um contato específico  |
| POST   | `/contacts`       | Cria um novo contato         |
| PUT    | `/contacts/:id`   | Atualiza um contato          |
| DELETE | `/contacts/:id`   | Remove um contato            |

### Exemplo de Body da Requisição (POST/PUT):

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123456789",
  "category_id": "uuid-here"
}
```




## 📦 Como Executar o Projeto

1. Clone este repositório:
   
   ```bash
   git clone https://github.com/Felipe8297/MyContacts.git
2. Acesse a pasta do projeto:
   
   ```bash
   cd MyContacts
3. Acesse a pasta do projeto:
   
   ```bash
   npm install
4. Inicie o servidor:
   
   ```bash
   npm start
