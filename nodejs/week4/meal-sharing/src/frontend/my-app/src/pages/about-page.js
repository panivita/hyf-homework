import React from "react";
import { Link } from "react-router-dom";

import Cupcake from "./cupcake.png";
import Cakes from "./cakes.png";
import "./about-page.css";

export const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About me</h1>
      <div className="cupcake-with-line">
        <div className="line-1"></div>
        <img src={Cupcake} alt="cupcake image" className="cupcake-img" />
        <div className="line-2"></div>
      </div>
      <div className="description-about">
        <p>
          Hi there and welcome to Homemade cakes, a page where you’ll find
          beautiful European Cakes and Desserts as well as other savory dishes
          my Ukrainian family enjoys.
        </p>
        <p>
          I’ve been cooking since 10 and consistently for the past 12 years.
          Creating things from scratch is my passion, be it an elaborate dessert
          that requires time and patience or a simple one-pan dish.
        </p>
        <p>
          Growing up in a family where everyone is an amazing cook is a great
          place to hone your skills and acquire a love for all things food. That
          and my natural love for cooking and baking made me start early. I was
          eager to do something ‘grown up’ and my mom was willing to teach me,
          so by the time I was 14 I was making cakes on my own.
        </p>
        <p>
          5 years ago I decided to make my hobby into my business and I am still
          enjoying every minute. My speciality is a wide range of delicious
          cupcakes flavour combinations, European cakes and desserts.
        </p>
        <p>
          Cakes help me trigger happy memories of special days, let me help you
          make your own happy memories by me creating the perfect cake for you.
          I custom designed bespoke cakes for any occasion large or small. From
          birthday cakes, christening, baby showers to just something simple but
          stunning for a special family tea, cupcakes, and cookies all home
          made.
        </p>
        <p>
          Every cake I create leaves my kitchen with a little bit of love given
          by me. Quality of the cakes and bakes is a top priority, I use locally
          sourced, free range and fair trade produce where I can, to create
          delicious hand crafted cakes.
        </p>
      </div>
    </div>
  );
};
