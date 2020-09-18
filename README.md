## Usage

Be sure that you have the latest node and npm installed, then clone this repository and run:

```bash
npm install
npm start
```

To test a production build locally, do:

```bash
npm run stage
npm run serve
```

To run a production build for deployment:

```bash
npm run build
```

Deploy:

```bash
export SITE_ROOT=https://4taps.me
npm run deploy
```