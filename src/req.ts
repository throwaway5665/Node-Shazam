import { USER_AGENTS } from "./useragents"

export class ShazamURLS{

    search_from_file(language: string,endpoint_country: string,device: string,uuid_1: string,uuid_2: string){
        return `https://amp.shazam.com/discovery/v5/${language}/${endpoint_country}/${device}/-/tag/${uuid_1}/${uuid_2}?sync=true&webv3=true&sampling=true&connected=&shazamapiversion=v3&sharehub=true&hubv5minorversion=v5.1&hidelb=true&video=v3`
    }

    top_tracks_global(language: string,endpoint_country: string,limit: string,offset: string){
        return `https://www.shazam.com/shazam/v3/${language}/${endpoint_country}/web/-/tracks/ip-global-chart?pageSize=${limit}&startFrom=${offset}`
    }

    track_info(language: string,endpoint_country: string,track_id: string){
        return `https://www.shazam.com/discovery/v5/${language}/${endpoint_country}/web/-/track/${track_id}?shazamapiversion=v3&video=v3 `
    }

    top_tracks_country(language: string,endpoint_country: string,country_code: string,limit: string,offset: string){
        return `https://www.shazam.com/shazam/v3/${language}/${endpoint_country}/web/-/tracks/ip-country-chart-${country_code}?pageSize=${limit}&startFrom=${offset}`
    }

    top_tracks_city(language: string,endpoint_country: string,city_id: string,limit: string,offset: string){
        return `https://www.shazam.com/shazam/v3/${language}/${endpoint_country}/web/-/tracks/ip-city-chart-${city_id}?pageSize=${limit}&startFrom=${offset}`
    }

    locations(){
        return `https://www.shazam.com/services/charts/locations`
    }

    genre_world(language: string,endpoint_country: string,genre: string,limit: string,offset: string){
        return `https://www.shazam.com/shazam/v3/${language}/${endpoint_country}/web/-/tracks/genre-global-chart-${genre}?pageSize=${limit}&startFrom=${offset}`
    }

    genre_country(language: string, endpoint_country: string, country: string, genre: string, limit: string, offset: string){
        return `https://www.shazam.com/shazam/v3/${language}/${endpoint_country}/web/-/tracks/genre-country-chart-${country}-${genre}?pageSize=${limit}&startFrom=${offset}`
    }

    related_songs(language: string,endpoint_country: string,track_id: string,offset: string,limit: string){
        return `https://cdn.shazam.com/shazam/v3/${language}/${endpoint_country}/web/-/tracks/track-similarities-id-${track_id}?startFrom=${offset}&pageSize=${limit}&connected=&channel=`
    }

    search_artist(language: string,endpoint_country: string,query: string,limit: string,offset: string){
        return `https://www.shazam.com/services/search/v4/${language}/${endpoint_country}/web/search?term=${query}&limit=${limit}&offset=${offset}&types=artists`
    }

    search_music(language: string,endpoint_country: string, query: string,limit: string,offset: string){
        return `https://www.shazam.com/services/search/v3/${language}/${endpoint_country}/web/search?query=${query}&numResults=${limit}&offset=${offset}&types=songs`
    }

    listening_counter(){
        return `https://www.shazam.com/services/count/v2/web/track/{}`
    }

    listening_counter_many(){
        return `https://www.shazam.com/services/count/v2/web/track`
    }

    search_artist_v2(endpoint_country: string,artist_id: string){
        return `https://www.shazam.com/services/amapi/v1/catalog/${endpoint_country}/artists/${artist_id}`
    }

    artist_albums(endpoint_country: string,artist_id: string,limit: string,offset: string){
        return `https://www.shazam.com/services/amapi/v1/catalog/${endpoint_country}/artists/${artist_id}/albums?limit=${limit}&offset=${offset}`
    }
    
}

export class Request{
    headers(language: string){
        return {
            "X-Shazam-Platform": "IPHONE",
            "X-Shazam-AppVersion": "14.1.0",
            "Accept": "*/*",
            "Accept-Language": language,
            "Accept-Encoding": "gzip, deflate",
            "User-Agent": USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)]
        }
    }
}

export class Device{

    devices = ['iphone','android','web']

    get random_device(): string{
        return this.devices[Math.floor(Math.random() * this.devices.length)]
    }
    
}