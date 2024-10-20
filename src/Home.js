import React from 'react';
import TodoContainer from './components/TodoContainer';
import './Home.css';

const Home = () => {
    return (
        <div>
            <h1>Ласкаво просимо до Todo App!</h1>
            <TodoContainer /> {/* Додаємо TodoContainer */}
        </div>
    );
};

export default Home;
