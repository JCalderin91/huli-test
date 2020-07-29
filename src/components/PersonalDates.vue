<template>
  <v-row>
    <v-col cols="12" md="2">
      <image-input />
    </v-col>
    <v-col cols="12" md="10">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field @input="setUser(user)" label="Nombre*" v-model="user.name"></v-text-field>
        </v-col>
        <v-col cols="12" @input="setUser(user)" md="6">
          <v-text-field label="Apellidos" v-model="user.last_name"></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-btn
            outlined
            class="mr-2"
            @click="setGender('female')"
            :class="{'primary':user.gender=='female'}"
          >
            <v-icon left>mdi-human-female</v-icon>femenino
          </v-btn>
          <v-btn outlined @click="setGender('male')" :class="{'primary':user.gender=='male'}">
            <v-icon left>mdi-human-male</v-icon>Masculino
          </v-btn>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import ImageInput from "@/components/ImageInput";
export default {
  components: {
    ImageInput,
  },
  methods: {
    ...mapMutations({
      setUser: "setUser",
    }),
    setGender(gender) {
      this.$store.commit("setUser", {
        ...this.user,
        gender,
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