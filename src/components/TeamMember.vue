<template>
  <div
    class="sm:flex w-full sm:space-x-8 justify-center text-left items-center odd:pl-8 even:pr-8 group"
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
      <h3 class="text-base-100 text-xl capitalize">{{ member.name }}</h3>
      <span class="text-base-300">{{ member.position }}</span>
    </div>
    <div data-aos="flip-up">
      <div
        class="bg-base-100 p-8 border-accent-focus border group-odd:skew-x-2 md:group-odd:skew-x-6 md:group-even:-skew-x-6 group-even:-skew-x-2"
      >
        <p
          class="group-odd:-skew-x-2 md:group-odd:-skew-x-6 md:group-even:skew-x-6 group-even:skew-x-2 text-base-content"
        >
          {{ member.about }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps({ member: Object });
</script>
