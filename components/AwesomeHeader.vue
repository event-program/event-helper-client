<template>
  <header>
    <v-toolbar app fixed flat>
      <v-toolbar-title>Logo</v-toolbar-title>
      <v-spacer/>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon class="menu">sort</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app absolute right temporary>
      <v-img :src="`https://picsum.photos/500/300?image=1`" class="grey lighten-2"/>
      <v-list>
        <v-list-tile v-for="(item, i) in drawerItems" :key="i" :to="item.to" router exact>
          <v-list-tile-action>
            <v-icon v-text="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>

<script>
export default {
  name: 'AwesomeHeader',
  components: {},
  data() {
    return {
      drawer: false,
      drawerItems: [
        {
          icon: 'radio_button_unchecked',
          title: 'My ID',
          to: '/user'
        },
        {
          icon: 'radio_button_unchecked',
          title: 'Pickup Status',
          to: '/items'
        },
        {
          icon: 'radio_button_unchecked',
          title: 'Schedule',
          to: '/'
        },
        {
          icon: 'radio_button_unchecked',
          title: 'Event Site Map',
          to: '/'
        },
        {
          icon: 'radio_button_unchecked',
          title: 'Inquiry',
          to: '/'
        }
      ]
    }
  }
}
</script>

<style scoped>
.menu.material-icons {
  transform: scaleX(-1);
  filter: FlipH;
}
</style>
