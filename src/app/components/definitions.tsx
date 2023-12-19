// types.d.ts (or any TypeScript file where you define your types)
import { ReactElement } from 'react';

export type RedButtonProps = {
    imageUrl: string;
    onClick: () => void; // Assuming onClick is a function with no parameters and no return value
};

export type DarkModeToggleProps = {
    // Define props for DarkModeToggle if needed
};

export type SoundDropdownProps = {
    selectedSound: string;
    onChange: (selected: string) => void; // Assuming onChange is a function with one parameter and no return value
};

export type RedButtonComponent = (props: RedButtonProps) => ReactElement;
export type DarkModeToggleComponent = (props: DarkModeToggleProps) => ReactElement;
export type SoundDropdownComponent = (props: SoundDropdownProps) => ReactElement;
