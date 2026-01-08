# 🤝 Contributing to Full Neumorphic Theme

Thank you for your interest in contributing! This project is open for community development.

## 🌟 How to Contribute

### Reporting Issues

1. Check existing issues first
2. Use the issue template
3. Include screenshots if possible
4. Specify your Home Assistant version

### Pull Requests

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Make** your changes
4. **Test** in Home Assistant
5. **Commit**: `git commit -m 'Add amazing feature'`
6. **Push**: `git push origin feature/amazing-feature`
7. **Open** a Pull Request

## 📁 Project Structure

```
ha-full-neumorphic-theme/
├── themes/
│   └── full_neumorphic.yaml    # Main theme file
├── snippets/
│   ├── card-mod-neumorphic.yaml    # Styling snippets
│   └── card-mod-animations.yaml    # Animation snippets
├── public/
│   └── neumorphic-cards.js     # Custom Lovelace cards
├── docs/
│   ├── README.md               # Theme documentation
│   └── CARDS.md                # Cards documentation
├── hacs.json                   # HACS theme config
├── hacs-cards.json             # HACS cards config
└── CHANGELOG.md                # Version history
```

## 🎨 Design Guidelines

### Colors
- Use HSL format for colors
- Ensure contrast ratios meet WCAG AA
- Test in both light and dark modes

### Shadows
- Maintain neumorphic convex/concave system
- Light shadows: highlight direction
- Dark shadows: depth direction

### Typography
- Primary: Inter (body text)
- Display: Plus Jakarta Sans (headings)
- Monospace: JetBrains Mono (code)

## 🧪 Testing

Before submitting:

1. Test with Home Assistant 2023.1+
2. Verify HACS installation works
3. Test both light and dark modes
4. Check mobile responsiveness
5. Validate YAML syntax

## 💡 Ideas for Contribution

- Additional accent color variants
- New card-mod snippets
- Animations and transitions
- Dashboard templates
- Documentation improvements
- Translations

## 📝 Code Style

### YAML
- 2-space indentation
- Descriptive comments
- Group related variables

### JavaScript (Cards)
- Use ES6+ syntax
- Follow existing patterns
- Add JSDoc comments

## 🏷️ Versioning

We use [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes
- **MINOR**: New features
- **PATCH**: Bug fixes

## 📜 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Questions?** Open a discussion or issue!

Made with ❤️ by the Home Assistant Community
