<template>
  <div id="app">
    <div class="boobies">
      <h1>Surface</h1>
      <h3>You can find me here</h3>
      <div class="icons">
        <a href="https://github.com/surf6ce" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/github.png" alt="GitHub">
        </a>
        <div class="discord-container">
          <img src="@/assets/discord.png" alt="Discord" @click="toggleDiscord">
          <transition name="fade">
            <div class="discord-dropdown" v-if="showDiscord" @click="copyDiscordUsername">
              @surf6ce
            </div>
          </transition>
        </div>
        <a href="https://twitter.com/surf6ce" target="_blank" rel="noopener noreferrer">
          <img src="@/assets/twitter.png" alt="Twitter">
        </a>
      </div>
    </div>
    <transition name="rise">
      <div class="copied-notification" v-if="showCopiedNotification">
        {{ isIOS ? 'Please copy the text manually' : 'Copied!' }}
      </div>
    </transition>
  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      showDiscord: false,
      showCopiedNotification: false,
      isIOS: false
    }
  },
  mounted() {
    // Detect iOS devices for clipboard bs
    this.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  },
  methods: {
    toggleDiscord() {
      this.showDiscord = !this.showDiscord;
    },
    copyDiscordUsername() {
      if (this.isIOS) {
        // For iOS users, show a different notification (Special ass safari)
        this.showCopiedNotification = true;
        setTimeout(() => {
          this.showCopiedNotification = false;
        }, 2000);
      } else {
        // For non-iOS works as expected
        navigator.clipboard.writeText('@surf6ce').then(() => {
          this.showCopiedNotification = true;
          setTimeout(() => {
            this.showCopiedNotification = false;
          }, 2000);
        });
      }
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'KiwiSoda';
  src: url('/public/fonts/KiwiSoda.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
}

:global(body) {
  background-color: #000000;
}

.boobies {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  padding: 30px;  
  box-sizing: border-box;
}

h1 {
  font-family: 'KiwiSoda', sans-serif;
  font-size: clamp(3.6rem, 12vw, 8.4rem);  
  margin: 0;
  text-align: center;
  color: #ffffff;
}

h3 { 
  font-family: 'Figtree', sans-serif; 
  font-size: 1.5rem;  
  margin-top: 1.2rem;  
  text-align: center;
  color: #ffffff;
}

.icons {
  margin-top: 2rem;  
}

.icons a {
  display: inline-block;
  margin: 12px; 
}

.icons img {
  width: 55px;  
  height: 55px;  
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg);
  transition: transform 0.2s ease;
}

.discord-container {
  position: relative;
  display: inline-block;
  margin: 12px;  
  cursor: pointer;
}

.discord-container img {
  width: 55px;  
  height: 55px; 
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg);
  transition: transform 0.2s ease;
}

.fade-enter-active {
  animation: dropdownFade 0.2s ease;
}

.fade-leave-active {
  animation: dropdownFade 0.2s ease reverse;
}

.discord-dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000000;
  color: #ffffff;
  padding: 10px 16px;  
  border: 1px solid #ffffff;
  border-radius: 6px; 
  margin-top: 10px; 
  white-space: nowrap;
  font-family: 'Figtree', sans-serif;
  font-size: 1.1rem; 
  text-align: center; 
}

@keyframes dropdownFade {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.discord-dropdown::before {
  content: '';
  position: absolute;
  top: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #ffffff;
  animation: arrowFade 0.2s ease;
}

@keyframes arrowFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.navbar {
  width: 100%;
  background-color: #111;
  padding: 14px 0;  
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 20px;  
}

.nav-links a {
  text-decoration: none;
  color: #ffffff;
  font-family: 'Figtree', sans-serif;
  font-size: 1.2rem;  
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #7e8081;
}

.copied-notification {
  position: fixed;
  bottom: 25px;  
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 12px 24px;  
  border-radius: 6px;  
  font-family: 'Figtree', sans-serif;
  font-size: 1.1rem;  
  z-index: 2000;
  border: 1px solid #ffffff;
  text-align: center;  
  min-width: 140px;  
}

.rise-enter-active {
  animation: rise-up 0.3s ease-out forwards;
}

.rise-leave-active {
  animation: rise-up 0.3s ease-in reverse;
}

@keyframes rise-up {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
</style>

