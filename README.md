# Setting Formatting Prettier

## install prettier

```bash
npm install --save-dev prettier
npm install --save-dev eslint-config-prettier eslint-plugin-prettier
```

## create .prettierrc file

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 80,
  "tabWidth": 2,
  "bracketSpacing": true,
  "jsxBracketSameLine": false
}
```

## create .prettierignore

```bash
node_modules
.next
out
build
dist

```

## package.json

```json
"scripts": {
  "format": "prettier --write ."
}
```

## Collapse all open function

```markup
ctrl+0
```
