'use client'

import {useEffect, useRef} from 'react'

interface MapProps {
    center: {
        lat: number
        lng: number
    }
    zoom?: number
    markerTitle?: string
    height?: string
}

export function Map({center, zoom = 15, markerTitle = 'CoPoint Data', height = '400px'}: MapProps) {
    const mapRef = useRef<HTMLDivElement>(null)
    const mapInstanceRef = useRef<google.maps.Map | null>(null)
    const apiLoaded = useRef(false)

    useEffect(() => {
        // Use the embedded iframe approach instead of the Google Maps JavaScript API
        // This avoids exposing the API key in client-side code
        if (mapRef.current) {
            const iframe = document.createElement('iframe')
            iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172139.41784774835!2d-122.4821482!3d47.6129432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1716811221148!5m2!1sen!2sus"
            iframe.width = "100%"
            iframe.height = "100%"
            iframe.style.border = "0"
            iframe.allowFullscreen = true
            iframe.loading = "lazy"
            iframe.referrerPolicy = "no-referrer-when-downgrade"
            
            mapRef.current.appendChild(iframe)
        }
    }, [center, zoom, markerTitle])

    return (
        <div
            ref={mapRef}
            style={{
                width: '100%',
                height,
                borderRadius: '0.5rem',
                overflow: 'hidden',
            }}
        />
    )
}
