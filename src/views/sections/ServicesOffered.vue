<template>
  <base-section id="services-offered">
    <base-section-heading
      title="What We offer To the Community"
      color="yellow"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, in! Asperiores, impedit libero. Veniam rerum saepe unde nihil possimus quibusdam esse accusamus mollitia magni fuga.
    </base-section-heading>

    <v-container>
      <v-theme-provider light>
        <v-row>
          <v-col
            v-for="({ icon, title, text }, i) in features"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card
              class="px-4 py-8 elevation-6"
            >
              <v-theme-provider dark>
                <div class="d-flex justify-center">
                  <base-avatar
                    v-if="icon"
                    color="grey darken-4"
                    dark
                    :icon="icon"
                    outlined
                    icon-color="yellow"
                    size="72"
                    class="mb-3 mt-3"
                  />
                </div>
              </v-theme-provider>

              <v-card-title
                class="justify-center font-weight-black text-uppercase"
                v-text="title"
              />

              <base-body
                v-if="text || $slots.default"
                class="ma-2"
                :text="text"
                space="6"
              >
                <slot />
              </base-body>
            </v-card>
          </v-col>
        </v-row>
      </v-theme-provider>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionThemeFeatures',

    data: () => ({
      features: [
        {
          icon: 'mdi-account-group-outline',
          title: 'Education',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!',
        },
        {
          icon: 'mdi-update',
          title: 'Clothing',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!',
        },
        {
          icon: 'mdi-shield-outline',
          title: 'Food',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!',
        },
      ],
    }),
  }
</script>
