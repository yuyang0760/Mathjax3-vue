import YyMathjax from './components/YyMathjax.vue'
import {initMathJax} from './utils/util.js'
export default {
    install:(app,options)=>{
        initMathJax(options);
        app.component('YyMathjax',YyMathjax);
    }
}

