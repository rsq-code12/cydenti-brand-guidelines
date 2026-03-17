# Cydenti Brand Portal

This is the official brand guidelines portal for Cydenti, built with Next.js and Tailwind CSS.

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

-   `src/app`: Contains all the pages for the brand guidelines.
    -   `page.tsx`: Overview / Home
    -   `logos/`: Logo system guidelines
    -   `colors/`: Color palette
    -   `typography/`: Font usage
    -   `tone-of-voice/`: Writing guidelines
    -   `social-media/`: Social media templates
    -   `presentation/`: Slide deck guidelines
    -   `ai-prompts/`: AI prompting guide
    -   `downloads/`: Asset download center
-   `src/components`: Reusable UI components.
    -   `Sidebar.tsx`: Main navigation
    -   `BrandLogo.tsx`: SVG logo component
-   `public/`: Static assets (images, SVGs).

## Updating Guidelines

-   **Colors**: Update `src/app/globals.css` for CSS variables or `tailwind.config.ts` (if customized).
-   **Content**: Edit the respective `page.tsx` file in `src/app/`.
-   **Sidebar**: Update `src/components/Sidebar.tsx` to add new sections.

## Deployment

This project is configured to be deployed from the root directory. Ensure your Vercel project settings have the **Root Directory** set to empty (or `./`).

```bash
npm run build
npm start
```
