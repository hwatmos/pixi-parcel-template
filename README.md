# PIXI.js + Parcel WebApp Template

Minimalistic, working "Hello World" PIXI.js webapp that utilizes the Parcel build tool.

# Setup

Install Parcel and Static tools by following the installation guides found here:

- https://parceljs.org/getting-started/webapp/#project-setup
- https://github.com/elwin013/parcel-reporter-static-files-copy

This project template already has Parcel setup:  .parcelrc file has been created and package.json file has been configured to copy static files from the _static_ directory in root.

[!CAUTION]
Static is copied after build, so if new resources are added to the _static_ folder (e.g. if new images are added), need to re-run parcel.

# Implemented Bug Resolutions

**Init await error**

Using Parcel with PIXI causes the "Can't await Application.init from top level..." error.  To avoidad, PIXI app must be wrapped in a function, like so:

```
<script type="module">
    (async () => {
        const app = new PIXI.Application();
        ...
    })();
</script>
```

More info on this here: https://github.com/pixijs/pixijs/issues/10456

**Images not copied**

Assets loaded by PIXI, e.g. by using `PIXI.Assets.load()`, are not copied to dist by Parcel. All such assets must be in the root/static folder and they will be copied to dist/static.  This is accomplished thanks to the parcel-reporter-static-files-copy plugin from https://github.com/elwin013/parcel-reporter-static-files-copy/tree/master

## Compile and Run

To start Parcel (i.e. build the webapp into the dist directory and start the server), run from root:

```
yarn parcel .\src\index.html
```

and open localhost:1234 in web browser.

