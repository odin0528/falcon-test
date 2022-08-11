import {useState} from 'react'
import moment from 'moment'

function News({articles, categoryTitle}) {
  /* const now = moment()
  const getDiffTime = (publishedAt) => {
    return now.diff(moment(publishedAt), 'minute')
  } */
  return (
    <div className='news-block'>
      <h2>{categoryTitle}</h2>
      <div className="news-list">
        {articles.length > 0 && articles.map((news, index) => (
          <div key={index} className='newsItem'>
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className='photo' style={{'backgroundImage':`url(${news.urlToImage})`}}></div>
              <div className='title'>{news.title}</div>
              <span>{news.author}．{news.publishedAt}</span>
            </a>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default News;