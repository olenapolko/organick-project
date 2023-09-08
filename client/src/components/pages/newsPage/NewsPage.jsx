import "./NewsPage.scss";
import {Banner} from "../../banner/Banner";
import React, { useState, useEffect } from "react";
import { NewsCard } from "../../newsCard/NewsCard";
import { Subscribe } from "../../subscribe/Subscribe";
import { getAllNews } from "../../../fetches/fetches";

import patterns from '../../../assets/news/patterns.svg';
import bgLeaves from '../../../assets/news/bg-leaves.png';

export function NewsPage(){
    const backgroundUrls = [patterns, bgLeaves];
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await getAllNews();
          setNewsData(response.data);
        } catch (error) {
          console.error("Error fetching news:", error);
        }
      }
  
      fetchData();
    }, []);
  
    return (
      <>
          <Banner backgroundUrls={backgroundUrls} title='Recent News'/>
          <section className="news" id="news">
              <div className="news__container">
                  <div className="news__content-full">
                      {newsData.map(news => (
                        <NewsCard
                          key={news.id}
                          title={news.title}
                          author={news.author}
                          text={news.text}
                          imageName={news.imageName}
                          date={news.date}
                        />
                      ))}
                  </div>
              </div>
          </section>
          <Subscribe/>
      </>
    );
  }