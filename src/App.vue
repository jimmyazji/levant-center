<template>
  <Navigation />
  <!-- Page content here -->
  <main class="pt-20">
    <section id="about-us">
      <article class="py-12 overflow-x-hidden px-6">
        <div class="md:flex justify-between max-w-6xl mx-2 md:mx-auto">
          <div>
            <h5
              data-aos="fade-down"
              class="text-secondary flex-none text-2xl font-bold uppercase"
            >
              About us
            </h5>
            <h2
              data-aos="fade-right"
              class="text-4xl sm:text-5xl uppercase whitespace-nowrap text-accent font-semibold"
            >
              Our Vision
            </h2>
          </div>
          <p
            data-aos="fade-up"
            class="lg:max-w-3xl max-w-lg text-lg pt-12 md:pt-0 text-base-content"
          >
            Our vision aims to create a positive change and implement impactful and
            effective actions to help people to build a better future, through addressing
            development challenges, and finding sustainable solutions for a better, more
            equal and stable world and improving the quality of peoples' lives.
          </p>
        </div>
      </article>
      <article class="py-12 bg-zinc-200 overflow-x-hidden px-6">
        <div class="md:flex justify-between flex-row-reverse max-w-6xl mx-2 md:mx-auto">
          <h2
            data-aos="fade-right"
            class="text-4xl sm:text-5xl uppercase whitespace-nowrap text-accent font-semibold"
          >
            Our Mission
          </h2>
          <p data-aos="fade-up" class="lg:max-w-3xl max-w-lg text-lg pt-12 md:pt-0">
            Our mission is to support our clients: governments, international
            organizations, civil society, and private sectors to succeed in fragile and
            complex conflict settings for transformative change from fragility, prolonged
            crises and emergencies through recovery to development.
          </p>
        </div>
      </article>
      <article class="py-12 overflow-x-hidden px-6">
        <div class="md:flex justify-between max-w-6xl mx-2 md:mx-auto">
          <div>
            <h2
              data-aos="fade-right"
              class="text-4xl sm:text-5xl uppercase whitespace-nowrap text-accent font-semibold"
            >
              Our Values
            </h2>
          </div>
          <p
            data-aos="fade-up"
            class="lg:max-w-3xl max-w-lg text-lg pt-12 md:pt-0 text-base-content"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae deserunt esse
            quam nam, suscipit consequuntur hic alias ipsa rerum minus, earum nemo facere
            sunt excepturi repudiandae obcaecati. Dolor optio corrupti, quo modi impedit
            voluptates aut minus quas veniam illo asperiores!
          </p>
        </div>
      </article>
      <div class="overflow-x-hidden bg-zinc-200">
        <section id="team" class="max-w-7xl mx-2 md:mx-auto py-12 px-6">
          <article class="space-y-12 py-12">
            <h2
              data-aos="zoom-in-down"
              class="text-4xl sm:text-5xl uppercase text-center text-accent pb-12 font-semibold"
            >
              our team
            </h2>
            <Member v-for="(member, index) in members" :key="index" :member="member" />
          </article>
        </section>
      </div>
    </section>
    <section id="our-work">
      <article class="py-12 overflow-x-hidden px-6">
        <div class="md:flex flex-col space-y-4 justify-center max-w-6xl mx-2 md:mx-auto">
          <div>
            <h5
              data-aos="fade-down"
              class="text-secondary flex-none text-2xl font-bold uppercase"
            >
              Our Work
            </h5>
            <h2
              data-aos="fade-right"
              class="text-4xl sm:text-5xl uppercase whitespace-nowrap text-accent font-semibold"
            >
              Who We Are
            </h2>
          </div>
          <p data-aos="fade-up" class="text-lg pt-12 md:pt-0 text-base-content">
            Levant Center for Development and Early Recovery is a non-profit organization,
            international consultancy and service provider working in conflict, post
            conflict and fragile settings around the global. Founded in the United
            Kingdom, and committed to contribute to the advancement of the global
            development agenda and the achievement of the Sustainable Development Goals
            (SDGs).
            <br />
            Our vision aims to create a positive change and implement impactful and
            effective actions to help people to build a better future, through addressing
            development challenges, and finding sustainable solutions for a better, more
            equal and stable world and improving the quality of peoples' lives.<br />
            Through our work, we support the international community to transform
            conflict, stabilize a situation, reduce further setbacks and pave the way
            towards an eventual recovery and development.<br />
            Our local access at the community level in the countries we operate, supported
            by our global perspectives guides us to deliver positive and sustainable
            change.<br />
            Our mission is to support our clients: governments, international
            organizations, civil society, and private sectors to succeed in fragile and
            complex conflict settings for transformative change from fragility, prolonged
            crises and emergencies through recovery to development.<br />
            We offer services across a range of thematic/sectoral areas and geographies
            through a set of approached which enable us to customize our offer to best
            meet our client needs with high standards of delivery.
          </p>
        </div>
      </article>
      <article class="py-12 overflow-x-hidden overflow-y-hidden px-6 bg-zinc-200">
        <div class="md:flex flex-col space-y-4 max-w-6xl mx-2 md:mx-auto">
          <h2
            data-aos="fade-left"
            class="text-4xl sm:text-5xl uppercase whitespace-nowrap text-accent font-semibold"
          >
            How We Work
          </h2>
          <p data-aos="fade-up" class="text-lg pt-12 md:pt-0 text-base-content">
            The 2030 Agenda for Sustainable Development was launched by a UN Summit in New
            York on 2015, and 17 Sustainable Development Goals (SDGs) have been adopted to
            ending poverty in all its forms, save the planet and build a peaceful world
            while “leaving no one behind”. The UN 2030 Agenda envisages “a world of
            universal respect for human rights and human dignity, the rule of law,
            justice, equality and non-discrimination” with emphasis on the empowerment of
            women and of vulnerable groups such as children, young people, persons with
            disabilities, older persons, refugees, internally displaced persons and
            migrants.<br />
            Despite of the great progress to advance the 2030 agenda and achieve the SDGs
            in many areas, the planetary emergency, that the world has faced, threatens
            the global development agenda and humans’ future on the planet. People
            everywhere continue to face a complex mix of threats to lives, from poverty
            and inequality to armed conflict, pandemics and climate change.<br />
            Our strategy describes how we deliver tailored and innovative solutions to
            enable our clients and partners to achieve their goals and contribute to
            building a safer and more equitable world. We aim to provide support for
            transformation and positive change, addressing root causes, towards a greater
            impact through adopting a set of approaches and methodologies that capture
            SDG- linked results, and implement sustainable solutions.<br />
            LCDER as a knowledge-driven organization, we provide extensive expertise,
            policy advice, context analysis and strategic planning; monitoring, evaluation
            and learning services and results-based management to large complex projects,
            as well as conducting research for evidence-based decision making. In
            parallel, we have the capacity to deliver field programmes in the following
            thematic area of focus:
          </p>
          <ol class="list-decimal list-inside pl-8 text-lg">
            <li class="before:inline-block before:w-2">
              <span data-aos="fade-right">Governance and Democracy</span>
              <ol class="list-decimal list-inside pl-16">
                <li
                  class="before:inline-block before:w-2"
                  data-aos="fade-right"
                  data-aos-delay="400"
                >
                  Local Development and Decentralization
                </li>
                <li
                  class="before:inline-block before:w-2"
                  data-aos="fade-right"
                  data-aos-delay="500"
                >
                  Civil Society and Community Engagement
                </li>
                <li
                  class="before:inline-block before:w-2"
                  data-aos="fade-right"
                  data-aos-delay="600"
                >
                  Urban Development and Participatory Local Development Planning
                </li>
                <li
                  class="before:inline-block before:w-2"
                  data-aos="fade-right"
                  data-aos-delay="700"
                >
                  Justice and Accountability
                </li>
              </ol>
            </li>
            <li
              class="before:inline-block before:w-2"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              Economic Growth
            </li>
            <li
              class="before:inline-block before:w-2"
              data-aos="fade-right"
              data-aos-delay="600"
            >
              Fragility and Violent Conflict
            </li>
            <li
              class="before:inline-block before:w-2"
              data-aos="fade-right"
              data-aos-delay="800"
            >
              Humanitarian Assistance
            </li>
            <li
              class="before:inline-block before:w-2"
              data-aos="fade-right"
              data-aos-delay="1000"
            >
              Gender Equality and Social Inclusion
            </li>
          </ol>
          <p
            data-aos="fade-up"
            class="lg:max-w-4xl max-w-lg text-lg pt-12 md:pt-0 text-base-content"
          >
            We do this in partnership with our country offices and local partners in many
            countries and our network of qualified experts to ensure a collective and
            collaborative approach to produce integrated holistic solutions and innovative
            outcomes for maximum value.
          </p>
        </div>
      </article>
    </section>
    <section id="contact-us" class="py-12 bg-zinc-200">
      <div id="form" class="relative mx-auto max-w-4xl">
        <div data-aos="fade-up" class="shadow-lg bg-base-100 p-6">
          <form @submit.prevent class="sm:pl-96 space-y-6">
            <h2 class="text-4xl whitespace-nowrap text-accent font-semibold pt-12">
              Get in touch!
            </h2>
            <Input placeholder="Your name" type="text" class="block w-full" />
            <Input placeholder="Your email" type="email" class="block w-full" />
            <TextArea placeholder="Your message" class="block w-full" />
            <button
              class="btn btn-primary bg-accent-focus text-base-100 px-8 rounded-none"
            >
              Send
            </button>
          </form>
        </div>
        <div
          data-aos="fade-right"
          class="shadow-lg border border-base-content border-opacity-40 bg-accent-focus sm:absolute z-20 top-12 -left-12 p-12 space-y-8 sm:w-auto w-full sm:max-w-sm"
        >
          <h1 class="text-4xl whitespace-nowrap text-base-100 font-semibold">
            Contact Us
          </h1>

          <div class="flex items-start text-base-200 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-10"
              fill="currentColor"
              viewBox="0 0 369 369"
            >
              <path
                d="M184 0A149 149 0 0 0 67 242c27 34 107 116 110 119l7 8 8-8c3-3 82-85 109-119A149 149 0 0 0 184 0zm102 229c-22 28-81 90-102 111-20-21-79-83-101-111a129 129 0 1 1 203 0z"
              />
              <path
                d="M184 59a88 88 0 1 0 1 177 88 88 0 0 0-1-177zm0 157a68 68 0 1 1 0-137 68 68 0 0 1 0 137z"
              />
            </svg>
            <address>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, laudantium
            </address>
          </div>
          <span class="flex text-base-200 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill-opacity="0"
              class="h-6"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
            >
              <path
                d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z"
              />
              <path d="m22 6-10 7L2 6" />
            </svg>

            <p>info@lvcenter.com</p></span
          >
          <span class="flex text-base-200 space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400.93 400.93"
              fill="currentColor"
              class="h-6"
            >
              <path
                d="M384.76 231.04c-6.36-8.8-9.3-19.53-9.3-30.38v-.2c0-96.64-78.34-175-175-175-21.14 0-41.4 3.77-60.16 10.65-10.14 3.72-21.26 4.43-31.67 1.5a85.62 85.62 0 0 0-29.18-2.98C36.73 37.57 2.33 72.6.12 115.35a85.1 85.1 0 0 0 16.05 54.54c6.36 8.8 9.31 19.53 9.3 30.39v.19c0 96.65 78.35 175 175 175 21.14 0 41.4-3.77 60.16-10.64 10.15-3.72 21.26-4.44 31.67-1.5a85.9 85.9 0 0 0 29.18 2.97c42.72-2.94 77.12-37.95 79.33-80.72a85.1 85.1 0 0 0-16.05-54.54zm-177.89-61.95c35.29 8.4 88.61 21.07 88.61 79.8 0 28.94-14.25 51.02-40.12 62.16-18.47 7.95-39.36 9.02-57.37 9.02-55.34 0-90.29-43.03-91.75-44.86a26.32 26.32 0 0 1 41.16-32.82c.08.1 20.98 24.1 50.59 25.04 35.65 1.13 43.8-9.48 44.85-18.53 1.28-11.06-8.55-19.18-48.15-28.6-33.56-7.97-84.29-20.04-84.29-74.13 0-16.84 6.86-71.8 95.02-71.8 55.67 0 88.52 43.82 89.9 45.69a26.32 26.32 0 0 1-42.3 31.34c-.62-.8-19.43-21.72-47.6-24.4-21.32-2.02-42.37 5.67-42.37 17.03 0 12.03 6.04 16.08 43.82 25.06z"
              />
            </svg>
            <p>Levant.center</p></span
          >
          <span class="flex text-base-200 space-x-4"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6"
              viewBox="0 0 24 24"
              fill-opacity="0"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              ></path>
            </svg>
            <p>+1 545 532 255</p></span
          >
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import Footer from "./components/MainFooter.vue";
import Navigation from "./components/MainNavigation.vue";
import Input from "@/components/FormInput.vue";
import TextArea from "@/components/FormTextArea.vue";
import Member from "@/components/TeamMember.vue";
onMounted(() => {
  AOS.init({ once: false, mirror: true, duration: 800 });
});
const members = [
  {
    name: "wisam sharif",
    img: "",
    position: "Co-Founder",
    about:
      "Development Professional and Former UN Official with technical and managerial backgrounds in conflict/post-conflict areas in the Middle East Region (Syria, Iraq, Jordan and Lebanon) at both government level as well as with international organizations. A demonstrated history of 15 years of relevant experience in providing advisory to decision makers and programme/project management in the area of governance and peacebuilding, public policy and civil society with UN Agencies/UNDP, EU, EIB, KFW among others. Skilled in research, complex conflict management, and strong experience in local governance & decentralization, community engagement, youth and women empowerment. Well- equipped with a record of success in designing, planning and execution of innovative projects in very complicated environments. Worked as a National Coordinator of UN Humanitarian Response Plans (HRPs) in the areas of humanitarian and recovery assistance to conflict-affected people and set cooperation strategies with international and national stakeholders. Also, worked as a senior manager of wide range of development programmes and projects with many international organizations, INGOs and NGOs. Wissam is a civil engineer and hold a Master of Business Administration and preparing for PhD in international development and peacebuilding in conflict settings in London- UK.",
  },
  {
    name: "nasser youssef",
    img: "",
    position: "Co-Founder",
    about:
      "Economic and Business Consultant holds a degree in financial economics from the university of London, Member of Board of Directors of the Syrian International Business Association (SIBA). He is currently an economic advisor to the team of MOBADERRON. He worked in British banks and financial institutions for 12 years dealing particularly with the Syrian private sector before he started his own finance and investment consultancy business in 2008 . Nasser appears regularly on several news channels to comment on the financial market. He is a board member of the Syrian Arab Association in the UK, he also helped establish the Local Welcome, charity organization based in the UK, Furthermore, Nasser is a business advisor to several U.K. based corporates and the Treasurer and a board member of USSOM International.",
  },
  {
    name: "mohamad al-ashmar",
    img: "mohammad-al-ashmar.png",
    position: "Expert",
    about:
      "Mohamad Al-Ashmar is a humanitarian professional in the international development sector and programmes, social science researcher, and analyst with over 10 years of experience working on topics related to development contexts and particularly the political economy of Arab states, civic spaces, forced displacement, diaspora, migration, security, and peace, and development issues in fragile and conflict-affected countries, including Syria, Iraq, Lebanon, and South Sudan. Currently, he works as a director of Research and MEAL Services at ICS Consulting and an International Relations PhD fellow and scholar at the Centre for Syrian Studies (CSS) of the University of St Andrews. He also worked as a Policy Leader Fellow at the European University Institute, School of Transnational Governance. He holds MSc in Economics Policy from the University of Reading, MA, and a BSc in Economics and Management from the University of Damascus.",
  },
  {
    name: "amer mohamed",
    img: "amer-mohammed.png",
    position: "Expert",
    about:
      "Blending conflict and security studies with finance and economic studies, Amer has obtained a wealth of knowledge and analytical skills that enabled him to quickly progress in his MENA- and research-focused career. He holds a BSc. in economics, an MSc. in banking and finance, and an M.A. in conflict resolution and security studies, the last of which is from the University of Bradford in the United Kingdom. Since mid-2019, Amer worked as a Research Lead and Senior Researcher with Integrity Global in London where he led or contributed to dozens of USAID-funded research and thematic assessment reports. These deliverables covered a wide range of topics in different fields, including security, governance, local economies, and public health. Prior to joining Integrity, Amer worked as a MENA Analyst at a risk management consultancy in London where he provided intelligence-led political, economic, and security analysis for the countries of North Africa.",
  },
];
</script>
