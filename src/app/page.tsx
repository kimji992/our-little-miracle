'use client'
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
export default function Page(){
 const a=useRef<HTMLAudioElement>(null);const [on,setOn]=useState(false);
 const t=async()=>{if(!a.current)return; if(!on){await a.current.play();setOn(true)}else{a.current.pause();setOn(false)}}
 return <main className='page'>
 <section className='hero'><img src='/our-little-miracle/images/family-1.jpg' alt='hero'/><div className='ov'/><div className='copy'><span>1ST BIRTHDAY INVITATION</span><h1>우리 아기 첫 돌잔치</h1><p>소중한 첫 생일에 여러분을 초대합니다</p></div></section>
 <div className='container'>
 <motion.section className='card' initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><h2>Invitation</h2><h3>첫 생일을 축하해주세요</h3><p>사랑스러운 우리 아기가 세상에 태어난 지 벌써 일 년이 되었습니다. 함께 축하해 주세요.</p></motion.section>
 <motion.section className='card' initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><h2>Growth Story</h2><h3>성장 이야기</h3><div className='timeline'><article><img src='/our-little-miracle/images/ultrasound-1.jpg'/><div><b>처음 만난 날</b><p>작은 울음으로 시작된 하루</p></div></article><article><img src='/our-little-miracle/images/ultrasound-2.jpg'/><div><b>100일</b><p>어느새 100일</p></div></article><article><img src='/our-little-miracle/images/family-1.jpg'/><div><b>첫 생일</b><p>드디어 첫 생일 🎂</p></div></article></div></motion.section>
 <motion.section className='card' initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}}><h2>Gallery</h2><h3>갤러리</h3><Swiper slidesPerView={1.2} centeredSlides spaceBetween={12}><SwiperSlide><img className='slide' src='/our-little-miracle/images/ultrasound-1.jpg'/></SwiperSlide><SwiperSlide><img className='slide' src='/our-little-miracle/images/ultrasound-2.jpg'/></SwiperSlide><SwiperSlide><img className='slide' src='/our-little-miracle/images/family-1.jpg'/></SwiperSlide></Swiper></motion.section>
 </div>
 <button className='music' onClick={t}>{on?'⏸️ 음악 멈춤':'🎵 음악 재생'}</button><audio ref={a} src='/our-little-miracle/audio/bgm.wav' loop preload='none'/>
 </main>
}
