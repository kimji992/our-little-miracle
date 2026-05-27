<script setup>
import { onMounted, ref } from 'vue'
const loading = ref(true)
const playing = ref(false)
const audio = ref(null)
onMounted(() => setTimeout(() => (loading.value = false), 1200))
const toggleMusic = async () => {
  if (!audio.value) return
  if (!playing.value) { await audio.value.play(); playing.value = true }
  else { audio.value.pause(); playing.value = false }
}
</script>

<template>
  <div>
    <div class="loader" :class="{ hide: !loading }">
      <div style="text-align:center">
        <h2 style="margin:0;color:#006c52">Our Little Miracle</h2>
        <p class="muted" style="margin:.4rem 0 0">초대장을 준비하고 있어요</p>
      </div>
    </div>

    <header class="top">
      <span class="material-symbols-outlined" style="color:#006c52">favorite</span>
      <strong style="color:#006c52">우리의 작은 기적</strong>
      <span class="material-symbols-outlined" style="color:#006c52">share</span>
    </header>

    <main>
      <!-- 1. hero / coming soon -->
      <section class="hero">
        <img :src="'/our-little-miracle/images/ultrasound-1.jpg'" class="hero-img" alt="ultrasound-main" />
        <div style="margin-top:16px"><span class="badge joy-gradient">FIRST REVEAL</span></div>
        <h1>할아버지, 할머니가 되신 걸<br>축하드려요</h1>
        <p class="lead">오늘 처음 전하는 소중한 소식, 우리 아기가 찾아왔어요 💛</p>

        <div class="card" style="max-width:720px;margin:22px auto 0;padding:18px 18px;text-align:left">
          <h3 style="margin:0 0 10px;color:#0f7f68">프롤로그</h3>
          <p class="muted" style="margin:0;line-height:1.7">참 오래 기다렸던 소식을 오늘 드디어 전해요.
          작은 두근거림이 저희 하루를 바꾸었고,
          가장 먼저 떠오른 얼굴은 할아버지와 할머니였어요.</p>
        </div>
      </section>

      <!-- 2. congratulation section -->
      <section class="sec" style="background:#e9f9f4">
        <div class="container" style="text-align:center">
          <span class="material-symbols-outlined" style="font-size:52px;color:#006c52">celebration</span>
          <h2 class="k-title" style="color:#006c52">축하합니다</h2>
          <p style="font-size:24px;color:#006684">할아버지, 할머니가 되셨어요!</p>
        </div>
      </section>

      <!-- 3. timeline blocks -->
      <section class="sec">
        <div class="container">
          <h2 class="k-title">우리의 성장 이야기</h2>
          <div class="timeline">
            <div class="row">
              <div class="text" style="text-align:center">
                <strong>첫 만남</strong>
                <p class="muted">검은 화면 속 작은 점 하나를 본 날,
                저희는 한참 말없이 웃기만 했어요.
                그날부터 모든 계절이 다르게 보였어요.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/ultrasound-1.jpg'" alt="u1" /></div>
            </div>
            <div class="row rev">
              <div class="text" style="text-align:center">
                <strong>두근거림</strong>
                <p class="muted">아주 빠르게 뛰던 작은 심장 소리를 듣고
                서로 손을 꼭 잡았던 순간을 잊지 못해요.
                그날, 가족이 한 걸음 더 가까워졌어요.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/ultrasound-2.jpg'" alt="u2" /></div>
            </div>
            <div class="row">
              <div class="text" style="text-align:center">
                <strong>기다림의 시간</strong>
                <p class="muted">기다림의 시간은 생각보다 길었지만
                덕분에 감사하는 마음을 배웠어요.
                이제 그 기쁨을 함께 나누고 싶어요.</p>
              </div>
              <div class="card"><img :src="'/our-little-miracle/images/family-1.jpg'" alt="family" /></div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. letter section -->
      <section class="sec" style="background:#f4f6f8">
        <div class="panel">
          <h3 style="font-size:34px;color:#006c52;margin-top:0">사랑하는 할아버지, 할머니께</h3>
          <p class="muted">작은 생명을 기다리는 시간 동안 늘 따뜻하게 응원해 주셔서 감사합니다.</p>
          <p class="muted">불안한 날에도, 기쁜 날에도 부모님 같은 마음으로 곁을 지켜주셔서 큰 힘이 되었어요.</p>
          <p class="muted">아기가 태어나면 가장 먼저 안겨드리고 싶어요.</p>
          <p class="muted">앞으로도 우리 아기의 모든 첫 순간을 함께해 주세요.</p>
          <p style="color:#006c52;font-weight:700">할아버지, 할머니 사랑해요. 진심으로 감사드립니다 💛</p>
        </div>
      </section>



      <section class="sec" style="padding-top:18px">
        <div class="container">
          <div class="panel" style="background:#ffffff">
            <h3 style="font-size:30px;color:#0f7f68;margin-top:0">아기에게 보내는 한 줄</h3>
            <p class="muted" style="margin:0;line-height:1.8">"우리 아가, 너는 이미 많은 사랑 속에서 기다려지고 있단다."</p>
          </div>
        </div>
      </section>

      <!-- 5. final greeting/footer style -->
      <section class="sec" style="padding-top:28px;padding-bottom:56px;text-align:center">
        <p class="muted" style="margin:0">Our Little Miracle · For Grandpa & Grandma</p>
      </section>
    </main>

    <button class="music joy-gradient" @click="toggleMusic">{{ playing ? '⏸️ 음악 멈춤' : '🎵 음악 재생' }}</button>
    <audio ref="audio" :src="'/our-little-miracle/audio/bgm.wav'" loop preload="none" />
  </div>
</template>
