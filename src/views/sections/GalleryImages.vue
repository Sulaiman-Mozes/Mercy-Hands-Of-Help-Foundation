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
                    :src="require(`@/assets/gallery/${image}`)"
                    :lazy-src="require(`@/assets/gallery/${image}`)"
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
        'gallery-5.jpg',
        'gallery-6.jpg',
        'gallery-7.jpg',
        'gallery-8.jpg',
        'gallery-9.jpg',
        'gallery-10.jpg',
        'gallery-11.jpg',
        'gallery-12.jpg',
        'gallery-13.jpg',
        'gallery-14.jpg',
        'gallery-15.jpg',
        'gallery-16.jpg',
        'gallery-17.jpg',
        'gallery-18.jpg',
        'gallery-19.jpg',
        'gallery-20.jpg',
        'gallery-21.jpg',
        'gallery-22.jpg',
        'gallery-23.jpg',
        'gallery-24.jpg',
        'gallery-25.jpg',
        'gallery-26.jpg',
        'gallery-27.jpg',
        'gallery-28.jpg',
      ],
    }),
  }
</script>
