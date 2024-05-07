<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("rest", this.$store.getters.getCurrentCurrency)
  },
}
</script>
