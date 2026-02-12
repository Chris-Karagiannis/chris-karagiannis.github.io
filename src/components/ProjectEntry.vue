<template>
  <a :href="project.link" target="_blank" class="project-link">
    <div class="project" @mouseenter="hover = true" @mouseleave="hover = false" >
      <div class="header">
        <strong>{{ project.name }}</strong>
        
        <span>{{ project.tech }}</span>
      </div>

      <p>{{ project.description }}</p>
      
    </div>
  </a>
</template>

<script setup>
import { ref } from 'vue'
const hover = ref(false)

defineProps({
  project: Object
})
</script>

<style scoped>
.project {
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  background-color: var(--color-card-bg);
  box-shadow: 0 2px 6px var(--color-card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.project .header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
}

.project strong {
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: var(--color-text);
  color: var(--color-text);
}

.project span {
  font-size: 1rem;
  color: var(--color-subtext);
  white-space: normal;  
}

.project p {
  margin-top: 0.1rem;
  font-size: 1.05rem;
  color: var(--color-subtext);
  max-width: 620px;
}

.project-link {
  display: block;
  text-decoration: none;
  color: inherit;
}

.project-link .project {
  cursor: pointer;
}

.project-link:hover .project {
  transform: translateY(-4px);
  box-shadow: 0 6px 20px var(--color-card-shadow-hover);
  background-color: var(--color-card-hover);
}
@media (max-width: 600px) {
  .project .header {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0;
  }
}
</style>
