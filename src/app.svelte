<script>
  import Router from "svelte-spa-router";

  import ResetPassword from "./routes/reset-password.svelte";
  import VerifyAccount from "./routes/verify-account.svelte";
  import NotFound from "./routes/not-found.svelte";

  const routes = {
    "/reset-password": ResetPassword,
    "/verify-account": VerifyAccount,
    "*": NotFound
  };
</script>

<style>
  main {
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }

  p {
    text-align: center;
    font-size: 0.8rem;
  }

  a {
    text-decoration: none;
  }
</style>

<main>
  <Router {routes} />
  <p>
    <a href="https://omniawrite.com">Homepage</a>
    |
    <a href="https://omniawrite.com/download">Download</a>
    |
    <a href="https://app.omniawrite.com">WebApp</a>
    |
    <a href="mailto:info@omniawrite.com">info@omniawrite.com</a>
  </p>
</main>
