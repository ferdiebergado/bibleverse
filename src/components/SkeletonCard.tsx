import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonCard() {
    return (
        <div className="mx-4 flex flex-col space-y-3 p-6 md:m-8 md:p-12">
            <div className="space-y-2">
                <Skeleton className="h-12 w-[300px]" />
                <Skeleton className="h-8 w-[300px]" />
            </div>
            <Skeleton className="h-[100px] w-[400px] rounded-xl" />
        </div>
    )
}
