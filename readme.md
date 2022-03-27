# mathjax3-vue
This plugins implements the browser version of Mathjax v3 into vue.


# Install
``` javascript
yarn add mathjax3-vue
```

# Use

### 1.  import and config

```javascript
import YyMathjax from 'mathjax3-vue'
Vue.use(YyMathjax)
```

or

```javascript
import YyMathjax from 'mathjax3-vue'
const config={
    tex: {
        inlineMath: [['$', '$']],
        processEscapes: true
    }
}
Vue.use(YyMathjax,config)
```

### 2.  App.vue

```vue
<yy-mathjax :latex="latexStr"></yy-mathjax>
```

