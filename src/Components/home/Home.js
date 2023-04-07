import MovieList from '../MovieList/MovieList';

import{ useState, useEffect } from 'react';

export default function Home(params) {
   const [trending,setTrending]=useState([])

   async function getTrending(){
      const url=process.env.REACT_APP_URL;
      
      const response = await fetch(`${url}/trending`);
      console.log(2222,response);

      const trendingData = await response.json();
      console.log(3333,trendingData);
     
      setTrending(trendingData);
      console.log(44444,trending)

  }

  useEffect(()=>{
   getTrending();
},[])  
 return(
   <>
    
    <MovieList  trending={trending}  />
    </>
 )   
    
}