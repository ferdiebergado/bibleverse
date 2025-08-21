import { Skeleton } from '@/components/ui/skeleton'
import { type FC } from 'react'

const RandomVerseSkeleton: FC = () => {
    return (
        <div className="ml-16 flex flex-col space-y-3">
            <div className="space-y-2">
                <Skeleton className="h-4 w-[500px]" />
                <Skeleton className="h-4 w-[500px]" />
                <Skeleton className="h-4 w-[200px]" />
            </div>
        </div>
    )
}

export default RandomVerseSkeleton
