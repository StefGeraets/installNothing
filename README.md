# Lunchables

Presenation framework for lunchables. Offers builtin markdown based slides with support
for HTML and custom components.
Powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a presentation

- Add a directory to `/src/slides`.
- Add a `0meta.txt` file to that directory.

```txt
---
title: 'Lunchable: Presentation title'
description: 'Presentation description'
---

```

- Optional: Add a `0style.css` file to that directory.
- Start adding slides.

### Slides

Every slide is a markdown file.

[`yaml frontmatter`](https://jekyllrb.com/docs/front-matter/) is used to add some metadata and boilerplate to the layout.

The common values are:

#### `title`: `string`

The title of the window and the main header if no subtitle is given.

#### `subtitle`: `string` _[optional]_

Used for continuation slides. i.e. This is semantically less important, but will be shown as the main header.

#### `type`: `'content'` | `'demo'` | `'ship'` | `'code'`

The boilerplate layout to use.

#### `order`: `number`

The order in which the slides are sorted. It is considered good practice to also add this to the start of the filename.

### Components

Custom (svelte) components can be created in the `$lib/components/` directory.
These components should be re-usable across multiple presentations.

If components are intended for single-use. i.e. as part of (a demo of) a single presentation, the should be added to the `$lib/demo/{presentation-key}/` directory instead.

## Presenting

Presenting is easy, navigate to the domain in the browser and press the right arrow key.

This domain is either from your deployment, or can be seen in the terminal when running `yarn dev`.
