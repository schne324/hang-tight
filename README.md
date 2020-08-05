# Hang tight :call_me_hand:

[![Netlify Status](https://api.netlify.com/api/v1/badges/535cfb69-fa53-4c35-819b-171a187da476/deploy-status)](https://app.netlify.com/sites/hang-tight/deploys)

> Fully Accessible / Pure CSS Loaders

https://hang-tight.netlify.app

## Installation

### CSS

```sh
$ npm install --save hang-tight
```

### React

```sh
$ npm install --save hang-tight-react
```

## Accessibility

If you aren't using the react components and you are going with the pure HTML approach, ensure the following attributes are added:

- `role="progressbar"`
- `aria-valuetext` _("Loading" for example)_
- `aria-busy=true` _(when in the loading state)_
- `aria-valuemin`
- `aria-valuemax`

(view the [demo](https://hang-tight.netlify.app) for examples)
