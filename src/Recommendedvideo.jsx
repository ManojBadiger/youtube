import React from 'react'
import './Recommendedvideo.css';
import { Videocard } from './Videocard';
const Recommendedvideo = () => {
    return (
        <div className='recommendedvideo'>
            <h2>Recommended</h2>
            <div className='recommendedvideos_video'>
            <Videocard
            title="India 4K - Scenic Relaxation Film With Calming Music"
            views="15.8M Views"
            timestamp="4 Dec 2021"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLRV3F_CpEDSMxeAhO1W3nUvLlKg_T9P6w7DL23xSQ=s176-c-k-c0x00ffffff-no-rj"
            channel="Scenic Relaxation"
            image="https://i.ytimg.com/vi/VVsC2fD1BjA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCmYFZJCSHssriqhmWrSRtO3Cr1YA"
            />
            <Videocard
            title="Bali in 8k ULTRA HD HDR - Paradise of Asia (60 FPS)"
            views="4.6M Views"
            timestamp="3 days ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLSS1lyM1dY-UqjVb023wncf64ON14K9N6zQwSVH=s176-c-k-c0x00ffffff-no-rj"
            channel="8K World"
            image="https://i.ytimg.com/vi/BFS9n4B_2xA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD6HF5DWWrUxprLaY6XiSTlZi4rJA"
            />
          
            <Videocard
            title="Greece 4K - Scenic Relaxation Film With Calming Music"
            views="1.9M Views"
            timestamp="3 days ago"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLSS1lyM1dY-UqjVb023wncf64ON14K9N6zQwSVH=s176-c-k-c0x00ffffff-no-rj"
            channel="Scenic Relaxation"
            image="https://i.ytimg.com/vi/eRUQPfVACs0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDKCoVlBPpSMAKWaY_0kCm0yKQhag"
            /><Videocard
            title="Rakuten Crimson House Bengaluru - Virtual Tour"
            views="4K Views"
            timestamp="31 Mar 2022"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLR10BpKr-jmmGxtomPiBb39UeW6DN2IUQHoOjZ69Q=s176-c-k-c0x00ffffff-no-rj"
            channel="Rakuten Group Official"
            image="data:image/jpeg;base64,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"
            /><Videocard
            title="Riding on Japan’s First Class Overnight Train | West Express Ginga Premier"
            views="4.6M Views"
            timestamp="20 May 2022"
            channelimage="https://yt3.ggpht.com/EBqTSlUklfmfPtYMRunVhWm02qq8OQ3uRP-BCh38fluI1gMJ3I8bZkAGeGm3oKUnSTZv8UgWjUU=s176-c-k-c0x00ffffff-no-rj"
            channel="Solo Solo Travel"
            image="https://i.ytimg.com/vi/tBdwetBS1DA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzIQNUxvquJbNiYhiEkX1dCjOsHg"
            /><Videocard
            title="Animals of Asia 4K - Scenic Wildlife Film With Calming Music"
            views="1.9M Views"
            timestamp="18 Dec 2021"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLRV3F_CpEDSMxeAhO1W3nUvLlKg_T9P6w7DL23xSQ=s176-c-k-c0x00ffffff-no-rj"
            channel="Scenic Relaxation
            "
            image="https://i.ytimg.com/vi/KfjIaEP0EtY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANAbEGqA_vZMZ2QRsjgeKVUGBnOg"
            /><Videocard
            title="Japan in 8K ULTRA HD - Land of The Rising Sun (60 FPS)"
            views="5M Views"
            timestamp="23 Apr 2021"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLSS1lyM1dY-UqjVb023wncf64ON14K9N6zQwSVH=s176-c-k-c0x00ffffff-no-rj"
            channel="8K World"
            image="https://i.ytimg.com/vi/G5RpJwCJDqc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUFlVnmxyAVRtEKHbuCtLo6oaGWQ"
            /><Videocard
            title="$0.40 BENGALURU Metro Rides: 3rd LONGEST in INDIA 🇮🇳"
            views="2.6M Views"
            timestamp="14 Mar 2022"
            channelimage="
            https://yt3.ggpht.com/ytc/AKedOLRjDOAPtNcPi9rZ7zoxp9nW3hOwYpfWUhhxpST8wQ=s176-c-k-c0x00ffffff-no-rj
            "
            channel="
            Benjamin Jenks - American in India            
            "
            image="https://i.ytimg.com/vi/oToAoQvi4Ns/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA0Dr4HzTUtZ6ozDcxtv52UxsFECw"
            /><Videocard
            title="Germany 4K Europe Relaxation Film | Peaceful Relaxing Music | Meditation Music | Nature Sounds"
            views="24M Views"
            timestamp="3 Oct 2021"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLSvo0PXO6M5XGG9LONsDSST2Vh-zSGJvOics63B5A=s176-c-k-c0x00ffffff-no-rj"
            channel="Relaxation world"
            image="https://i.ytimg.com/vi/K0uAIFbuPm8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD298xivP1W-i4RkCHv773WgNZahA"
            /><Videocard
            title="NIAGARA FALLS - ONTARIO, CANADA 4K"
            views="10M Views"
            timestamp="12 Jul 2019"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLQeFn06SXL10zbLP1jPNxoi_lEr5z1FYBeXmTGKQ0E=s176-c-k-c0x00ffffff-no-rj"
            channel="
            Jacek Zarzycki
            "
            image="https://i.ytimg.com/vi/ufZoZzDjjzE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAKk1JLeg0JSsOeQMwouZIKw3xoMg"
            /><Videocard
            title="Exploring 4 hidden places in Zanskar valley with friends | Traveling Mondays: Zanskar Series part 03"
            views="6.3M Views"
            timestamp="1 Apr 2022"
            channelimage="https://yt3.ggpht.com/ytc/AKedOLSrp93woDvxxUqbPKUMB0YwUaL-1PESH277JCrfkNU=s176-c-k-c0x00ffffff-no-rj"
            channel="Travelling Mondays"
            image="https://i.ytimg.com/vi/CLhw4MdTBGw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZtNTILiHv6okOO53hHyZ_gdoiVg"
            />
            </div>
        </div>
    )
}

export default Recommendedvideo