import React from 'react';
import cls from './Page.module.css'

interface PageProps {
    children: React.ReactNode;
    className?: string;

}

export const Page: React.FC<PageProps> = ({ children }) => {

    return (
        <section className={cls.Page}>
            {children}
        </section>
    );
};