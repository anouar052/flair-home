# Contact Page Components

This directory contains the modular components for the Contact page, following React best practices for component organization and separation of concerns.

## Component Structure

### Main Components

- **`ContactHero.tsx`** - Hero section with background image and call-to-action
- **`ContactInfo.tsx`** - Contact information cards (showroom, phone, hours)
- **`ContactForm.tsx`** - Contact form with validation and submission logic
- **`OurOffices.tsx`** - Office locations with images and details
- **`FAQ.tsx`** - Frequently asked questions with expandable answers
- **`ContactMap.tsx`** - Map section with location overlay

### Utilities

- **`useContactAnimations.ts`** - Custom hook for GSAP animations
- **`index.ts`** - Barrel export for clean imports

## Best Practices Implemented

### 1. Single Responsibility Principle
Each component has one clear purpose:
- `ContactHero` handles the hero section
- `ContactForm` manages form state and validation
- `FAQ` handles expandable question/answer logic

### 2. Separation of Concerns
- **UI Components**: Focus on rendering and styling
- **Logic**: Form validation, state management
- **Animations**: Extracted into custom hook
- **Data**: Constants defined within relevant components

### 3. Reusability
- Components are self-contained and can be reused
- Props are properly typed with TypeScript interfaces
- Theme integration is consistent across all components

### 4. Clean Imports/Exports
- Barrel exports via `index.ts` for cleaner imports
- Named exports for better tree-shaking
- Proper TypeScript typing throughout

### 5. Performance Optimization
- Custom hook for animations prevents re-initialization
- GSAP context properly managed with cleanup
- Components use proper React patterns (useState, useEffect)

## Usage

```tsx
import {
  ContactHero,
  ContactInfo,
  ContactForm,
  OurOffices,
  FAQ,
  ContactMap,
  useContactAnimations
} from "./contact";

// In your main component
export default function ContactPage() {
  useContactAnimations(); // Initialize animations
  
  return (
    <div>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <OurOffices />
      <FAQ />
      <ContactMap />
    </div>
  );
}
```

## Benefits

1. **Maintainability**: Each component is focused and easier to maintain
2. **Testability**: Individual components can be tested in isolation
3. **Reusability**: Components can be reused in other parts of the app
4. **Performance**: Better code splitting and tree-shaking
5. **Developer Experience**: Cleaner imports and better organization
6. **Scalability**: Easy to add new features or modify existing ones

## File Size Reduction

The original `ContactPage.tsx` was **743 lines**. After refactoring:
- Main component: **33 lines** (95% reduction)
- Individual components: ~50-150 lines each
- Total: Better organized and more maintainable

