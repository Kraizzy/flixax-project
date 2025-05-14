      const slides = document.querySelectorAll(".slide");
      const dots = document.querySelectorAll(".dot");
      const prevArrow = document.querySelector(".slider-prev");
      const nextArrow = document.querySelector(".slider-next");

      let current = 0;

      function showSlide(index) {
        slides.forEach((s, i) => {
          s.classList.toggle("active", i === index);
          dots[i].classList.toggle("active", i === index);
        });
        current = index;
      }

      // Handle next arrow click
      nextArrow.addEventListener("click", () => {
        let nextIndex = (current + 1) % slides.length; // Loop back to first slide
        showSlide(nextIndex);
      });

      // Handle previous arrow click
      prevArrow.addEventListener("click", () => {
        let prevIndex = (current - 1 + slides.length) % slides.length; // Loop back to last slide
        showSlide(prevIndex);
      });

      //Dot Navigation
      dots.forEach((dot, i) => {
        dot.addEventListener("click", () => showSlide(i));
      });

      // Autoplay every 5s
      setInterval(() => {
        let next = (current + 1) % slides.length;
        showSlide(next);
      }, 5000);

      window.addEventListener("DOMContentLoaded", () => {
        const filterDiv = document.querySelector(".filter-div");
        const dropdown = document.querySelector(".dropdown-menu");

        filterDiv.addEventListener("click", (e) => {
          e.stopPropagation();
          filterDiv.classList.toggle("open");
        });

        // closes it
        document.addEventListener("click", () => {
          filterDiv.classList.remove("open");
        });
        // Hambuger
        const nav = document.querySelector(".nav-bar");
        const toggle = nav.querySelector(".hamburger");

        toggle.addEventListener("click", (e) => {
          e.stopPropagation();
          nav.classList.toggle("open");
        });

        // close menu when clicking outside
        document.addEventListener("click", () => {
          nav.classList.remove("open");
        });
      });
      document.addEventListener("DOMContentLoaded", function(){
        const grid = document.querySelector(".rec-card-grid");
        const cards = grid.querySelectorAll(".card");
        const cardsPerRow = 5;
        const visibleRows = 3;
        const totalVisible = cardsPerRow * visibleRows;

        // Hide cards beyond 3rd row
        cards.forEach((card, index) => {
          if (index >= totalVisible){
            card.classList.add("hidden")
          }
        });

        //Load More button
        const loadMoreBtn = document.querySelector(".loadingbutton button");

        loadMoreBtn.addEventListener("click", function(){
          cards.forEach(card => card.classList.remove("hidden"));
          loadMoreBtn.parentElement.remove();
        });
      });

      document.querySelectorAll('.arrow-div').forEach(arrowDiv => {
      const arrows = arrowDiv.querySelectorAll('.arrow-icon');
      let scrollTarget = arrowDiv.parentElement.nextElementSibling;

      // Fallback: look inside section for known scrollable classes
      if (!scrollTarget || !(scrollTarget.classList.contains('card-grid') || scrollTarget.classList.contains('row-grid'))) {
        scrollTarget = arrowDiv.closest('section')?.querySelector('.card-grid, .row-grid');
      }

      if (arrows.length === 2 && scrollTarget) {
        arrows[0].addEventListener('click', () => {
          scrollTarget.scrollBy({ left: -300, behavior: 'smooth' });
        });

        arrows[1].addEventListener('click', () => {
          scrollTarget.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }
});
