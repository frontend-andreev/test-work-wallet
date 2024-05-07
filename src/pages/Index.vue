<template>
  <v-container>
    <v-select :items="items" v-model="currentItem"></v-select>
    <v-list v-if="getLogs?.length" lines="one">
      <v-list-item v-for="log in getLogs" :key="log">
        <div class="d-flex justify-space-between">
          <p class="text-caption text-md-subtitle-1">
            {{ log.last }}
            <v-icon :icon="'mdi-arrow-right-thin'" />
            {{ log.current }}
          </p>
          <p class="text-caption text-md-subtitle-1">{{ getDate(log.date) }}</p>
        </div>
      </v-list-item>
    </v-list>
    <p v-else>История изменения пуста.</p>
  </v-container>
</template>

<script>
import { useDate } from "vuetify";
export default {
  data() {
    return {
      currentItem: this.$store.getters.getCurrentCurrency || "BTCUSDT",
      items: ["BTCUSDT", "BNBBTC", "ETHBTC"],
      connection: null,
      logs: [],
    };
  },
  methods: {
    getDate(date) {
      return useDate().format(new Date(), "fullDateTime");
    },
  },
  computed: {
    getLogs() {
      return this.$store.getters.getLogs;
    },
  },
  watch: {
    currentItem(current, last) {
      this.$store.dispatch("rest", current);
      this.$store.commit("changeLogs", { last, current, date: new Date() });
    },
  },
};
</script>