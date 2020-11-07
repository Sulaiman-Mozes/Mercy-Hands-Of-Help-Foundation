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
                v-for="({src, title, description, author }, index) in activities"
                :key="index"
                cols="12"
                md="4"
              >
                <v-item>
                  <v-card
                    class="mx-auto"
                  >
                    <v-img
                      :src="require(`@/assets/activities/${src}`)"
                      :lazy-src="require(`@/assets/activities/${src}`)"
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
                        <v-list-item-title class="headline text-capitalize">
                          {{ title }}
                        </v-list-item-title>
                        <v-list-item-subtitle class="mt-4">
                          <span class="font-weight-medium">Documented By&nbsp;:&nbsp;</span>&nbsp;&nbsp;
                          <span>{{ author }}</span>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>

                    <base-body
                      class="ma-2"
                      :text="description"
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
          src: 'widow-disabled-child.jpeg',
          title: 'Helping A widow with A Disabled Child',
          description: 'On the 10th Sept 2020, We visited a widow in Wakiso Uganda with a disabled grandson for 12 years. She lacks food, beddings, medication for the boy and awheel chair',
          author: 'Jane Nalwoga',
        },
        {
          src: 'single-mother-kisenyi.jpeg',
          title: 'Struggling single mother in Kisenyi',
          description: 'On the 7th Oct 2020, We visited a single mother Betty in Kisenyi Uganda. She lacks a proper house, food, clothings, beddings and medication cause she is sick.',
          author: 'Jane Nalwoga',
        },
        {
          src: 'gulu-family.jpeg',
          title: 'Struggling Family In Gulu',
          description: 'On the 5th May 2020, We visited this family in Gulu whichs lacks clothes, food, edcation funds, clean water, proper house and beddings.',
          author: 'Jane Nalwoga',
        },
        {
          src: 'community-sensitization.jpeg',
          title: 'Buikwe Community Sensitization',
          description: 'Sensitizing Community in Buikwe on Gender based violence, HIV and supporting the girl child education.',
          author: 'Jane Nalwoga',
        },
        {
          src: 'school-girl-donation.jpeg',
          title: 'Donating re-usable sanitary pads',
          description: 'In Buikwe district, we donated sanitary pads and knickers to a group of school girls.',
          author: 'Jane Nalwoga',
        },
      ],
    }),
  }
</script>
