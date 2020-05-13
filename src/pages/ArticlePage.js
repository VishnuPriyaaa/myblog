import React from 'react';
import articles from './article-content';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import ArticlesList from '../components/ArticlesList';
import ArticlesListPage from './ArticlesListPage';
import NotFoundPage from './NotFoundPage';

const ArticlePage = ({match}) =>{
    
    const name = match.params.name;
    const article = articles.find(articles => articles.name === name);
    if(!article) return <h1><NotFoundPage/></h1>
    const otherArticles = articles.filter(article => article.name !== name);
    return(
     //<React.Fragment>
     <>
     <h1>{article.title}</h1>
     {article.content.map((paragraph,key) =>(
         <p key={key}>{paragraph}</p>
     ))}
     <h3>OtherArticles</h3>
     <ArticlesList articles={otherArticles}/>
      </>
     //</React.Fragment>
    )
    
    }

export default ArticlePage;    