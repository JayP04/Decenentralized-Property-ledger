// export function animateCircles() {
//     const circles = document.querySelectorAll(".circle");
//     const cursor = document.querySelector(".cursor");

//     circles.forEach(function (circle, index) {
//         circle.x = 0;
//         circle.y = 0;
//         circle.style.backgroundColor = "green";
//     });

//     document.addEventListener("mousemove", function (e) {
//         const x = e.clientX;
//         const y = e.clientY;

//         cursor.style.top = x + "px";
//         cursor.style.left = y + "px";

//         circles.forEach(function (circle, index) {
//             circle.style.left = x - 12 + "px";
//             circle.style.top = y - 12 + "px";

//             circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

//             circle.x = x;
//             circle.y = y;

//             const nextCircle = circles[index + 1] || circles[0];
//             x += (nextCircle.x - x) * 0.3;
//             y += (nextCircle.y - y) * 0.3;
//         });
//     });

//     function animate() {
//         requestAnimationFrame(animate);
//     }

//     animate();
// }


// export function animateCircles() {
//     const circles = document.querySelectorAll(".circle");
//     const cursor = document.querySelector(".cursor");

//     circles.forEach(function (circle, index) {
//         circle.x = 0;
//         circle.y = 0;
//         circle.style.backgroundColor = "green";
//     });

//     document.addEventListener("mousemove", function (e) {
//         const mouseX = e.clientX;
//         const mouseY = e.clientY;

//         // Correct assignment for cursor
//         cursor.style.left = mouseX + "px";
//         cursor.style.top = mouseY + "px";

//         let prevX = mouseX;
//         let prevY = mouseY;

//         circles.forEach(function (circle, index) {
//             // Calculate the position for this circle
//             let newX = prevX - (12 * (index + 1));
//             let newY = prevY - (12 * (index + 1));

//             circle.style.left = newX + "px";
//             circle.style.top = newY + "px";

//             circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

//             // Update prevX and prevY for the next circle
//             prevX = newX;
//             prevY = newY;
//         });
//     });

//     function animate() {
//         requestAnimationFrame(animate);
//     }

//     animate();
// }




const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "white";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
