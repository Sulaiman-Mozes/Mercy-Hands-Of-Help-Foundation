<template>
  <base-section
    id="our-team"
  >
    <v-row>
      <v-col
        cols="12"
        sm="10"
        offset-sm="1"
      >
        <base-section-heading
          title="Our Team"
          color="yellow"
        />
        <v-container>
          <v-row>
            <v-col
              v-for="({ image, name, initials, color, title, description }, index) in members"
              :key="image"
              class="justify"
              cols="12"
              sm="6"
              md="3"
              lg="3"
            >
              <v-card
                :key="index"
                elevation="3"
                outlined
              >
                <v-row
                  justify="center"
                >
                  <v-avatar
                    size="200"
                    class="mt-8 mb-4"
                    justify="center"
                    :color="color"
                  >
                    <!-- <v-img
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
                    </v-img> -->
                    <span class="white--text headline">{{ initials }}</span>
                  </v-avatar>
                  <v-col cols="12">
                    <v-row
                      justify="center"
                      class="mx-2 text-transform"
                    >
                      <v-card-title class="text-uppercase">
                        {{ title }}
                      </v-card-title>
                      <v-card-subtitle class="text-capitalize text-center">
                        {{ name }}
                      </v-card-subtitle>
                    </v-row>
                    <v-card-text>
                      <div class="text-center">
                        {{ description }}
                      </div>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionGalleryImages',
    data: () => ({
      members: [
        {
          image: 'gallery-1.jpg',
          name: 'Daniel Evans Kasozi',
          initials: 'DK',
          color: 'indigo',
          title: 'Board Chairman',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!',
        },
        {
          image: 'gallery-1.jpg',
          name: 'Mercy Christine Kaleebu',
          initials: 'MK',
          color: 'orange',
          title: 'Executive Director',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!',
        },
        {
          image: 'gallery-1.jpg',
          name: 'Jane Nalwoga',
          initials: 'JN',
          color: 'teal',
          title: 'Administration Manager',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!',
        },
        {
          image: 'gallery-1.jpg',
          name: 'Tinah Kayiira',
          initials: 'TK',
          color: 'blue',
          title: 'Public Relations Officer',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!',
        },
      ],
    }),
  }
</script>
