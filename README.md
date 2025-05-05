# SASS Landing

An animated aesthetically landing page sample for SASS Projects.

### Tools
- Tailwindcss
- Motion
- Nextjs

### Challenges
- I had serious issues configuring @svgr/webpack for all imported svg icons in my app. I was able to solve this by configuring next.config.ts and creating an svg declaration file (svgr.d.ts):

- Here is the next.config.ts file. I had an issuer property in the config.module.rules object which caused error on build time and I also had to move all assets from the public folder to the root folder to support SVG React Component import. This is the correct config for it.
```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule: any) => rule.test?.test?.('.svg'));
    
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }
    
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"]
    })

    return config;
  },
  turbopack: {
    rules: {
      "*.svg": {
        as: "*.js",
        loaders: ["@svgr/webpack"]
      }
    }
  }
};

export default nextConfig;
```

- svgr.d.ts
```
declare module "*.svg" {
    import { FC, SVGProps } from "react";

    const content: FC<SVGProps<SVGSVGElement>>;
    export default content;
}
```

- Last step: I added ***svgr.d.ts*** file to my tsconfig.json include property array. And for some reasons I had to declare it before next-env.d.ts
```
"include": ["svgr.d.ts", "next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
```
That's all, thanks for visiting my REPO 💚