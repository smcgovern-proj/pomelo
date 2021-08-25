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
    counting = !counting;
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
  <div class="clock-container">
    <div class="clock">
      {template(currentTime)}
    </div>
    <button class="start-button" on:click={buttonHandler}>
      {counting ? "stop" : "start"}
    </button>
    <button class="reset-button" on:click={resetHandler}>reset</button>
  </div>
</main>
<div class="footer">somebody hire me please</div>

<style>
  main {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    color: white;
  }

  .clock-container {
    border: 4px solid white;
    display: flex;
    flex-flow: column nowrap;
    width: 80vh;
    height: 60vh;
    align-items: center;
    justify-content: space-evenly;
    border-radius:  1rem;
  }

  .clock {
    font-size: calc(5rem + 6vw);
    letter-spacing: 1rem;
  }
  .footer {
    margin-bottom: 2rem;
    text-align: center;
  }

  button {
    margin-top: 2rem;
    color: white;
    font-family: var(--font-display);
    font-size: 2rem;
    border: 2px solid white;
    border-radius: .5rem;
    width: 60%;
    height: 20%;
    background-color: transparent;
  }

  .reset-button {
    /* margin-top: -2rem; */
    /* margin-bottom: -1rem; */
    width: 30%;
    height: 15%;
    font-size: 1.25rem;
  }
</style>
