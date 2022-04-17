import React, { useState } from 'react';
import { third } from '../quiz/third';
import { second } from '../quiz/second';
import { first } from '../quiz/first';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';

const Item = ({ data }) => {
     const [showAnswer, setShowAnswer] = useState(true);
     return (
          <li className={utilStyles.listItem}>
               <div className={utilStyles.listItemHeader}>
                    <a>{data.name}</a>
                    <button
                         className={utilStyles.itemBtn}
                         onClick={() => setShowAnswer((e) => !e)}>
                         Харах
                    </button>
               </div>
               <br />
               <small className={utilStyles.lightText} hidden={showAnswer}>
                    {data.answer}
               </small>
          </li>
     );
};

const Quiz = () => {
     return (
          <Layout>
               <Head>
                    <title>Quiz</title>
               </Head>
               <article>
                    <h2 className={utilStyles.headingXl}>Бүх асуултууд</h2>
                    <ul className={utilStyles.list}>
                         {first.map((el, i) => (
                              <Item data={el} key={i} />
                         ))}
                         {second.map((el, i) => (
                              <Item data={el} key={i} />
                         ))}
                         {third.map((el, i) => (
                              <Item data={el} key={i} />
                         ))}
                    </ul>
               </article>
          </Layout>
     );
};

export default Quiz;
