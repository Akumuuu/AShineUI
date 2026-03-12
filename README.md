# AShineUI Theme for VS Code

A modern **minimal dark theme** for Visual Studio Code designed for comfortable long coding sessions.

AShineUI focuses on **balanced contrast, soft syntax highlighting and clean UI colors** so your eyes stay relaxed during long development sessions.

---

## Install

[Install from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=morgheas.ashine-ui-theme)

Or install directly from the Extensions panel.

1. Open **Extensions** in VS Code
2. Search for:

```
AShine UI
```

3. Click **Install**

---

## Activate Theme

Open Command Palette:

```
Ctrl + Shift + P
```

Run:

```
Preferences: Color Theme
```

Select:

```
AShineUI
```

---

# Preview

### Editor

![Editor Preview](images/editor.png)

### Syntax Highlighting

![Syntax Preview](images/syntax.png)

---

# Features

- Modern dark interface
- Carefully balanced color palette
- Soft syntax highlighting
- Custom terminal ANSI colors
- Full UI theming (sidebar, tabs, notifications, git decorations)
- Optimized for JavaScript / TypeScript / React

---

# Color Reference

## Syntax Colors

| Color     | Usage               |
| --------- | ------------------- |
| `#ffb464` | Keywords, operators |
| `#bd93f9` | Variables           |
| `#eecb66` | Functions, methods  |
| `#7dcfff` | Classes, types      |
| `#bae67e` | Strings             |
| `#ff6b6b` | Numbers, constants  |
| `#7f848e` | Comments            |

---

## UI Colors

| Color       | Usage               |
| ----------- | ------------------- |
| `#1d1d1d`   | Editor background   |
| `#1a1a1a`   | Sidebar / panels    |
| `#e2c160`   | Accent color        |
| `#d4d4d4`   | Main text           |
| `#4f4320a7` | Selection highlight |

---

# Terminal Colors

AShineUI includes a custom ANSI palette for the integrated terminal.

| Color   | Value     |
| ------- | --------- |
| Red     | `#ff5555` |
| Green   | `#bae67e` |
| Yellow  | `#ffd866` |
| Blue    | `#7aa2f7` |
| Magenta | `#c792ea` |
| Cyan    | `#5ccfe6` |
| White   | `#e5e5e5` |

---

# Manual Installation

Install using a `.vsix` file:

```
Ctrl + Shift + P
```

Run:

```
Extensions: Install from VSIX
```

Select the downloaded extension file.

---

# Development

Build extension:

```
vsce package
```

Install locally:

```
code --install-extension ashine-ui-theme.vsix
```

Publish update:

```
vsce publish patch
```

---

# Repository

https://github.com/Akumuuu/AShineUI

---

# License

MIT License
