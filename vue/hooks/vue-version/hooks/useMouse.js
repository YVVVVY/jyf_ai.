import { ref, onMounted, onUnmounted } from 'vue';

export function useMouse() {
  const x = ref(0); // 响应式对象
  const y = ref(0);

  const updataMousePosition = (e) => {
    x.value = e.clientX;
    y.value = e.clientY;
  }
  onMounted(() => {
  window.addEventListener('mousemove',updataMousePosition);
});

onUnmounted(() => {
  window.removeEventListener('mousemove',updataMousePosition);
});
  
  return {
    x,
    y,

  }
}
