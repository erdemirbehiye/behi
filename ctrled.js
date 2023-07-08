var images = [
  "./images/breast_0.jpg",
  "./images/fitness.jpg",
  "./images/unhappy_nose.jpg",
  "./images/bacardi.jpg",
];

const google_search = document.getElementById("backg");

const img_1 = document.createElement("img");
img_1.src = images[0];

const img_2 = document.createElement("img");
img_2.src = images[1];

const img_3 = document.createElement("img");
img_3.src = images[2];

const img_4 = document.createElement("img");
img_4.src = images[3];

google_search.appendChild(img_1);
google_search.appendChild(img_2);
google_search.appendChild(img_3);
google_search.appendChild(img_4);

img_1.style.marginLeft = "15vh";
img_1.style.marginTop = "20vh";
img_1.style.width = "25vh";
img_1.style.border = "1px solid #555";
img_1.setAttribute("id", "img1");

img_2.style.marginLeft = "15vh";
img_2.style.marginTop = "45vh";
img_2.style.width = "25vh";
img_2.style.border = "1px solid #555";
img_2.setAttribute("id", "img2");

img_3.style.marginLeft = "160vh";
img_3.style.marginTop = "20vh";
img_3.style.width = "25vh";
img_3.style.border = "1px solid #555";
img_3.setAttribute("id", "img3");

img_4.style.marginLeft = "160vh";
img_4.style.marginTop = "60vh";
img_4.style.width = "25vh";
img_4.style.border = "1px solid #555";
img_4.setAttribute("id", "img4");

test_1 = document.getElementById("img1");
test_2 = document.getElementById("img2");
test_3 = document.getElementById("img3");
test_4 = document.getElementById("img4");

var images_list = [test_1, test_2, test_3, test_4];

//for mouse
const mouse_img = document.createElement("img");
mouse_img.setAttribute("id", "follow");
mouse_img.src = "./images/pointer.png";
google_search.appendChild(mouse_img);

var x;
var y;

const FAKE_CURSOR_FOLLOW_DURATION = 1500;
const FORCED_ANIMATION_DURATION = 2000;
let hasStarted = false;

// let hasStarted = false
// if mmouse moved:
// start a function that:
//  - hasStarted = true
//  - 3 seconds follow mouse with a fake cursor
//  - 2 seconds move fake cursor with a forced animation
//  - hasStarted = false

// add an event listener that runs this function
function myFunc() {
  console.log(hasStarted);
  if (hasStarted) {
    return;
  }

  hasStarted = true;

  document.addEventListener("mousemove", followMouseWithFakeCursor);
  setTimeout(() => {
    document.removeEventListener("mousemove", followMouseWithFakeCursor);
    forceFakeCursorToTheAd();
  }, FAKE_CURSOR_FOLLOW_DURATION);

  setTimeout(() => {
    hasStarted = false;
    // document.removeEventListener("mousemove", myFunc);
  }, FAKE_CURSOR_FOLLOW_DURATION + FORCED_ANIMATION_DURATION);
}

// document.addEventListener("mousemove", myFunc, { once: true });
// myCallback();
const intervalID = setInterval(myCallback, 5000, "Parameter 1", "Parameter 2");

function myCallback() {
  document.addEventListener("mousemove", myFunc, { once: true });
}

// et btn = document.getElementById('btn');
// btn.addEventListener("click", function() {

//     // onClick code

// }, {once : true});

function followMouseWithFakeCursor(e) {
  $("#follow").css({ left: e.pageX, top: e.pageY });
  x = e.pageX;
  y = e.pageY;
}
var dif_x;
var dif_y;

function forceFakeCursorToTheAd() {
  var test = images_list[Math.floor(Math.random() * images_list.length)];

  mouseDiv = document.getElementById("follow");
  // var dif_x = test.getBoundingClientRect().x - x;
  // var dif_y = test.getBoundingClientRect().y - y;
  var test_center_x =
    test.getBoundingClientRect().x + test.getBoundingClientRect().width / 2;
  var test_center_y =
    test.getBoundingClientRect().y + test.getBoundingClientRect().height / 2;
  dif_x = test_center_x - x;
  dif_y = test_center_y - y;
  // console.log(test.getBoundingClientRect());
  // img_2.style.width
  //   console.log(dif_x, dif_y);
  //   var move_x = dif_x + 20;
  //   var move_y = dif_y + 20;
  // mouseDiv.style.animationDirection = "reverse";
  mouseDiv.animate(
    [
      // keyframes
      //   { transform: "translateY(0px)" },
      { transform: "translate(" + dif_x + "px," + dif_y + "px)" },
    ],
    {
      // timing options
      duration: FORCED_ANIMATION_DURATION,
      // animation-direction: alternate;
      // iterations: Infinity,
    }
  );
  // x = x + dif_x;
  // y = y + dif_y;

  setTimeout(function () {
    openTab();
  }, FORCED_ANIMATION_DURATION + 300);

  // setTimeout(function () {
  //   toTheCenter;
  // }, FORCED_ANIMATION_DURATION);

  setTimeout(function () {
    applyCursorRippleEffect();
  }, FORCED_ANIMATION_DURATION);
}

function toTheCenter() {
  mouse_img.animate(
    [{ transform: "translate(" - dif_x + "px," - dif_y + "px)" }],
    {
      duration: FORCED_ANIMATION_DURATION,
    }
  );
}

function openTab() {
  var tabb = window.open("./blank.html", "_blank");
}

function applyCursorRippleEffect(e) {
  const ripple = document.createElement("div");

  ripple.className = "ripple";
  document.body.appendChild(ripple);

  ripple.style.left = `${x + dif_x}px`;
  ripple.style.top = `${y + dif_y}px`;
  ripple.style.animation = `ripple-effect .4s  linear`;
  ripple.onanimationend = () => {
    document.body.removeChild(ripple);
  };
}

// extra and optional part:
function changeContent(test) {
  test.src = images[Math.floor(Math.random() * images.length)];
  test.style.marginLeft = getRandomArbitrary(10, 90) + "vh";
  test.style.marginTop = getRandomArbitrary(10, 90) + "vh";
}

function getRandomArbitrary(min, max) {
  return parseInt(Math.random() * (max - min) + min);
}

const all = document.body.getElementsByTagName("*");
for (var i = 0; i < all.length; ++i) {
  all[i].onclick = (event) => event.stopPropagation();
}

//restrictions
document.oncontextmenu = document.body.oncontextmenu = function () {
  return false;
};
