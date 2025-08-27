# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2024-08-22

### Added

- **Link Component**: Added new Link component with size variants (sm, md, lg)

## [1.1.5] - 2024-08-25

### Changed

- **Button Component**: Changed `state` prop to `status` to avoid terminology confusion with React's built-in state concept
- **StatusButton Component**: Updated to use `status` prop instead of `state` for consistent naming convention

## [1.1.6] - 2024-08-26

### Changed

- **Button Style**: Add 'ghost' variant with transparent background

## [1.1.7] - 2024-08-26

### Changed

~~🧪 experiment~~ - Completed !

- **Status Button**: Delete StatusButton and Implement Button with Status

## [1.1.8] - 2024-08-26

### Changed

- **Migrate forwardRef**: Replace React.forwardRef with React 19 native ref props pattern
  - Updated Input,Link, Select, Tooltip component to use direct ref prop instead of forwardRef
  - Removed all displayName declarations as they are no longer needed
  - Added ref type definitions to all component interfaces
  - Improved code readability and reduced complexity by eliminating forwardRef wrappers
