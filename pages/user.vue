<template>
  <v-container>
    <h1 class="display-2 font-weight-medium mb-4">Junction X Seoul</h1>
    <h1 class="display-2 font-weight-medium mb-4">Here is your ID</h1>
    <div class="square">
      <img src="img_qrcode.jpg" alt="QR Code">
    </div>
  </v-container>
</template>

<script>
export default {
  layout: 'app',
  components: {}
}
</script>

<style scoped>
.square {
  display: flex;
  width: 256px;
  height: 256px;
  margin: 0 auto;
  border: #ff3f3d 2px solid;
  align-items: center;
  justify-content: center;
}

.square img {
  width: 85%;
  height: 85%;
}
</style>
