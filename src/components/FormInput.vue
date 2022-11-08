<template>
  <input
    class="border-accent px-4 py-4 focus:outline-none border ring-1 ring-transparent placeholder-accent placeholder-opacity-75 hover:placeholder-opacity-100 hover:border-gold-600 focus:border-gold-600 focus:ring-transparent transition-all duration-150"
    :value="modelValue"
    :class="modelValue ? '' : 'focus:pl-6'"
    @input="$emit('update:modelValue', $event.target.value)"
    ref="input"
  />
</template>

<script>
export default {
  props: ["modelValue"],

  emits: ["update:modelValue"],

  methods: {
    focus() {
      this.$refs.input.focus();
    },
  },
};
</script>
