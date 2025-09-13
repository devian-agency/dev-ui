# dev-ui

![dev-ui Banner](https://placehold.co/1200x630/7c3aed/ffffff?text=dev-ui&font=inter)

A modern, accessible, and developer-friendly UI component library for React, built with Next.js and TypeScript.

---

## Features

-   **🚀 Built with Next.js & React:** Leverages the power of the latest web technologies for optimal performance.
-   **🔒 Type-Safe:** Fully written in TypeScript to catch errors early and improve developer experience.
-   **🎨 Customizable & Themeable:** Easily adapt components to your brand's look and feel. (Coming soon!)
-   **♿ Accessibility First:** Following WAI-ARIA standards to ensure components are usable by everyone.
-   **🌳 Tree-Shakable:** Only the components you use are included in your final bundle.
-   **📚 Comprehensive Documentation:** Live examples and detailed API documentation for every component.

## Installation

You can install `dev-ui` using npm or yarn:

```bash
npm install dev-ui
# or
yarn add dev-ui
```

## Usage

Here's a quick example of how to use the `Button` component:

```bash
import { Button } from 'dev-ui';
import React from 'react';

const MyApp = () => {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Button Clicked!')}>
        Click Me
      </Button>
      <Button variant="secondary" disabled>
        Disabled Button
      </Button>
    </div>
  );
};

export default MyApp;
```

## Documentation

For full documentation and a live playground of all components, please visit our documentation site (link to be added).

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your fork: git clone https://github.com/devian-agency/dev-ui.git
3. Create a new branch: git checkout -b feat/my-new-component
4. Make your changes and commit them with a descriptive message.
5. Push your changes to your fork: git push origin feat/my-new-component
6. Open a Pull Request with a detailed description of your changes.
7. Mention in all the sections where AI written code is used.

Please read our Contributing Guidelines for more details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/devian-agency/dev-ui/blob/main/LICENSE) file for details.

### Project bootstrapped with Next.js.
