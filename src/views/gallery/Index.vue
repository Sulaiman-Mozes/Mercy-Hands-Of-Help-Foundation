
<script>
  // Extensions
  import View from '@/views/View'

  // Mixins
  import LoadSections from '@/mixins/load-sections'

  export default {
    name: 'Home',

    metaInfo: { title: 'Gallery' },

    extends: View,

    mixins: [
      LoadSections([
        'hero-alt',
        'gallery-images',
        'info',
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'gallery',
      },
    },
  }
</script>
