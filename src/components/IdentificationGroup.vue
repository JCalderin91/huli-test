<template>
  <v-row>
    <template v-for="(identification, key) in user.identifications">
      <v-col cols="12" md="6" :key="`select-${key}`">
        <v-select
          hide-details
          @change="setUser(user)"
          v-model="identification.type"
          :items="indentifications"
          label="Tipo de identificación"
        ></v-select>
      </v-col>
      <v-col cols="12" md="6" :key="`text-${key}`">
        <v-text-field
          v-model="identification.value"
          @input="setUser(user)"
          hide-details
          label="Numero de identificación"
          v-mask="'#-###-###'"
        ></v-text-field>
      </v-col>
    </template>
    <v-col cols="12" class="d-flex justify-center justify-sm-space-between flex-wrap">
      <v-btn
        @click="addIdentification()"
        class="mb-2 mb-sm-0"
        text
        color="primary"
      >agregar otra identificación</v-btn>
      <v-btn
        v-if="user.identifications.length > 1"
        @click="quitIdentification()"
        text
        color="error"
      >Quitar identificación</v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    indentifications: ["Cedula", "Pasaporte"],
  }),
  methods: {
    ...mapMutations({
      addIdentification: "addIdentification",
      quitIdentification: "quitIdentification",
      setUser: "setUser",
    }),
  },
  computed: {
    ...mapState({ user: ({ user }) => user }),
  },
};
</script>