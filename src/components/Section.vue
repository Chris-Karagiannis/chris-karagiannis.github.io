<template>
  <section class="section">
    <h2>{{ title }}</h2>
    <div class="content">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({ title: String })
</script>

<style scoped>
.section {
  margin-top: 2rem;
  scroll-margin-top: 7rem;
}

.section h2 {
  font-size: 1.25rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-section);
  margin-bottom: 0.2rem;
}
</style>