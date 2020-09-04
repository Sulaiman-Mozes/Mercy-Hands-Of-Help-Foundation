<template>
  <base-section id="coming soon">
    <base-heading title="Coming Soon ..." />

    <base-subheading
      class="black--text"
      title="Oh!"
    />

    <base-subheading
      space="8"
      title="This section of the website is under development"
    />

    <base-img
      :src="require('@/assets/mercy_logo.png')"
      class="mx-auto mb-12"
      contain
      height="350"
      width="250"
    />

    <div class="text-center">
      <base-btn
        color=""
        :to="{ name: 'Home' }"
      >
        Get me Out of Here
      </base-btn>
    </div>
  </base-section>
</template>

<script>
  export default {
    name: 'FourOhFour',

    provide: {
      heading: { align: 'center' },
    },
  }
</script>
