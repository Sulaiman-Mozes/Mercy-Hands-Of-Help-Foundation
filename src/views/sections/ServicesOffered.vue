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
            height="100%"
          >
            <v-card
              class="px-4 py-8 elevation-6"
              outlined
               height="100%"
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
          text: 'As Sunday school teachers, we realized that some of the Sunday school children were dropping out of school due to financial constraits occassioned by death of there parents. So we took up the payment of their school fees and other scholastic materials using our savings and donations from a few well wishers. Over time, the beneficiaries have finished school and many are responsible men and women of Uganda. It is from those success that we drew further inspiration to continue supporting the children from disadvantaged families to complete their education. You can also support this cause bu contributing 100$ to keep a child in school for a full year in Uganda.',
        },
        {
          icon: 'mdi-hospital-box',
          title: 'Health',
          text: 'From our education programme we noticed that some of the beneficiaries especially girls were frequently absent from school. Our investigation revealed that some were absent because they lacked sanitary pads during their menstrual periods. So this lack was putting them at a risk of dropping out of school, transactional sex, gender based violence, early pregnancies and HIV infections. Those infected with HIV needed long life support to take their medicines well. These factors informed our health initiative therefore we started giving out sanitary pads, knickers, health education talks, adherance counselling, linkage to care, cervical cancer screening, breast cancer screening. sexually transmitted infections screening and management. This has been partially made possible through our partnership with Yolamu Sebalamu Medical Centre in Najjanankumbi Kampala Uganda. You cab be part of this story through your generous contibution to keep our beneficiaries healthy and improve their school attandance.',
        },
        {
          icon: 'mdi-charity',
          title: 'Charity',
          text: 'In Uganda there are many gender disperities that affect the health of the people especially girls. The different gender roles are assigned to girls in communities render them valuanable to many disease conditions  and dropping out of school. We therefore took on this initiative of engaging families about the dangers of these gender inequalities. So under this initiative we conduct gender based violence awareness campaigns in schools and in communities. We also link gender based violence victims to care and offer them the necessary psychological support. We look forward to supporting women and girls who drop out of school with financial independence as away of mitigating gender based violence.',
        },
      ],
    }),
  }
</script>
