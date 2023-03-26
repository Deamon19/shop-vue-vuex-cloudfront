# shop-vue-vuex-cloudfront

## S3 Bucket
```
http://my-vue-shop-24.s3-website.eu-west-3.amazonaws.com/
```

## Cloudfront
```
https://d3epp4v29vwjz2.cloudfront.net/
```
## Task 3 (API)
```
https://u7ctc7g8o0.execute-api.eu-west-3.amazonaws.com/dev/products (200)
https://u7ctc7g8o0.execute-api.eu-west-3.amazonaws.com/dev/products/7567ec4b-b10c-48c5-9345-fc73c48a80aa (200)
https://u7ctc7g8o0.execute-api.eu-west-3.amazonaws.com/dev/products/7567ec4b-b10c-0000-0000-000000000000 (404)
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Cloudfront build+deploy
```
npm run cloudfront:update:build:deploy:nc
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
