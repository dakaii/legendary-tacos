import React, { Fragment } from 'react';
import { Header } from '../components/Header';

export const Landing = () => {
    return (
        <Fragment>
            <Header />
        </Fragment>
    );
};

// export const getBrowserLanguage = () => {
//     const nav = window.navigator;
//     const browserLanguagePropertyKeys = [
//         'language',
//         'browserLanguage',
//         'systemLanguage',
//         'userLanguage',
//     ];

//     // support for HTML 5.1 "navigator.languages"
//     if (Array.isArray(nav.languages)) {
//         for (const language of nav.languages) {
//             if (language && language.length) {
//                 return language;
//             }
//         }
//     }

//     // support for other well known properties in browsers
//     for (const propertyKey of browserLanguagePropertyKeys) {
//         const language = nav[propertyKey];
//         if (language && language.length) {
//             return language;
//         }
//     }

//     return null;
// };

// console.log(getBrowserLanguage());
