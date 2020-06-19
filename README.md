# Hang tight :call_me_hand:

[![Netlify Status](https://api.netlify.com/api/v1/badges/535cfb69-fa53-4c35-819b-171a187da476/deploy-status)](https://app.netlify.com/sites/hang-tight/deploys)

Pure CSS Loaders

```sh
$ npm install --save hang-tight
```

## Usage

This package is purely CSS and nothing else. Simply add the desired class to a div and hang-tight's css will do the rest.  Each loader should have the following attributes set:

- `role="progressbar"`
- `aria-valuetext` ("Loading" for example)
- `aria-busy=true` (when in the loading state)
- `aria-valuemin`
- `aria-valuemax`

## Loaders

### `dots`

```html
<div
  class="hang-tight__dots"
  role="progressbar"
  aria-valuetext="Loading"
  aria-busy="true"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### `squares`

```html
<div
  class="hang-tight__squares"
  role="progressbar"
  aria-valuetext="Loading..."
  aria-busy="true"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### `sliding-bars`

```html
<div
  class="hang-tight__sliding-bars"
  role="progressbar"
  aria-valuetext="Loading..."
  aria-busy="true"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-describedby="sliding-bars-loading-text"
>
  <span id="sliding-bars-loading-text">Loading...</span>
</div>
```

### `spinning-circles`

```html
<div
  class="hang-tight__spinning-circles"
  role="progressbar"
  aria-valuetext="Loading..."
  aria-busy="true"
  aria-valuemin="0"
  aria-valuemax="100"
>
</div>
```

### `ripple`

```html
<div
  class="hang-tight__ripple"
  role="progressbar"
  aria-valuetext="Loading..."
  aria-busy="true"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div></div>
  <div></div>
</div>
```

### `waves`

```html
<div
  class="hang-tight__wave"
  role="progressbar"
  aria-valuetext="Loading..."
  aria-busy="true"
  aria-valuemin="0"
  aria-valuemax="100"
>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```