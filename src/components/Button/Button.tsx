import React from 'react';
import cls from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    styles?: React.CSSProperties;
    className?: string;
    randomColor?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button: React.FC<ButtonProps> = ({ children, styles, randomColor, onClick }) => {
    const getRandomColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (randomColor) {
            const newBackgroundColor = getRandomColor();
            const button = event.target as HTMLButtonElement;
            button.style.backgroundColor = newBackgroundColor;
        }
        onClick?.(event);
    };


    return (
        <button className={cls.Button} style={styles} onClick={handleClick}>
            {children}
        </button>
    );
};