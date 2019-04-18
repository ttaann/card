import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <article class="card">
        
          <header class="card_thumb">    
            <img class="card_banner" src="images/image.jpg" />         
          </header>

          <div class="card_category">
            <span class="card_category_text"><a href="#" id="ctg">CATEGORY</a></span>
          </div>

          <div class="card_body">
            <div class="card_title"><a href="#">Lorem Ipsum Dolor sit Amet Consectetur Adipiscing Elit</a></div>
            
            <div class="card_subtitle">
              <span class="icon icon_date"></span>May 23rd, 2018
                <span class="icon icon_comment"></span><a href="#">24</a>
            </div>

            <p class="card_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </article>
      </div>
    );
  }
}

export default App;
