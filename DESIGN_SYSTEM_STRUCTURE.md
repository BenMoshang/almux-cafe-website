# Recommended Design System Structure

```
src/lib/styles/
├── main.scss                    # Main entry point
├── primitive/                   # Foundational design tokens
│   ├── _p-colors.scss
│   ├── _p-spacing.scss         # Move from structure/primitive/
│   ├── _p-typography.scss      # Consolidate typography primitives
│   ├── _p-z-index.scss         # Move from structure/primitive/
│   └── _index.scss            # Export all primitives
├── semantic/                   # Meaningful combinations of primitives
│   ├── _s-colors.scss
│   ├── _s-spacing.scss         # Move from structure/semantic/
│   ├── _s-typography.scss      # Consolidate typography semantics
│   ├── _s-z-index.scss         # Move from structure/semantic/
│   └── _index.scss            # Export all semantics
├── public/                     # Public API layer
│   ├── _public-colors.scss
│   ├── _public-spacing.scss
│   ├── _public-typography.scss
│   ├── _public-z-index.scss
│   └── _index.scss            # Export all public APIs
├── utils/                      # Utilities and helpers
│   ├── _u-mixtend.scss
│   ├── _u-clamp.scss
│   ├── _u-breakpoints.scss
│   └── _index.scss
└── global/                     # Global variables and configuration
    └── _g-variables.scss
```

## Flow Consistency Rules

### 1. Primitive Layer

- Contains raw values, scales, and foundational tokens
- No semantic meaning, just pure values
- Example: `$FONT_SIZES_MOBILE: (25: 0.75rem, 50: 1rem, ...)`

### 2. Semantic Layer

- Maps primitives to meaningful names
- Uses primitive values via imports
- Example: `body: (font-size-key-mobile: '100', ...)`

### 3. Public Layer

- Exposes semantic layer through mixins and utilities
- Uses mixtend to generate multiple consumption patterns
- Provides the external API

### 4. Import Pattern

```scss
// In semantic files:
@use '../primitive/p-typography' as p-type;

// In public files:
@use '../semantic/s-typography' as s-type;

// In main.scss:
@forward 'public' as *;
```
