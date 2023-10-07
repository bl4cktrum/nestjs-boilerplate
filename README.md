<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456

[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center"><a href="https://github.com/nestjs/nest">Nest</a> framework TypeScript starter repository based poiler plate. <br>(Based on Node.js 18.18.0 LTS) </p>
    <p align="center">

## Description


<ul>
    <li>Database connection handled by <a href="https://typeorm.io/">typeorm</a> and <a href="https://docs.nestjs.com/techniques/database">@nestjs/typeorm</a> module</li>
<li>Multiple environment configuration handled by <a href="https://www.npmjs.com/package/cross-env">cross-env</a> and <a href="https://docs.nestjs.com/techniques/configuration">@nestjs/config</a> module</li>
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

`Database informations` are specified in `src/db/data-source.ts` file. Also `entities'` path and `migration folder` path are. If you change the location of this file, do not forget to update the script.

```json
// package.json
// first one is placed to just handle data-source. So it is recommended to use migration:* 
"scripts": {
...
"typeorm": "npm run build && typeorm -d dist/db/data-source.js",
"migration:generate": "ts-node src/utils/migration-generate.ts",
"migration:run": "npm run typeorm -- migration:run",
"migration:revert": "npm run typeorm -- migration:revert"
...
}
```

to generate a new migration ```npm run migration:generate -- <output_file_name>```

```bash
$ npm run migration:generate -- CreateUserTable
```

## Environment Variables

Set vars in `.env` files then add and/or check new var in `src/app.config.ts` <br>
If you want to create new environment you have to create new scripts that sets `NODE_ENV` to run app in your env.

### ! Do not forget the ignore env files from .gitignore

```markdown
// .gitignore

**/*.env
!env/dev.env
```

## License

Nest is [MIT licensed](LICENSE).
