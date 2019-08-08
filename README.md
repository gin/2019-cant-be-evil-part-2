# 2019-cant-be-evil-part-2
delightning


Lightning node end-to-end setup the old school way  
OS: Ubuntu 19.04

## Install bitcoind
Get the binary from bitcoin.org
or build from source

### Possible obstacles
1. Error message:  
`/usr/bin/ld: cannot find -lz`  
Solution:  
`$ sudo apt-get install zlib1g-dev`

## Install node.js
Get node.js from `apt` or `snap`  
Or from the official web page like the following:
```bash
echo 'export PATH="$HOME/local/bin:$PATH"' >> ~/.bashrc

. ~/.bashrc

mkdir ~/local

mkdir ~/node-latest-install

cd ~/node-latest-install

curl http://nodejs.org/dist/node-latest.tar.gz | tar xz --strip-components=1

./configure --prefix=$HOME/local

make install

curl -L https://www.npmjs.com/install.sh | sh
```

Without having to use `sudo` when installing global node modules, etc, do the following to change default installation directory.
```bash
npm set prefix ~/.npm

echo 'export PATH=$HOME/.npm/bin:$PATH' >> ~/.bashrc

echo 'export PATH=./node_modules/.bin:$PATH' >> ~/.bashrc
```

Get the latest stable release with the help of a node version manager, "n":
```bash
npm install -g n

n stable
```

## Install Go
```bash
wget https://dl.google.com/go/go1.12.6.linux-amd64.tar.gz
```

```bash
sha256sum go1.12.6.linux-amd64.tar.gz | awk -F " " '{ print $1 }'
```
Output should be `dbcf71a3c1ea53b8d54ef1b48c85a39a6c9a935d01fc8291ff2b92028e59913c`

```bash
tar -C /usr/local -xzf go1.12.6.linux-amd64.tar.gz

echo 'export PATH=$PATH:/usr/local/go/bin' >> ~/.bashrc

echo 'export GOPATH=~/gocode' >> ~/.bashrc

echo 'export PATH=$PATH:$GOPATH/bin' >> ~/.bashrc
```

## Install lnd
```bash
go get -d github.com/lightningnetwork/lnd

cd $GOPATH/src/github.com/lightningnetwork/lnd

make && make install

make check
```

Note, when updating:
```bash
git pull

make clean && make && make install
```

## Blockstack
```bash
npm install -g yo generator-blockstack

yo blockstack
```
