const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", function handleClick(event) {
    console.log(box.style.backgroundColor);
    const compStyles = window.getComputedStyle(box);
    const backColor = compStyles.getPropertyValue("background-color");

    console.log("box-clicked", backColor);

    if (backColor === "rgb(250, 128, 114)") {
      box.setAttribute("style", "background-color:yellow;");
    } else {
      box.setAttribute("style", "background-color: salmon;");
    }
  });
});
