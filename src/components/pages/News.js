import React from 'react';
import NewsCard from "../NewsCard";
import { InfoConsumer } from "../context";

const News = () => {
    return (
        <InfoConsumer>
            {value => {
                return value.news.map(item => {
                    return <NewsCard key={item.id} item={item} />;
                });
            }}
        </InfoConsumer>
    )
}

export default News
