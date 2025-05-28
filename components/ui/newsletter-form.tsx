'use client'

import {useState} from 'react'
import {Button} from './button'

export function NewsletterForm() {
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState({
        isSubmitting: false,
        isSubmitted: false,
        error: null
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email) {
            setStatus({
                isSubmitting: false,
                isSubmitted: false,
                error: 'Email is required'
            })
            return
        }

        setStatus({isSubmitting: true, isSubmitted: false, error: null})

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Something went wrong')
            }

            setStatus({
                isSubmitting: false,
                isSubmitted: true,
                error: null
            })

            setEmail('')
        } catch (error) {
            setStatus({
                isSubmitting: false,
                isSubmitted: false,
                error: error.message
            })
        }
    }

    if (status.isSubmitted) {
        return (
            <div className="bg-white/20 py-4 px-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-navy">Thank you for subscribing!</h3>
                <p className="text-navy">You'll receive our latest updates in your inbox.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            {status.error && (
                <div
                    className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg w-full sm:absolute -top-14 left-0">
                    {status.error}
                </div>
            )}

            <div className="relative w-full">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full h-[48px] px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-navy min-w-[300px]"
                    required
                />
            </div>

            <Button
                type="submit"
                className="bg-navy text-white hover:bg-navy/90 whitespace-nowrap h-[48px] text-base px-6"
                disabled={status.isSubmitting}
            >
                {status.isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </Button>
        </form>
    )
}
