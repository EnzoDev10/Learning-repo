const h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
    $("p:last-child").css({
        backgroundColor: "green",
        color: "white",
        padding: "5px 15px",
        display: "table",
      }); 
})

