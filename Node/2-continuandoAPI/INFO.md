# Pacotes
1. yarn tsc
2. yarn add multer && yarn add @types/multer -D
3. yarn add csv-parse
4. yarn add swagger-ui-express && yarn add @types/swagger-ui-express -D
  

# Commands
1. docker build -t rentx .  (Gera um build do projeto a partir do Dockerfile)
2. docker run -p 3333:3333 rentx  (Executa o projeto)
3. docker-compose up (execute docker compose)
4. docker-compose up -d (Roda em background)
5. docker-compose start (Para iniciar o serviço )
6. docker-compose stop (para o container)
7. docker-compose down (Remove tudo que foi criado)
8. docker exec -it rentx /bin/bash (Acessar o container) 
9. docker logs rentx -f (Você acessa o terminal do docker e consegue visualizar os logs)
10. 