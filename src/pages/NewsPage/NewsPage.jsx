import { useState, useEffect } from 'react';
import { getNews } from 'services/apiService.js';
import { Container } from 'components/common/Container.styled.jsx';
import {
  Section,
  NewsH1,
  NewsForm,
  NewsInput,
  NewsListBoxUl,
  Line,
  NewsDiv,
  NewsH2,
  NewsListText,
  Div,
  DataP,
  A,
} from './NewsPage.styled.jsx';

export const NewsPage = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    getNews().then(data => data.data).then(results => {
    setNews(results.news);
  console.log(news);
      });
    },[news]);

  return (
    <main>
      <Section>
        <Container>
        
          <NewsH1>News</NewsH1>
          
            <NewsForm>
              <NewsInput type="text" name="" autocomplete="off" placeholder="Search"/>
              
          </NewsForm>
            
            {news && (<NewsListBoxUl>
            {news.map(item => (
                <li key={item._id}>
                <Line></Line>
                  <NewsDiv>
                    <NewsH2>{item.title}</NewsH2>
                    <NewsListText>{item.description}</NewsListText>
                  </NewsDiv>
                  <Div>
                    <DataP>{item.date}</DataP>
                    <A href="" target="_blank">Read more</A>
                  </Div>
              </li>
              ))};
            </NewsListBoxUl>)}

        </Container>
      </Section>
    </main>
  );
};

  