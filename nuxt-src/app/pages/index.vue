<script setup lang="ts">
import { onMounted, ref } from 'vue'
const loading = ref(true)
const playing = ref(false)
const audio = ref<HTMLAudioElement | null>(null)
onMounted(() => setTimeout(() => (loading.value = false), 1000))
const toggleMusic = async () => {
  if (!audio.value) return
  if (!playing.value) {
    await audio.value.play()
    playing.value = true
  } else {
    audio.value.pause()
    playing.value = false
  }
}
</script>

<template>
  <div>
    <div class="loader" :class="{ hide: !loading }">
      <div class="text-center">
        <h2 style="margin:0;color:#006c52">우리의 작은 기적</h2>
        <p class="muted" style="margin:.5rem 0 0">초대장을 준비하고 있어요</p>
      </div>
    </div>

    <header class="top">
      <span class="material-symbols-outlined" style="color:#006c52">favorite</span>
      <strong style="color:#006c52">우리의 작은 기적</strong>
      <span class="material-symbols-outlined" style="color:#006c52">share</span>
    </header>

    <main>
      <section class="hero">
        <img src="/our-little-miracle/images/family-1.jpg" class="hero-img floating" alt="main" />
        <div style="margin-top:16px">
          <span class="badge joy-gradient">임밍아웃</span>
        </div>
        <h1>우리에게 소중한<br />아기가 찾아왔어요</h1>
        <p class="lead">기쁜 마음으로 임신 소식을 전합니다 💛</p>
      </section>

      <section class="sec" style="background:#e9f9f4">
        <div class="container text-center">
          <span class="material-symbols-outlined" style="font-size:52px;color:#006c52">celebration</span>
          <h2 class="k-title" style="color:#006c52">기쁜 소식 전해요</h2>
          <p style="font-size:24px;color:#006684">설레고 감사한 마음으로 하루하루를 보내고 있어요.</p>
        </div>
      </section>

      <section class="sec">
        <div class="container">
          <h2 class="k-title">우리의 이야기</h2>
          <div class="timeline">
            <div class="row">
              <div class="text text-center"><strong>처음 알게 된 날</strong><p class="muted">작은 생명이 찾아왔다는 사실에 벅차고 감사했어요.</p></div>
              <div class="card"><img src="/our-little-miracle/images/ultrasound-1.jpg" alt="u1" /></div>
            </div>
            <div class="row rev">
              <div class="text text-center"><strong>첫 심장 소리</strong><p class="muted">처음 들은 두근거림에 눈물이 핑 돌았어요.</p></div>
              <div class="card"><img src="/our-little-miracle/images/ultrasound-2.jpg" alt="u2" /></div>
            </div>
            <div class="row">
              <div class="text text-center"><strong>오늘의 마음</strong><p class="muted">건강하게 만나길 기도하며 기다리고 있어요.</p></div>
              <div class="card"><img src="/our-little-miracle/images/family-1.jpg" alt="f1" /></div>
            </div>
          </div>
        </div>
      </section>

      <section class="sec" style="background:#f4f6f8">
        <div class="msgbox panel">
          <h3 style="font-size:34px;color:#006c52;margin-top:0">사랑하는 가족께</h3>
          <p class="muted">작은 기적이 저희에게 찾아왔어요.</p>
          <p class="muted">따뜻한 응원 덕분에 행복한 마음으로 하루하루를 보내고 있습니다.</p>
          <p class="muted">앞으로도 함께 축복해 주세요.</p>
          <p style="color:#006c52;font-weight:700">건강하게 만나요 💛</p>
        </div>
      </section>
    </main>

    <button class="music joy-gradient" @click="toggleMusic">
      {{ playing ? '⏸️ 음악 멈춤' : '🎵 음악 재생' }}
    </button>
    <audio ref="audio" src="/our-little-miracle/audio/bgm.wav" loop preload="none" />
  </div>
</template>
