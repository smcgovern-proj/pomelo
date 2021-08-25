<script>
  import { tick } from 'svelte';
  const ROUND_LENGTH = 1500; //one round in seconds (25*60)
  const LONG_BREAK_LENGTH = 1200; //long break in seconds (20*60)
  const SHORT_BREAK_LENGTH = 300; //short break in seconds (5*60)
  let rounds = 0;
  let currentTime = ROUND_LENGTH;
  let counting = false;
  let interval;

  const buttonHandler = async (e) => {
    e.preventDefault();
    counting = !counting;
    await tick();
    if (counting) {
      interval = setInterval(() => {
        if(currentTime === 0) {
          endRound();
        }
        currentTime--;
      }, 1000);
    } else {
      clearInterval(interval);
    }
  };

  const resetHandler = () => {
    reset();
  };

  const endRound = () => {
    clearInterval(interval);
    rounds++;
    if (rounds === 4) {
      rest(LONG_BREAK_LENGTH);
      rounds = 0;
    } else {
      rest(SHORT_BREAK_LENGTH);
    }
  };

  const rest = (time) => {
    currentTime = time;
    interval = setInterval(() => {
      if (currentTime === 0) {
        reset();
      }
      currentTime--;
    }, 1000);
  };

  const reset = () => {
    clearInterval(interval);
    counting = false;
    rounds = 0;
    currentTime = ROUND_LENGTH;
  };

  //template to display time in MM/SS format
  const template = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${minutes.toString().padStart(2,'0')}:${secondsLeft.toString().padStart(2, '0')}`;
  };

</script>

<main>
  <div class="sidebar">
    <div class="cover-photo">
      <img src="https://film-grab.com/wp-content/uploads/photo-gallery/kikis003.jpg?bwg=1551286014"/>
    </div>
    <h1>tasks / ยังไม่เสร็จ</h1>
    <h3>completed: {rounds}/4 rounds</h3>
    <textarea class="tasks" autofocus spellcheck="false"></textarea>
  </div>
  <div class="mainbar">
    <div class="clock-container">
      <div class="clock">
        {template(currentTime)}
      </div>
      <button class="start-button" on:click={buttonHandler}>
        {counting ? "stop" : "start"}
      </button>
      <button class="reset-button" on:click={resetHandler}>reset</button>
    </div>
  </div>
</main>
<div class="footer">somebody hire me please</div>

<style>
  * {
    color: white;
  }

  main {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: minmax(150px, 40%) 1fr;
  }

  .sidebar {
    padding-top: 5%;
    padding-left: 5%;
    filter: brightness(85%);
  }

  .sidebar > h1 {
    margin-top: .5rem;
    letter-spacing: .25rem;
  }

  .sidebar > h3 {
    margin-top: .25rem;
    letter-spacing: .1rem;
    margin-bottom: .25rem;
  }

  .tasks {
    height: 70%;
    width: 100%;
    background-color: transparent;
    font-family: var(--font-main);
    font-size: 1.5rem;
    border: none;
    outline: none;
  }

  .cover-photo > img{
    max-width: 80%;
  }

  .mainbar {
    margin-left: 1rem;
    display: grid;
    place-items: center;
  }

  .clock-container {
    --w: calc(40vw);
    border: 4px solid white;
    display: flex;
    flex-flow: column nowrap;
    width: var(--w);
    height: var(--w);
    align-items: center;
    justify-content: space-evenly;
    border-radius:  50%;
    margin-right: min(.5rem);
    margin-top: -2rem;
  }

  .clock {
    font-size: calc(3rem + 6vw);
    letter-spacing: 1rem;
  }
  .footer {
    margin-bottom: 2rem;
    text-align: center;
  }

  button {
    margin-top: 2rem;
    font-family: var(--font-display);
    font-size: 2rem;
    border: 2px solid white;
    border-radius: .5rem;
    width: 60%;
    height: 20%;
    background-color: transparent;
    letter-spacing: .05rem;
  }

  button:hover {
    filter: brightness(80%);
  }

  .reset-button {
    margin-top: -1rem;
    /* margin-bottom: -1rem; */
    width: 30%;
    height: 15%;
    font-size: 1.25rem;
  }
</style>
