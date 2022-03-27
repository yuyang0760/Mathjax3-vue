<template>
  <div ref="latexdiv"></div>
</template>

<script>
export default {
  name: 'YyMathjax',
  data() {
    return {

    }
  },
  props: {
    latex: String,
  },
  watch: {
    latex() {
      var output = this.$refs.latexdiv;
      output.innerText = this.latex;
      window.MathJax.texReset();
      window.MathJax.typesetClear();
      MathJax.typesetPromise([output])
    }
  },
}
</script>

