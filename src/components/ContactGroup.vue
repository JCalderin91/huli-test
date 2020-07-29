<template>
  <div class="contact-info mt-5">
    <h2>Datos de contacto</h2>
    <v-row>
      <v-col cols="12" class="pb-0">
        <v-row v-for="(phone, key) in user.contact_info.phones" :key="key">
          <v-col order="2" order-sm="1" cols="12" md="6" class="phone-group">
            <v-select
              v-model="phone.type"
              @change="setUser(user)"
              hide-details
              :items="phone_types"
              class="phone-type"
            >
              <template v-slot:selection="{ item }">
                <v-icon class="pb-2">{{ item }}</v-icon>
              </template>
              <template v-slot:item="{ item }">
                <v-icon>{{ item }}</v-icon>
              </template>
            </v-select>
            <v-select
              v-model="phone.prefix"
              @change="setUser(user)"
              hide-details
              prefix="+"
              :items="phone_prefix"
              class="phone-prefix"
            ></v-select>
            <v-text-field
              v-model="phone.number"
              @input="setUser(user)"
              label="Teléfono"
              class="phone-number"
              v-mask="phoneMask(phone.prefix)"
              :rules="[phoneRule(phone.prefix)]"
            ></v-text-field>
          </v-col>
          <v-col order-sm="2" cols="12" md="6" v-if="key===0">
            <v-text-field
              v-model="user.contact_info.email"
              @input="setUser(user)"
              label="Correo electrónico"
              :rules="[rules.email]"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" class="d-flex justify-center justify-sm-space-between flex-wrap pt-0">
        <v-btn @click="addPhone()" class="mb-2 mb-sm-0" text color="primary">agregar otro teléfono</v-btn>
        <v-btn
          v-if="user.contact_info.phones.length>1"
          @click="quitPhone()"
          text
          color="error"
        >quitar teléfono</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data: () => ({
    phone_types: ["mdi-cellphone", "mdi-phone"],
    phone_prefix: ["506", "52"],
    rules: {
      email: (value) => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Formato de correo incorrecto";
      },
      crNumber: (value) => {
        return value.length >= 9 || "Mínimo 8 dígitos"; // Añadindo los separadores
      },
      mxNumber: (value) => {
        return value.length >= 12 || "Mínimo 10 dígitos"; // Añadindo los separadores
      },
    },
  }),
  methods: {
    ...mapMutations({
      addPhone: "addPhone",
      quitPhone: "quitPhone",
      setUser: "setUser",
    }),
    phoneMask(prefix) {
      return prefix == "506" ? "####-####" : "###-###-####";
    },
    phoneRule(prefix) {
      return prefix === "506" ? this.rules.crNumber : this.rules.mxNumber;
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
.phone-group {
  .phone-type {
    width: 52px;
    display: inline-block;
  }
  .phone-prefix {
    width: 75px;
    display: inline-block;
  }
  .phone-number {
    width: calc(100% - 127px);
    display: inline-block;
  }
}
</style>