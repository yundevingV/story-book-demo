# Story Book Demo UI

A collection of reusable UI components built with Storybook, React, and TypeScript.

## Installation

```bash
npm install @yundeving/story-book-demo-ui
# or
yarn add @yundeving/story-book-demo-ui
```

## Usage

```tsx
import { Button, Card, Badge } from "@yundeving/story-book-demo-ui";

function App() {
  return (
    <Card>
      <h2>Welcome to our UI library</h2>
      <Button variant="primary">Click me</Button>
      <Badge>New</Badge>
    </Card>
  );
}
```

## Components

- **Button** - Various button styles and variants
- **Card** - Container component with different layouts
- **Badge** - Status indicators and labels
- **Input** - Form input components
- **Select** - Dropdown selection component
- **IconButton** - Buttons with icons
- **Tooltip** - Hover tooltips
- **Skeleton** - Loading placeholders
- **StatusButton** - Status-aware buttons
- **Divider** - Visual separators
- **Label** - Form labels
- **Icon** - Icon components

## Development

```bash
# Install dependencies
yarn install

# Start Storybook
yarn storybook

# Build package
yarn build
```

## License

MIT
