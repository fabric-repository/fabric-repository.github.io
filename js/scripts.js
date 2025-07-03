/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2025 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

document.querySelectorAll(".copy").forEach(copyButton => {
    copyButton.addEventListener("click", () => {
        const targetElement = document.querySelector(copyButton.dataset.copy);
        const textToCopy = targetElement.textContent;

        navigator.clipboard.writeText(textToCopy).then(() => {
            const label = copyButton.querySelector(".copy-label");
            const originalText = label.textContent;

            copyButton.disabled = true;
            label.textContent = "Copied!";

            setTimeout(() => {
                copyButton.disabled = false;
                label.textContent = originalText;
            }, 10000);
        })
    })
  });

window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => {
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};


/* MJ additions with support from AI*/
const modal = document.getElementById("infoModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalImage = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

// Add click event to all images
document.querySelectorAll(".image-item img").forEach(img => {
    img.addEventListener("click", () => {
        const title = img.getAttribute("data-title");
        const info = img.getAttribute("data-info");
        const src = img.getAttribute("src");
        const alt = img.getAttribute("alt");
        modalTitle.textContent = title;
        modalDescription.innerHTML = info;
        modalImage.src = src;
        modalImage.alt = alt;
        modal.style.display = "block";
    });
});

// Close the modal
closeBtn.addEventListener("click", () => {
modal.style.display = "none";
});

// Close modal when clicking outside the content
window.addEventListener("click", (e) => {
if (e.target === modal) {
    modal.style.display = "none";
}
});

const searchInput = document.getElementById("searchInput");
const sectorFilter = document.getElementById("sectorFilter");
const governanceFilter = document.getElementById("governanceFilter");
const functionalSectorFilter = document.getElementById("functionalSectorFilter");
const institutionalCheckboxes = document.querySelectorAll('input[name="institutional"]');

function filterGallery() {
    const query = searchInput.value.toLowerCase();
    const sectorValue = sectorFilter.value.toLowerCase();
    const governanceValue = governanceFilter.value.toLowerCase();
    const functionalSectorValue = functionalSectorFilter.value.toLowerCase();
    const selectedInstitutional = Array.from(institutionalCheckboxes).filter(cb => cb.checked).map(cb => cb.value.toLowerCase());

    document.querySelectorAll(".image-item").forEach(item => {
        const img = item.querySelector("img");
        const title = img.getAttribute("data-title")?.toLowerCase() || "";
        const sector = img.getAttribute("data-sector")?.toLowerCase() || "";
        const governance = img.getAttribute("data-governance")?.toLowerCase() || "";
        const functional = img.getAttribute("data-functional")?.toLowerCase() || "";
        const institutionalAttr = img.getAttribute("data-institutional")?.toLowerCase() || "";

        const institutionalTags = institutionalAttr.split(",").map(tag => tag.trim());
        const matchesInstitutional = selectedInstitutional.length === 0 || selectedInstitutional.some(tag => institutionalTags.includes(tag))
        
        const matchesSearch = !query || title.includes(query) || sector.includes(query) || functional.includes(query) || governance.includes(query) || institutionalAttr.includes(query);
        const matchesSector = !sectorValue || sector === sectorValue;
        const matchesGovernance = !governanceValue || governance === governanceValue;
        const matchesFunctional = !functionalSectorValue || functional === functionalSectorValue;

        item.style.display = (matchesSearch && matchesSector && matchesFunctional && matchesGovernance && matchesInstitutional) ? "block" : "none";
    });
}

// Event listeners
searchInput.addEventListener("input", filterGallery);
sectorFilter.addEventListener("change", filterGallery);
functionalSectorFilter.addEventListener("change", filterGallery);
governanceFilter.addEventListener("change", filterGallery); 
institutionalCheckboxes.forEach(cb => cb.addEventListener("change", filterGallery));

