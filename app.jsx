import React from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Импорт CSS Bootstrap
import 'bootstrap'; // Импорт JS Bootstrap

import Home from './src/Home';
import About from './src/About';



const MasterPage = ({ data }) => {
    const renderComponent = () => {

        if (document.getElementById('home')) {
            return <Home />;
        }

        if (document.getElementById('about')) {
            return <About />;
        }

    };

    return (
        <>
            <nav>
                <a href='/index.php'>Главная</a>&nbsp;&nbsp;&nbsp;
                <a href='/about.php'>О нас</a>
            </nav>
            {renderComponent()}
        </>
    );
};

// Используем один корневой элемент
const rootElement = document.getElementById('app');
const root = createRoot(rootElement);
root.render(<MasterPage  />); // Передайте извлечённое значение dataValue
