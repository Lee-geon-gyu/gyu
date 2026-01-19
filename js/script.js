console.clear();

function backSvgMoveTool__init() {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".draw-line").forEach((path, i) => {
      const length = path.getTotalLength();

      path.style.strokeDasharray = length;
      path.style.strokeDashoffset = length;
      path.getBoundingClientRect();

      path.style.transition = `stroke-dashoffset 2.5s ease ${i * 0.15}s`;
      path.style.strokeDashoffset = "0";
    });
  });
}

backSvgMoveTool__init();
