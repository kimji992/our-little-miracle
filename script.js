const io = new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const slider=document.getElementById('slider');
const dots=document.getElementById('dots');
const count=slider.querySelectorAll('img').length;
for(let i=0;i<count;i++){const b=document.createElement('button');if(i===0)b.classList.add('active');dots.appendChild(b)}
const dotEls=[...dots.children];
slider.addEventListener('scroll',()=>{
  const idx=Math.round(slider.scrollLeft/slider.clientWidth);
  dotEls.forEach((d,i)=>d.classList.toggle('active',i===idx));
});

const btn=document.getElementById('musicToggle');
const bgm=document.getElementById('bgm');
let on=false;
btn.addEventListener('click',async()=>{
  try{
    if(!on){await bgm.play();on=true;btn.textContent='⏸️ 음악 멈추기'}
    else{bgm.pause();on=false;btn.textContent='🎵 음악 듣기'}
  }catch(e){alert('음악 파일 로드에 실패했어요.')}
});
