## My Issue

I can deploy either of my two endpoints but not BOTH:

- `pages/api/test-api.ts`
- `pages/api/test-api-alt.ts`

If I delete one of these files my app deploys succeeds. If I leave them both in, it fails.

Judging by the file size error, it seems ALL dependencies get bundled with EVERY endpoint.

Related Github discussions:

- https://github.com/zeit/now/discussions/4041 (dependency pollution across apis)
- https://github.com/zeit/now/discussions/4013 (dependency pollution across pages AND apis, which appears to be fixed)

Zeit/now error logs:

```
9:51:12.236  Compiled successfully.
09:51:12.236  Automatically optimizing pages...
09:51:12.843  Page                                                           Size     First Load JS
09:51:12.843  ┌ ○ /                                                          6.94 kB        64.9 kB
09:51:12.843  ├ ○ /404                                                       3.15 kB        61.1 kB
09:51:12.843  ├ λ /api/test-api
09:51:12.843  ├ λ /api/test-api-alt
09:51:12.843  └ λ /test-page                                                 293 B          58.2 kB
09:51:12.843  + First Load JS shared by all                                  57.9 kB
09:51:12.843    ├ static/pages/_app.js                                       957 B
09:51:12.843    ├ chunks/e2e2e76c8bf507b2d0f54f2e5110e7a0e38cd0f7.92878c.js  10.3 kB
09:51:12.843    ├ chunks/framework.0f140d.js                                 40 kB
09:51:12.843    ├ runtime/main.7e74ef.js                                     5.95 kB
09:51:12.843    └ runtime/webpack.b65cab.js                                  746 B
09:51:12.844  λ  (Lambda)  server-side renders at runtime (uses getInitialProps or getServerSideProps)
09:51:12.844  ○  (Static)  automatically rendered as static HTML (uses no initial props)
09:51:12.844  ●  (SSG)     automatically generated as static HTML + JSON (uses getStaticProps)
09:51:12.895  Done in 7.76s.
09:51:18.943  Traced Next.js serverless functions for external files in: 6031.273ms
09:51:32.783  Compressed shared serverless function files: 13839.791ms
09:51:32.947  All serverless functions created in: 162.795ms
09:51:32.988  Error: The Serverless Function "api/test-api-alt" is 51.63mb which exceeds the maximum size limit of 50mb. Learn more: https://zeit.co/docs/v2/platform/limits#serverless-function-size
09:51:34.613  Done with "package.json"
```
