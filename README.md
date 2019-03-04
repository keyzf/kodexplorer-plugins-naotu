# kodexplorer-plugins
kodexplorer plugins

Use docker-kodexplorer for testing:
Assuming your plugin directories are in $PWD

docker run -p 8008:80 -v "$PWD":/plugins paulhybryant/docker-kodexplorer
