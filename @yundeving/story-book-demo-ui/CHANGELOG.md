# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-08-22

### Added

- **Link Component**: Added new Link component with size variants (sm, md, lg)

## [1.1.5] - 2025-08-25

### Changed

- **Button Component**: Changed `state` prop to `status` to avoid terminology confusion with React's built-in state concept
- **StatusButton Component**: Updated to use `status` prop instead of `state` for consistent naming convention

## [1.1.6] - 2025-08-26

### Changed

- **Button Style**: Add 'ghost' variant with transparent background

## [1.1.7] - 2025-08-26

### Changed

~~🧪 experiment~~ - Completed !

- **Status Button**: Delete StatusButton and Implement Button with Status

## [1.1.8] - 2025-08-26

### Changed

- **Migrate forwardRef**: Replace React.forwardRef with React 19 native ref props pattern
  - Updated Input,Link, Select, Tooltip component to use direct ref prop instead of forwardRef
  - Removed all displayName declarations as they are no longer needed
  - Added ref type definitions to all component interfaces
  - Improved code readability and reduced complexity by eliminating forwardRef wrappers

## [1.1.9] - 2025-09-01

### Added

- **Button Component Icon Support**: Added leftIcon and rightIcon props to Button component
  - Added `leftIcon` and `rightIcon` ReactNode props for flexible icon placement
  - Simplified loading state from `status` enum to `isLoading` boolean
  - Loading spinner automatically replaces left icon when `isLoading` is true
  - Right icon is hidden during loading state to maintain clean UI
  - Updated Storybook stories with comprehensive icon examples

## [1.2.0] - 2025-09-03

### Added

Added two components built with Radix UI (headless UI)
to ensure accessibility and keyboard navigation

- **Checkbox Component**: Added accessible checkbox with variants, states, and animations
  - Support for size/color variants, indeterminate state, and error handling
  - Includes label, description, and helper text integration

- **RadioGroup Component**: Added radio button group with comprehensive features
  - Support for size/color variants and individual option disabling
  - Form integration with controlled/uncontrolled patterns

### Plan

- Use Radix UI for complex interactive components (Accordion, Dialog, Dropdown Menu, etc.)
