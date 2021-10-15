<template>
<section>
    <h2>{{username}}</h2>
    <h3>{{userage}}</h3>
</section>
</template>

<script>
export default {
  name: "ActiveUser",
  props:['username', 'userage']
}
</script>

<style scoped>

</style>
