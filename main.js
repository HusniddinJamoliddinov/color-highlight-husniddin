const boxes = document.querySelectorAll(".box");

function colorHightlight(boxes){
  for (const box of boxes) {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = "coral";
      box.style.transition = "0.1";
  
      new Promise((resolve, reject) => {
        setTimeout(() => {
          box.style.backgroundColor = "red";
          box.innerHTML = "red";
          resolve("green");
        }, 500);
      })
        .then((color) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              box.style.backgroundColor = color;
              box.innerHTML = "green";
              resolve("yellow");
            }, 500);
          });
        })
        .then((color) => {
          setTimeout(() => {
            box.style.backgroundColor = color;
            box.style.transition = "1s";
          }, 500);
        })
        .then((color) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              box.style.backgroundColor = color;
              box.innerHTML = "yellow";
              resolve("blue");
            }, 500);
          });
        })
        .then((color) => {
          setTimeout(() => {
            box.style.backgroundColor = color;
            box.style.transition = "1s";
          }, 500);
        })
        .then((color) => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              box.style.backgroundColor = color;
              box.innerHTML = "blue";
              resolve("#464343");
            }, 500);
          });
        })
        .then((color) => {
          setTimeout(() => {
            box.style.backgroundColor = color;
            box.style.transition = "1.2s";
            box.innerHTML = "";
          }, 500);
        });
    });
  }
}