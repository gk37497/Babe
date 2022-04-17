import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export default function Home({ allPostsData }) {
     return (
          <Layout home>
               <Head>
                    <title>{siteTitle}</title>
               </Head>
               <section
                    className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                    <ul className={utilStyles.list}>
                         <li className={utilStyles.listItem}>
                              <Link href={`/exam`}>
                                   <a>Шалгалт</a>
                              </Link>
                              <br />
                              <small className={utilStyles.lightText}>
                                   5 асуулт 5 мин
                              </small>
                         </li>
                         <li className={utilStyles.listItem}>
                              <Link href={`/quiz`}>
                                   <a>Бүх асуултууд</a>
                              </Link>
                              <br />
                              <small className={utilStyles.lightText}>
                                   Хариу
                              </small>
                         </li>
                    </ul>
               </section>
          </Layout>
     );
}

export async function getStaticProps() {
     const allPostsData = getSortedPostsData();
     return {
          props: {
               allPostsData,
          },
     };
}
