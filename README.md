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

## Init data from python script
###Requirements
* Have python installed [link to python](https://www.python.org/)
* Have request python library installed [link to pip](https://pypi.org/project/pip/)
###Commands
````console
cd init-data
python initData.py
````


