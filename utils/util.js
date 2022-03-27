/**
 * 全局配置 MathJax
 * @param options 自定义全局配置
 */
export function initMathJax(options = {}) {
    // 引入 MathJax
    if (!window.MathJax) {
        //
        //  载入mathjax
        //
        var script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js';
        script.setAttribute('id', 'MathJax-script');
        document.head.appendChild(script);
    }
    // 默认全局配置
    const defaultConfig = {
        tex: {
            inlineMath: [['$', '$']],
            displayMath: [['$$', '$$']],
            processEnvironments: true,
            processRefs: true,
        },
        options: {
            skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'annotation', 'annotation-xml'],
            ignoreHtmlClass: 'tex2jax_ignore',
        },
        svg: {
            fontCache: 'global',
        },
    }
    // 合并配置
    console.log(defaultConfig);
    const mergeConfig = Object.assign({}, defaultConfig, options)
    console.log(mergeConfig, 'mergeConfig');
    window.MathJax = mergeConfig
}