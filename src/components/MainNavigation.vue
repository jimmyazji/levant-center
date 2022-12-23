<template>
  <nav class="fixed top-0 left-0 z-50 w-full bg-base-100 shadow-sm">
    <div class="hidden sm:flex py-6 max-w-6xl mx-auto justify-between">
      <img class="w-52" src="@/assets/images/logo.png" alt="Levant Center" />
      <ul class="flex justify-evenly items-center min-w-[50%]">
        <li><a href="#about-us">
          <span class="font-semibold p-4 border-2 border-transparent hover:border-accent rounded-lg">About us</span>
        </a></li>
        <li><a href="#our-work">
          <span class="font-semibold p-4 border-2 border-transparent hover:border-accent rounded-lg">Our work</span>
        </a></li>
        <li><a href="#contact-us">
          <span class="font-semibold p-4 border-2 border-transparent hover:border-accent rounded-lg">Contact us</span>
        </a></li>
      </ul>
    </div>
    <div class="sm:hidden py-4">
      <button class="hamburger hamburger--3dxy" :class="{ 'is-active' : showNav }" type="button" @click="toggleNav">
        <span class="hamburger-box">
      <span class="hamburger-inner"></span>
        </span>
      </button>
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
      <a href="#" @click="closeNav" class="flex items-center px-3 mb-5">
        <img src="@/assets/images/logo.png" class="w-full" alt="Levant Center" />
      </a>
      <ul class="space-y-2" @click="closeNav">
        <li>
          <a
            href="#"
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
          </a>
        </li>
        <li>
          <a
            href="#about-us"
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
          </a>
        </li>
        <li>
          <a
            href="#contact-us"
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
          </a>
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
<style scoped>
.hamburger {
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}
.hamburger.is-active:hover {
  opacity: 0.7;
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #2886BF;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #2886BF;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}
/*
     * 3DXY
     */
.hamburger--3dxy .hamburger-box {
  perspective: 80px;
}

.hamburger--3dxy .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dxy .hamburger-inner::before,
.hamburger--3dxy .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger--3dxy.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg) rotateY(180deg);
}
.hamburger--3dxy.is-active .hamburger-inner::before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dxy.is-active .hamburger-inner::after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}

/*
     * 3DXY Reverse
     */
.hamburger--3dxy-r .hamburger-box {
  perspective: 80px;
}

.hamburger--3dxy-r .hamburger-inner {
  transition: transform 0.15s cubic-bezier(0.645, 0.045, 0.355, 1),
    background-color 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.hamburger--3dxy-r .hamburger-inner::before,
.hamburger--3dxy-r .hamburger-inner::after {
  transition: transform 0s 0.1s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.hamburger--3dxy-r.is-active .hamburger-inner {
  background-color: transparent !important;
  transform: rotateX(180deg) rotateY(180deg) rotateZ(-180deg);
}
.hamburger--3dxy-r.is-active .hamburger-inner::before {
  transform: translate3d(0, 10px, 0) rotate(45deg);
}
.hamburger--3dxy-r.is-active .hamburger-inner::after {
  transform: translate3d(0, -10px, 0) rotate(-45deg);
}
</style>