<template>
  <section class="blood-types">
    <p>Tipo de sangre</p>
    <div class="blood-group mt-2">
      <v-btn
        @click="setBlood(blood)"
        :class="{'primary':user.blood==blood}"
        class="mr-2"
        outlined
        v-for="(blood, key) in blood_group"
        :key="key"
      >{{blood}}</v-btn>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    blood_group: [
      "O+",
      "O-",
      "A+",
      "A-",
      "b+",
      "b-",
      "AB+",
      "AB-",
      "Desconocido",
    ],
  }),
  methods: {
    setBlood(blood) {
      this.$store.commit("setUser", {
        ...this.user,
        blood,
      });
    },
  },
  computed: {
    ...mapState({
      user: ({ user }) => user,
    }),
  },
};
</script>

<style lang="scss" scoped>
button.primary {
  color: white;
}
</style>