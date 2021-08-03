<script>
  import { cloud } from "../appwrite.js";

  let showForm = true;
  let showResult = false;
  let showError = false;

  let password = {
    value: "",
    confirm: ""
  };

  const changePassword = () => {
    const UrlParams = new URLSearchParams(window.location.search);

    if (UrlParams.has("userId") && UrlParams.has("secret")) {
      cloud.account
        .updateRecovery(
          UrlParams.get("userId"),
          UrlParams.get("secret"),
          password.value,
          password.confirm
        )
        .then(
          response => {
            showForm = false;
            showResult = true;
          },
          error => {
            showError = true;
          }
        );
    } else {
      showForm = false;
      showError = true;
    }
  };
</script>

<style>
  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  img {
    max-width: 128px;
    margin: 2rem auto;
  }

  form {
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    max-width: 24rem;
  }

  form input {
    outline: 0;
    background: #fff;
    border: 0;
    margin: 0 0 1rem;
    padding: 1rem;
    box-sizing: border-box;
    font-size: 1rem;
  }

  form button {
    outline: 0;
    background: rgb(82, 151, 73);
    width: 100%;
    border: 0;
    padding: 15px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 2em;
    }
  }
</style>

<svelte:head>
  <title>OmniaWrite - Reset password</title>
</svelte:head>
<img src="logo.svg" alt="OmniaWrite Logo" />
{#if showForm}
  <form on:submit|preventDefault={changePassword}>
    <input type="password" placeholder="password" bind:value={password.value}/>
    <input type="password" placeholder="confirm password" bind:value={password.confirm} />
    <button on:click|preventDefault={changePassword}>change password</button>
  </form>
{/if}
{#if showResult}
  <h1>Password changed!</h1>
{/if}
{#if showError}
  <p style="color: red">error</p>
{/if}
