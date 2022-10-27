<template>
  <textarea
    rows="6"
    class="border-accent resize-none px-4 py-4 focus:outline-none border ring-1 ring-transparent placeholder-accent placeholder-opacity-75 hover:placeholder-opacity-100 hover:border-gold-600 focus:border-gold-600 focus:pl-6 focus:ring-transparent transition-all duration-150"
    :value="modelValue"
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
