<template>
  <v-container>
    <h1 class="display-2 font-weight-medium ma-3">Have you received?</h1>
    <v-card v-for="item in items" :key="item.id" class="item">
      <v-card-text>
        <v-list-tile two-line>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ item.time }}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-icon v-if="item.isReceived" color="#00bf76" large>check_circle</v-icon>
            <v-icon v-else color="#ff0300" large>error</v-icon>
          </v-list-tile-action>
        </v-list-tile>
      </v-card-text>
    </v-card>
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
          time: '17:00 at Sangsang 01',
          isReceived: false
        },
        {
          name: 'Pizza & Beverage',
          time: '19:00 at Sangsang 02',
          isReceived: true
        }
      ]
    }
  }
}
</script>

<style>
.item {
  margin: 8px 16px;
  background-color: transparent;
}
</style>
