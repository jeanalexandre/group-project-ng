## Etape 1 : Build le projet ##

## Creation d'un conteneur node pour build ##
FROM node:latest as builder

COPY package.json yarn.lock ./

## Sauvegarde de node-modules dans ng-app pour eviter le telechargement à chaque build ##
RUN yarn install && mkdir /ng-app && mv ./node_modules ./ng-app

## Défini /ng-app comme repetoire de travail (comme un 'cd /ng-app') ##
WORKDIR /ng-app

## Copie tout le contenu de l'hote (à l'emplacement du docker file) vers le /ng-app conteneur ##
COPY . .

## Build l'application en mode production et stock l'atefacte dans le repertoire /dist ##
RUN yarn build

## Etape 2 : Lancer le projet ##

## Creation d'un conteneur nginx (avec alpine pour profiter d'un poids minimal) ##
FROM nginx:1.15-alpine

## Copie de la config nginx par default sur le conteneur ##
COPY docker/nginx/default.conf /etc/nginx/conf.d/

## Suppresion du site par default de nginx ##
RUN rm -rf /usr/share/nginx/html/*

## Copie l'artefact de notre application depuis le builder, dans nginx à l'emplacement du site ##
COPY --from=builder /ng-app/dist/group-project-ng /usr/share/nginx/html

## Lance le conteneur nginx ##
CMD ["nginx", "-g", "daemon off;"]
