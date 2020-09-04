<template>
  <base-section
    id="features"
    class="grey darken-4"
  >
    <v-responsive
      class="mx-auto"
      max-width="1350"
    >
      <v-container fluid>
        <base-section-heading
          class="white--text"
          title="Success Stories"
          color="yellow"
        />
        <v-carousel
          cycle
          :height="minHeight"
          hide-delimiter-background
          show-arrows-on-hover
        >
          <v-carousel-item
            v-for="({color, name, text}, i) in stories"
            :key="i"
          >
            <v-sheet
              color="grey darken-4"
              height="100%"
            >
              <v-row
                class="fill-height"
                align="center"
                justify="center"
              >
                <v-container>
                  <div class="text-center px-12 py-6">
                    {{ text }}
                  </div>
                  <div class="text-center">
                    {{ name }}
                  </div>
                </v-container>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    data () {
      return {
        stories: [
          {
            color: 'yellow',
            name: 'MUBIRU HENRY',
            text: 'Mubiru henry  lost his parent when he was still young he became a school drop out for some good years till when Mercy Hands  Of Help foundation came in and started offering  help ever since he was in primary seven and now he has enrolled in one of the country’s university offering  mass communication as the course.',
          },
          {
            color: 'secondary',
            name: 'NANGENDO RUTH',
            text: 'Nangendo Ruth now entitled as Mrs. Seguya is one of the people we can stand to say is mercy hands of help success. Ruth came from a disadivantaged home, her parents separated and that’s when M.h.h.foundation started offering help to Ruth when she was  in primary five all the way to the university. Now she is married to Mr.seguya  with two wonderful children. Moses her first born 4yrs old and Enosh 2yrs old.',
          },
          {
            color: 'yellow',
            name: 'NANFUUNA MARIA',
            text: 'Nanfuuna Maria is now in senior three at Kitende senior secondary school she lost her father when she was two years old, she is staying with her widowed mother who had failed to raise her school fees when she was in top class that’s when mercy hands of help came and started offering help till now. She is a promising God fearing young girl.',
          },
        ],
        model: 0,
      }
    },
    computed: {
      minHeight () {
        const height = this.$vuetify.breakpoint.mdAndUp ? '250' : '500'

        return `${height}px`
      },
    },
  }
</script>
