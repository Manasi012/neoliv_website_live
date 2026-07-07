      // Initialize AOS
      AOS.init({
        duration: 800 /* Slightly faster animation */,
        once: true,
        offset: 80 /* Adjust offset */,
      });

      // Header scroll effect
      window.addEventListener("scroll", () => {
        const header = document.querySelector(".header");
        if (window.scrollY > 80) {
          /* Adjust scroll threshold */
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Active navigation highlighting
      window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section[id]");
        const navLinks = document.querySelectorAll(".nav-link");

        let current = "";
        const scrollPosition = window.scrollY;
        const headerHeight =
          document.querySelector(".header")?.offsetHeight ||
          70; /* Adjusted default */
        const offset = headerHeight + 30; // Adjusted offset

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (
            scrollPosition >= sectionTop - offset &&
            scrollPosition < sectionTop + sectionHeight - offset
          ) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          const href = link.getAttribute("href");
          if (href === `#${current}`) {
            link.classList.add("active");
          }
        });
      });

      // Enhanced scroll behavior with fallback for older browsers
      function smoothScrollTo(target, offset = 0) {
        const targetElement =
          typeof target === "string" ? document.querySelector(target) : target;
        if (!targetElement) return;

        const targetPosition = targetElement.offsetTop - offset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 600; /* Faster scroll */
        let start = null;

        function animation(currentTime) {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return (c / 2) * t * t + b;
          t--;
          return (-c / 2) * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
      }

      // Utility function to close mobile navbar
      function closeMobileNavbar() {
        const navbarCollapse = document.querySelector(".navbar-collapse");
        const navbarToggler = document.querySelector(".navbar-toggler");

        if (navbarCollapse && navbarCollapse.classList.contains("show")) {
          try {
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
              bsCollapse.hide();
              return 300;
            }
          } catch (e) {
            console.warn("Bootstrap Collapse instance error:", e);
          }

          navbarCollapse.classList.remove("show");
          // navbarCollapse.classList.add("collapse"); // This might re-trigger transition if not careful
          if (navbarToggler) {
            navbarToggler.setAttribute("aria-expanded", "false");
            navbarToggler.classList.add("collapsed");
          }
          return 100;
        }
        return 0;
      }

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          const targetId = this.getAttribute("href");
          const target = document.querySelector(targetId);

          if (target) {
            const closeDelay = closeMobileNavbar();
            setTimeout(() => {
              const header = document.querySelector(".header");
              let headerHeight = 70; /* Adjusted default */
              if (header) {
                headerHeight = header.offsetHeight;
              }
              let extraOffset = 10; /* Reduced extra offset */
              // if (window.innerWidth <= 576) extraOffset = 50; // Kept larger for small screens if needed
              // else if (window.innerWidth <= 768) extraOffset = 40;
              // else if (window.innerWidth <= 992) extraOffset = 30;
              const totalOffset = headerHeight + extraOffset;

              if ("scrollBehavior" in document.documentElement.style) {
                window.scrollTo({
                  top: Math.max(0, target.offsetTop - totalOffset),
                  behavior: "smooth",
                });
              } else {
                smoothScrollTo(target, totalOffset);
              }
            }, closeDelay);
          }
        });
      });


      // Pillar Cards hover effects
      const pillarCardsFinal = document.querySelectorAll(".pillar-card-final");
      pillarCardsFinal.forEach((card) => {
        card.addEventListener("mouseenter", function () {
          this.style.transform =
            "translateY(-6px)"; /* Slightly less movement */
          this.style.transition = "transform 0.25s ease";
        });
        card.addEventListener("mouseleave", function () {
          this.style.transform = "translateY(0)";
        });
      });

      // Tab switching functionality
      const promiseTabs = document.querySelectorAll(".promise-tab");
      const tabContents = document.querySelectorAll(".tab-content");

      promiseTabs.forEach((tab) => {
        tab.addEventListener("click", function () {
          const tabId = this.getAttribute("data-tab");
          promiseTabs.forEach((t) => t.classList.remove("active"));
          tabContents.forEach((content) => content.classList.remove("active"));
          this.classList.add("active");
          const activeContent = document.getElementById(`${tabId}-content`);
          if (activeContent) {
            activeContent.classList.add("active");
            // Optionally re-initialize AOS for newly displayed content if elements were hidden
            // AOS.refreshHard(); // Or selectively refresh AOS on elements within activeContent
          }
        });
      });

      // Download button handling
      const downloadBtn = document.querySelector(".btn-download");
      if (downloadBtn) {
        downloadBtn.addEventListener("click", function () {
          // alert(
          //   "ESG Report download will begin shortly. Thank you for your interest!"
          // );
          // Example: window.location.href = '/path/to/your/esg-report.pdf';
        });
      }