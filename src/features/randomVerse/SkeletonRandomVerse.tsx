import { Skeleton } from '@/components/ui/skeleton'
import type { FC } from 'react'

const SkeletonRandomVerse: FC = () => {
    return (
        <div className="ml-8 flex flex-col space-y-2 px-6">
            <Skeleton className="h-8 w-[500px]" />
            <Skeleton className="h-8 w-[500px]" />
            <Skeleton className="h-10 w-[300px]" />
        </div>
    )
}

export default SkeletonRandomVerse
