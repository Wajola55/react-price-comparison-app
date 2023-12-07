import React from 'react';
import './Intro.css';

const Intro = () => (
    <div className="intro">
        <div className="gif-container">
            <img src="/img/huge.gif" alt="Huge GIF" />
        </div>
        <p>
            Nasza porównywarka cen to narzędzie, 
            które pomoże Ci znaleźć najatrakcyjniejsze oferty na rynku. Wprowadź 
            nazwę produktu lub usługi, którą chcesz porównać, a my pokażemy Ci dostępne
            opcje od różnych dostawców. Dzięki nam zaoszczędzisz czas i pieniądze, znajdując
            najlepsze ceny w jednym miejscu. Nie trać czasu na przeszukiwanie wielu stron 
            internetowych - nasza porównywarka zrobi to za Ciebie!
        </p>
    </div>
);

export default Intro;

