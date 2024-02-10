import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import fetchNews from '../../composables/fetchNews';
import 'swiper/css';
import 'swiper/css/pagination'
import '../../assets/css/coinPage/swiper.css'
import { useEffect, useState } from 'react';


// const news = {"totalArticles":619586,"articles":[{"title":"Five-year-old Palestinian girl found dead after being trapped in car with dead relatives","description":"A 5-year-old Palestinian girl who was trapped in a car with her dead relatives after it came under Israeli fire in Gaza last month has been found dead.","content":"CNN —\nA 5-year-old Palestinian girl who was trapped in a car with her dead relatives after it came under Israeli fire in Gaza last month has been found dead.\nOn January 29, Hind Rajab had been traveling in a car with her uncle, his wife and their fou... [2242 chars]","url":"https://www.cnn.com/2024/02/10/middleeast/hind-rajab-death-israel-gaza-intl/index.html","image":"https://media.cnn.com/api/v1/images/stellar/prod/hind-rajab.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2024-02-10T11:36:00Z","source":{"name":"CNN","url":"https://www.cnn.com"}},{"title":"Man City vs Everton live team news as Kevin De Bruyne out but Erling Haaland and Jeremy Doku start","description":"Manchester City will move to the top of the Premier League this afternoon if they beat Everton at the Etihad Stadium","content":"Manchester City know they will leapfrog Liverpool in the Premier League table if they beat Everton this afternoon.\nTheir status as top dogs may not last much longer than a couple of hours with Jurgen Klopp's side due to kick off against Burnley at 3p... [730 chars]","url":"https://www.manchestereveningnews.co.uk/sport/football/football-news/man-city-vs-everton-live-28604397","image":"https://i2-prod.manchestereveningnews.co.uk/incoming/article28607467.ece/ALTERNATES/s1200/0_GettyImages-1999806609.jpg","publishedAt":"2024-02-10T11:20:22Z","source":{"name":"Manchester Evening News","url":"https://www.manchestereveningnews.co.uk"}},{"title":"LIVE: Stabbing in Manchester city centre - latest updates from police cordon","description":"A man in his 30s was attacked in the early hours of Saturday","content":"A police scene is in place on a busy Manchester city centre road after a man was stabbed in the early hours of Saturday. The victim, in his 30s, was taken to hospital after being knifed in the back and arm.\nPolice say the attack took place on Bridge ... [546 chars]","url":"https://www.manchestereveningnews.co.uk/news/greater-manchester-news/live-stabbing-manchester-city-centre-28607384","image":"https://i2-prod.manchestereveningnews.co.uk/incoming/article28607403.ece/ALTERNATES/s1200/0_6613daeb-9169-41c9-87ed-9ee76f1083cc-1jpeg.jpg","publishedAt":"2024-02-10T11:10:44Z","source":{"name":"Manchester Evening News","url":"https://www.manchestereveningnews.co.uk"}},{"title":"Watch video: First X-class solar flare of the year triggers radiation storm","description":"As the Sun creeps towards solar maximum, a period of highest activity, we have already had the first X-class solar flare of the year.","content":"The Sun on Saturday produced one of the most powerful solar flare in years from just behind its southwestern limbs. NASA’ Solar Dynamics Observatory recorded the flash and it was classified as an X 3.4-class explosion. You can watch a video of it bel... [1638 chars]","url":"https://indianexpress.com/article/technology/science/first-x-class-solar-flare-watch-video-9154714/","image":"https://images.indianexpress.com/2023/11/Solar-flare-20231107.jpg","publishedAt":"2024-02-10T11:02:07Z","source":{"name":"The Indian Express","url":"https://indianexpress.com"}},{"title":"How to watch Super Bowl LVIII: Kansas City Chiefs and San Francisco 49ers face off at Allegiant Stadium in Las Vegas","description":"The Kansas City Chiefs will face the San Francisco 49ers in Super Bowl LVIII from Allegiant Stadium in Las Vegas on Sunday, February 12, here’s how to watch.","content":"CNN —\nAfter almost five months of NFL action, the Super Bowl is finally upon us.\nThe Kansas City Chiefs will face the San Francisco 49ers in Super Bowl LVIII from Allegiant Stadium in Las Vegas on Sunday, February 12.\nThe winner will be anointed foot... [2203 chars]","url":"https://www.cnn.com/2024/02/10/sport/how-to-watch-super-bowl-lviii-chiefs-49ers-spt-intl/index.html","image":"https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1996854699.jpg?c=16x9&q=w_800,c_fill","publishedAt":"2024-02-10T11:00:00Z","source":{"name":"CNN","url":"https://www.cnn.com"}}]};
export default function NewsSwiper(){

    const [news, setNews] = useState(null);
    
    useEffect(()=>{
        fetchNews(setNews)
    }, [])
    
    return(
        <div className='w-fit mx-auto mt-24'>
       {
        news ?      <Swiper className=' text-white max-w-[50em]'
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay= {{delay: 4000}}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        >
            {
                news.articles.map((item, idx)=>{
                    return (
                        <SwiperSlide key={idx}>
                            <div className='relative'>
                                <img src={item.image} className="img" />
                                <h1 className='title'>{ item.title }</h1>
                            </div>
                        </SwiperSlide>
                    )
                })
            }

        </Swiper> : null
       }
        </div>
    )
}