<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository based poiler plate.
<ul>
    <li>Database connection handled by <a href="https://typeorm.io/">typeorm</a> and <a href="https://docs.nestjs.com/techniques/database">@nestjs/typeorm</a> module</li>
</ul>

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

 ## Typeorm Implementation
`Database informations` are specified in `data-source.ts` file. Also `entities'` path and `migration folder` path are.   
```json
// package.json
// first one is placed to just handle data-source. So it is recommended to use migration:* 
"scripts": {
...
"typeorm": "npm run build && typeorm -d dist/db/data-source.js",
"migration:generate": "npm run typeorm -- migration:generate",
"migration:run": "npm run typeorm -- migration:run",
"migration:revert": "npm run typeorm -- migration:revert"
...
}
```
to generate a new migration ```npm run migration:generate -- <output_path>```
```bash
$ npm run migration:generate -- db/migrations/initial
```

## License

Nest is [MIT licensed](LICENSE).
