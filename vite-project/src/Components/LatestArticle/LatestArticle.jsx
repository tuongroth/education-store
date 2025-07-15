import React from 'react';
import './LatestArticle.css';

import { lettestArticleData } from '../../Data/Data';
import { Link } from 'react-router-dom';
import { ImFacebook } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';
import { RiTwitterXLine } from 'react-icons/ri';
import TitleTypeOne from '../../Ui/TitleTypeOne/TitleTypeOne';
import { BsArrowRight } from 'react-icons/bs';

export default function LatestArticle() {
  return (
    <section className="latestArticle">
      <div className="container latest-container">
        <TitleTypeOne Title="Latest Articles" TitleTop="Read our articles" />

        <div className="latest-article-content">
          {lettestArticleData.map(
            ({ titLink, title, date, fbLink, instLink, twitaLink, image, inspiration }, index) => (
              <article className="latest-article" key={index}>
                <div className="article-image">
                  <img src={image} alt={`Article: ${title}`} />
                </div>

                <div className="article-info">
                  <h5>{date}</h5>
                  <Link to={titLink}>
                    <h3>{title}</h3>
                  </Link>
                </div>

                <div className="latest-article-social">
                  
                  <p>{inspiration}</p>
                  <div className="article-social">
                    <a href={fbLink} target="_blank" rel="noopener noreferrer">
                      <ImFacebook />
                    </a>
                    <a href={instLink} target="_blank" rel="noopener noreferrer">
                      <FiInstagram />
                    </a>
                    <a href={twitaLink} target="_blank" rel="noopener noreferrer">
                      <RiTwitterXLine />
                    </a>
                  </div>
                </div>
              </article>
            )
          )}
        </div>

        <Link to="/articles" className="btn btn-border">
          Read all articles <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}
