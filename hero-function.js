document.querySelectorAll('.image-box').forEach(box => {
    box.addEventListener('mousemove', e => {
      const x = e.offsetX;
      const y = e.offsetY;
      const width = box.offsetWidth;
      const height = box.offsetHeight;
      const moveX = ((x / width) - 0.5) * 10;
      const moveY = ((y / height) - 0.5) * 10;
      box.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
    });
  
    box.addEventListener('mouseleave', () => {
      box.style.transform = `translate(0, 0) scale(1)`;
    });
  });
  