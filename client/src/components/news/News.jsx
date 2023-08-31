import React, { useState, useEffect } from "react";
import "./News.scss";
import { Button } from "../button/Button";
import { NewsCard } from "../newsCard/NewsCard";
import { getAllNews } from "../../fetches/fetches";

export function News() {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    async function fetchNewsData() {
      try {
        const response = await getAllNews();
        setNewsData(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }

    fetchNewsData();
  }, []);

  return (
    <section className="news" id="news">
      <div className="news__container">
        <div className="news__titles">
          <div className="news__titles-wrapper">
            <p className="news__subtitle">News</p>
            <h2 className="news__title">
              Discover weekly content about organic food & more
            </h2>
          </div>
          <Button text="More News" icon className="white-btn btn-border" />
        </div>
        <div className="news__content">
          {newsData.slice(0, 2).map(({ id, title, author, text, imageName, date }) => (
            <NewsCard
              key={id}
              title={title}
              author={author}
              text={text}
              imageName={imageName}
              date={date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}