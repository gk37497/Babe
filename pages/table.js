import React, { useState } from 'react';
import utilStyles from '../styles/utils.module.css';
import Layout, { siteTitle } from '../components/layout';
import Head from 'next/head';
import { problems } from '../quiz/problems';

const Item = ({ data, i }) => {
     const [showAnswer, setShowAnswer] = useState(true);
     let x = data.a * data.c;
     let y = data.b * data.d;
     let z = x * data.e;
     let w = y * data.f;

     return (
          <li className={utilStyles.listItem}>
               <div className={utilStyles.listItemHeader}>
                    <a>{`Бодлого ${i + 1}`}</a>
                    <button
                         className={utilStyles.itemBtn}
                         onClick={() => setShowAnswer((e) => !e)}>
                         {showAnswer ? 'Бодох' : 'Хаах'}
                    </button>
               </div>
               <br />
               <section>
                    <small className={utilStyles.lightText} hidden={showAnswer}>
                         <ul>
                              <li className={utilStyles.listItem}>
                                   Нийт хүлээн авсан жор :
                                   <strong>{` ${
                                        data.a / 1000
                                   }.0 /мянга/`}</strong>
                              </li>
                              <li className={utilStyles.listItem}>
                                   Нийт жорийн борлуулалт :
                                   <strong>{` ${
                                        data.b / 1000
                                   }.0 /мянга/`}</strong>
                              </li>
                              <li className={utilStyles.listItem}>
                                   Амбулторын жорийн тоо нь нийт жорийн
                                   <strong>{` ${data.c * 100}% -ийг `}</strong>,
                                   үнийн дүнгийн{' '}
                                   <strong>{` ${data.d * 100}% -ийг `}</strong>
                                   эзэлнэ
                              </li>
                              <li className={utilStyles.listItem}>
                                   Бэлэн эмийн тоо нь амбулторын жорийн тооны{' '}
                                   <strong>{` ${data.e * 100}% -ийг `}</strong>
                                   үнийн дүнгийн{' '}
                                   <strong>{` ${data.f * 100}% -ийг `}</strong>
                                   эзэлнэ
                              </li>
                         </ul>
                         <h3>Бодолт</h3>
                         <ul>
                              <li className={utilStyles.listItem}>
                                   Амбулторын жорийн тоо =
                                   <strong>
                                        {` (${data.a / 1000}.0 * ${
                                             data.c * 100
                                        }% )/ 100% = ${
                                             (data.a * data.c) / 1000
                                        } .0`}{' '}
                                        мянга
                                   </strong>
                              </li>
                              <li className={utilStyles.listItem}>
                                   Амбулторын жорийн үнийн дүн ={' '}
                                   <strong>
                                        {`(${data.b / 1000}.0 * ${
                                             data.d * 100
                                        }%) / 100% `}
                                        {` = ${
                                             (data.b * data.d * 100) /
                                             100 /
                                             1000
                                        }.0 мянга`}
                                   </strong>
                              </li>
                              <li className={utilStyles.listItem}>
                                   Бэлэн эмийн тоо ={' '}
                                   <strong>{`
                             (${x / 1000}.0 * ${data.e * 100}% ) / 100% = 
                                   ${(x * data.e) / 1000} мянга`}</strong>
                              </li>
                              <li className={utilStyles.listItem}>
                                   Бэлэн эмийн үнийн дүн ={' '}
                                   <strong>{`
                             (${y / 1000}.0 * ${data.f * 100}% ) / 100% = 
                                   ${(y * data.f) / 1000} мянга`}</strong>
                              </li>
                              <li className={utilStyles.listItem}>
                                   Найруулсан эмийн тоо ={' '}
                                   <strong>{`${x / 1000} - ${z / 1000} = ${
                                        (x - z) / 1000
                                   } мянга`}</strong>
                              </li>
                              <li className={utilStyles.listItem}>
                                   Найруулсан эмийн үнийн дүн ={' '}
                                   <strong>{`${y / 1000} - ${w / 1000} = 
                                   ${(y - w) / 1000} мянга`}</strong>
                              </li>
                              <li className={utilStyles.listItem}>
                                   Стац эмийн тоо ={' '}
                                   <strong>{`${data.a / 1000} - ${x / 1000} = 
                                   ${(data.a - x) / 1000} мянга`}</strong>
                              </li>
                              <li className={utilStyles.listItem}>
                                   Стац үнийн дүн ={' '}
                                   <strong>{`${data.b / 1000} - ${y / 1000} = 
                                   ${(data.b - y) / 1000} мянга`}</strong>
                              </li>
                         </ul>
                    </small>
               </section>
          </li>
     );
};

