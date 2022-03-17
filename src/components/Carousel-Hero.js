import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Carousel } from "react-bootstrap";

import FullWidthImage from "../components/FullWidthImage";
import "bootstrap/dist/css/bootstrap.min.css";

import slide01 from "/static/img/perro-slide-1.jpg"
import slide02 from "/static/img/perro-slide-2.jpg"
import slide03 from "/static/img/perro-slide-3.jpg"
import slide04 from "/static/img/perro-slide-4.jpg"
import slide05 from "/static/img/perro-slide-5.jpeg"

<Carousel>

<Carousel.Item>
<img src={slide01} alt="primer slide"/>
    </Carousel.Item>

<Carousel.Item>
    <img src={slide02} alt="segundo slide"/>
</Carousel.Item>

<Carousel.Item>
    <img src={slide03} alt="tercer slide"/>
</Carousel.Item>

<Carousel.Item>
    <img src={slide04}/>
</Carousel.Item>

<Carousel.Item>
    <img src={slide05}/>
</Carousel.Item>

</Carousel>
