const prefix = 'icon';

const files = {
  byId: {
    'dark-mode': {
      width: 24,
      height: 24,
      viewBox: [0, -960, 960, 960],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="hsl(0, 0%, 15%)" d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Zm0-60q109 0 190-67.5T771-406q-25 11-53.667 16.5Q688.667-384 660-384q-114.689 0-195.345-80.655Q384-545.311 384-660q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180-480q0 125 87.5 212.5T480-180Zm-4-297Z"/>',
    },
    'light-mode': {
      width: 24,
      height: 24,
      viewBox: [0, -960, 960, 960],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="hsl(0, 0%, 100%)" d="M479.765-340Q538-340 579-380.765q41-40.764 41-99Q620-538 579.235-579q-40.764-41-99-41Q422-620 381-579.235q-41 40.764-41 99Q340-422 380.765-381q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-450q-12.75 0-21.375-8.675Q40-467.351 40-480.175 40-493 48.625-501.5T70-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170-450H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-450H790ZM479.825-760Q467-760 458.5-768.625T450-790v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-890v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720Q467-40 458.5-48.625T450-70v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-170v100q0 12.75-8.675 21.375Q492.649-40 479.825-40ZM240-678l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217-786 226-777l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5-282q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743-174 734-183Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786-743 777-734l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897-182.897q-8.897-8.896-8.897-21.5Q174-217 183-226l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291-273 291-261t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480-480Z"/>',
    },
    'top-arrow': {
      width: 24,
      height: 24,
      viewBox: [0, -960, 960, 960],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="hsl(0, 0%, 100%)" d="M289.923-377.769 267.692-400 480-612.308 692.308-400l-22.231 22.231L480-567.846 289.923-377.769Z"/>',
    },
    'phone-call': {
      width: 48,
      height: 48,
      viewBox: [0, 96, 960, 960],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="hsl(189, 81%, 64%)" d="M769 546q-11-113-90.5-192.5T487 264v-22q61 4 114.5 29t94 66q40.5 41 65.5 94.5T791 546h-22Zm-163 0q-11-45-42.5-77.5T487 427v-22q54 9 92 47.5t49 93.5h-22Zm137 332q-95 0-196-53T363 689.5q-83-82.5-136-183T174 311q0-18.429 12.286-30.714Q198.571 268 217 268h73q18 0 30.5 10.5T337 307l19 78q3 16-1 29t-13.83 20.832L256 513q60 100 131 170t168 123l83-87q10-11 21.5-15t25.5-1l62 14q18.312 3.375 28.656 16.287Q786 746.2 786 765v70q0 18.429-12.286 30.714Q761.429 878 743 878ZM244 494l85-77q4-4 5.5-11t.5-13l-20-87q-1-8-6.5-12t-13.5-4h-85q-6 0-10 4t-4 10q-2 40 11.5 88.5T244 494Zm332 321q41 22 91 32t83 10q6 0 10-4t4-10v-84q0-8-4-13.5t-12-6.5l-71-15q-6-1-10.5.5T657 730l-81 85ZM244 494Zm332 321Z"/>',
    },
    experience: {
      width: 40,
      height: 33,
      viewBox: [0, 0, 40, 33],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#59D7EE" d="M0 32.4V30.1C0 29.3 0.208333 28.6333 0.625 28.1C1.04167 27.5667 1.65 27.1 2.45 26.7C4.08333 25.9 5.85833 25.2667 7.775 24.8C9.69167 24.3333 11.55 24.1 13.35 24.1C15.15 24.1 17 24.3333 18.9 24.8C20.8 25.2667 22.5833 25.9 24.25 26.7C25.0167 27.1 25.6167 27.5667 26.05 28.1C26.4833 28.6333 26.7 29.3 26.7 30.1V32.4H0ZM1.1 31.3H25.6V30.1C25.6 29.4667 25.4083 28.9583 25.025 28.575C24.6417 28.1917 24.1833 27.8667 23.65 27.6C22.3167 26.9667 20.725 26.4083 18.875 25.925C17.025 25.4417 15.1833 25.2 13.35 25.2C11.5167 25.2 9.66667 25.4417 7.8 25.925C5.93333 26.4083 4.35 26.9667 3.05 27.6C2.51667 27.8667 2.05833 28.1917 1.675 28.575C1.29167 28.9583 1.1 29.4667 1.1 30.1V31.3ZM13.35 18.6C11.7833 18.6 10.5167 18.1167 9.55 17.15C8.58333 16.1833 8.1 14.8167 8.1 13.05H7.7C7.5 13.05 7.33333 12.9833 7.2 12.85C7.06667 12.7167 7 12.55 7 12.35C7 12.1833 7.06667 12.025 7.2 11.875C7.33333 11.725 7.5 11.65 7.7 11.65H8.1C8.13333 10.85 8.28333 10.1083 8.55 9.425C8.81667 8.74167 9.28333 8.03333 9.95 7.3V9.2C9.95 9.36667 10.0167 9.50833 10.15 9.625C10.2833 9.74167 10.4333 9.8 10.6 9.8C10.7667 9.8 10.9083 9.74167 11.025 9.625C11.1417 9.50833 11.2 9.36667 11.2 9.2V6.65C11.4667 6.55 11.8 6.45833 12.2 6.375C12.6 6.29167 12.9833 6.25 13.35 6.25C13.7167 6.25 14.1 6.29167 14.5 6.375C14.9 6.45833 15.2333 6.55 15.5 6.65V9.2C15.5 9.36667 15.5583 9.50833 15.675 9.625C15.7917 9.74167 15.9333 9.8 16.1 9.8C16.2667 9.8 16.4167 9.74167 16.55 9.625C16.6833 9.50833 16.75 9.36667 16.75 9.2V7.3C17.45 8.03333 17.9167 8.74167 18.15 9.425C18.3833 10.1083 18.5333 10.85 18.6 11.65H19C19.2 11.65 19.3667 11.725 19.5 11.875C19.6333 12.025 19.7 12.1833 19.7 12.35C19.7 12.55 19.6333 12.7167 19.5 12.85C19.3667 12.9833 19.2 13.05 19 13.05H18.6C18.6 14.8167 18.1083 16.1833 17.125 17.15C16.1417 18.1167 14.8833 18.6 13.35 18.6ZM13.35 17.5C14.5833 17.5 15.5833 17.1167 16.35 16.35C17.1167 15.5833 17.5 14.5833 17.5 13.35H9.2C9.2 14.5833 9.58333 15.5833 10.35 16.35C11.1167 17.1167 12.1167 17.5 13.35 17.5ZM28.45 22.1V20.7C28.1833 20.6333 27.8833 20.5 27.55 20.3C27.2167 20.1 26.95 19.9 26.75 19.7L25.45 20.35L24.75 19.2L26 18.45C25.9333 18.2833 25.8917 18.1167 25.875 17.95C25.8583 17.7833 25.85 17.6333 25.85 17.5C25.85 17.3333 25.8583 17.1833 25.875 17.05C25.8917 16.9167 25.9333 16.75 26 16.55L24.75 15.75L25.45 14.6L26.75 15.25C26.9833 15.05 27.2583 14.8583 27.575 14.675C27.8917 14.4917 28.1833 14.35 28.45 14.25V12.9H29.85L29.9 14.25C30.1667 14.35 30.4583 14.4917 30.775 14.675C31.0917 14.8583 31.3667 15.05 31.6 15.25L32.85 14.6L33.6 15.75L32.35 16.55C32.4167 16.75 32.45 16.9167 32.45 17.05V17.95C32.45 18.1167 32.4167 18.2833 32.35 18.45L33.6 19.2L32.85 20.35L31.6 19.7C31.4 19.9 31.1333 20.1 30.8 20.3C30.4667 20.5 30.1667 20.6333 29.9 20.7L29.85 22.1H28.45ZM29.15 19.5C29.7167 19.5 30.2 19.3083 30.6 18.925C31 18.5417 31.2 18.0667 31.2 17.5C31.2 16.9333 31 16.45 30.6 16.05C30.2 15.65 29.7167 15.45 29.15 15.45C28.5833 15.45 28.1083 15.65 27.725 16.05C27.3417 16.45 27.15 16.9333 27.15 17.5C27.15 18.0667 27.3417 18.5417 27.725 18.925C28.1083 19.3083 28.5833 19.5 29.15 19.5ZM33.6 10.75L33.5 9.45C33.1 9.38333 32.6417 9.2 32.125 8.9C31.6083 8.6 31.2333 8.26667 31 7.9L29.65 8.55L29.05 7.55L30.3 6.75C30.2333 6.55 30.175 6.325 30.125 6.075C30.075 5.825 30.05 5.58333 30.05 5.35C30.05 5.15 30.075 4.91667 30.125 4.65C30.175 4.38333 30.2333 4.15 30.3 3.95L29.05 3.2L29.65 2.2L31 2.8C31.2333 2.43333 31.6083 2.1 32.125 1.8C32.6417 1.5 33.1 1.33333 33.5 1.3L33.6 0H34.75L34.85 1.3C35.25 1.33333 35.7083 1.5 36.225 1.8C36.7417 2.1 37.1333 2.43333 37.4 2.8L38.7 2.2L39.3 3.2L38.05 3.95C38.1167 4.15 38.175 4.38333 38.225 4.65C38.275 4.91667 38.3 5.15 38.3 5.35C38.3 5.58333 38.275 5.825 38.225 6.075C38.175 6.325 38.1167 6.55 38.05 6.75L39.3 7.55L38.7 8.55L37.4 7.9C37.1333 8.26667 36.7417 8.6 36.225 8.9C35.7083 9.2 35.25 9.38333 34.85 9.45L34.75 10.75H33.6ZM34.2 8.3C35.0333 8.3 35.725 8.025 36.275 7.475C36.825 6.925 37.1 6.21667 37.1 5.35C37.1 4.51667 36.825 3.825 36.275 3.275C35.725 2.725 35.0333 2.45 34.2 2.45C33.3333 2.45 32.625 2.725 32.075 3.275C31.525 3.825 31.25 4.51667 31.25 5.35C31.25 6.21667 31.525 6.925 32.075 7.475C32.625 8.025 33.3333 8.3 34.2 8.3Z"/>',
    },
    facebook: {
      width: 36,
      height: 36,
      viewBox: [0, 0, 36, 36],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#59D7EE" d="M32.1429 0H3.85714C2.83416 0 1.85309 0.406377 1.12973 1.12973C0.406376 1.85309 0 2.83416 0 3.85714L0 32.1429C0 33.1658 0.406376 34.1469 1.12973 34.8703C1.85309 35.5936 2.83416 36 3.85714 36H14.8862V23.7608H9.82366V18H14.8862V13.6093C14.8862 8.61509 17.8594 5.85643 22.4132 5.85643C24.5941 5.85643 26.8746 6.24536 26.8746 6.24536V11.1471H24.3619C21.8861 11.1471 21.1138 12.6836 21.1138 14.2594V18H26.6408L25.7569 23.7608H21.1138V36H32.1429C33.1658 36 34.1469 35.5936 34.8703 34.8703C35.5936 34.1469 36 33.1658 36 32.1429V3.85714C36 2.83416 35.5936 1.85309 34.8703 1.12973C34.1469 0.406377 33.1658 0 32.1429 0Z"/>',
    },
    instagram: {
      width: 36,
      height: 36,
      viewBox: [0, 0, 36, 36],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#59D7EE" d="M18 13.7137C17.1523 13.7141 16.3238 13.9657 15.6191 14.4369C14.9145 14.9081 14.3653 15.5776 14.0412 16.3608C13.717 17.1441 13.6323 18.0058 13.7979 18.8372C13.9635 19.6685 14.3718 20.4321 14.9713 21.0314C15.5708 21.6307 16.3346 22.0388 17.166 22.204C17.9974 22.3693 18.8591 22.2843 19.6423 21.9598C20.4254 21.6354 21.0947 21.086 21.5656 20.3811C22.0365 19.6763 22.2879 18.8477 22.2879 18C22.287 16.8632 21.8349 15.7732 21.0309 14.9695C20.2269 14.1658 19.1368 13.7142 18 13.7137ZM28.0213 10.4191C27.8031 9.86612 27.4736 9.36387 27.0533 8.94351C26.6329 8.52315 26.1307 8.19365 25.5777 7.97545C23.8902 7.30929 19.8723 7.45875 18 7.45875C16.1277 7.45875 12.1138 7.30366 10.4215 7.97545C9.86853 8.19365 9.36628 8.52315 8.94592 8.94351C8.52556 9.36387 8.19606 9.86612 7.97786 10.4191C7.3125 12.1066 7.46116 16.1285 7.46116 17.9992C7.46116 19.8699 7.3125 23.887 7.98107 25.5801C8.19928 26.1331 8.52878 26.6353 8.94914 27.0557C9.3695 27.476 9.87175 27.8055 10.4247 28.0237C12.1122 28.6899 16.1301 28.5404 18.0032 28.5404C19.8763 28.5404 23.8886 28.6955 25.5809 28.0237C26.1339 27.8055 26.6361 27.476 27.0565 27.0557C27.4768 26.6353 27.8063 26.1331 28.0246 25.5801C28.6955 23.8926 28.5412 19.8707 28.5412 18C28.5412 16.1293 28.6955 12.113 28.0246 10.4199L28.0213 10.4191ZM18 24.5893C16.6968 24.5893 15.4228 24.2028 14.3392 23.4788C13.2556 22.7548 12.411 21.7256 11.9123 20.5216C11.4136 19.3176 11.2831 17.9927 11.5373 16.7145C11.7916 15.4363 12.4191 14.2622 13.3407 13.3407C14.2622 12.4191 15.4363 11.7916 16.7145 11.5373C17.9927 11.2831 19.3176 11.4136 20.5216 11.9123C21.7256 12.411 22.7548 13.2556 23.4788 14.3392C24.2028 15.4228 24.5893 16.6968 24.5893 18C24.5903 18.8656 24.4206 19.7229 24.0899 20.5229C23.7591 21.3228 23.2738 22.0496 22.6617 22.6617C22.0496 23.2738 21.3228 23.7591 20.5229 24.0899C19.7229 24.4206 18.8656 24.5903 18 24.5893ZM24.8609 12.6723C24.5567 12.6725 24.2592 12.5824 24.0062 12.4135C23.7532 12.2446 23.5559 12.0044 23.4394 11.7234C23.3228 11.4424 23.2923 11.1331 23.3515 10.8347C23.4108 10.5363 23.5572 10.2622 23.7722 10.047C23.9873 9.83184 24.2614 9.68527 24.5597 9.62586C24.8581 9.56645 25.1674 9.59686 25.4485 9.71325C25.7296 9.82964 25.9698 10.0268 26.1389 10.2797C26.3079 10.5327 26.3981 10.8301 26.3981 11.1343C26.399 11.3363 26.3599 11.5365 26.2832 11.7234C26.2065 11.9103 26.0937 12.0802 25.9511 12.2234C25.8086 12.3666 25.6392 12.4803 25.4527 12.5579C25.2662 12.6354 25.0661 12.6754 24.8641 12.6755L24.8609 12.6723ZM32.1429 0H3.85714C2.83416 0 1.85309 0.406377 1.12973 1.12973C0.406376 1.85309 0 2.83416 0 3.85714L0 32.1429C0 33.1658 0.406376 34.1469 1.12973 34.8703C1.85309 35.5936 2.83416 36 3.85714 36H32.1429C33.1658 36 34.1469 35.5936 34.8703 34.8703C35.5936 34.1469 36 33.1658 36 32.1429V3.85714C36 2.83416 35.5936 1.85309 34.8703 1.12973C34.1469 0.406377 33.1658 0 32.1429 0ZM30.7671 23.3036C30.6635 25.3631 30.1934 27.188 28.6899 28.6875C27.1864 30.187 25.3631 30.6667 23.306 30.7647C21.1838 30.8845 14.8211 30.8845 12.6988 30.7647C10.6393 30.6611 8.8208 30.1902 7.31491 28.6875C5.80902 27.1848 5.33571 25.3591 5.23768 23.3036C5.11795 21.1805 5.11795 14.8171 5.23768 12.6964C5.34134 10.6369 5.8058 8.81196 7.31491 7.3125C8.82402 5.81304 10.6473 5.33893 12.6988 5.24089C14.8211 5.12116 21.1838 5.12116 23.306 5.24089C25.3655 5.34455 27.1896 5.81545 28.6899 7.31812C30.1902 8.8208 30.6691 10.6465 30.7671 12.7061C30.8869 14.8211 30.8869 21.1789 30.7671 23.3036Z"/>',
    },
    'info-fill': {
      width: 24,
      height: 24,
      viewBox: [0, 0, 24, 24],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#59D7EE" d="M11.19 18H12.99V10.8H11.19V18ZM11.9995 8.58C12.2798 8.58 12.515 8.488 12.705 8.304C12.895 8.12 12.99 7.892 12.99 7.62C12.99 7.331 12.8952 7.08875 12.7055 6.89325C12.5159 6.69775 12.2809 6.6 12.0005 6.6C11.7202 6.6 11.485 6.69775 11.295 6.89325C11.105 7.08875 11.01 7.331 11.01 7.62C11.01 7.892 11.1048 8.12 11.2945 8.304C11.4841 8.488 11.7191 8.58 11.9995 8.58ZM12.008 24C10.3533 24 8.7983 23.685 7.34298 23.055C5.88766 22.425 4.615 21.565 3.525 20.475C2.435 19.385 1.575 18.1116 0.945 16.6548C0.315 15.198 0 13.6414 0 11.985C0 10.3286 0.315 8.77203 0.945 7.31523C1.575 5.85841 2.435 4.59 3.525 3.51C4.615 2.43 5.88841 1.575 7.34523 0.945C8.80203 0.315 10.3586 0 12.015 0C13.6714 0 15.228 0.315 16.6848 0.945C18.1416 1.575 19.41 2.43 20.49 3.51C21.57 4.59 22.425 5.86 23.055 7.32C23.685 8.78 24 10.3373 24 11.992C24 13.6467 23.685 15.2017 23.055 16.657C22.425 18.1123 21.57 19.3832 20.49 20.4695C19.41 21.5558 18.14 22.4158 16.68 23.0495C15.22 23.6832 13.6627 24 12.008 24Z"/>',
    },
    'mail-fill': {
      width: 16,
      height: 13,
      viewBox: [0, 0, 16, 13],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#272727" d="M1.2 12.8C0.88 12.8 0.6 12.68 0.36 12.44C0.12 12.2 0 11.92 0 11.6V1.2C0 0.88 0.12 0.6 0.36 0.36C0.6 0.12 0.88 0 1.2 0H14.8C15.12 0 15.4 0.12 15.64 0.36C15.88 0.6 16 0.88 16 1.2V11.6C16 11.92 15.88 12.2 15.64 12.44C15.4 12.68 15.12 12.8 14.8 12.8H1.2ZM8 6.76L14.8 2.3V1.2L8 5.56L1.2 1.2V2.3L8 6.76Z"/>',
    },
    'person-fill': {
      width: 16,
      height: 16,
      viewBox: [0, 0, 16, 16],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#272727" d="M8 7.5C6.9 7.5 6 7.15 5.3 6.45C4.6 5.75 4.25 4.85 4.25 3.75C4.25 2.65 4.6 1.75 5.3 1.05C6 0.35 6.9 0 8 0C9.1 0 10 0.35 10.7 1.05C11.4 1.75 11.75 2.65 11.75 3.75C11.75 4.85 11.4 5.75 10.7 6.45C10 7.15 9.1 7.5 8 7.5ZM0 15.525V13.175C0 12.5417 0.158333 12 0.475 11.55C0.791667 11.1 1.2 10.7583 1.7 10.525C2.81667 10.025 3.8875 9.65 4.9125 9.4C5.9375 9.15 6.96667 9.025 8 9.025C9.03333 9.025 10.0583 9.15417 11.075 9.4125C12.0917 9.67083 13.1583 10.0417 14.275 10.525C14.7917 10.7583 15.2083 11.1 15.525 11.55C15.8417 12 16 12.5417 16 13.175V15.525H0Z"/>',
    },
    'phone-fill': {
      width: 16,
      height: 16,
      viewBox: [0, 0, 16, 16],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#272727" d="M15 16C13.1926 16 11.3963 15.5556 9.61111 14.6667C7.82593 13.7778 6.22222 12.6222 4.8 11.2C3.37778 9.77778 2.22222 8.17407 1.33333 6.38889C0.444444 4.6037 0 2.80741 0 1C0 0.718519 0.0962963 0.481482 0.288889 0.288889C0.481482 0.0962963 0.718519 0 1 0H4.11111C4.31852 0 4.5 0.0703704 4.65556 0.211111C4.81111 0.351852 4.91111 0.540741 4.95556 0.777778L5.55556 3.57778C5.58519 3.78519 5.58148 3.97407 5.54444 4.14444C5.50741 4.31481 5.42963 4.45926 5.31111 4.57778L3.08889 6.82222C3.91852 8.2 4.84815 9.4 5.87778 10.4222C6.90741 11.4444 8.07407 12.3111 9.37778 13.0222L11.4889 10.8444C11.637 10.6815 11.8074 10.5667 12 10.5C12.1926 10.4333 12.3852 10.4222 12.5778 10.4667L15.2222 11.0444C15.4444 11.0889 15.6296 11.2 15.7778 11.3778C15.9259 11.5556 16 11.763 16 12V15C16 15.2815 15.9037 15.5185 15.7111 15.7111C15.5185 15.9037 15.2815 16 15 16Z"/>',
    },
    'engineering-fill': {
      width: 44,
      height: 36,
      viewBox: [0, 0, 44, 36],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#272727" d="M0 36V31.4C0 30.2667 0.266667 29.325 0.8 28.575C1.33333 27.825 2.08333 27.2167 3.05 26.75C4.85 25.8833 6.775 25.1667 8.825 24.6C10.875 24.0333 13.2 23.75 15.8 23.75C18.4 23.75 20.725 24.0333 22.775 24.6C24.825 25.1667 26.75 25.8833 28.55 26.75C29.5167 27.2167 30.2667 27.825 30.8 28.575C31.3333 29.325 31.6 30.2667 31.6 31.4V36H0ZM15.8 20.75C13.6 20.75 11.8 20.0333 10.4 18.6C9 17.1667 8.3 15.3833 8.3 13.25H7.8C7.53333 13.25 7.3 13.15 7.1 12.95C6.9 12.75 6.8 12.5167 6.8 12.25C6.8 11.9833 6.9 11.75 7.1 11.55C7.3 11.35 7.53333 11.25 7.8 11.25H8.3C8.3 9.91667 8.63333 8.71667 9.3 7.65C9.96667 6.58333 10.8333 5.71667 11.9 5.05V7C11.9 7.2 11.975 7.375 12.125 7.525C12.275 7.675 12.45 7.75 12.65 7.75C12.8833 7.75 13.0667 7.675 13.2 7.525C13.3333 7.375 13.4 7.2 13.4 7V4.4C13.6667 4.33333 14.0333 4.275 14.5 4.225C14.9667 4.175 15.4167 4.15 15.85 4.15C16.2833 4.15 16.7333 4.175 17.2 4.225C17.6667 4.275 18.0333 4.33333 18.3 4.4V7C18.3 7.2 18.3667 7.375 18.5 7.525C18.6333 7.675 18.8167 7.75 19.05 7.75C19.25 7.75 19.425 7.675 19.575 7.525C19.725 7.375 19.8 7.2 19.8 7V5.05C20.8667 5.71667 21.7167 6.58333 22.35 7.65C22.9833 8.71667 23.3 9.91667 23.3 11.25H23.8C24.0667 11.25 24.3 11.35 24.5 11.55C24.7 11.75 24.8 11.9833 24.8 12.25C24.8 12.5167 24.7 12.75 24.5 12.95C24.3 13.15 24.0667 13.25 23.8 13.25H23.3C23.3 15.3833 22.6 17.1667 21.2 18.6C19.8 20.0333 18 20.75 15.8 20.75ZM15.8 17.75C17.2 17.75 18.3 17.3333 19.1 16.5C19.9 15.6667 20.3 14.5833 20.3 13.25H11.3C11.3 14.5833 11.7 15.6667 12.5 16.5C13.3 17.3333 14.4 17.75 15.8 17.75ZM30.9 23.95L30.8 22.5C30.5667 22.3667 30.325 22.2167 30.075 22.05C29.825 21.8833 29.6 21.7167 29.4 21.55L28.1 22.25L27 20.65L28.3 19.7C28.2333 19.5667 28.2 19.4417 28.2 19.325V18.575C28.2 18.4583 28.2333 18.3333 28.3 18.2L27 17.25L28.1 15.65L29.4 16.35L30.1 15.85C30.3333 15.6833 30.5667 15.5333 30.8 15.4L30.9 13.95H32.9L33 15.4C33.2333 15.5333 33.4667 15.6833 33.7 15.85L34.4 16.35L35.7 15.65L36.8 17.25L35.5 18.2C35.5667 18.3333 35.6 18.4583 35.6 18.575V19.325C35.6 19.4417 35.5667 19.5667 35.5 19.7L36.8 20.65L35.7 22.25L34.4 21.55C34.2 21.7167 33.975 21.8833 33.725 22.05C33.475 22.2167 33.2333 22.3667 33 22.5L32.9 23.95H30.9ZM31.9 20.85C32.4333 20.85 32.8833 20.6667 33.25 20.3C33.6167 19.9333 33.8 19.4833 33.8 18.95C33.8 18.4167 33.6167 17.9667 33.25 17.6C32.8833 17.2333 32.4333 17.05 31.9 17.05C31.3667 17.05 30.9167 17.2333 30.55 17.6C30.1833 17.9667 30 18.4167 30 18.95C30 19.4833 30.1833 19.9333 30.55 20.3C30.9167 20.6667 31.3667 20.85 31.9 20.85ZM36.3 13.1L35.85 11.35C35.5167 11.2167 35.175 11.0333 34.825 10.8C34.475 10.5667 34.1833 10.3167 33.95 10.05L31.75 10.85L30.75 9.1L32.5 7.7C32.4333 7.53333 32.375 7.35 32.325 7.15C32.275 6.95 32.25 6.75 32.25 6.55C32.25 6.35 32.275 6.15 32.325 5.95C32.375 5.75 32.4333 5.56667 32.5 5.4L30.75 4L31.75 2.25L33.95 3.05C34.1833 2.78333 34.475 2.525 34.825 2.275C35.175 2.025 35.5167 1.85 35.85 1.75L36.3 0H38.2L38.65 1.75C38.9833 1.85 39.325 2.025 39.675 2.275C40.025 2.525 40.3167 2.78333 40.55 3.05L42.75 2.25L43.75 4L42 5.4C42.0667 5.56667 42.125 5.75 42.175 5.95C42.225 6.15 42.25 6.35 42.25 6.55C42.25 6.75 42.225 6.95 42.175 7.15C42.125 7.35 42.0667 7.53333 42 7.7L43.75 9.1L42.75 10.85L40.55 10.05C40.3167 10.3167 40.025 10.5667 39.675 10.8C39.325 11.0333 38.9833 11.2167 38.65 11.35L38.2 13.1H36.3ZM37.25 9.45C38.0833 9.45 38.775 9.175 39.325 8.625C39.875 8.075 40.15 7.38333 40.15 6.55C40.15 5.71667 39.875 5.025 39.325 4.475C38.775 3.925 38.0833 3.65 37.25 3.65C36.4167 3.65 35.725 3.925 35.175 4.475C34.625 5.025 34.35 5.71667 34.35 6.55C34.35 7.38333 34.625 8.075 35.175 8.625C35.725 9.175 36.4167 9.45 37.25 9.45Z"/>',
    },
    'modal-arrow': {
      width: 9,
      height: 16,
      viewBox: [0, 0, 9, 16],
      data: '<path xmlns="http://www.w3.org/2000/svg" fill="#59D7EE" d="M8.63229 0L8.63229 16L-8.58307e-06 8L8.63229 0Z"/>',
    },
  },
  allIds: [
    'dark-mode',
    'light-mode',
    'top-arrow',
    'phone-call',
    'experience',
    'facebook',
    'instagram',
    'info-fill',
    'mail-fill',
    'person-fill',
    'phone-fill',
    'engineering-fill',
    'modal-arrow',
  ],
};

function Icon(props) {
  if (props.isHidden) {
    return <svg display="none">{props.children}</svg>;
  }

  let file = files.byId[props.id];

  if (!file) return null;

  let width = props.width || file.width || null;
  let height = props.height || file.height || null;
  let viewBox = file.viewBox
    ? file.viewBox.join(' ')
    : '0 0 ' + props.width + ' ' + props.height;

  return props.isHidden ? (
    <svg display="none">{props.children}</svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      preserveAspectRatio="xMinYMin"
      width={width}
      height={height}
      viewBox={viewBox}
    >
      <use href={'#' + prefix + '-' + props.id} />
    </svg>
  );
}

function IconsSource(props) {
  return (
    <Icon isHidden={true}>
      <defs>
        {files.allIds.reduce((defs, fileId, fileIndex) => {
          const file = files.byId[fileId];
          return defs.concat(
            <g
              key={fileIndex}
              id={prefix + '-' + fileId}
              dangerouslySetInnerHTML={{ __html: file.data }}
            ></g>
          );
        }, [])}
      </defs>
    </Icon>
  );
}

export { Icon, IconsSource };
