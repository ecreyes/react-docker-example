# Uso con Docker

## Opción 1. DEV
Usar solamente el Dockerfile, es decir primero construir la imagen:
```bash
docker build -t sample:dev .
```
luego correr el contenedor:
```bash
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm sample:dev
```
`nota: se puede reemplazar el sample por el nombre que uno desea, ya que es el nombre del tag.`

## Opción 2. DEV
Usar el docker-compose, se construye la imagen y corre el contenedor.
```bash
docker-compose up -d --build
```
para detener:
```bash
docker-compose stop
```

## Opción 3. PROD
```bash
docker build -f Dockerfile-prod -t sample:prod .

docker run -it -p 80:80 --rm sample:prod
```
