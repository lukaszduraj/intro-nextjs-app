import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function PostLoading() {

    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <p>
                <Skeleton count={1} />
            </p>
        </SkeletonTheme>
    );
}