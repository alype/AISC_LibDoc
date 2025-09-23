---
title: Hello Page!
description: I am the first page linked into the primary navigation
layout: libdoc_page.liquid
permalink: /{{ title | slugify }}/index.html
eleventyNavigation:
    key: Hello Page
tags:
    - syntax-highlighting
# date: 2024-01-01
---
Howdy! I am the first page! Let’s go to [child page](./A1_hello-child/A1_hello-child.md "Go to hello child").

```markdown
Howdy! I am the first page! Let’s go to [child page](./A1_hello-child/A1_hello-child.md "Go to hello child").
```