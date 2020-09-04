<template>
  <section id="blogs">
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
          v-for="({ src, text, title }, i) in articles"
          :key="i"
          cols="12"
          md="4"
        >
          <v-img
            :src="require(`@/assets/${src}`)"
            class="mb-4"
            height="275"
            max-width="100%"
          />

          <h3
            class="font-weight-black mb-4 text-uppercase"
            v-text="title"
          />

          <div
            class="title font-weight-light mb-5"
            v-text="text"
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
    name: 'SectionBlogs',

    data: () => ({
      articles: [
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
      ],
    }),
  }
</script>
