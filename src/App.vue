<template>
  <v-app id="main">
    <v-main class="main--body">
      <HoliForm />
    </v-main>
  </v-app>
</template>

<script>
import HoliForm from "./components/HoliForm";

export default {
  name: "App",

  components: {
    HoliForm,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
#main {
  background-color: #eceff1;
}
</style>
