import React from 'react';
import './ContentMenuCardBook.css';

export default function ContentMenuCardBook({ title, author, year, text1, text2}) {
    return (
        <div class="content-section__card">
        <article class="block-book background-white">
          <div class="block-book__book block-book__book_type_science">
            <h3 class="block-book__title">{title}</h3>
            <p class="block-book__author">{author}</p>
            <p class="block-book__year">{year}</p>
          </div>
        </article>
        <article class="block-description background-white">
          <div class="block-description__text-wrapper">
            <p class="block-description__text">
              {text1}
            </p>
            <p class="block-description__text">
              {text2}
            </p>
          </div>
        </article>
      </div>
    )
}