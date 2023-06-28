import {delay} from "@/lib/delay";

export default async function Header() {
    await delay(2000, '')
    return <div>this is header</div>
}