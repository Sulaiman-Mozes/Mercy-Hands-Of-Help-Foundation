<template>
  <base-section id="about-our-product">
    <base-section-heading
      color="yellow"
      title="Our Story"
    />

    <v-container>
      <base-body
        v-if="text || $slots.default"
        :text="text"
        space="6"
      >
        <slot />
      </base-body>
    </v-container>

    <v-container>
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card.title"
          cols="12"
          md="4"
        >
          <base-info-card v-bind="card" />
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAboutOurProduct',

    data: () => ({
      text: 'Mercy Hands of Help Foundation is an indigenous private-not-for profit Organization that has been in existence for over 20 years striving to reach out to helpless children in Uganda. We offer financial assistance in form of school fees, provide sanitary towels to under/less privileged girls to ensure they keep in school during their menstrual days, sexual and reproductive health services, offer guidance counselling and economic empowerment to women.',
      cards: [
        {
          title: 'Mission',
          subtitle: 'Our Mission',
          text: 'Promotion of Quality Education for all African Orphaned and Vulnerable Children Through provision financial and material assistance, sexual reproductive health education and services.',
          callout: '01',
        },
        {
          title: 'Vision',
          subtitle: 'Our Vision',
          text: 'A Healthy and Empowered African Child ',
          callout: '02',
        },
        {
          title: 'Goal',
          subtitle: 'Our Goal',
          text: 'Educate 30 students by 2025',
          callout: '03',
        },
      ],
    }),
  }
</script>
