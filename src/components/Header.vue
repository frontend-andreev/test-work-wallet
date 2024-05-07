<template>
  <v-header>
    <v-card color="grey-lighten-4" rounded="0" flat>
      <v-toolbar>
        <v-img src="@/assets/images/logo.svg" height="20"></v-img>
        <v-spacer></v-spacer>
        <router-link to="/">
          <v-btn :size="'small'"> Настройки </v-btn>
        </router-link>
        <router-link to="/order">
          <v-btn :size="'small'"> Order book </v-btn>
        </router-link>
      </v-toolbar>
    </v-card>
  </v-header>
</template>
