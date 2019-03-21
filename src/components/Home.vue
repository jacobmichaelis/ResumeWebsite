<template>
  <v-container grid-list-lg text-lg-left>
    <v-card light>
      <v-layout light row wrap>
        <v-flex lg4>
          <v-img :src="require('../assets/jacob.jpg')" contain fill-height></v-img>
        </v-flex>
        <v-flex lg8>
          <h1 class="headline text-uppercase">Jacob Michaelis</h1>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    name: "Jacob Michaelis"
  })
};
</script>

<style>
</style>
