version  = $(shell git log -1 --pretty='format:%cd-%h' --date='short')
git_hash = $(shell git rev-parse HEAD)
repo    = pisop

all: build

echo-version:
	@echo $(version)

git:
	git submodule init; git submodule update

build: git
	docker build --build-arg VERSION=$(git_hash) -t $(repo):$(version) .
