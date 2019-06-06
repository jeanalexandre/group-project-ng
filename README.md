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
Go to <a href="http://localhost:4200/" target="_blank">localhost:4200</a>


## Init data for demo
You can generate demo data by visiting this address once the project has started<br />
Go to <a href="http://localhost:4200/initData" target="_blank">localhost:4200/initData</a><br />
Be careful though, it only works once !


