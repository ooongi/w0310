    
// 노선안내 서브페이지 노선별 지도 바꾸기

document.querySelectorAll('.tab').forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // 활성화 상태 초기화
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.map_container img').forEach(img => img.classList.remove('active'));
    
    // 클릭된 탭과 해당 이미지 활성화
    tab.classList.add('active');
    document.querySelectorAll('.map_container img')[index].classList.add('active');
  });
});

