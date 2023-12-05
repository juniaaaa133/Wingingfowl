import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { api } from './api';
import { Home } from './PAGES/Home/Home';
import { BirdList } from './PAGES/BirdList/BirdList';
import { Detail } from './PAGES/Detail/Detail';

type BirdData = {
    Id: number,BirdMyanmarName: string, BirdEnglishName: string,Description: string,ImagePath: string
  };

  type FetchedData = {
    Tbl_Bird: []
  }
   
function App() {

  // let AR: BirdData[] = [
  //   {    Id: 1,BirdMyanmarName: 'string', BirdEnglishName: 'string',Description: 'string',ImagePath: 'https://i.pinimg.com/736x/43/f3/b6/43f3b6e1a4656c95d22b3563ec2cbba7.jpg'},
  
  //   {    Id: 1,BirdMyanmarName: 'string', BirdEnglishName: 'string',Description: 'string',ImagePath: 'https://i.pinimg.com/736x/43/f3/b6/43f3b6e1a4656c95d22b3563ec2cbba7.jpg'},
  //   {    Id: 1,BirdMyanmarName: 'string', BirdEnglishName: 'string',Description: 'string',ImagePath: 'https://i.pinimg.com/736x/43/f3/b6/43f3b6e1a4656c95d22b3563ec2cbba7.jpg'},
  //   {    Id: 1,BirdMyanmarName: 'string', BirdEnglishName: 'string',Description: 'string',ImagePath: 'https://i.pinimg.com/736x/43/f3/b6/43f3b6e1a4656c95d22b3563ec2cbba7.jpg'},
  //   {    Id: 1,BirdMyanmarName: 'string', BirdEnglishName: 'string',Description: 'string',ImagePath: 'https://i.pinimg.com/736x/43/f3/b6/43f3b6e1a4656c95d22b3563ec2cbba7.jpg'},
  //   {    Id: 1,BirdMyanmarName: 'string', BirdEnglishName: 'string',Description: 'string',ImagePath: 'https://i.pinimg.com/736x/43/f3/b6/43f3b6e1a4656c95d22b3563ec2cbba7.jpg'},
  // ]

let [data,setData] = useState<BirdData[]>([]);

  let fetchingAPI= async () => {
    await axios.get<FetchedData>(api)
    .then(function (res) {
  setData(res.data.Tbl_Bird);
    })
    .catch((err) => console.log(err))
  }

  useEffect(()=> {
fetchingAPI();
  },[])

  return (
<>
<Home/>
<BirdList arr={data}/>
</>
  );
}

export default App;
