# LOG

## 6.24.2025 mdy
1. At oliver-user at gen1 dash beecat created key pair
```
ssh-keygen -t ed25519 -C "oliver-user@gen1-beecat"
```
1. added config file
```
Host github.com
   User nlj
   IdentityFile ~/.ssh/file.priv
```
1. test

## 8.31.2024

1. edit main branch
1. mcc-tru discontinued, but still here.
1. mcc-tru continued as VOCED-WEBDEV rep
1. README file reorganized to start with this log
1. Review jupyter notebook projects

### tree

```text

.astro
.env
.gitignore
astro.config.mjs
dist
dist-5.31.2024.tar.gz
node_modules
package-lock.json
package.json
parcel-cube-chartjs
public
README.md
src
tailwind.config.mjs
tsconfig.json
Invalid switch - /B
Folder PATH listing for volume OS
Volume serial number is 0EA0-F1F2
C:\USERS\CREEPERPANDATREX\DOCUMENTS\2024\_MYGITHUB\KARYOSIM\SRC
|   env.d.ts
|   site.css
|   
+---components
|   |   Card.astro
|   |   SidebarGeneric.astro
|   |   
|   \---site
|       \---common
|               TopBar.astro
|               
+---content
|   +---blog
|   |       his1.md
|   |       my.md
|   |       my2.md
|   |       my3.md
|   |       my4.md
|   |       my40.md
|   |       my5.md
|   |       ny0.md
|   |       pocketbase-javascript-sdk.md
|   |       
|   \---jupyter
|           bubble-chart.ipynb
|           chr1.fna.gz.ipynb
|           chr2.fna.gz.ipynb
|           chr21.fna.gz.ipynb
|           chr22.fna.gz.ipynb
|           chr3.fna.gz.ipynb
|           chr4.fna.gz.ipynb
|           chr5.fna.gz.ipynb
|           chrNN.fna.gz.ipynb
|           chromosome22.ipynb
|           data.csv
|           fasta2one.ipynb
|           first-notebook.ipynb
|           genomics-asm-format.md
|           process-protein.ipynb
|           process-rna.ipynb
|           pyfuntals.ipynb
|           README.md
|           test-suite.ipynb
|           test.txt
|           thousand-genomes.ipynb
|           
+---layouts
|       Layout.astro
|       LayoutSite.astro
|       MarkdownLayout.astro
|       
\---pages
    |   blog.astro
    |   index.astro
    |   
    \---blog
            [slug].astro
            

```

## 2024 week 4.17

### Folder structure
```


```text
/
├── dist/
├── public/
│   └── favicon.svg
├── src/
│   ├── env.d.ts
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   │   └── LayoutSite.astro
│   └── pages/
│       └── index.astro    EDITED to add links to my, my2, my3, offine sites
│       └── index1.astro   import LayoutSite
│       └── index3.astro    import LayoutSite
│       └── my.md
│       └── my2.md         EDITED: pics/videos source as ./ instead of /
│       └── my3.md
├── astro.config.mjs
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tailwin.config.mjs
├── tsconfig.json
```

### 4.21.2024
```text
npm 
npm install
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@astrojs/prism@3.1.0',
npm WARN EBADENGINE   required: { node: '^18.17.1 || ^20.3.0 || >=21.0.0' },
npm WARN EBADENGINE   current: { node: 'v18.16.0', npm: '9.5.1' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: '@astrojs/telemetry@3.1.0',
npm WARN EBADENGINE   required: { node: '^18.17.1 || ^20.3.0 || >=21.0.0' },
npm WARN EBADENGINE   current: { node: 'v18.16.0', npm: '9.5.1' }
npm WARN EBADENGINE }
npm WARN EBADENGINE Unsupported engine {
npm WARN EBADENGINE   package: 'astro@4.6.3',
npm WARN EBADENGINE   required: {
npm WARN EBADENGINE     node: '^18.17.1 || ^20.3.0 || >=21.0.0',
npm WARN EBADENGINE     npm: '>=9.6.5',
npm WARN EBADENGINE     pnpm: '>=7.1.0'
npm WARN EBADENGINE   },
npm WARN EBADENGINE   current: { node: 'v18.16.0', npm: '9.5.1' }
npm WARN EBADENGINE }

added 499 packages, and audited 500 packages in 7s

187 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

```


# Astro Starter Kit: Basics


```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

