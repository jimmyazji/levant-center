<template>
  <h1 data-aos="zoom-in-down" class="text-6xl text-center w-full text-base-100 py-12">
    About us
  </h1>

  <div class="w-full bg-base-100 overflow-x-hidden">
    <section id="mission" class="max-w-7xl mx-2 md:mx-auto py-12 p-6">
      <article class="py-12 md:flex justify-between">
        <h1
          data-aos="fade-right"
          class="text-4xl uppercase whitespace-nowrap text-accent"
        >
          Our mission
        </h1>
        <p
          data-aos="fade-up"
          class="lg:max-w-3xl max-w-lg text-lg pt-12 md:pt-0 text-base-content"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos
          corporis itaque voluptates sed debitis repellat ducimus neque quo sequi quis,
          perferendis doloribus quaerat, quas ratione deleniti voluptate odio ut non
          dolore amet, molestiae hic possimus dolorum? Itaque, vitae voluptatem.
        </p>
      </article>
    </section>
  </div>

  <div class="w-full bg-base-content overflow-x-hidden">
    <section class="max-w-7xl mx-2 md:mx-auto py-12 p-6">
      <article class="py-12 md:flex justify-between">
        <h1
          data-aos="fade-right"
          class="text-4xl uppercase whitespace-nowrap text-accent"
        >
          Our Vision
        </h1>
        <p
          data-aos="fade-up"
          class="lg:max-w-3xl max-w-lg text-lg pt-12 md:pt-0 text-base-100"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eos
          corporis itaque voluptates sed debitis repellat ducimus neque quo sequi quis,
          perferendis doloribus quaerat, quas ratione deleniti voluptate odio ut non
          dolore amet, molestiae hic possimus dolorum? Itaque, vitae voluptatem.
        </p>
      </article>
    </section>
  </div>

  <div class="w-full overflow-x-hidden">
    <section id="team" class="max-w-7xl mx-2 md:mx-auto py-12 p-6">
      <article class="space-y-12 py-12">
        <h1
          data-aos="zoom-in-up"
          class="text-4xl first-letter:uppercase text-center text-base-100 pb-12"
        >
          meet our team!
        </h1>
        <Member v-for="(member, index) in members" :key="index" :member="member" />
      </article>
    </section>
  </div>
</template>
<script setup>
import Member from "@/components/TeamMember.vue";
const members = [
  {
    name: "nasser youssef",
    img: "",
    position: "Co-Founder",
    about:
      "Economic and Business Consultant holds a degree in financial economics from the university of London, Member of Board of Directors of the Syrian International Business Association (SIBA). He is currently an economic advisor to the team of MOBADERRON. He worked in British banks and financial institutions for 12 years dealing particularly with the Syrian private sector before he started his own finance and investment consultancy business in 2008 . Nasser appears regularly on several news channels to comment on the financial market. He is a board member of the Syrian Arab Association in the UK, he also helped establish the Local Welcome, charity organization based in the UK, Furthermore, Nasser is a business advisor to several U.K. based corporates and the Treasurer and a board member of USSOM International.",
  },
  {
    name: "wisam sharif",
    img: "",
    position: "Co-Founder",
    about:
      "Development Professional and Former UN Official with technical and managerial backgrounds in conflict/post-conflict areas in the Middle East Region (Syria, Iraq, Jordan and Lebanon) at both government level as well as with international organizations. A demonstrated history of 15 years of relevant experience in providing advisory to decision makers and programme/project management in the area of governance and peacebuilding, public policy and civil society with UN Agencies/UNDP, EU, EIB, KFW among others. Skilled in research, complex conflict management, and strong experience in local governance & decentralization, community engagement, youth and women empowerment. Well- equipped with a record of success in designing, planning and execution of innovative projects in very complicated environments. Worked as a National Coordinator of UN Humanitarian Response Plans (HRPs) in the areas of humanitarian and recovery assistance to conflict-affected people and set cooperation strategies with international and national stakeholders. Also, worked as a senior manager of wide range of development programmes and projects with many international organizations, INGOs and NGOs. Wissam is a civil engineer and hold a Master of Business Administration and preparing for PhD in international development and peacebuilding in conflict settings in London- UK.",
  },
  {
    name: "amer mohamed",
    img: "amer-mohammed.png",
    position: "Expert",
    about:
      "Blending conflict and security studies with finance and economic studies, Amer has obtained a wealth of knowledge and analytical skills that enabled him to quickly progress in his MENA- and research-focused career. He holds a BSc. in economics, an MSc. in banking and finance, and an M.A. in conflict resolution and security studies, the last of which is from the University of Bradford in the United Kingdom. Since mid-2019, Amer worked as a Research Lead and Senior Researcher with Integrity Global in London where he led or contributed to dozens of USAID-funded research and thematic assessment reports. These deliverables covered a wide range of topics in different fields, including security, governance, local economies, and public health. Prior to joining Integrity, Amer worked as a MENA Analyst at a risk management consultancy in London where he provided intelligence-led political, economic, and security analysis for the countries of North Africa.",
  },
  {
    name: "mohamad al-ashmar",
    img: "mohammad-al-ashmar.png",
    position: "Expert",
    about:
      "Mohamad Al-Ashmar is a humanitarian professional in the international development sector and programmes, social science researcher, and analyst with over 10 years of experience working on topics related to development contexts and particularly the political economy of Arab states, civic spaces, forced displacement, diaspora, migration, security, and peace, and development issues in fragile and conflict-affected countries, including Syria, Iraq, Lebanon, and South Sudan. Currently, he works as a director of Research and MEAL Services at ICS Consulting and an International Relations PhD fellow and scholar at the Centre for Syrian Studies (CSS) of the University of St Andrews. He also worked as a Policy Leader Fellow at the European University Institute, School of Transnational Governance. He holds MSc in Economics Policy from the University of Reading, MA, and a BSc in Economics and Management from the University of Damascus.",
  },
];
</script>
