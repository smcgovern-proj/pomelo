# Intro
Pomelo is a minimalistic pomodoro timer, designed to help you focus, breathe, and hone in on the task at hand. The functionality is straightforward: a timer you can start/stop and reset, as well as a sidebar canvas for tasks and thoughts. The rounds follow a typical pomodoro style, with four 25-minute working sessions separated by 5-minute breaks, and a 20-minute break upon completing the cycle.

![pomo-cropped-9-3](https://user-images.githubusercontent.com/84145162/132075004-f52a9792-14f4-44cd-ab86-20bb7274fdd5.png)

# Dev Process
I wanted to design a web app that was both inviting and unassuming. To that end, I tried to keep the UI and frontend code relatively simple. The frontend is more or less static, with a series of setInterval functions that control timer functionality. Thankfully, [Svelte](https://github.com/sveltejs/svelte) makes it easy to separate concerns; my final app ended up being a single component.

While there is an Express backend, it's not doing much at the moment besides statically serving up my compiled JS/HTML files. The server should prove useful if I need to add more functionality/routing to the app in the future. 

# Unique Challenges
While the end result is simple, I tried to challenge myself in several ways during the process of building it. 

First, I was working with Svelte, which I had used only once before. As a framework, I found it lightweight, easy to use, and intuitive. React is more powerful and has a better ecosystem, but it was easier to scaffold a lightweight SPA with Svelte and Rollup than with React and Webpack. 

Second, from a design perspective, I wanted to use a typeface that had both Thai and English glyphs. As a Thai-American, I've seen Thai writing for a long time but found it very different to work with in terms of weight and kerning (Thai sentences are delineated by spaces; Thai words themselves sit adjacent to each other without blank space gaps). Luckily, I found a great display font, [Chonburi](https://fonts.google.com/specimen/Chonburi#glyphs), which affords for both languages rather seamlessly.

Finally, I wanted to see how far I could take a relatively simple app idea. I knew from the start that I wouldn't need a lot of components or external libraries; I just wanted to see if I could write clean, modular code that even a beginner or outsider to the framework could understand. Hopefully, I've succeeded.

