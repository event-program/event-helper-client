<template>
  <div class="icon-tile">
    <img v-if="icon.includes('.')" class="icon-tile__icon" :src="icon" alt="Icon">
    <v-icon v-else class="icon-tile__icon" v-text="icon"/>
    <span class="icon-tile__content">{{ content }}</span>
  </div>
</template>

<script>
export default {
  name: 'IconTile',
  props: {
    icon: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.icon-tile {
  display: flex;
  margin: 4px;
  align-items: center;
}

.icon-tile__icon {
  width: 20px;
}

.icon-tile__content {
  margin: 0 8px;
  color: #707070;
  font-size: 14px;
}
</style>

