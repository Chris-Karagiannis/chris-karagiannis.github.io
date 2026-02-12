<template>
    <div class="top">
        <nav class="navbar">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
        </nav>
        <nav class="links">
            <a href="https://github.com/chris-karagiannis" target="_blank"><i class="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/c-karagiannis" target="_blank"><i class="bi bi-linkedin"></i></a>
            <a href="mailto:chris.karagiannis30@outlook.com" target="_blank"><i class="bi bi-envelope-fill"></i></a>
        </nav>
    </div>
</template>

<style scoped>
.top {
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 6px var(--color-card-shadow);
    background: rgba(255, 246, 240, 0.85);
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: space-between;
    position: sticky;
    top: 1rem;
    z-index: 10;
}

.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

}

.navbar a {
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-subtext);
  position: relative;
}

.navbar a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 1px;
  background: currentColor;
  opacity: 0;
  transition: opacity 0.25s ease;
}

.navbar a:hover {
  color: var(--color-link);
}

.navbar a:hover::after {
  opacity: 0.4;
}

.links {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
}

.links a {
  color: var(--color-link);
  text-decoration: none;
  position: relative;
  transition: color 0.25s ease;
}

.links a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 5px;
  width: 100%;
  height: 1px;
  background: currentColor;
  opacity: 0.3;
  transition: opacity 0.25s ease;
}

.links a:hover {
  color: var(--color-link-hover);
}

.bi {
  font-size: x-large;
}

@media (max-width: 600px) {
    .links { 
        margin-top: 0.5rem;
    }

    .navbar a {
        font-size: 0.8rem;
    }

    .top {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0;
    }

}
</style>