export interface Wallpaper {
    url: string;
    name: string;
}

interface FullWallpaper extends Wallpaper {
    liked: boolean;
    suggested: boolean;
    library: boolean;
}

export function useSuggestedWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.suggested);
}

export function useLikedWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.liked);
}

export function useLibraryWallpapers(): FullWallpaper[] {
    const wallpapers = useWallpapers();
    return wallpapers.filter(wallpaper => wallpaper.library);
}


export function useWallpapers(): FullWallpaper[] {
    return [{
        url: "https://ideogram.ai/assets/image/lossless/response/GIhLsqS4SyeSE-9TFdkb9w",
        "name": "Heritage",
        liked: true,
        suggested: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/VA4HL2P4SCyOsN6CjNO0PQ",
        "name": "Late night",
        liked: true,
        suggested: false,
        library: true
    },
    {
        url: "https://ideogram.ai/assets/image/lossless/response/YwbrBvCaQ-6OfN6EYzJCIg",
        "name": "Motivation",
        liked: false,
        suggested: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/image/lossless/response/zsD5u3NVRTuYPvCBoA4Jkg",
        name: "Night sky",
        liked: false,
        suggested: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/progressive-image/balanced/response/4luxjp8OTjWcjbrMEJVtrQ",
        name: "Sunrise",
        liked: false,
        suggested: true,
        library: false
    }, {
        url: "https://ideogram.ai/assets/image/lossless/response/FCGopyE-SvS3eTTTpvPF6w",
        name: "Shoes",
        liked: false,
        suggested: true,
        library: false
    }]
}
