<template>
  <div id="holi-form">
    <v-card elevation="2" max-width="900">
      <v-card-text>
        <h2>Datos personales</h2>
      </v-card-text>
      <v-card-text>
        <personal-dates />
        <identification-group />
        <blood-types />
        <contact-group />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BloodTypes from "@/components/BloodTypes";
import IdentificationGroup from "@/components/IdentificationGroup";
import PersonalDates from "@/components/PersonalDates";
import ContactGroup from "@/components/ContactGroup";
export default {
  name: "HoliForm",
  components: {
    BloodTypes,
    IdentificationGroup,
    PersonalDates,
    ContactGroup,
  },
};
</script>

<style lang="scss" scoped>
#holi-form {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
