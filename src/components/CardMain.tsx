import type { FC, ReactNode } from 'react'
import { Card } from './ui/card'

interface CardProps {
    children: ReactNode
}

const CardMain: FC<CardProps> = ({ children }) => {
    return <Card className="m-4 p-6 shadow-md md:m-8 md:p-12">{children}</Card>
}

export default CardMain
