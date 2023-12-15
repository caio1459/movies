import style from './container.module.css';
import React, { ReactNode } from 'react';

// Define a interface `ContainerProps` para tipar as propriedades do componente `Container`.
interface IContainerProps {
    // A propriedade `children` aceita qualquer tipo de conteúdo React.
    children: ReactNode;
}

// Declara o componente funcional `Container` com o tipo React.FC e as propriedades tipadas.
export const Container: React.FC<IContainerProps> = ({ children }) => {
    return (
        <section className={style.container}>
            {children}
        </section>
    );
};
