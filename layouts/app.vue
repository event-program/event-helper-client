<template>
  <v-app>
    <awesome-header/>
    <v-content>
      <nuxt/>
    </v-content>
  </v-app>
</template>

<script>
import AwesomeHeader from '@/components/AwesomeHeader'

export default {
  components: {
    AwesomeHeader
  }
}
</script>