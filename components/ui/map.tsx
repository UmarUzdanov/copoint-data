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
        if (!window.google && !apiLoaded.current) {
            const script = document.createElement('script')
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`
            script.async = true
            script.defer = true
            script.onload = initializeMap
            document.head.appendChild(script)
            apiLoaded.current = true
        } else if (window.google) {
            initializeMap()
        }

        function initializeMap() {
            if (!mapRef.current) return

            mapInstanceRef.current = new google.maps.Map(mapRef.current, {
                center,
                zoom,
                styles: [
                    {
                        featureType: 'water',
                        elementType: 'geometry',
                        stylers: [{color: '#e9e9e9'}, {lightness: 17}],
                    },
                    {
                        featureType: 'landscape',
                        elementType: 'geometry',
                        stylers: [{color: '#f5f5f5'}, {lightness: 20}],
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.fill',
                        stylers: [{color: '#ffffff'}, {lightness: 17}],
                    },
                    {
                        featureType: 'road.highway',
                        elementType: 'geometry.stroke',
                        stylers: [{color: '#ffffff'}, {lightness: 29}, {weight: 0.2}],
                    },
                    {
                        featureType: 'road.arterial',
                        elementType: 'geometry',
                        stylers: [{color: '#ffffff'}, {lightness: 18}],
                    },
                    {
                        featureType: 'road.local',
                        elementType: 'geometry',
                        stylers: [{color: '#ffffff'}, {lightness: 16}],
                    },
                    {
                        featureType: 'poi',
                        elementType: 'geometry',
                        stylers: [{color: '#f5f5f5'}, {lightness: 21}],
                    },
                    {
                        featureType: 'poi.park',
                        elementType: 'geometry',
                        stylers: [{color: '#dedede'}, {lightness: 21}],
                    },
                    {
                        elementType: 'labels.text.stroke',
                        stylers: [{visibility: 'on'}, {color: '#ffffff'}, {lightness: 16}],
                    },
                    {
                        elementType: 'labels.text.fill',
                        stylers: [{saturation: 36}, {color: '#333333'}, {lightness: 40}],
                    },
                    {
                        elementType: 'labels.icon',
                        stylers: [{visibility: 'off'}],
                    },
                    {
                        featureType: 'transit',
                        elementType: 'geometry',
                        stylers: [{color: '#f2f2f2'}, {lightness: 19}],
                    },
                    {
                        featureType: 'administrative',
                        elementType: 'geometry.fill',
                        stylers: [{color: '#fefefe'}, {lightness: 20}],
                    },
                    {
                        featureType: 'administrative',
                        elementType: 'geometry.stroke',
                        stylers: [{color: '#fefefe'}, {lightness: 17}, {weight: 1.2}],
                    },
                ],
            })

            const marker = new google.maps.Marker({
                position: center,
                map: mapInstanceRef.current,
                title: markerTitle,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 10,
                    fillColor: '#4096ff',
                    fillOpacity: 1,
                    strokeColor: '#ffffff',
                    strokeWeight: 2,
                },
            })

            const infoWindow = new google.maps.InfoWindow({
                content: `<div style="font-family: 'Open Sans', sans-serif; padding: 8px;"><strong>${markerTitle}</strong><br>123 Data Street<br>Seattle, WA 98101</div>`,
            })

            marker.addListener('click', () => {
                infoWindow.open(mapInstanceRef.current, marker)
            })
        }

        return () => {
            mapInstanceRef.current = null
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