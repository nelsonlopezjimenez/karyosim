# MCC-TRU
## 7.28.2024
1. f2c7dd0 (HEAD -> mcc-tru, origin/mcc-tru) Added W3S/MDN Web Security, cors, cybersecurity
1. 1d27d03 HTTP methods, URL def, Q3-Lab1, async/await
1. 09ee4d7 Q3 Lab1 by Brooks modified from docx to md
## 7.25.2024
1. 998a662 added max and twoHighest custom functions
## 7.23.2024
1. cff8646 Wieruch: JS fundamntls for react modified
## 7.17.2024
1. 04ef8ce Added to 1d slice, max, min, and my40 with syntax references
1. efab8b4 Added notebook 1b, 1c with easiest exercises
1. 7e2359d Index.astro: each quarter separate ul list
1. 17d2de6 MCC-TRU new branch created for MCC only
1. 6b6dfeb (origin/main, origin/HEAD, main) RADME done and pending todos
1. 66f9e38 Dot labelmap and labelseqhash 38.p14 1-25 done
1. 62620f7 Algorithm added AWK from features file
1. 4022b88 Fixed processChrWithIdSymbolSanityCheck to get .primer and .fna.gene
1. c0c48bf Added chr22.fna.gz.labelmap.gz.38.p14 and chr22..labelseqhash.gz.38.p14
1. ec58446 Generated two lists: idSymbMap and idSymbSeqHash
1. a777105 Algorithm in chr22.fna.gz.ipynb file written
1. 307b847 Found the right assembly at 000001405GCF-38.p14
1. dd97948 USP18, FRG1FP complementary, and DUXAP8 genes tested
1. f5d98c9 added full gene USP18, 11274
1. efd5cf3 Added python to process chromoseme22 NC_000022.11
1. 051a9bf created thousdand-genomes ipynt and asm-format.md
1. 699017c added thousand-genomes.ipynb
1. ac2d51e Added bubble-chart notebook
1. 650fb8e added test suite first last elements
1. 59f753d deleted data from dot ignore
1. c24ea73 jupyter process-rna 38.p14 done
1. 728f29b process-protein cleaned. Test with p12
1. 4cd1096 merge with the previous commit
1. 074f7c3 process-protein {'XXXXX':['>xxx', '>df asdf df ', '>np', ....]
1. 8503a05 process-protein sorted a list of dics based on duplicate number
1. 317641b process-protein read, hashed, duplicates, before sorting
1. 3ad711e Cleaned extra info number 2
1. 029018c Cleaned of extra data
1. 61a1a39 process-protein ipynb with full data processing flow
1. 20c905b Hashing, first/last protein, +/- SEED label/seq output
1. 051c17a Start sha256().encode().hexdigest()
1. 427ec60 Fasta2one faa.gz to dictionary {'label':'xxx', 'seq':'xxxx'}
1. ead1a25 fasta2one def: from fasta multilines to oneline record
1. 99a54a3 added astro tailwindcss verdaccio app
1. dc302c3 Parcel cube chartjs moved into its own folder

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

## LOG

### 4.21.2024
```
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

# 2024 week 4.17

## Folder structure


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