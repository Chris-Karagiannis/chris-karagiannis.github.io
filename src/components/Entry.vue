<template>
  <div class="entry">
    <div class="header">
      <strong>{{ institution }}</strong>
      <span>{{ period }}</span>
    </div>
    <span>{{ title }}</span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  period: String,
  institution: String
})
</script>

<style scoped>
.entry {
  margin-bottom: 0.5rem;
}

.entry .header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
}

.entry strong {
  font-weight: bold;
  color: var(--color-text);
}

.entry span {
  font-size: 1.05rem;
  color: var(--color-subtext);
}

.entry p {
  font-size: 1.05rem;
  color: var(--color-subtext);
  max-width: 620px;
}

@media (max-width: 600px) {
  .entry .header {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0;
  }

}
</style>