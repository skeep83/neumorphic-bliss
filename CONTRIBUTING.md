# Contributing to Neumorphic Card-Mod Theme

Thank you for your interest in contributing! This project welcomes contributions from the community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Guidelines](#development-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Release Process](#release-process)

## Code of Conduct

This project follows the [Home Assistant Code of Conduct](https://www.home-assistant.io/code_of_conduct/). Please be respectful and inclusive in all interactions.

## Getting Started

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/ha-neumorphic-cardmod-theme.git
   cd ha-neumorphic-cardmod-theme
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

### 🐛 Reporting Bugs

1. Check [existing issues](https://github.com/ha-community/ha-neumorphic-cardmod-theme/issues) first
2. Create a new issue with:
   - Clear, descriptive title
   - Home Assistant version
   - Browser and version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### ✨ Suggesting Features

1. Check existing issues and discussions
2. Create a new issue with `[Feature Request]` prefix
3. Describe the use case and proposed solution

### 🔧 Code Contributions

- Bug fixes
- New card-mod examples
- Theme variable additions
- Documentation improvements
- Translations

## Development Guidelines

### Theme YAML

- Use 2-space indentation
- Group related variables with comments
- Provide both light and dark mode values
- Use descriptive variable names
- Test in both light and dark modes

### Color Guidelines

- Use HEX colors for consistency
- Ensure WCAG AA contrast ratios
- Test shadow visibility in both modes
- Keep neumorphic shadows subtle but visible

### File Structure

```
ha-neumorphic-cardmod-theme/
├── themes/
│   └── neumorphic.yaml     # Main theme file
├── images/                  # Screenshots and assets
├── .github/
│   └── workflows/
│       └── validate.yml    # HACS validation
├── hacs.json               # HACS configuration
├── README.md               # Documentation
├── CHANGELOG.md            # Version history
├── CONTRIBUTING.md         # This file
└── LICENSE                 # MIT License
```

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation |
| `style` | Formatting (no code change) |
| `refactor` | Code restructuring |
| `test` | Adding tests |
| `chore` | Maintenance |

### Examples

```
feat(theme): add accent color variants

fix(dark): improve shadow visibility on dark surfaces

docs(readme): add mushroom chips example
```

## Pull Request Process

1. **Update documentation** if needed
2. **Update CHANGELOG.md** with your changes under `[Unreleased]`
3. **Test your changes**:
   - Load theme in Home Assistant
   - Test both light and dark modes
   - Verify card-mod variables work
4. **Run HACS validation** (automatic via GitHub Actions)
5. **Submit PR** with clear description of changes

### PR Checklist

- [ ] Theme loads without errors
- [ ] Both light and dark modes work correctly
- [ ] Card-mod variables function as expected
- [ ] CHANGELOG.md updated
- [ ] README.md updated (if applicable)
- [ ] HACS validation passes

## Release Process

Releases are managed by maintainers:

1. Update `CHANGELOG.md`:
   - Move `[Unreleased]` items to new version section
   - Add release date
2. Create GitHub Release:
   - Tag format: `v1.2.3`
   - Title: `v1.2.3`
   - Copy changelog entries to release notes
3. HACS will automatically pick up the new release

### Versioning

We use [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features, backward compatible
- **PATCH** (0.0.1): Bug fixes, backward compatible

---

## Questions?

- Open a [Discussion](https://github.com/ha-community/ha-neumorphic-cardmod-theme/discussions)
- Create an [Issue](https://github.com/ha-community/ha-neumorphic-cardmod-theme/issues)

Thank you for contributing! 🎨