const Table = () => {
     let a = `Нийт хүлээн авсан жор`;
     let b = `Нийт жорийн борлуулалт`;
     let c = `Нийт жороос амбулторын жорийн эзлэх хувь`;
     let d = `Нийт үнийн дүнгээс амбулторын үнийн дүнгийн эзлэх хувь`;
     let e = `Нийт амбулторын жороос бэлэн эмийн эзлэх хувь`;
     let f = `Нийт амбулторын үнийн дүнгээс бэлэн эмийн үнийн дүнгийн эзлэх хувь`;

     return (
          <Layout>
               <Head>
                    <title>Quiz</title>
               </Head>
               <section>
                    <h3>Томъёо</h3>
                    <ul>
                         <li className={utilStyles.listItem}>{a}</li>
                         <li className={utilStyles.listItem}>{b}</li>
                         <li className={utilStyles.listItem}>{c}</li>
                         <li className={utilStyles.listItem}>{d}</li>
                         <li className={utilStyles.listItem}>{e}</li>
                         <li className={utilStyles.listItem}>{f}</li>
                    </ul>
                    <h4>Бодолт</h4>
                    <small>
                         <li className={utilStyles.listItem}>
                              <strong> Амбулторын жорийн тоо = </strong>
                              {`${a} * ${c} / 100`}
                         </li>
                         <li className={utilStyles.listItem}>
                              <strong>Амбулторын жорийн үнийн дүн = </strong>
                              {`${b} * ${d} / 100`}
                         </li>
                         <ol>
                              <li className={utilStyles.listItem}>
                                   <strong>Бэлэн эмийн тоо = </strong>
                                   {`Амбулторын жорийн тоо * ${e} / 100`}
                              </li>
                              <li className={utilStyles.listItem}>
                                   <strong>Бэлэн эмийн үнийн дүн = </strong>
                                   {`Амбулторын жорийн үнийн дүн * ${e} / 100`}
                              </li>
                              <li className={utilStyles.listItem}>
                                   <strong>Найруулсан эмийн тоо = </strong>
                                   Амбулторын жорийн тоо <strong>-</strong>{' '}
                                   Бэлэн эмийн тоо
                              </li>
                              <li className={utilStyles.listItem}>
                                   <strong>
                                        Найруулсан эмийн үнийн дүн ={' '}
                                   </strong>
                                   Амбулторын жорийн үнийн дүн{' '}
                                   <strong>-</strong> Бэлэн эмийн үнийн дүн
                              </li>
                              <li className={utilStyles.listItem}>
                                   <strong>Стац эмийн тоо = </strong>
                                   {a} <strong>-</strong> Амбулторын жорийн тоо
                              </li>
                              <li className={utilStyles.listItem}>
                                   <strong>Стац үнийн дүн = </strong>
                                   {b}
                                   <strong>-</strong>
                                   Амбулторын жорийн үнийн дүн
                              </li>
                         </ol>
                    </small>
               </section>
               <article>
                    <h2 className={utilStyles.headingXl}>Бодлого</h2>
                    <ul className={utilStyles.list}>
                         {problems.map((el, i) => (
                              <Item key={i} i={i} data={el} />
                         ))}
                    </ul>
               </article>
          </Layout>
     );
};

export default Table;
