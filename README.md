# To run project locally

In the project directory, you can run:
```bash
yarn
  or
npm i
```

Execute command to up docker container
```bash
$ docker-compose -f docker-compose.dev.yml up
```

Aplicação rodando por padrão na port 3333

# Main approch
- Singleton
# Pending items

- [ ]  Revisar e padronizar nomes de arquivos, classes, interfaces e metodos.
    - [ ]  Modificar arquivos para kebab-case
- [ ]  Middleware para validações
- [ ]  Helmet
- [ ]  Review path TS (@models, etc). Include Interfaces
    - [ ]  Search and replace imports "src/interfaces/...."
- [ ]  Logger middleware no braço ou winston?
- [ ]  Verificar uso de ENUMS em Model e Migrations
    - [ ]  Não está conseguindo resolver o tipo
- [ ]  Revisar Lint. Não está funcionando direito
- [ ]  Escrever testes
- [ ]  Verificar forma correta de rodar testes com Docker
- [ ]  Promise.race com apis de fatos randomicos
- [ ]  Dependency injection entre camadas
- [ ]  Explorar implementações de swagger UI. Estratégias de uso da API
