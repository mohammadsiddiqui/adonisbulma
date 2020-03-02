document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // const navbar = document.getElementById("#navbar");

  const nav = document.getElementById("navbar");
  const canvas = document.getElementById("mainCanvas");
  let Height = 100;
  if (!canvas) {
    nav.classList.add("is-primary");
  } else if (canvas && canvas.clientHeight) {
    Height = canvas.clientHeight;
  }

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach(el => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
        document.body.classList.toggle("is-active");
      });
    });
  }

  window.addEventListener("scroll", function() {
    scrollpos = window.scrollY;
    if (scrollpos >= Height) {
      nav.classList.add("is-primary");
    } else {
      nav.classList.remove("is-primary");
    }
  });
});

//Particle Effect

// const particles = [];
// function setup() {
//   createCanvas(window.innerWidth, window.innerHeight);
//   console.log("setup");

//   const particlesLength = Math.min(Math.floor(window.innerWidth / 10), 100);
//   for (let i = 0; i < particlesLength; i++) {
//     particles.push(new Particle());
//   }
// }

// function draw() {
//   console.log("draw");
//   background(20);
//   particles.forEach((particle, idx) => {
//     particle.update();
//     particle.draw();
//     particle.checkParticles(particles.slice(idx));
//   });
// }

// class Particle {
//   constructor() {
//     this.pos = createVector(random(width), random(height));
//     this.vel = createVector(random(-2, 2), random(-2, 2));
//     this.size = 5;
//   }

//   update() {
//     this.pos.add(this.vel);
//     this.edges();
//   }

//   draw() {
//     noStroke();
//     fill("rgba(255, 255, 255, 0.5)");
//     circle(this.pos.x, this.pos.y, this.size * 2);
//   }

//   edges() {
//     if (this.pos.x < 0 || this.pos.x > width) {
//       this.vel.x *= -1;
//     }

//     if (this.pos.y < 0 || this.pos.y > height) {
//       this.vel.y *= -1;
//     }

//     // 		if(this.pos.x > width) {
//     // 			this.pos.x = 0;
//     // 		}

//     // 		if(this.pos.y > height) {
//     // 			this.pos.y = 0;
//     // 		}
//   }

//   checkParticles(particles) {
//     particles.forEach(particle => {
//       const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
//       if (d < 120) {
//         const alpha = map(d, 0, 120, 0, 0.25);
//         stroke(`rgba(255, 255, 255, ${alpha})`);
//         line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
//       }
//     });
//   }
// }
