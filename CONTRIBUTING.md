# Contributing to Oriva Foundation

First off, thank you for considering contributing to Oriva Foundation! It's people like you that make Oriva such a great organization.

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title**
* **Describe the exact steps which reproduce the problem**
* **Provide specific examples to demonstrate the steps**
* **Describe the behavior you observed after following the steps**
* **Explain which behavior you expected to see instead and why**
* **Include screenshots and animated GIFs if possible**

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title**
* **Provide a step-by-step description of the suggested enhancement**
* **Provide specific examples to demonstrate the steps**
* **Describe the current behavior and expected behavior**
* **Explain why this enhancement would be useful**

### Pull Requests

* Fill in the required template
* Follow the TypeScript and React styleguides
* End all files with a newline
* Avoid platform-specific code

## Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
   ```bash
   git clone https://github.com/YOUR-USERNAME/oriva.git
   cd oriva
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Create a branch** for your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```
5. **Make your changes**
6. **Run the development server** to test locally
   ```bash
   npm run dev
   ```
7. **Commit your changes** with clear messages
   ```bash
   git commit -m "feat: add new feature"
   ```
8. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
9. **Create a Pull Request** against the main repository

## Styleguides

### Git Commit Messages

* Use the present tense ("add feature" not "added feature")
* Use the imperative mood ("move cursor to..." not "moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Use conventional commits format:
  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation
  - `style:` for code style changes
  - `refactor:` for code refactoring
  - `test:` for adding tests
  - `chore:` for maintenance

Example:
```
feat: add team member profiles

- Add TeamCard component
- Create team page with member details
- Include social links and contact info
```

### TypeScript/React Styleguide

* Use `const` for variables (prefer `const` > `let`)
* Prefer arrow functions for components
* Use meaningful variable and function names
* Add TypeScript types for all function parameters and return values
* Use functional components with hooks
* Keep components focused and single-responsibility

Example:
```typescript
interface TeamMember {
  name: string;
  role: string;
  github: string;
  linkedin: string;
}

export default function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="text-xl font-bold">{member.name}</h3>
      {/* Component content */}
    </div>
  );
}
```

### CSS/Tailwind Styleguide

* Use Tailwind CSS utility classes
* Avoid custom CSS when possible
* Keep the dark mode mindset (though we use light mode now)
* Use responsive prefixes: `sm:`, `md:`, `lg:`
* Create reusable component classes with `@apply` if needed

## Project Structure

When adding new features:

1. **New Pages**: Create in `app/[page-name]/page.tsx`
2. **New Components**: Create in `components/ComponentName.tsx`
3. **Component Props**: Always define TypeScript interfaces
4. **Styling**: Use Tailwind CSS classes
5. **Animations**: Use Framer Motion when appropriate

## Testing

Before submitting a PR:

1. **Run the build** to ensure no compilation errors
   ```bash
   npm run build
   ```
2. **Test locally**
   ```bash
   npm run dev
   ```
3. **Check responsiveness** on mobile, tablet, and desktop
4. **Verify TypeScript** has no errors

## Additional Notes

### What Should I Know Before I Get Started?

#### Design Philosophy

Oriva Foundation website follows these principles:
- **Minimal**: No clutter, plenty of white space
- **Clean**: Professional, modern aesthetic
- **Responsive**: Works perfectly on all devices
- **Performant**: Fast loading and smooth interactions
- **Accessible**: Usable by everyone

#### Project Goals

We aim to:
- Showcase Oriva Foundation's mission and impact
- Make it easy for people to learn about our projects
- Provide ways for people to support and contribute
- Maintain a high standard of code quality

### Pull Request Process

1. Update the README.md or docs if you're changing functionality
2. Test your changes thoroughly
3. Ensure your PR has a clear description
4. Link related issues using `Fixes #123` format
5. Be open to feedback and be willing to make revisions

## Recognition

Contributors will be recognized:
- In the README contributors section
- On the team or contributors page
- In commit history

## Questions?

Feel free to reach out:
- **Email**: hello@oriva.org
- **GitHub Discussions**: [Discussion Forum](https://github.com/Oriva-Foundation/oriva/discussions)
- **Create an Issue**: [New Issue](https://github.com/Oriva-Foundation/oriva/issues)

Thank you for your interest in contributing to Oriva Foundation! 🚀
