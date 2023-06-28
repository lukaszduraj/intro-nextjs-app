'use client'

import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

export default function Loader() {

    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
                Jacek!
                <Skeleton count={1} />
            </p>
        </SkeletonTheme>
    );
}