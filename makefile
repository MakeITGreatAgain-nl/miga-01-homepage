build:
	docker build --progress plain -t miga-homepage .
deploy:
	docker build -t miga-homepage .
run:
	docker run --rm --name miga-homepage -p 8080:80 miga-homepage