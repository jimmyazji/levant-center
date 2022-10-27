<template>
  <div
    @click="closeNav"
    v-show="showNav"
    class="fixed w-full h-full z-30 transition duration-500"
    :class="{ 'bg-black bg-opacity-20': showNav }"
  ></div>
  <nav class="fixed top-0 left-0 z-50">
    <div
      @click="toggleNav"
      class="flex justify-center items-center bg-accent py-3.5 pl-2.5 pr-4 mt-6 ml-6 rounded-xl cursor-pointer select-none"
      :class="{ 'pr-5 pl-2 pt-4': !showNav }"
    >
      <div class="relative w-[22px] h-[17.3px] group">
        <span
          class="block bg-base-100 absolute h-0.5 w-full rounded-lg top-0 left-1.5 transition duration-300"
          :class="{ 'rotate-45 origin-left': showNav }"
        ></span>
        <span
          class="block bg-base-100 absolute h-0.5 w-full rounded-lg top-1.5 left-1.5 transition duration-300"
          :class="{ 'opacity-0': showNav }"
        ></span>
        <span
          class="block bg-base-100 absolute h-0.5 w-full rounded-lg top-3 left-1.5 transition duration-300"
          :class="{ '-rotate-45 origin-left top-4': showNav }"
        ></span>
      </div>
    </div>
  </nav>
  <aside
    :class="showNav ? '-translate-x-0' : '-translate-x-full'"
    class="w-full sm:w-64 fixed z-40 transition-transform duration-300 ease-in-out"
    aria-label="Sidebar"
  >
    <div
      class="overflow-y-auto py-4 px-3 bg-base-100 border-r border-base-200 h-screen pt-24"
    >
      <RouterLink to="/" @click="closeNav" class="flex items-center px-3 mb-5">
        <img src="@/assets/images/logo.png" class="w-full" alt="Levant Center" />
      </RouterLink>
      <ul class="space-y-2" @click="closeNav">
        <li>
          <RouterLink
            to="/"
            class="flex items-center p-2 text-base font-normal text-accent-focus rounded-lg hover:bg-base-200"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              xml:space="preserve"
              class="w-6 h-6 text-accent-focus transition duration-75 group-hover:text-accent-focus"
              fill="currentColor"
              viewBox="0 0 495 495"
            >
              <path
                d="m487 226-75-76V64a28 28 0 0 0-57 0v30l-56-56a75 75 0 0 0-103 0L8 226a28 28 0 0 0 40 40L236 78c6-6 17-6 23 0l188 188a28 28 0 1 0 40-40z"
              />
              <path
                d="M258 132c-6-6-15-6-20 0L73 297c-3 3-4 6-4 10v120c0 28 23 51 51 51h82V352h92v126h82c28 0 51-23 51-51V307c0-4-2-7-4-10L258 132z"
              />
            </svg>
            <span class="ml-3">Home</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/about"
            class="flex items-center p-2 text-base font-normal text-accent-focus rounded-lg hover:bg-base-200"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-accent-focus transition duration-75 group-hover:text-accent-focus"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              xml:space="preserve"
              viewBox="0 0 123 123"
            >
              <circle cx="19.5" cy="12.2" r="12.1" />
              <path
                d="M6 67h1v24c0 3 3 6 6 6h13c3 0 6-3 6-6v-2l-2-7V51c0-6 4-12 9-14v-2c0-3-3-6-6-6H6c-3 0-6 3-6 6v26c0 3 3 6 6 6z"
              />
              <circle cx="103.3" cy="12.2" r="12.1" />
              <path
                d="M84 35v2c5 2 9 8 9 14v31l-2 7v1c0 4 3 7 6 7h12c4 0 6-3 6-6V67h2c3 0 6-3 6-6V35c0-4-3-6-6-6H90c-4 0-6 2-6 6zM39 51v31c0 4 3 6 6 6h2v29c0 3 3 6 6 6h17c3 0 6-3 6-6V88h2c3 0 6-2 6-6V51c0-3-3-6-6-6H45c-3 0-6 3-6 6z"
              />
              <circle cx="61.4" cy="26" r="13.9" />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">About Us</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink
            to="/contact"
            class="flex items-center p-2 text-base font-normal text-accent-focus rounded-lg hover:bg-base-200"
          >
            <svg
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="flex-shrink-0 w-6 h-6 text-accent-focus transition duration-75 group-hover:text-accent-focus"
              overflow="hidden"
              viewBox="0 0 1024 1024"
            >
              <path
                d="M512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0zm290 603a80 80 0 0 1-97 56h-2a124 124 0 0 1-125 59 33 33 0 1 1 0-16 108 108 0 0 0 110-51c-12-14 15-38 24-72s-2-69 16-75a203 203 0 0 0 2-29 201 201 0 1 0-399 29c24 1 10 38 20 74 11 43 50 69 7 81a80 80 0 0 1-49-151 222 222 0 1 1 439-2 79 79 0 0 1 54 97z"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Contact Us</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>
<script setup>
import { ref } from "vue";
const showNav = ref(false);
const toggleNav = () => {
  showNav.value = !showNav.value;
};
const closeNav = () => {
  showNav.value = false;
};
</script>
