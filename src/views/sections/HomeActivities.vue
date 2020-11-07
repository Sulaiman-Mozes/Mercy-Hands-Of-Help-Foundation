<template>
  <section id="home-activities">
    <v-container>
      <base-section-heading
        title="Recent Activities"
        color="yellow"
      />

      <v-responsive
        class="mx-auto"
        width="56"
      />

      <v-row class="pb-12">
        <v-col
          v-for="({ src, description, title }, i) in articles"
          :key="i"
          cols="12"
          md="4"
        >
          <v-img
            :src="require(`@/assets/activities/${src}`)"
            :lazy-src="require(`@/assets/activities/${src}`)"
            class="mb-4"
            height="275"
            max-width="100%"
          />

          <h3
            class="font-weight-black mb-4 text-uppercase"
            v-text="title"
          />

          <div
            class="font-weight-light mb-4"
            v-text="description"
          />

          <v-btn
            class="ml-n4 font-weight-black"
            text
          >
            Continue Reading
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
  export default {
    name: 'SectionHomeActivities',

    data: () => ({
      articles: [
        {
          src: 'widow-disabled-child.jpeg',
          title: 'Helping a widow with a disabled child',
          description: 'On the 10th Sept 2020, We visited a widow in Wakiso Uganda with a disabled grandson for 12 years. She lacks food, beddings, medication for the boy and awheel chair',
        },
        {
          src: 'single-mother-kisenyi.jpeg',
          title: 'Struggling single mother in Kisenyi',
          description: 'On the 7th Oct 2020, We visited a single mother Betty in Kisenyi Uganda. She lacks a proper house, food, clothings, beddings and medication cause she is sick.',
        },
        {
          src: 'gulu-family.jpeg',
          title: 'Struggling family in Gulu',
          description: 'On the 5th May 2020, We visited this family in Gulu whichs lacks clothes, food, edcation funds, clean water, proper house and beddings.',
        },
      ],
    }),
  }
</script>
