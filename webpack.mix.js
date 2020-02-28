let mix = require("laravel-mix");
mix.setPublicPath("public/build");
mix.js("assets/js/app.js", "public/build");
mix.sass("assets/scss/app.scss", "public/build");
mix.version();
mix.sourceMaps();
