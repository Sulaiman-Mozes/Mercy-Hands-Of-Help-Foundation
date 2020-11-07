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
      educationtext: 'As we are the Sunday school teachers, we realized that some of the Sunday school children were dropping out of school due to financial constraints occasioned by death of there parents. So we too k up the payment of the school fees and other scholastic materials using our funds and money donated by a few well wishers. Over time beneficiaries have finished school and many are responsible men and women of Uganda. It is from those success that we drive further inspiration to continue supporting the children from such poor backgrounds to complete their education  given numerous benefits of education. You can also support this cause bu contributing 100$ to keep a child in school for a full year in Uganda.',
      heathtext: 'From our education program we noticed that some of the beneficiaries especially girls we obstructed from school. Once Investigations revealed that girls were absent during menstrual periods because the lacked sanitary pads. This frequent absenteeism due to lack of basic commodities for proper menstrual hygiene was putting them at a risk of doping out of school transitionally sex gender based violence, early pregnancies and HIV. Further more some of the beneficiaries were prematurely infected by HIV and therefore needed long life support to take their medication well. Those factors informed our health initiative. So therefore we started giving away fine non-reusable sanitary towels, pants and health education talks, adhesive counseling leading to care cervical cancer screening, breast cancer screening and sexually transmitted diseases screening.',
      communitytext: 'In Uganda there are many gender disparities that  affect the health of the people especially girls. The different gender roles are signed to girls in communities making them valuanable to many disease conditions  and dropping out of school. We there fore took on this initiative of engaging families about the dangers of these gender inequalities. So under this initiative we conduct gender based violence awareness campaigns in schools and in communities. We also link gender based violence victims to care and offer them the necessary physiological sup port. We hope in the future to support girls  who drop out of school for various reasons to give them financial as away of mitigating gender based violence.',
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
