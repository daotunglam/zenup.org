import { useLocation } from 'react-router-dom';
import { createContext } from "react"

const LocationContext = createContext()

function LocationProvider({ children }) {

    const pathname = useLocation().pathname;

    const locations = {
        locationHome: (pathname === '/'),
        location1: (pathname === '/location1'),
        location2: (pathname === '/location2'),
    }

    return (
        <LocationContext.Provider value={locations}>
            {children}
        </LocationContext.Provider>
    )
}

export { LocationContext, LocationProvider }