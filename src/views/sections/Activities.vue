<template>
  <base-section
    id="activities"
  >
    <v-row>
      <v-col
        cols="12"
        sm="10"
        offset-sm="1"
      >
        <base-section-heading
          title="Our Activities"
          color="yellow"
        />
        <v-item-group>
          <v-container>
            <v-row>
              <v-col
                v-for="({src, title, text }, index) in activities"
                :key="index"
                cols="12"
                md="4"
              >
                <v-item>
                  <v-card
                    class="mx-auto"
                  >
                    <v-img
                      :src="require(`@/assets/gallery/${src}`)"
                      :lazy-src="require(`@/assets/gallery/${src}`)"
                      aspect-ratio="1"
                      class="grey lighten-2"
                      height="275"
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
                    <v-list-item>
                      <v-list-item-content>
                        <v-list-item-title class="headline">
                          {{ title }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                          <span class="font-weight-medium">Documented By&nbsp;:&nbsp;</span>&nbsp;&nbsp;
                          <span>Kurt Wagner</span>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <base-body
                      class="ma-2"
                      :text="text"
                      space="1"
                    >
                      <slot />
                    </base-body>

                    <v-card-actions>
                      <v-btn
                        text
                        color="black"
                        class="font-weight-bold"
                      >
                        Read
                      </v-btn>
                      <v-btn
                        text
                        color="black"
                        class="font-weight-bold"
                      >
                        Bookmark
                      </v-btn>
                      <v-spacer />
                      <v-theme-provider dark>
                        <div class="d-flex justify-center">
                          <base-avatar
                            color="grey darken-4"
                            dark
                            icon="mdi-heart"
                            outlined
                            icon-color="yellow"
                            size="28"
                            class="ma-2"
                          />
                        </div>
                      </v-theme-provider>
                      <v-theme-provider dark>
                        <div class="d-flex justify-center">
                          <base-avatar
                            color="grey darken-4"
                            dark
                            icon="mdi-share-variant"
                            outlined
                            icon-color="yellow"
                            size="28"
                            class="ma-2"
                          />
                        </div>
                      </v-theme-provider>
                    </v-card-actions>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-container>
        </v-item-group>
      </v-col>
    </v-row>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionGalleryImages',
    data: () => ({
      activities: [
        {
          src: 'gallery-1.jpg',
          title: 'Education',
          text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          src: 'gallery-2.jpg',
          title: 'Poverty Sensitization',
          text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
        {
          src: 'gallery-3.jpg',
          title: 'Covid 19 Sensitization',
          text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        },
        {
          src: 'gallery-1.jpg',
          title: 'Education',
          text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          src: 'gallery-2.jpg',
          title: 'Poverty Sensitization',
          text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
        {
          src: 'gallery-3.jpg',
          title: 'Covid 19 Sensitization',
          text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        },
        {
          src: 'gallery-1.jpg',
          title: 'Education',
          text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          src: 'gallery-2.jpg',
          title: 'Poverty Sensitization',
          text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
        {
          src: 'gallery-3.jpg',
          title: 'Covid 19 Sensitization',
          text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        },
        {
          src: 'gallery-3.jpg',
          title: 'Covid 19 Sensitization',
          text: 'Vestibulum in dictum velit, in rhoncus nibh. Maecenas neque libero, interdum a dignissim in, aliquet vitae lectus. Phasellus lorem enim, luctus ut velit eget.',
        },
        {
          src: 'gallery-1.jpg',
          title: 'Education',
          text: 'Phasellus lorem enim, luctus ut velit eget, convallis egestas eros. Sed ornare ligula eget tortor tempor, quis porta tellus dictum.',
        },
        {
          src: 'gallery-2.jpg',
          title: 'Poverty Sensitization',
          text: 'Nam ut leo ipsum. Maecenas pretium aliquam feugiat. Aenean vel tempor est, vitae tincidunt risus. Sed sodales vestibulum nibh.',
        },
      ],
    }),
  }
</script>
