import { useRouter } from 'next/router';
import React from 'react'
import languages from '../i18N';

const useTranslate = () => {
    const { locale } = useRouter();

    return languages[locale];
}

export default useTranslate