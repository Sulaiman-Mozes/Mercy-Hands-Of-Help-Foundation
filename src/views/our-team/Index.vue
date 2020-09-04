
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home',

    metaInfo: { title: 'Our Team' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'coming-soon',
        'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'our-team',
      },
    },
  }
</script>
