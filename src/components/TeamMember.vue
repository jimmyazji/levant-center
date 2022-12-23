<template>
  <div
    class="sm:flex w-full sm:space-x-8 space-y-4 sm:space-y-0 justify-center text-left items-center odd:pl-8 even:pr-8 group"
  >
    <div data-aos="zoom-in-right" class="block text-center">
      <div class="avatar">
        <div class="w-32 rounded-full border-accent-focus border-4">
          <img
            :src="
              member.img
                ? require(`../assets/images/${member.img}`)
                : `https://ui-avatars.com/api/?name=${member.name}`
            "
            :alt="member.name"
          />
        </div>
      </div>
      <h3 class="text-base-content text-xl capitalize">{{ member.name }}</h3>
      <span class="text-secondary">{{ member.position }}</span>
    </div>
    <div data-aos="flip-up">
      <div class="bg-base-100 p-8 border-accent-focus border">
        <p class="text-base-content">
          {{ member.about }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ member: Object });
</script>
