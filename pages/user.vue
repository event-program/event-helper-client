<template>
  <v-container>
    <h1 class="display-2 font-weight-medium mb-4">Event Name</h1>
    <h1 class="display-2 font-weight-medium mb-4">Here is your ID</h1>
    <div class="square"></div>
  </v-container>
</template>

<script>
export default {
  layout: 'app',
  components: {}
}
</script>

<style>
.square {
  width: 256px;
  height: 256px;
  margin: 0 auto;
  border: #333 2px solid;
}
</style>
