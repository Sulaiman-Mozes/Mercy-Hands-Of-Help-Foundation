<template>
  <base-section
    id="gallery-images"
  >
    <v-row>
      <v-col
        cols="12"
        sm="10"
        offset-sm="1"
      >
        <base-section-heading
          title="Our Galllery"
          color="yellow"
        />
        <v-card>
          <v-container>
            <v-row>
              <v-col
                v-for="image in images"
                :key="image"
                class="d-flex child-flex"
                cols="4"
              >
                <v-card
                  flat
                  tile
                  class="d-flex"
                >
                  <v-img
                    :src="require(`@/assets/${image}`)"
                    :lazy-src="require(`@/assets/${image}`)"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        />
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionGalleryImages',
    data: () => ({
      images: [
        'gallery-1.jpg',
        'gallery-2.jpg',
        'gallery-3.jpg',
        'gallery-4.jpg',
        'gallery-5.jpeg',
        'gallery-6.jpeg',
        'gallery-7.jpg',
        'gallery-8.jpg',
      ],
    }),
  }
</script>
