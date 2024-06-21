import React,{ Children, createContext, useState, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({Children}) =>{
    const [location, setLocation] = useState(null);
    const[keyword,setKeyword] = useState("San Francisco");
    const [isLoading,setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) =>{
        setIsLoading(true);
        setKeyword(searchKeyword);
        if(!searchKeyword.lenght){
            return;
        }
        locationRequest(searchKeyword.toLowerCase).then(locationTransform)
        .then(result =>{
            setIsLoading(false);
            setLocation(result);
        }).catch((err) =>{
            setIsLoading(false);
            setError(err);
        })
    };
    useEffect(() => {
        onSearch(keyword);
    }, [])

    return(
        <LocationContext.Provider
        value = {{
            isLoading,
            error,
            location,
            search: onSearch,
            keyword,
        }}
        >
            {Children}
        </LocationContext.Provider>
    );
}