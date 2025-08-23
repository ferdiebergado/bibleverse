import type { FC } from 'react'

interface ErrorMessageProps {
    message: string
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
    return <p className="text-red-500">Error: {message}</p>
}

export default ErrorMessage
