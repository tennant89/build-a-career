
// We're exporting from './Button' directly to ensure compatibility
import * as ButtonExports from './Button';

// Re-export everything
export const Button = ButtonExports.Button;
export const buttonVariants = ButtonExports.buttonVariants;
export type ButtonProps = ButtonExports.ButtonProps;
