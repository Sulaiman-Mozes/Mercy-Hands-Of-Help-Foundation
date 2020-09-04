<template>
  <base-info-card
    title="Join US"
    color="yellow"
  >
    <a
      v-for="feature in features"
      :key="feature"
      :text="feature"
      class="mb-8 grey--text body-1 d-block text-none"
      href="#"
      v-html="`&rsaquo; ${feature}`"
    />
  </base-info-card>
</template>

<script>
  export default {
    name: 'SectionFeaturesAlt',

    data: () => ({
      features: [
        'Become A Member',
        'Adopt A child',
        'Become A Voluntneer',
        'Become A Partner',
      ],
    }),
  }
</script>
