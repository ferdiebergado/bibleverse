import type { FC, ReactNode } from 'react'
import { Card } from './ui/card'

interface CardProps {
    children: ReactNode
}

const CardMain: FC<CardProps> = ({ children }) => {
    return (
        <Card className="mx-4 px-6 shadow-md md:mx-8 md:px-12">{children}</Card>
    )
}

export default CardMain
