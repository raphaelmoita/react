# React

### links

1. babeljs.io/repl

### Install

```javascript
npm i -g create-react-app
```
### Configure extensions on Visual Studio Code

1. Open extensions (CTRL+SHIFT+X)
2. install Simple React Snippets
3. install Prettier
3. install Live Server (auto refresh page)
4. Go to setting and enable Format on Save

### Create an app

1. [npx](https://www.npmjs.com/package/npx) create-react-app react-app
2. cd react-app
3. npm start (it will open a browser with react initial page)
4. install bootstrap (npm i bootstrap)


### Thoubeshooting

- ***ERROR:*** Error: ENOSPC: System limit for number of file watchers reached
- ***SOLUTION:*** echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
- ***DETAILS:*** https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers#the-technical-details
