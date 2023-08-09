import React from 'react';

// The instructions are really just HTML. Instead of loading it from an 
// external source, or sticking a bunch of HTML in the Instructions
// component, I am putting it here.

const instructions = (
    <div className="instructions">
      <p>
          This is a simple training game to learn <a 
          href="https://en.wikipedia.org/wiki/Hiragana">hiragana</a> and/or <a 
          href="https://en.wikipedia.org/wiki/Katakana">katakana</a>.
      </p>
      <p>
          It works a bit like flash cards: a random kana symbol is displayed,
          you type in the meaning and press Enter, and the game will tell you
          if it was correct or not. If your guess was not correct, the right
          answer will be displayed (for a short time). A simple scoreboard
          will be updated after each answer.
      </p>
      <p>
          <strong>Please note:</strong> There is <strong>no</strong> account or login,
          and scores are <strong>not</strong> saved for later. In fact, they
          are reset when you refresh the page. 
      </p>
    </div>
);

export { instructions };
