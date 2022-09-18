import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'
import useTranslate from '../hooks/useTranslate';

const About = () => {

    const { locales, asPath } = useRouter();
    const { title, value } = useTranslate();
  return (
    <div>
        
        <main >
        <ul>
          {locales.map((l, i) => {
            return (
              <li key={i}>
                <Link href={asPath} locale={l}>
                  {l}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <h1>{title}</h1>
          <div>
            {value}
          </div>
        </div>
      </main>

    </div>
  )
}

export default About