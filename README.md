Install dev dependencies by running these commands

```
npm init
npm install -g sass
npm install -g pug-cli
```

Run pug using the following command

```
pug -w "./src/index.pug" -o "./public/" -P
```

Run sass

```
sass --watch ./src/style.scss ./public/output.css
```
