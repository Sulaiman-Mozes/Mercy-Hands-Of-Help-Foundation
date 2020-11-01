
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home',

    metaInfo: { title: 'Activities' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'activities',
        'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'activities',
      },
    },
  }
</script>
