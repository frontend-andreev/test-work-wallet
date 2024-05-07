<template>
  <v-container>
    <v-select
      :items="counts"
      @update:model-value="changeLimit"
      :value="getCurrentLimit"
      width="200px"
    ></v-select>
    <v-row class="flex-nowrap overflow-auto">
      <v-col>
        <h4 class="text-subtitle-1 text-md-h4 text-center text-green">Bids</h4>
        <v-table height="79vh" fixed-header>
          <thead>
            <tr>
              <th class="text-left text-caption text-md-subtitle-1">Price</th>
              <th class="text-left text-caption text-md-subtitle-1">
                Quantity
              </th>
              <th class="text-left hidden-md-and-down">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in getBids" :key="item">
              <td class="text-green">{{ item[1] }}</td>
              <td>{{ item[0] }}</td>
              <td class="hidden-md-and-down">{{ item[0] * item[1] }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
      <v-col>
        <h4 class="text-subtitle-1 text-md-h4 text-center text-red">Asks</h4>
        <v-table height="79vh" fixed-header>
          <thead>
            <tr>
              <th class="text-left text-caption text-md-subtitle-1">Price</th>
              <th class="text-left text-caption text-md-subtitle-1">
                Quantity
              </th>
              <th class="text-left hidden-md-and-down">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in getAsks" :key="item">
              <td class="text-red text-caption text-md-subtitle-1">
                {{ item[1] }}
              </td>
              <td class="text-caption text-md-subtitle-1">{{ item[0] }}</td>
              <td class="hidden-md-and-down">{{ item[0] * item[1] }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      counts: [100, 500, 1000],
      currentCount: 100,
    };
  },
  methods: {
    changeLimit(data) {
      this.$store.commit("changeLimit", data);
    },
  },
  computed: {
    getAsks() {
      return this.$store.getters.getAsks;
    },
    getBids() {
      return this.$store.getters.getBids;
    },
    getCurrentLimit() {
      return this.$store.getters.getCurrentLimit;
    },
  },
};
</script>