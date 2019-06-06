# GROUP PROJECT

## Run the app
### Requirements
* Have docker installed [link to docker](https://www.docker.com/)
### Commands
After pulling the project,<br />
Run the next command at the root of the project to pull and run the docker environment :
``` console
docker-compose up -d 
```
Check if runnning all dockers was succed
```console
docker ps -a
```
Tou must see this dockers up
* group-poject-api
* adminer
* db
* front-app
### Play with the app 
Go to [localhost:4200](http://localhost:4200/)

## Init data for demo
You can generate demo data by visiting this address once the project has started
Go to [localhost:4200/initData](http://localhost:4200/initData)
Be careful though, it only works once !


