# Nourish Your Body and Elevate Your Cooking with AEG
Discover the latest culinary inspiration and insights from AEG. Our focus is on nourishing your body with high-quality, locally sourced ingredients. Emphasizing mindful eating, we offer tips to align your diet with your body's natural needs. Explore exclusive content from AEG ambassador Mark Best, including a summer lunch menu designed for perfect warm-weather gatherings, a traditional Christmas Eve feast, and our "Taking Taste Further" cookbook, which provides expert guidance to maximize your cooking experience. Dive into these resources to enhance your culinary journey and make the most of every meal.

# 🧪 Interface Development Test

### 🎨 Design Assets

- **Invision Link**: The design was based on the layout provided in the following project link: [Invision Design](https://invis.io/N312IJ0C8GMK). Additionally, a responsive design was implemented to ensure compatibility across different screen sizes.

- **Design Files**: The design files can be accessed via the same Invision link: [Invision Design Files](https://invis.io/N312IJ0C8GMK).

- **Image Assets**: Each asset included two image versions—a larger image and a smaller one. To optimize for SEO, a custom component was developed to handle image rendering. This component will be discussed in more detail later in this document.

- **Fonts**: The project utilized the following fonts:
  - **Open Sans**: Used for body text.
  - **Open Sans Condensed**: Applied to headings.
  - **Open Sans SemiCondensed**: Applied to subtitles.

- **Color Palette**: 
  - **Background**: Black.
  - **Text**: White.
  - **General**: A grayscale color scheme was used throughout the design. The grayscale palette was provided by the Tailwind CSS framework, which will be discussed further in this document.

- **UI Components**: Shadcn/ui was used for the UI components, which saved development time by providing pre-built components. This library is based on Tailwind CSS and does not require installing all components, unlike other libraries such as Chakra UI or Material-UI.

- **Spacing and Layout Guidelines**: 
  - **Headings**: 2 rem spacing between titles.
  - **Images**: 1 rem spacing between images.
  - **Screen Padding**:
  
  | Screen Size | X-Axis Padding | Y-Axis Padding |
  |-------------|----------------|----------------|
  | xl          | 8 rem          | 11 rem         |
  | lg          | 5 rem          | 2.5 rem        |
  | sm          | 1 rem          | 0.5 rem        |



### 🚀 Project Setup

In this section, we outline the basic setup requirements. Since this project is based on Vite, most of the original Vite configuration remains unchanged. For more detailed documentation, please refer to the official [Vite documentation](https://vitejs.dev/guide/).

However, the following prerequisites are required to run the project:

#### Prerequisites
- **Node.js**: Version 14.18+ or 16+ is required.
- **npm**: Version 6.14+ or **yarn**: Version 1.22+.
- **Git**: To clone the repository and manage version control.

#### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/mattseidel/orchard-fed.git
   cd orchard-fed
   ```
2. Install the dependencies:
```bash
npm install
# or
yarn install
```
To start the development server, run the following command:
```bash
npm run dev
# or
yarn dev
```

Once the server is running, open your browser and navigate to http://localhost:5173 to view the project.

### Linting and Formatting
Vite projects often include default configurations for linting and formatting. You can run the following commands if applicable:

```bash
npm run lint
# or
yarn lint

npm run format
# or
yarn format
```

## 🛠️ Technologies Used

- **Frontend Framework**: 
  - **React**: The project is built using React, a popular JavaScript library for building user interfaces.
  - **TypeScript**: TypeScript is used to add static types to the code, improving code quality and maintainability.

- **Build Tool**: 
  - **Vite**: Vite was chosen as the build tool for its fast development server and efficient bundling for production.

- **CSS Preprocessor**: 
  - **Tailwind CSS**: Tailwind CSS is used as the CSS framework, allowing for rapid styling with utility-first classes.

- **UI Components**: 
  - **Shadcn/ui**: Shadcn/ui was utilized for pre-built UI components, saving development time and ensuring design consistency. This library integrates seamlessly with Tailwind CSS.

- **Linting and Formatting**: 
  - **ESLint**: ESLint is configured to maintain code quality by enforcing coding standards and catching potential errors early.

- **Version Control**: 
  - **Git**: Git was used for version control, allowing for effective collaboration and tracking of changes throughout the development process.


## 🎯 Component Implementation

### Interactivity and Animation
Due to the minimalist nature of the website, animations were kept subtle and minimal. There are exactly three animations implemented:
1. **Hero Section Images**: When hovering over the images in the hero section, they slightly enlarge. This effect is applied only from the `xl` screen size and above, as it was decided not to include this interaction on mobile devices.
2. **Feature Section**: A small hover animation is applied when the mouse is over the feature section items.
3. **Modal Animation**: The modal also has a slight animation when it opens, which is provided by the Shadcn/ui library.

### Anchor Click Handling
The anchor click handling was added to an action button within the modal. A custom component was created to manage this behavior, which will be explained later in the document.

### Responsiveness
Since Tailwind CSS follows a mobile-first philosophy, the responsive design was structured accordingly. The three breakpoints used were `sm`, `lg`, and `xl`:
- **sm**: Minimum width of 640px
- **lg**: Minimum width of 1024px
- **xl**: Minimum width of 1280px

The component most affected by these breakpoints was the hero section:
- **lg**: Images are displayed on the left side.
- **sm** and **xl**: Images are displayed second in a column layout.
- Additionally, the first image, depicting a father playing with his child, was given a 4/5 aspect ratio.

For the **feature section**, a simple grid layout was implemented:
- **xl**: The layout has 3 columns.
- **lg**: The layout has 2 columns.
- **sm**: The layout has 1 column.

### Image Modal
To implement the image modal, the Shadcn/ui library was used, specifically the [Dialog component](https://ui.shadcn.com/docs/components/dialog).


## 📐 Project Structure

#### General Structure

- **`app/`**: 
  - Appears to be an additional folder that currently doesn't contain any files, so its purpose is unclear. It might be reserved for future configurations or application-specific files.

- **`node_modules/`**: 
  - Automatically generated by npm or yarn, this folder contains all the project's dependencies. This folder should not be manually altered.

- **`public/`**: 
  - Typically contains static files that are not processed by the build tool, such as `index.html`, static images, and other resources that are served directly.

- **`src/`**:
  - **`assets/`**:
    - Contains resources like images, fonts, and other multimedia or style files used throughout the project.
  
  - **`components/`**: 
    - The components directory is divided into four subdirectories: `common`, `features`, `hero`, and `ui`.
    
    - **`hero/`**:
      - This corresponds to the first element visible in the user interface.
      - **Files**:
        - **`Hero.tsx`**: The container component for the hero section.
        - **`Body.tsx`**: The component responsible for rendering the text within the hero section.
        - **`Images.tsx`**: The component that handles the display of images in the hero section.
        - **`ImagesList.tsx`**: This file contains the images data and simulates an API call to fetch them.
      
    - **`features/`**:
      - This section comprises four files:
        - **`Card.tsx`**: Represents individual cards within the feature section.
        - **`Container.tsx`**: The container component that holds and organizes the feature section.
        - **`FeaturesList.tsx`**: Similar to `ImagesList`, this file contains the feature data and simulates an API call.
        - **`Modals.tsx`**: This is the modal that pops up when the "More Information" button is clicked. For more details about this component, refer to the [Shadcn/ui Dialog Component](https://ui.shadcn.com/docs/components/dialog).

    - **`common/`**:
      - This directory contains components that are shared across the application and can be reused in various parts. Given their reusable nature, these components typically have more extensive documentation.
      
      - **Link Component Documentation**:
        - **Description**:
          - The `Link` component is a custom React component that renders an HTML `<a>` element with predefined click behavior. This component automatically omits the `onClick` and `href` attributes from the properties passed to it and provides a default `onClick` handler that prevents the default browser action and logs a message to the console.
        
        - **Usage**:
          - This component can be used wherever a custom link element with specific click behavior is needed, overriding the default link behavior.
        
        - **Props**:
          - `rest`: `Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick' | 'href'>`
          - The remaining props are spread onto the underlying `<a>` element. These props are standard attributes for an anchor element, excluding `onClick` and `href`.
        
        - **Example**:
          ```jsx
          import { Link } from './Link';

          const App = () => (
            <div>
              <Link className="custom-class">Click Me</Link>
            </div>
          );
          ```
        
        - **Returns**:
          - `JSX.Element`: The component returns a JSX element representing an `<a>` element with the custom `onClick` behavior.
        
        - **Default Behavior**:
          - When the `Link` component is clicked, it prevents the default action (such as navigation) and logs "Link clicked" to the console.
        
        - **Notes**:
          - The `Link` component is useful for implementing custom link behavior across your application without needing to handle the `onClick` and `href` attributes directly.
          - If you need to customize the `onClick` behavior, you can modify the internal `onClick` handler.

      - **ProgressiveImage Component Documentation**:
        - **Description**:
          - The `ProgressiveImage` component is a React functional component designed to enhance the user experience by progressively loading images. It initially displays a low-resolution fallback image (if provided) and then switches to the high-resolution image once it has fully loaded. Additionally, the component can apply an optional hover effect to the image.
        
        - **Props**:
          - `fallbackSrc`: `string` (optional)
            - The URL of the fallback image. This is typically a low-resolution version of the image that will be displayed while the high-resolution image is loading. On mobile devices, this image will always be displayed.
          - `hasHover`: `boolean` (optional, default: `false`)
            - Indicates if the image should have a hover effect. When `true`, a scale-up effect with a shadow is applied when the image is hovered over.
          - `className`: `string` (optional)
            - Additional class names to be applied to the `<img>` element for styling purposes.
          - `rest`: `React.ImgHTMLAttributes<HTMLImageElement>`
            - Other standard attributes passed to the `<img>` element, such as `src`, `alt`, `width`, `height`, etc.
        
        - **Example Usage**:
          ```jsx
          import ProgressiveImage from './ProgressiveImage';

          const App = () => (
            <div>
              <ProgressiveImage
                fallbackSrc="low-res-image.jpg"
                src="high-res-image.jpg"
                alt="A beautiful scenery"
                hasHover={true}
                className="custom-class"
              />
            </div>
          );
          ```
        
        - **Behavior**:
          - **Progressive Image Loading**:
            - The component starts by displaying the `fallbackSrc` image (if provided) and switches to the high-resolution image once it has fully loaded.
          - **Hover Effect**:
            - If `hasHover` is set to `true`, the image will have a smooth scaling effect and a shadow applied on hover.
        
        - **Implementation Details**:
          - **State Management**:
            - The `highResSrc` state holds the current image source, starting with the `fallbackSrc` (if provided) and updating to the high-resolution image once it has loaded.
          - **useEffect Hook**:
            - The component uses the `useEffect` hook to listen for changes in the `fallbackSrc` and `src` props, loading the high-resolution image in the background and updating the displayed image once it's ready.
        
        - **Notes**:
          - This component is particularly useful for improving the performance and user experience on pages with large images, as it provides a smooth transition from a low-resolution placeholder to the full-quality image.
          - The hover effect can be customized or disabled based on the `hasHover` prop.
        
        - **Returns**:
          - `JSX.Element`: The component returns a `<picture>` element containing the image with the appropriate source, ensuring responsive and progressive loading behavior.

  - **`ui/`**:
    - This directory contains UI-specific components that are likely used across different sections of the application. These components are typically tailored to the application's design and functionality.
  
  - **`App.tsx`**:
    - The main component of the React application. This file is usually the entry point for the UI components and contains the main structure of the app.

  - **`index.css`**:
    - Global CSS file for the project, where global styles can be applied or other CSS files can be imported.

  - **`main.tsx`**:
    - The main file that initializes the React application. It is typically used to render the `App` component into the DOM.

  - **`vite-env.d.ts`**:
    - TypeScript declaration file specific to Vite. It is used to enhance TypeScript support in projects configured with Vite.

- **`.gitignore`**: 
  - Specifies which files and folders should be ignored by Git, preventing them from being versioned in the repository.

- **`components.json`**:
  - This file may be used to define configurations or specific data related to the project's components.

- **`eslint.config.js`**:
  - ESLint configuration file that sets the rules and configurations for linting the project’s code.

- **`index.html`**:
  - The main HTML file serving as the base template for the application. This file usually loads `main.tsx` to initialize the React app.

- **`package.json`**:
  - Contains project information, including scripts, dependencies, and metadata.

- **`pnpm-lock.yaml`**:
  - Lock file generated by pnpm (a package manager similar to npm and yarn). This file ensures that dependency versions are consistent across all installations of the project.

- **`postcss.config.js`**:
  - Configuration for PostCSS, a CSS processor that allows for CSS transformation with plugins. This might include settings for tools like Tailwind CSS.

- **`README.md`**:
  - Project documentation file that typically includes information on how to install, configure, and use the application.



## 📝 Final Considerations

- **Project Limitations**: 
  - A specific design for responsive layouts was not provided, so the responsive implementation may differ from the original design intent. This means that while the layout is responsive, certain design elements might not perfectly align with the original vision, particularly on different screen sizes.
  - Additionally, due to the absence of a real API, a simulated API was created for this project. However, the project is ready to handle real API calls. Currently, the images in the hero section and feature component can be modified dynamically (except for the hero text, which is static—a point that could be improved in the future).

- **Future Improvements**: 
  - Implement comprehensive testing, particularly focusing on the common components, as they are likely to be reused throughout the application.
  - Make the hero section text dynamic to allow for greater flexibility in content updates.

- **Testing Recommendations**: 
  - It is recommended to use **Vitest** for testing, with a particular focus on the common components. These components are reused across the application, so ensuring their robustness will help prevent potential issues.

- **Known Issues**: 
  - The responsive design is not fully optimized; improvements should be made, particularly in handling images. 
  - Since the images are dynamic, issues may arise when images of different sizes are used. The current implementation assumes that the first image is the largest. If a smaller image is used in the first position, it may cause layout issues. Additionally, if more than three images are provided, it may also cause display problems.
