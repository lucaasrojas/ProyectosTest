<template lang="html">
    <div class="codeBox">
        
          <code>  {{datos.empresa}}: {{datos.empresaCorto}}, </code>
        
    </div>
</template>
<style scoped>

</style>

<script>
export default {
    name: "Coder",
    props: {
        datos: {
            type: Object
        }
    }
}
</script>
