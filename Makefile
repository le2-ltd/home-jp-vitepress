
-include .env
-include .env.$(APP_ENV)

.PHONY: run-dev docker-build

run-dev:
	npm config set registry $(NPM_REGISTRY)
	pnpm update
	pnpm ls
	pnpm run docs:dev

docker-build:
	docker build \
		--build-arg IMAGE_MIRROR="$(IMAGE_MIRROR)" \
		--build-arg APK_REPOSITORY="$(APK_REPOSITORY)" \
		--build-arg NPM_REGISTRY="$(NPM_REGISTRY)" \
		--build-arg IMAGE_MIRROR="$(IMAGE_MIRROR)" \
		-t "home-jp-vitepress" \
		.
