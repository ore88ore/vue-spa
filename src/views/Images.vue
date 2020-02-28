<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-col cols="12">
        <h1>Images</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="4" v-for="(image, index) in images" :key="index">
        <v-card outlined>
          <!--suppress HtmlUnknownTarget -->
          <v-img
            :src="image"
            max-height="150"
            contain
            class="grey darken-4"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Images extends Vue {
  // 表示したい画像のURL配列
  images = [
    `${process.env.VUE_APP_IMAGE_URL}/image1.jpg`,
    `${process.env.VUE_APP_IMAGE_URL}/image2.jpg`,
    `${process.env.VUE_APP_IMAGE_URL}/image3.jpg`,
    `${process.env.VUE_APP_IMAGE_URL}/image1.jpg`,
    `${process.env.VUE_APP_IMAGE_URL}/image2.jpg`,
    `${process.env.VUE_APP_IMAGE_URL}/image3.jpg`
  ];
}
</script>

<style scoped></style>
