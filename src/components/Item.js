import React from 'react';

const Item = ({item}) => {
    return (
        <article className="text-align-left article">
            <h2>{item.question}</h2>
            <section className="article-section">
                <p className="article-text">{item.answer}</p>
            </section>
        </article>
    );
};

export default Item;
