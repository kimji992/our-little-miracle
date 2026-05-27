<script setup>
import { onMounted, ref } from 'vue'
const loading = ref(true)
const playing = ref(false)
const audio = ref(null)
onMounted(() => setTimeout(() => (loading.value = false), 900))
const toggleMusic = async () => {
  if (!audio.value) return
  if (!playing.value) { await audio.value.play(); playing.value = true }
  else { audio.value.pause(); playing.value = false }
}
</script>

<template>
  <div>
    <div class="loader" :class="{ hide: !loading }"><div>Our Little Miracle</div></div>

    <header class="top">우리의 작은 기적</header>

    <main>
      <section class="hero section">
        <div class="container hero-box card">
          <img :src="'/our-little-miracle/images/ultrasound-1.jpg'" alt="hero" />
          <div class="badge">FIRST REVEAL</div>
          <h1>할아버지 · 할머니</h1>
          <p class="lead">축하드려요 💛</p>
        </div>
      </section>

      <section class="section" style="padding-top:8px">
        <div class="container stack">
          <article class="item">
            <div class="img"><img :src="'/our-little-miracle/images/ultrasound-1.jpg'" alt="u1" /></div>
            <div class="txt" style="display:flex;align-items:center;justify-content:center"><div class="k">STEP 01 · 첫 만남</div></div>
          </article>
          <article class="item rev">
            <div class="img"><img :src="'/our-little-miracle/images/ultrasound-2.jpg'" alt="u2" /></div>
            <div class="txt" style="display:flex;align-items:center;justify-content:center"><div class="k">STEP 02 · 두근거림</div></div>
          </article>
          <article class="item">
            <div class="img"><img :src="'/our-little-miracle/images/family-1.jpg'" alt="f1" /></div>
            <div class="txt" style="display:flex;align-items:center;justify-content:center"><div class="k">STEP 03 · 기다림</div></div>
          </article>
        </div>
      </section>

      <section class="section" style="padding-top:10px">
        <div class="container card" style="padding:14px">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
            <img :src="'/our-little-miracle/images/ultrasound-1.jpg'" style="width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:12px" alt="g1" />
            <img :src="'/our-little-miracle/images/ultrasound-2.jpg'" style="width:100%;aspect-ratio:1/1;object-fit:cover;border-radius:12px" alt="g2" />
            <img :src="'/our-little-miracle/images/family-1.jpg'" style="grid-column:1 / span 2;width:100%;aspect-ratio:16/9;object-fit:cover;border-radius:12px" alt="g3" />
          </div>
        </div>
      </section>

      <p class="footer">with love</p>
    </main>

    <button class="music" @click="toggleMusic">{{ playing ? '음악 멈춤' : '음악 재생' }}</button>
    <audio ref="audio" :src="'/our-little-miracle/audio/bgm.wav'" loop preload="none" />
  </div>
</template>
