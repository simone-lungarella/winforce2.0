<script>
  import "../app.css";
  import Header from "./Header.svelte";

  let bodyStyle = "bg-gray-900 text-white overflow-y-hidden ";
  const handleMenuToggle = (/** @type {{ detail: any; }} */ event) => {
    event.detail
      ? (bodyStyle += " blur-sm")
      : (bodyStyle = bodyStyle.replace(" blur-sm", ""));
  };
</script>

<svelte:head>
  <title>Task Manager Wind</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" type="image/png" href="/favicon.png" />
</svelte:head>

<Header on:menu-open={handleMenuToggle} />

<body class={bodyStyle}>
  <slot />
</body>
