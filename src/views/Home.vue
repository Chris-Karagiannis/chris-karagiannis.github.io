<template>
  <main class="container">
    <Navbar/>
    
    <FadeIn>
      <div class="hero">
        <h1 class="name">Chris Karagiannis</h1>
        <p class="tagline">Software Engineering Student at Adelaide University</p>
        <pre class="ascii-art"><div v-for="(letter, index) in asciiLetters" class="ascii-letter" :style="{ transform: `translateY(${Math.sin(index * 0.5 + t) * 8}px)` }">{{ letter }}</div></pre>
      </div>
      
      <Section id="about" title="About">
        <p class="about-text">
          {{ about }}
        </p>
      </Section>

      <Section id="education" title="Education">
        <Entry v-for="item in education" :key="item.title" v-bind="item" />
      </Section>

      <Section id="projects" title="Projects">
          <ProjectEntry v-for="project in projects" :key="project.name" :project="project" />
      </Section>
      <Section title="Skills" id="skills">
        <div class="skills">
          <div class="skill-group">
            <strong>Languages</strong>
            <p>Python · JavaScript · SQL</p>
          </div>

          <div class="skill-group">
            <strong>Frameworks & Tools</strong>
            <p>Vue.js · Flask · SQLite</p>
          </div>
        </div>
      </Section>
      
    </FadeIn>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import figlet from 'figlet';
import isometric from 'figlet/importable-fonts/Isometric1.js';
import Section from '@/components/Section.vue'
import Entry from '@/components/Entry.vue'
import ProjectEntry from '@/components/ProjectEntry.vue'
import FadeIn from '@/components/FadeIn.vue'
import Navbar from '@/components/Navbar.vue';

import education from '@/data/education'
import projects from '@/data/projects'
import about from '@/data/about';

const t = ref(0);
const asciiLetters = ref([]);
const text = ref("CHRIS")

figlet.parseFont('Isometric', isometric);

function updateText(){
  asciiLetters.value.length = 0;

  for (let i = 0; i < text.value.length; i++) {
    figlet.text(text.value[i], {
      font: 'Isometric',
        }, (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          
          asciiLetters.value.push(data);
        });
    }
}

const animate = () => {
  t.value += 0.05;
  requestAnimationFrame(animate);  
};

onMounted(() => {
  updateText();
  animate();
});

</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Fira Code', 'Source Code Pro', 'JetBrains Mono', monospace;
  font-size: 18px;
  line-height: 1.75;
  color: var(--color-text);
  background-color: var(--color-bg);
  -webkit-font-smoothing: antialiased;
  background:
  repeating-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.06),
    rgba(0, 0, 0, 0.06) 1px,
    transparent 1px,
    transparent 3px
  ),
  var(--color-bg);
}

.container {
  max-width: 760px;
  margin: 0 auto;
  padding: 1rem 1.5rem 1rem;
}

h1,
h2,
h3,
p {
  margin: 0;
}

.ascii-art {
  font-family: 'Fira Code', 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.9rem;
  min-height: 140px;
  color: var(--color-link);
  text-shadow:
    0 2px 0 rgba(90, 55, 35, 0.25),
    0 6px 10px rgba(90, 55, 35, 0.25),
    0 12px 24px rgba(90, 55, 35, 0.18);
  
  white-space: pre;
  line-height: 1;
  display: flex;
  justify-content: center;
  font-weight: bold;
}

.name {
  font-size: 3.2rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  margin-bottom: -0.5rem;
  color: var(--color-text);
  display: flex;
  justify-content: center;
}

.tagline {
  font-size: 1.25rem;
  color: var(--color-subtext);
  display: flex;
  justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.skills {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-group strong {
  font-size: 1.1rem;
  color: var(--color-text);
}

.skill-group p {
  margin-top: 0.1rem;
  font-size: 1.05rem;
  color: var(--color-subtext);
}

.hero {
  margin-bottom: 1rem;
  padding-bottom: 1.75rem;
  border-bottom: 1px dashed rgba(90, 55, 35, 0.2);
  padding-top: 0.5rem;
}

.about-text {
  color: var(--color-subtext);
  font-size: 1.1rem;
  line-height: 1.75;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#contact .links i {
  font-size: 3em;
}

@media (max-width: 600px) {
  body {
    background:
      repeating-linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.035),
        rgba(0, 0, 0, 0.035) 1px,
        transparent 1px,
        transparent 4px
      ),
      var(--color-bg);
  }

  .name {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 0;
  }

  .tagline {
    font-size: 1rem;
    text-align: center;
    margin-top: 0.25rem;
  }

  .section {
    margin-top: 1.5rem;
  }
  
  .ascii-art {
    font-size: 0.5rem;
    min-height: 50px;
    margin-top: 1rem;
    margin-bottom: -0.25rem;
  }

}


</style>