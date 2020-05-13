import React from 'react';
import articles from './article-content';

import ArticlesList from '../components/ArticlesList';
import articleContent from './article-content';


import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

const ArticlesListPage = () =>(
     //<React.Fragment>
     <>
     <h1>
        Articles
    </h1>
    <ArticlesList articles={articleContent}/>
    
      </>
     //</React.Fragment>
    
);

export default ArticlesListPage;    