const speakerList = document.querySelector(".speaker-list");
const speakerDetailsWrapper = document.querySelector(
  ".speaker-details-wrapper"
);

speakerList.addEventListener("click", (event) => {
  const card = event.target.closest(".speaker-card");
  if (card) {
    const name = card.getAttribute("data-speaker");
    const role = card.getAttribute("data-role");
    const company = card.getAttribute("data-company");
    const imgSrc = card.getAttribute("data-img");

    speakerDetailsWrapper.innerHTML = `
      <div class="speaker-details">
      <div class="imgDiv">
      <img src="${imgSrc}" alt="${name}" class="speaker-photo">
      </div>
       <div class="nameDiv">
          <h2>${name}</h2>
          <p class="company">${role} at </p>
          <p class="spacebee">${company}</p>
          <div class="iconDiv">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.7814 5.113C14.0914 3.425 12.4814 1.815 11.9994 0C11.5194 1.815 9.90941 3.425 8.22141 5.113C5.68741 7.643 2.81641 10.513 2.81641 14.815C2.81641 17.251 3.784 19.5873 5.50634 21.3098C7.22867 23.0323 9.56466 24 12.0004 24C14.4362 24 16.7721 23.0323 18.4945 21.3098C20.2168 19.5873 21.1844 17.251 21.1844 14.815C21.1844 10.512 18.3134 7.644 15.7794 5.113M6.72141 16.954C6.15841 16.935 4.08141 13.354 7.93641 9.538L10.4864 12.326C10.508 12.3477 10.5249 12.3737 10.5358 12.4023C10.5468 12.4309 10.5517 12.4614 10.5502 12.492C10.5487 12.5226 10.5408 12.5526 10.5271 12.5799C10.5134 12.6073 10.494 12.6315 10.4704 12.651C9.86041 13.276 7.26641 15.878 6.94341 16.777C6.87741 16.963 6.77941 16.957 6.72141 16.954ZM12.0014 21.677C11.1638 21.6765 10.3607 21.3434 9.7686 20.7511C9.17644 20.1588 8.84367 19.3556 8.84341 18.518C8.85556 17.7521 9.1338 17.0142 9.63041 16.431C10.2004 15.735 12.0004 13.776 12.0004 13.776C12.0004 13.776 13.7744 15.764 14.3674 16.425C14.8828 16.9997 15.1652 17.7461 15.1594 18.518C15.1591 19.3556 14.8264 20.1588 14.2342 20.7511C13.6421 21.3434 12.839 21.6765 12.0014 21.677ZM18.0474 16.554C17.9794 16.704 17.8244 16.952 17.6164 16.959C17.2454 16.973 17.2054 16.782 16.9304 16.376C16.3264 15.484 11.0664 9.986 10.0824 8.921C9.21641 7.986 9.96041 7.326 10.3054 6.981C10.7374 6.547 12.0014 5.285 12.0014 5.285C12.0014 5.285 15.7674 8.859 17.3374 11.301C18.9074 13.743 18.3664 15.857 18.0474 16.554Z" fill="black"/>
        </svg>

        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.2051 0.25H20.5131L13.2861 8.51L21.7881 19.75H15.1301L9.91609 12.933L3.95009 19.75H0.640088L8.37009 10.915L0.215088 0.25H7.04009L11.7531 6.481L17.2051 0.25ZM16.0441 17.77H17.8771L6.04509 2.126H4.07809L16.0441 17.77Z" fill="black"/>
          </svg>
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.3333 0C19.3058 0 20.2384 0.386309 20.9261 1.07394C21.6137 1.76158 22 2.69421 22 3.66667V18.3333C22 19.3058 21.6137 20.2384 20.9261 20.9261C20.2384 21.6137 19.3058 22 18.3333 22H3.66667C2.69421 22 1.76158 21.6137 1.07394 20.9261C0.386309 20.2384 0 19.3058 0 18.3333V3.66667C0 2.69421 0.386309 1.76158 1.07394 1.07394C1.76158 0.386309 2.69421 0 3.66667 0H18.3333ZM18.3333 2.44444H3.66667C3.34251 2.44444 3.03164 2.57321 2.80243 2.80243C2.57321 3.03164 2.44444 3.34251 2.44444 3.66667V18.3333C2.44444 18.6575 2.57321 18.9684 2.80243 19.1976C3.03164 19.4268 3.34251 19.5556 3.66667 19.5556H18.3333C18.6575 19.5556 18.9684 19.4268 19.1976 19.1976C19.4268 18.9684 19.5556 18.6575 19.5556 18.3333V3.66667C19.5556 3.34251 19.4268 3.03164 19.1976 2.80243C18.9684 2.57321 18.6575 2.44444 18.3333 2.44444ZM6.11111 8.55556C6.41047 8.5556 6.69941 8.6655 6.92312 8.86443C7.14683 9.06336 7.28975 9.33747 7.32478 9.63478L7.33333 9.77778V15.8889C7.33299 16.2004 7.2137 16.5 6.99985 16.7266C6.786 16.9531 6.49372 17.0894 6.18274 17.1077C5.87176 17.1259 5.56554 17.0247 5.32665 16.8248C5.08776 16.6248 4.93424 16.3412 4.89744 16.0319L4.88889 15.8889V9.77778C4.88889 9.45362 5.01766 9.14275 5.24687 8.91354C5.47608 8.68433 5.78696 8.55556 6.11111 8.55556ZM9.77778 7.33333C10.064 7.33329 10.3412 7.43371 10.561 7.61709C10.7808 7.80046 10.9292 8.05516 10.9804 8.33678C11.2266 8.19461 11.4809 8.06687 11.7419 7.95422C12.5571 7.60589 13.7781 7.414 14.8806 7.75989C15.4587 7.94322 16.0392 8.28544 16.4694 8.86844C16.8544 9.38789 17.0622 10.0198 17.1038 10.7299L17.1111 11V15.8889C17.1108 16.2004 16.9915 16.5 16.7776 16.7266C16.5638 16.9531 16.2715 17.0894 15.9605 17.1077C15.6495 17.1259 15.3433 17.0247 15.1044 16.8248C14.8655 16.6248 14.712 16.3412 14.6752 16.0319L14.6667 15.8889V11C14.6667 10.5967 14.5689 10.4084 14.5053 10.3217C14.414 10.2083 14.2883 10.1277 14.1472 10.0919C13.7219 9.95744 13.1096 10.0283 12.7026 10.2019C12.0914 10.4634 11.5317 10.8741 11.1503 11.2542L11 11.4156V15.8889C10.9997 16.2004 10.8804 16.5 10.6665 16.7266C10.4527 16.9531 10.1604 17.0894 9.84941 17.1077C9.53842 17.1259 9.2322 17.0247 8.99332 16.8248C8.75443 16.6248 8.6009 16.3412 8.56411 16.0319L8.55556 15.8889V8.55556C8.55556 8.2314 8.68433 7.92053 8.91354 7.69131C9.14275 7.4621 9.45362 7.33333 9.77778 7.33333ZM6.11111 4.88889C6.43526 4.88889 6.74614 5.01766 6.97535 5.24687C7.20456 5.47608 7.33333 5.78696 7.33333 6.11111C7.33333 6.43526 7.20456 6.74614 6.97535 6.97535C6.74614 7.20456 6.43526 7.33333 6.11111 7.33333C5.78696 7.33333 5.47608 7.20456 5.24687 6.97535C5.01766 6.74614 4.88889 6.43526 4.88889 6.11111C4.88889 5.78696 5.01766 5.47608 5.24687 5.24687C5.47608 5.01766 5.78696 4.88889 6.11111 4.88889Z" fill="black"/>
            </svg>
          </div>
       </div>
       <div class="custom-divide"></div> 
        <div class="description">
         <p class="description">A brief description about ${name} Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas.</p>
        </div>
      
        <span class="close-button">&times;</span>
      </div>
    `;

    // Display the speaker details section
    speakerDetailsWrapper.style.display = "block";

    // Close button event listener
    speakerDetailsWrapper
      .querySelector(".close-btn")
      .addEventListener("click", () => {
        speakerDetailsWrapper.style.display = "none"; 
      });
  }
});
