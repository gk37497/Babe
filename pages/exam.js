import React, { useState, useEffect } from 'react';
import { third } from '../quiz/third';
import { second } from '../quiz/second';
import { first } from '../quiz/first';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import Timer from '../components/timer';

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

const quizes = [...first, ...second, ...third];

const Exam = () => {
     const [start, setStart] = useState(false);
     const shuffled = quizes.sort(() => 0.5 - Math.random());
     const [quistions, setQuistions] = useState(shuffled.slice(0, 5));
     const [time, setTime] = useState(5);
     const [reset, setReset] = useState(false);

     const startOrPause = () => {
          setStart((e) => !e);
          setReset(false);
     };

     const resetAll = () => {
          setTime(5);
          setReset(true);
          setQuistions(shuffled.slice(0, 5));
          setStart(false);
     };
     const timer = () => (
          <Timer initialMinute={time} start={start} reset={reset} />
     );
     return (
          <Layout>
               <Head>
                    <title>Quiz</title>
               </Head>
               <h2 className={utilStyles.headingXl}>Шалгалт</h2>
               <div className={utilStyles.timer}>
                    <button
                         onClick={() => startOrPause()}
                         className={utilStyles.itemBtn}>
                         {start ? 'PAUSE' : 'START'}
                    </button>
                    {timer()}
                    <button
                         onClick={() => resetAll()}
                         className={utilStyles.itemBtn}>
                         RESET
                    </button>
               </div>
               <article>
                    <ul className={utilStyles.list}>
                         {quistions.map((el, i) => (
                              <Item data={el} key={i} />
                         ))}
                    </ul>
               </article>
          </Layout>
     );
};

export default Exam;
