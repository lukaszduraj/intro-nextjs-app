// import Image from 'next/image'
// import {Inter} from '@next/font/google'
// import styles from './page.module.css'
//
// const inter = Inter({subsets: ['latin']})
//
// export default function Blog() {
//     return <div>Blog</div>
// }

export default function getStaticParams() {
    return [
        {slug: 'learn-to-code'},
        {slug: 'aaa'},
    ];

}