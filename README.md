#fig and node.js simple server

## requirement

 * installed [docker-osx](https://github.com/noplay/docker-osx)
 * installed [fig](http://www.fig.sh/)

 note: MacOS have to install docker via docker-osx. boot2docker is not working.

## usage

    git clone https://github.com/clonn/fig-node.git fig-node
    cd fig-node
    fig up -d

then you will see message below,

     Recreating fignode_web_1...

## test

assume that did not set $USER/.docker-osx/defaults. settings are default value.
you can try this.

     curl localdocker:3000
     #show: hello world
