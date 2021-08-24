<script>
  import Timer from './Timer.svelte';
  //boolean state to keep track of whether timer is currently running
  let counting = false;

  //click handler for main button
  const startHandler = (e) => {
    e.preventDefault();
    counting = !counting;
  };
</script>

<main>
  <div class="clock-container">
    <Timer />
    <button class="start-button" on:click={startHandler}>
      {counting ? "stop" : "start"}
    </button>
  </div>
</main>
<div class="footer">somebody hire me please</div>

<style>
  main {
    background-color: rgba(175,175,175, .175);
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .clock-container {
    border: 1px solid black; 
    display: flex;
    flex-flow: column nowrap;
    width: 80vh;
    height: 60vh;
    align-items: center;
    justify-content: space-evenly;
  }
  .footer {
    margin-bottom: 2rem;
    text-align: center;
  }

  .start-button {
    font-family: var(--font-display);
    font-size: 2rem;
    border: 2px solid black;
    border-radius: .5rem;
    width: 60%;
    height: 20%;
  }
</style>
