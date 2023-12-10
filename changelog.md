# v3.0.2
_2023-12-10_

* re-publish as compiled directly by `tsc`

# v3.0.1
_2023-03-25_

* re-publish without `livereload` in source code

# v3.0.0
_2023-03-25_

* drop `unpkg`/`iife` bundle, only emit `esm`
* have everything in the `options` object (incl. `className`)

# v2.0.3
_2022-10-17_

* use the `browser` and `unpkg` fields
* minimize `unpkg` bundle, but don't shit source maps

# v2.0.2
_2022-10-17_

* fix paths in package.json
* don't minify browser bundle
* always ship source maps

# v2.0.1
_2022-10-17_

* move to ts
* refer to generated typing

# v2.0.0
_2022-01-15_

* drop ie
* clean up injected css
* simplify api

# v1.1.1
_2021-05-10_

* run `esm` and `cjs` bundles through `buble`, too (fix breaking on ie)
* check for `-ms-filter` instead of `NodeList.prototype.forEach` to target ie

# v1.1.0
_2020-11-12_

* add source maps to `cjs` and `esm` bundles

# v1.0.0
_2020-10-22_

* no breaking changes since v0.3.12, just felt like it's ready
* introduce types
