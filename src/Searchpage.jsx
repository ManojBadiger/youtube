import React from 'react'
import './Searchpage.css'
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import Channelrow from './Channelrow';
import Videorow from './Videorow';

export default function Searchpage() {
  return (
    <div className='searchpage'>
        <div className="searchPage_filer">
          <TuneOutlinedIcon/> 
          <h2>FILTER</h2> 
        </div>
        <hr />
        <Channelrow
        image="https://yt3.ggpht.com/ytc/AKedOLR10BpKr-jmmGxtomPiBb39UeW6DN2IUQHoOjZ69Q=s176-c-k-c0x00ffffff-no-rj"
        Channel="Rakuten Group Official"
        verified
        subs="19.6K"
        noofvideos={200}
        description="The official channel of Rakuten Group, a comprehensive Internet service including online shopping!
        ★ Recruitment of subscribers ★"
        />
        <hr/>
        <Videorow
        title="[RNN]Rakuten’s Roadmap to carbon neutrality"
        views="29.6K Views"
        timestamp="30 May 2022"
        image="https://i.ytimg.com/an_webp/4JnbYRd_l7k/mqdefault_6s.webp?du=3000&sqp=CPfg0ZQG&rs=AOn4CLCzd9V7SAEy9KnqrE5V5vgI46MI3Q"
        channel="Rakuten Group Official"
      
        subs="20K"
        description="[RNN]Rakuten’s Roadmap to carbon neutrality"

        />
         <Videorow
        title="Hometown Tax Documentary] A new regional base that connects people and feelings-Fukushima City, Fukushima Prefecture-"
        views="6K Views"
        timestamp="14 Feb 2019"
        image="https://i.ytimg.com/an_webp/eYFpq-hobgk/mqdefault_6s.webp?du=3000&sqp=CNyB0pQG&rs=AOn4CLDOS5oe-skL8q61bEs5of13XowXJA"
        channel="Rakuten Group Official"
      
        subs="20K"
        description="RNN visits Rakuten's Global Innovation Center in Bengaluru, India to discover more about their unique office environment and culture.
        "

        /> <Videorow
        title="Exploring 4 hidden places in Zanskar valley with friends | Traveling Mondays: Zanskar Series part 03"
        views="19.6K Views"
        timestamp="3 days ago"
        image="https://i.ytimg.com/an_webp/mmMz-qJYNmU/mqdefault_6s.webp?du=3000&sqp=COP_0ZQG&rs=AOn4CLBDqAexYcQ_wBXcH2hpGceOpFPT4Q"
        channel="Rakuten Group Official"
      
        subs="20K"
        description="As Rakuten Ichiba celebrated the 25th anniversary of its establishment on May 1, 2022, RNN took the chance to look back on the history of Rakuten's efforts to improve the metric known as 'NPS' (net promoter score)"

        /> <Videorow
        title="[RNN]ECCs Use Data to Support Rakuten Ichiba Merchants"
        views="19 Views"
        timestamp="26 May 2022"
        image="        https://i.ytimg.com/an_webp/m73lJFucWUg/mqdefault_6s.webp?du=3000&sqp=CPDN0ZQG&rs=AOn4CLA1wxXDAINavymx8tJuEKvrZ7h2eg"
        channel="Rakuten Group Official"
      
        subs="20K"
        description="In December 2021, RNN took a trip to Osaka City to find out more about the work of an E-Commerce Consultant (ECC) at Rakuten's Osaka Branch Office."

        /> 
        </div>

  )
}
