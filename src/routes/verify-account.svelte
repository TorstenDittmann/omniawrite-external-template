<script>
  import { cloud } from "../appwrite.js";

  const verifyAccount = async () => {
    const UrlParams = new URLSearchParams(window.location.search);

    return cloud.account.updateVerification(
      UrlParams.get("userId"),
      UrlParams.get("secret")
    );
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
{#await verifyAccount()}
  <p>...activating account</p>
{:then response}
  <h1>Account verified!</h1>
{:catch error}
  <p style="color: red">{error}</p>
{/await}
