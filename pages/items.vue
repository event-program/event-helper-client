<template>
  <v-container>
    <h1 class="display-2 font-weight-medium mb-4">Have you received?</h1>
    <v-list v-for="item in items" :key="item.id" class="item-list">
      <v-list-tile two-line>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
          <v-list-tile-sub-title>{{ item.time }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon>radio_button_unchecked</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-container>
</template>

<script>
export default {
  layout: 'app',
  components: {},
  data() {
    return {
      items: [
        {
          name: 'Pizza & Beverage',
          time: '17:00 at Sangsang 01'
        },
        {
          name: 'Pizza & Beverage',
          time: '19:00 at Sangsang 02'
        }
      ]
    }
  }
}
</script>

<style>
.item-list {
  margin-bottom: 2px;
  background-color: transparent;
  border: #333 2px solid;
}
</style>
