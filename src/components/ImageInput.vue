<template>
  <div class="image-container">
    <img class="image" :src="urlImage" />
    <div class="overlay" @click="input()">
      <v-icon class="icon">mdi-camera</v-icon>
    </div>
    <input type="file" ref="inputImage" @change="onFileChange" class="d-none" />
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  methods: {
    input() {
      this.$refs.inputImage.click();
    },
    onFileChange(e) {
      const file = e.target.files[0];
      this.$store.commit("setUser", {
        ...this.user,
        photo: URL.createObjectURL(file),
      });
    },
  },
  computed: {
    ...mapState({ user: ({ user }) => user }),
    urlImage() {
      return this.user.photo ? this.user.photo : require("@/assets/avatar.png");
    },
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  height: 130px;
  width: 130px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  .image {
    width: 100%;
    height: 100%;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(51, 51, 51, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    &:hover {
      background-color: rgba(51, 51, 51, 0.5);
    }
    .icon {
      font-size: 3rem;
      color: rgba(white, 0.8);
    }
  }
}
</style>