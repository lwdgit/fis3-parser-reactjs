#fis3-parser-reactjs

> A plugin for fis3 to parse react.js


## Config

```javascript
  fis.match('**.jsx', {
      parser: 'reactjs',
      rExt: 'js'
  })
  .match('*:jsx', {
      parser: 'reactjs'
  });

```