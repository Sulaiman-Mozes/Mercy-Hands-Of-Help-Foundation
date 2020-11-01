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
          icon: 'mdi-school',
          title: 'Education',
          text: 'As we give the Sunday school teachers, we realized that some of the Sunday school children were dropping out of school due to financial constraints occasioned by death of there parents. So we too k up the payment of the school fees and other scholastic materials using our funds and money donated by a few well wishers. Over time beneficiaries have finished school and many are responsible men and women of Uganda. It is from those success that we drive further inspiration to continue supporting the children from such poor backgrounds to complete their education  given numerous benefits of education. You can also support this cause bu contributing 100$ to keep a child in school for a full year in Uganda.',
        },
        {
          icon: 'mdi-hospital-box',
          title: 'Health',
          text: 'From our education program we noticed that some of the beneficiaries especially girls we obstructed from school due to lack of basic commodities for proper menstrual hygiene was putting them at a risk of doping out of school leading to sex gender based violence, early pregnancies and HIV. Further more some of the beneficiaries were prematurely infected by HIV and therefore needed long life support to take their medication well. Those factors informed our health initiative. So therefore we started giving eceet fine non-reusable sanitary towels, pants and health education talks, adhesive concesllling leading to care cervical cancer screening, breast cancer screening. STI screening management.',
        },
        {
          icon: 'mdi-charity',
          title: 'Charity',
          text: 'In Uganda there are many gender disparities that affect the health of the people especially girls. The different gender roles are signed to girls in communities making them valuanable to many disease conditions  and dropping out of school. We there fore took on this initiative of engaging families about the dangers of these gender inequalities. So under this initiative we conduct gender based violence awareness campaigns in schools and in communities. We also link gender based violence victims to care and offer them the necessary physiological sup port. We hope in the future to support girls  who drop out of school for various reasons to give them financial as away of mitigating gender based violence.',
        },
      ],
    }),
  }
</script>
