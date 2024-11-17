import { c as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, f as renderSlot, m as maybeRenderHead, b as createAstro } from '../chunks/astro/server_C-zlZj4v.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="author" content="Michael Andreuzza"><meta name="your keywords" content="wallpaper,black wallpaper, gradient wallpaper,aesthetic wallpaper,iphone wallpaper,wallpaper iphone,white wallpaper,pink wallpaper"><!-- Favicon guidelines generated with https://realfavicongenerator.net/ --><link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png"><link rel="manifest" href="/favicons/site.webmanifest"><link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#1b1d20"><meta name="msapplication-TileColor" content="#1b1d20"><meta name="theme-color" content="#1b1d20"><!-- Inter Font: https://rsms.me/inter/ --><link rel="preconnect" href="https://rsms.me/"><link rel="stylesheet" href="https://rsms.me/inter/inter.css">`;
}, "/Users/senna/Developer/Portfolio_website/src/components/BaseHead.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, {})}${renderHead()}</head> <body class="dark:bg-primary bg-zinc-200 "> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/senna/Developer/Portfolio_website/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const $$Structure = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Structure;
  return renderTemplate`${maybeRenderHead()}<section> <div class="p-4"> <div class="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4"> <div class="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8"> <!-- Foto of myself --> <div class="relative flex items-center gap-x-4"> <img src="public/images/portret.jpg" alt="" class="object-cover h-10 w-10 rounded-full ring-1 dark:ring-white/10 ring-primary/5"> <!-- Introduction of myself --> <div class="text-sm leading-6"> <p class="font-semibold text-primary dark:text-white"> <a href="#"> <span class="absolute inset-0"></span>
Senna Embsen
</a> </p> <p class="text-zinc-500 dark:text-zinc-400">IT-student</p> </div> </div> <p class="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white">
Hi there, I'm Senna Embsen
</p> <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400 font-light lg:text-xl">
I'm an IT-student at the University of Applied Sciences, Amsterdam.
          Specialized in Business IT- and management.
<br> <br>
In my free time I like watching movies and making music. My life is a
          combination of tech, school, coding and music.
</p> </div> <!-- Social media section --> <div class="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white dark:bg-secondary"> <div class="w-full"> <p class="text-xl font-normal tracking-tight text-primary dark:text-white lg:text-8xl">
Find me on
</p> </div> <div class="grid mt-4 grid-cols-4 md:grid-cols-8 lg:grid-cols-4 gap-y-4 gap-4 justify-center w-full"> <a href="mailto:senna.embsen@gmail.com" class="flex items-center justify-center aspect-square shadow-xl dark:shadow-thi ck hover:bg-zinc-200 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-200 group transition-all h-12 w-12"> <!-- Mail --> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mail h-6 w-6 group-hover:scale-125 duration-200 text-primary dark:text-white group-hover text-primary:dark:text-white/50" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path> <path d="M3 7l9 6l9 -6"></path> </svg> </a> <a href="https://github.com/SMenas" target="_blank" class="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-200 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-200 group transition-all h-12 w-12"> <!-- Github --> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github h-6 w-6 group-hover:scale-125 duration-200 text-primary dark:text-white group-hover text-primary:dark:text-white/50" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path> </svg> </a> <a href="https://www.linkedin.com/in/senna-embsen/" target="_blank" class="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-200 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-200 group transition-all h-12 w-12"> <!-- Linkedin --> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-200 text-primary dark:text-white group-hover text-primary:dark:text-white/50 icon-tabler-brand-linkedin" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path> <path d="M8 11l0 5"></path> <path d="M8 8l0 .01"></path> <path d="M12 16l0 -5"></path> <path d="M16 16v-3a2 2 0 0 0 -4 0"></path> </svg> </a><a href="https://read.cv/senna" target="_blank" class="flex items-center justify-center aspect-square shadow-xl dark:shadow-thick hover:bg-zinc-200 dark:hover:bg-primary ring-1 bg-zinc-50 dark:ring-white/10 ring-primary/5 dark:bg-tertiary rounded-lg hover:ring-primary/5 dark:hover:ring-white/20 duration-200 group transition-all h-12 w-12"> <!-- Read.cv --> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler h-6 w-6 group-hover:scale-125 duration-300 text-primary dark:text-white group-hover text-primary:dark:text-white/50" width="180" height="180" viewBox="0 0 180 180" fill="none" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"> <rect width="180" height="180"></rect> <path fill-rule="evenodd" clip-rule="evenodd" d="M75.452 51.1586C74.84 50.9944 74.2016 50.9524 73.5733 51.0349C72.945 51.1174 72.3391 51.3229 71.7902 51.6396C71.2413 51.9563 70.7601 52.378 70.3742 52.8806C69.9883 53.3832 69.7051 53.9569 69.5409 54.569C69.3767 55.1811 69.3347 55.8195 69.4172 56.4478C69.4997 57.0761 69.7052 57.6819 70.0219 58.2308C70.3386 58.7797 70.7603 59.2609 71.2629 59.6468C71.7655 60.0327 72.3392 60.3159 72.9513 60.4801L119.526 72.9515C120.146 73.1438 120.799 73.209 121.445 73.143C122.091 73.077 122.717 72.8812 123.285 72.5674C123.853 72.2536 124.352 71.8283 124.752 71.3169C125.152 70.8055 125.445 70.2186 125.613 69.5914C125.78 68.9642 125.819 68.3096 125.728 67.6668C125.636 67.0241 125.416 66.4064 125.08 65.851C124.744 65.2955 124.299 64.8135 123.772 64.4341C123.246 64.0547 122.648 63.7856 122.014 63.6429L75.4456 51.1715L75.452 51.1586ZM70.0456 71.3444C68.8254 71.055 67.5406 71.2525 66.4636 71.8948C65.3866 72.5371 64.6022 73.5738 64.2769 74.7848C63.9515 75.9958 64.1108 77.286 64.7209 78.3816C65.331 79.4771 66.344 80.2918 67.5449 80.6529L114.12 93.1372C115.356 93.468 116.673 93.2942 117.781 92.654C118.889 92.0138 119.697 90.9597 120.028 89.7236C120.358 88.4875 120.185 87.1707 119.544 86.0627C118.904 84.9548 117.85 84.1465 116.614 83.8158L70.0456 71.3444ZM58.7313 94.9308C59.0628 93.6968 59.8705 92.6449 60.977 92.006C62.0835 91.3672 63.3984 91.1937 64.6327 91.5236L95.6827 99.8422C96.2944 100.006 96.8677 100.289 97.3701 100.674C97.8725 101.059 98.2941 101.54 98.6108 102.088C98.9275 102.637 99.1331 103.242 99.2158 103.87C99.2986 104.497 99.2569 105.135 99.0931 105.747C98.9293 106.358 98.6467 106.932 98.2613 107.434C97.8759 107.937 97.3954 108.358 96.8471 108.675C96.2988 108.992 95.6935 109.197 95.0657 109.28C94.438 109.363 93.8001 109.321 93.1884 109.157L62.1384 100.839C61.5267 100.675 60.9534 100.392 60.4511 100.006C59.9488 99.6201 59.5274 99.1392 59.211 98.5906C58.8946 98.0419 58.6893 97.4363 58.607 96.8084C58.5247 96.1804 58.567 95.5424 58.7313 94.9308Z" fill="black" style="fill: white; fill-opacity: 1"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M106.072 154.202L43.978 137.571C39.4498 136.357 35.5894 133.394 33.2457 129.334C30.9021 125.273 30.2673 120.448 31.4808 115.92L52.2772 38.2949C53.4915 33.7667 56.4547 29.9063 60.515 27.5627C64.5753 25.2191 69.4003 24.5842 73.9287 25.7978L136.029 42.4285C140.557 43.6428 144.417 46.6059 146.761 50.6663C149.105 54.7266 149.739 59.5516 148.526 64.0799L127.723 141.698C126.509 146.227 123.546 150.087 119.485 152.431C115.425 154.774 110.6 155.416 106.072 154.202ZM40.7894 118.414C40.5162 119.434 40.4465 120.497 40.5843 121.543C40.722 122.589 41.0645 123.598 41.5923 124.512C42.12 125.426 42.8225 126.227 43.6599 126.87C44.4972 127.512 45.4528 127.983 46.4722 128.256L108.572 144.893C110.629 145.443 112.82 145.155 114.665 144.09C116.509 143.026 117.855 141.273 118.408 139.217L139.211 61.5856C139.484 60.5662 139.554 59.503 139.416 58.4567C139.278 57.4104 138.936 56.4014 138.408 55.4875C137.88 54.5735 137.178 53.7725 136.34 53.1301C135.503 52.4877 134.547 52.0165 133.528 51.7435L71.4215 35.0999C69.3637 34.5502 67.1717 34.8399 65.3274 35.9055C63.4831 36.9711 62.1373 38.7254 61.5858 40.7828L40.7894 118.414Z" fill="black" style="fill: white; fill-opacity: 1"></path> </svg> </a> </div> </div> <div class="ring-1 lg:row-span-2 flex flex-col justify-between group h-full dark:ring-white/10 ring-primary/5 lg:row-start-2 lg:gap-6 md:grid-cols-2 md:grid lg:gap-0 md:items-center lg:grid-cols-none lg:col-start-2 lg:col-span-2 rounded-3xl p-6 sm:p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick"> <div> <p class="text-xl sm:text-2xl lg:text-4xl tracking-tight font-medium text-primary dark:text-white">
Projects
</p> <p class="mt-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400">
Take a look at the projects I have been working on.
<br> <br>
In recent years, I’ve gained considerable programming and business
            knowledge through my studies. Here are two of the companies I’ve
            collaborated with on school projects.
</p> </div> <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4"> <!-- Block 1 --> <a href="https://www.plugpower.com/" class="block text-sm sm:text-base text-zinc-500 dark:text-zinc-400 hover:text-white" target="_blank"> <div class="hover:bg-primary duration-200 p-6 sm:p-8 rounded-3xl"> <div> <p class="text-green-600 font-bold text-lg hover:underline">
Plug Power Cloudinfrastructure
</p> <p class="mt-4">
Built a data pipeline connected to an MQTT broker, enabling
                  migration from a Timeseries Database to Azure Cloud for
                  improved scalability and analytics integration.
</p> </div> </div> </a> <!-- Block 2 --> <a href="https://bumastemra.nl/" class="block text-sm sm:text-base text-zinc-500 dark:text-zinc-400 hover:text-white" target="_blank"> <div class="hover:bg-primary duration-200 p-6 sm:p-8 rounded-3xl"> <div> <p class="text-blue-500 font-bold text-lg hover:underline">
Buma Stemra Application for setlists
</p> <p class="mt-4">
Remaking the Buma Stemra "Setlijsten" application, in order to
                  improve the functionalities. Used Python (Flask), SQL and
                  Bootstrap for developing.
</p> </div> </div> </a> <!-- Block 3 --> <div class="block text-sm sm:text-base text-zinc-500 dark:text-zinc-400 hover:text-white"> <div class="hover:bg-primary duration-200 p-6 sm:p-8 rounded-3xl"> <div> <p class="text-purple-500 font-bold text-lg hover:underline">
This protfolio website
</p> <p class="mt-4">
This is the first protfolio website I build using Astro and
                  TailwindCSS. The backend was made using NodeJS. Had fun making
                  this website!
</p> </div> </div> </div> <!-- Block 4 --> <div class="block text-sm sm:text-base text-zinc-500 dark:text-zinc-400 hover:text-white"> <div class="hover:bg-primary duration-200 p-6 sm:p-8 rounded-3xl"> <div> <p class="text-orange-300 font-bold text-lg hover:underline">
Future projects?
</p> <p class="mt-4">
In the future I would like to make many more projects. I want
                  to grow my expertise in frontend as well as backend
                  developing, aiming to be a full stack developer.
</p> </div> </div> </div> </div> </div> <div class="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col justify-between items-center rounded-3xl shadow-xl dark:shadow-thick p-8 bg-white dark:bg-secondary overflow-hidden text-center lg:text-left"> <div> <p class="text-xl text-primary dark:text-white lg:text-7xl tracking-tight">
Grab my résumé!
</p> <p class="mt-4 text-sm text-zinc-500 dark:text-zinc-400 md:max-w-xs lg:max-w-none">
Take a look into my career journey and the things I've achieved
            along the way.
</p> </div> <div class="w-full mt-8 md:max-w-xs lg:max-w-none"> <a href="public/files/CV (IT Gedreven).pdf" download="CV_Senna_Embsen"><button type="button" class="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between">
Download my CV
<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-download w-4 h-4" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path> <path d="M7 11l5 5l5 -5"></path> <path d="M12 4l0 12"></path> </svg> </button> </a> </div> </div> <a href="https://kantjil.nl/" target="_blank" class="ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick"> <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="208" height="227" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="white" stroke="none"> <path d="M681 3950 c-19 -86 -14 -159 15 -220 14 -30 31 -62 39 -70 7 -8 24
 -46 38 -85 13 -38 27 -77 31 -85 4 -11 -14 -25 -70 -54 -196 -101 -374 -270
 -489 -466 l-44 -76 -63 -13 c-104 -21 -129 -49 -89 -100 19 -24 19 -25 -15
 -56 -23 -22 -34 -41 -34 -61 0 -37 33 -91 63 -105 22 -10 23 -11 19 -172 -3
 -123 0 -184 13 -252 95 -511 477 -896 990 -996 91 -18 348 -18 440 0 88 17
 225 62 295 95 30 14 55 26 57 26 2 0 3 -13 3 -28 0 -84 93 -62 170 41 19 25
 51 77 70 114 19 37 65 103 102 146 36 43 84 103 105 135 44 67 123 220 123
 242 0 19 -33 100 -41 100 -4 0 -10 -12 -14 -27 -11 -45 -89 -205 -128 -264
 l-37 -54 0 57 c0 78 -15 108 -54 108 -33 1 -73 27 -152 100 l-46 42 -14 307
 c-17 375 -22 389 -128 429 -45 18 -46 18 -129 187 l-84 170 2 188 c2 104 5
 190 7 193 15 14 223 -81 322 -149 85 -57 210 -179 278 -271 61 -82 134 -222
 164 -314 l17 -53 29 28 c38 36 34 54 -36 199 -127 259 -352 475 -609 586 -49
 21 -108 44 -133 50 -43 12 -44 13 -44 55 0 39 -2 43 -25 43 -30 0 -76 -22 -94
 -44 -8 -9 -23 -13 -39 -11 -15 2 -52 7 -83 10 l-57 6 -53 76 c-30 41 -62 81
 -72 88 -20 14 -36 69 -37 124 0 31 -2 33 -27 27 -44 -10 -108 -84 -133 -154
 -13 -34 -25 -62 -29 -62 -3 0 -21 26 -39 58 -33 58 -165 222 -199 248 -31 23
 -41 16 -52 -36z m544 -281 c47 -65 40 -83 -13 -35 -39 36 -51 63 -35 79 9 10
 8 11 48 -44z m-24 -43 c16 -19 43 -37 59 -41 23 -5 36 -21 71 -87 23 -45 67
 -118 99 -162 59 -84 122 -194 135 -234 3 -12 22 -46 40 -74 19 -28 67 -122
 107 -209 65 -141 98 -190 98 -144 0 13 6 12 40 -5 64 -33 69 -49 80 -322 10
 -236 24 -401 36 -432 3 -9 15 -16 26 -16 11 0 40 -17 65 -37 25 -21 67 -49 92
 -63 l46 -25 -1 -75 c0 -62 -7 -90 -35 -161 -39 -96 -109 -222 -149 -271 l-27
 -32 -64 33 c-35 18 -81 48 -102 66 -24 21 -67 42 -110 55 -179 55 -378 197
 -485 348 l-23 32 25 0 c44 0 29 16 -51 55 -43 20 -101 54 -130 76 -60 45 -146
 149 -193 232 -19 34 -38 56 -45 53 -7 -2 -28 8 -46 23 -31 26 -32 30 -21 55 7
 15 8 26 2 26 -6 0 -10 -6 -10 -14 0 -35 -25 -35 -95 1 -86 43 -104 58 -87 75
 15 15 16 45 0 54 -7 5 -9 0 -6 -14 4 -13 -1 -27 -12 -37 -18 -16 -22 -15 -75
 9 -51 23 -56 28 -53 53 4 34 41 42 87 18 17 -8 31 -11 31 -6 0 14 -55 33 -86
 29 -20 -2 -33 -12 -42 -31 -16 -33 -32 -27 -32 14 0 20 10 40 29 59 l28 29 49
 -18 c78 -30 198 -44 305 -37 l96 7 95 -64 c138 -92 193 -110 315 -105 71 3
 109 9 137 23 65 32 56 47 -14 23 -68 -22 -83 -19 -54 13 23 27 150 89 180 89
 12 0 37 6 55 14 l34 14 -35 4 c-19 2 -52 0 -73 -5 -45 -9 -99 -1 -142 21 -63
 31 -83 65 -45 77 11 3 20 13 20 20 0 10 -14 6 -47 -15 -52 -33 -114 -39 -187
 -19 -34 9 -45 8 -90 -15 -115 -58 -374 -71 -517 -27 -58 18 -122 61 -91 61 6
 0 9 6 6 14 -4 11 15 19 78 34 46 11 85 18 87 16 8 -7 -33 -32 -72 -44 -22 -6
 -36 -14 -33 -17 8 -9 88 24 125 51 18 14 51 28 73 31 22 4 126 36 231 71 234
 79 271 87 370 78 l78 -6 63 -97 c60 -92 101 -140 111 -129 2 2 -26 52 -64 110
 -96 146 -109 175 -124 272 -8 47 -19 91 -25 99 -37 45 -104 228 -89 243 3 3
 -5 21 -18 41 -37 54 -67 143 -67 198 0 48 15 105 27 105 3 0 19 -15 36 -34z
 m389 -93 c0 -35 -3 -44 -10 -33 -13 20 -13 80 0 80 6 0 10 -21 10 -47z m-30
 -3 c0 -26 7 -47 19 -59 16 -16 18 -36 19 -185 0 -91 -1 -166 -4 -166 -2 0 -16
 24 -30 53 -15 28 -49 86 -75 128 -27 42 -49 85 -49 95 1 26 36 101 66 141 35
 46 54 43 54 -7z m-123 -44 c5 -4 -21 -66 -27 -66 -6 0 -40 65 -40 76 0 5 61
 -5 67 -10z m-549 -152 c23 -37 42 -76 42 -89 0 -12 7 -44 15 -71 8 -27 15 -50
 15 -52 0 -2 -26 0 -57 3 -67 8 -91 1 -303 -93 -164 -72 -267 -109 -276 -99
 -21 20 147 221 257 309 79 62 234 158 254 158 5 0 29 -30 53 -66z m-148 -604
 c0 -10 -91 -40 -122 -40 -24 0 -36 29 -17 41 19 12 139 11 139 -1z m450 -196
 c27 -4 40 -11 40 -21 0 -20 -65 -11 -124 17 l-41 20 43 -5 c23 -3 60 -8 82
 -11z m-945 -27 c55 -37 95 -81 95 -103 0 -23 17 -34 120 -74 109 -43 177 -88
 210 -140 39 -60 87 -104 167 -153 34 -21 90 -66 125 -101 35 -35 89 -78 121
 -96 42 -24 67 -47 94 -89 20 -31 78 -97 127 -146 108 -108 229 -185 362 -231
 50 -17 101 -38 114 -47 l22 -15 -28 -15 c-54 -27 -189 -68 -279 -84 -132 -23
 -347 -13 -479 21 -201 52 -412 178 -551 328 -173 188 -274 407 -306 668 -10
 86 -6 246 7 293 7 21 32 16 79 -16z m1076 -2 c28 -19 59 -35 70 -35 10 0 21
 -4 24 -10 4 -6 -8 -10 -28 -10 -36 0 -127 53 -135 78 -6 21 16 13 69 -23z"></path> <path d="M438 2583 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"></path> <path d="M2090 2715 c0 -3 0 -175 0 -382 l-1 -378 116 -3 115 -3 0 168 c0 92
 4 163 8 157 5 -5 39 -80 77 -166 l68 -158 1247 0 c686 0 1281 3 1323 6 l77 7
 0 83 0 84 -125 0 -125 0 0 295 0 295 -110 0 -110 0 0 -345 0 -345 -969 0 -969
 0 -82 188 c-45 103 -98 221 -117 262 l-34 75 88 82 88 82 -66 1 -67 0 -95 -90
 c-52 -49 -98 -90 -101 -90 -3 0 -6 41 -6 90 l0 90 -115 0 c-63 0 -115 -2 -115
 -5z"></path> <path d="M2807 2713 c-3 -5 -44 -95 -91 -202 l-86 -193 33 -74 32 -74 91 0 90
 0 22 -45 22 -45 126 0 c97 0 125 3 121 13 -3 6 -67 150 -142 320 l-137 307
 -39 0 c-21 0 -40 -3 -42 -7z m-5 -388 l26 -65 -59 0 -59 0 16 38 c9 20 20 49
 26 65 5 15 13 27 17 27 4 0 19 -29 33 -65z"></path> <path d="M3080 2556 c0 -176 -3 -163 67 -313 l18 -38 5 99 5 100 180 -162
 c165 -149 183 -162 217 -162 l38 0 0 320 0 320 -25 0 -25 0 0 -170 c0 -93 -2
 -170 -6 -170 -3 0 -91 77 -197 170 -184 163 -193 170 -234 170 l-43 0 0 -164z"></path> <path d="M3650 2666 c0 -49 2 -55 23 -58 l22 -3 3 -262 2 -263 100 0 100 0 0
 265 0 265 90 0 90 0 0 55 0 55 -215 0 -215 0 0 -54z"></path> <path d="M4129 2483 c0 -261 -7 -306 -48 -311 -37 -6 -69 6 -76 28 -8 24 11
 60 30 60 26 0 16 15 -40 64 l-55 47 0 -106 c0 -104 1 -107 28 -135 69 -69 255
 -65 324 7 45 47 48 70 48 334 l0 249 -105 0 -105 0 -1 -237z"></path> <path d="M4390 2400 l0 -320 105 0 105 0 0 320 0 320 -105 0 -105 0 0 -320z"></path> </g> </svg> <p class="text-xl text-primary dark:text-white lg:text-2xl mt-6"></p> </a> <!-- dialog trigger--> <div class="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary dark:hover:ring-white/20 overflow-hidden duration-200 shadow-xl dark:shadow-thick rounded-3xl p-8"> <div class="-mr-24"> <img src="/images/expertise.png" class="rounded-2xl object-cover ring-1 h-64 w-full lg:h-auto dark:ring-white/10 ring-primary/5 bg-tertiary" alt=""> </div> <div class="mt-8 text-left"> <div> <p class="ext-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl mt-6 py-5">
My skills
</p> <ul class="space-y-4 text-left text-gray-500 dark:text-gray-400"> <div class="cursor-default text-sm hover:text-base duration-200"> <li class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"></path> </svg> <span class="">Programming and Scripting</span> </li> </div> <div class="cursor-default text-sm hover:text-base duration-200"> <li class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"></path> </svg> <span>Cloud Computing</span> </li> </div> <div class="cursor-default text-sm hover:text-base duration-200"> <li class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"></path> </svg> <span>Infrastructure as Code (IaC)</span> </li> </div> <div class="cursor-default text-sm hover:text-base duration-200"> <li class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"></path> </svg> <span>Data Analysis</span> </li> </div> <div class="cursor-default text-sm hover:text-base duration-200"> <li class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"></path> </svg> <span>Process Management</span> </li> </div> <div class="cursor-default text-sm hover:text-base duration-200"> <li class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"></path> </svg> <span>Project Management</span> </li> </div> <div class="cursor-default text-sm hover:text-base duration-200"> <li class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"></path> </svg> <span>Communication</span> </li> </div> <div class="cursor-default text-sm hover:text-base duration-200"> <li class="flex items-center space-x-3 rtl:space-x-reverse"> <svg class="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"></path> </svg> <span>Problem-Solving</span> </li> </div> </ul> </div> </div> </div> <div data-dialog-backdrop="dialog-lg" data-dialog-backdrop-close="true" class="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-200"> <div data-dialog="dialog-lg" class="relative m-4 px-10 py-10 w-3/4 rounded-lg dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-sm scroll-smooth"> <div class="text-3xl mt-6 font-medium lg:text-4xl tracking-tight text-primary dark:text-white pb-4">
Skills
</div> <div class=""></div> <div class="flex shrink-0 flex-wrap items-center pt-4 justify-end"> <button data-dialog-close="true" class="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
Close
</button> </div> </div> </div> <div class="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-white dark:bg-secondary shadow-xl dark:shadow-thick"> <div class="relative p-8 text-center w-full"> <p class="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
Subscribe <span class="lg:block">to my newsletter</span> </p> <form class="mt-6 sm:flex w-full lg:max-w-sm mx-auto" id="subscribe-form"> <label for="email" class="sr-only">Email address</label> <input type="email" id="email" required="" class="block w-full h-12 px-4 py-2 text-sm text-white bg-zinc-200 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-200 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm" placeholder="Enter your email"> <div class="mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0"> <button type="submit" class="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between">
Subscribe
</button> <p id="form-message" class="mt-2 text-sm"></p> </div> </form>  </div> </div> <div class="ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-white dark:bg-secondary"> <p class="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl">
Quotes
</p> <div class="md:grid md:grid-cols-2 gap-6 lg:grid-cols-1"> <div class="mt-4"> <p class="text-sm text-pink-500 dark:text-pink-400">
"Technology is a word that describes something that doesn’t work
              yet."
</p> <p class="text-xs mt-2 text-zinc-500"> <span class="block text-xs">Douglas Adams</span> <span class="block text-xs"> Author</span> </p> </div> <div class="mt-4"> <p class="text-sm text-orange-500 dark:text-orange-200">
"Design is a funny word. Some people think design means how it
              looks. But of course, if you dig deeper, it's really how it
              works."
</p> <p class="text-xs mt-2 text-zinc-500"> <span class="block text-xs">Steve Jobs</span> <span class="block text-xs"> Founder of Apple</span> </p> </div> </div> </div> <div class="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8"> <p class="text-xl tracking-tight font-medium text-primary dark:text-white md:text-3xl">
As a Business IT and Management student at the
<a href="https://www.hva.nl/" class="text-blue-500" target="_blank">University of Applied Sciences</a>
, my expertise lies in designing and developing solutions that align
          technology with business objectives.
<br> <br>
I believe that impactful design and technology integration begin with
          shared values, clear communication, and a deep respect for the
          end-user experience.
</p> <p class="text-primary dark:text-white mt-4">Senna Embsen</p> </div> </div> </div> </section> `;
}, "/Users/senna/Developer/Portfolio_website/src/components/landing/Structure.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Structure", $$Structure, {})} ` })}`;
}, "/Users/senna/Developer/Portfolio_website/src/pages/index.astro", void 0);

const $$file = "/Users/senna/Developer/Portfolio_website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
