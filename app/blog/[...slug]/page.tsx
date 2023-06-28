import {delay} from "@/lib/delay";


const getData = async (slug) => {
    const response = await delay(2000, slug);
    return response;

}

export default async function BlogPost({params}) {
    const {slug} = params;
    const post = await getData(slug);
    throw Error('Ooooppsss');
    return <div>slug {post}</div>
}