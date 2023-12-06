import '../../css/lists/list.css';
import '../../css/home/home.css';
import { useState } from 'react';
import { Detail } from '../Detail/Detail';
import axios from 'axios';
import { api } from '../../api';


  type BirdListArr = {
    arr: BirdData[] ;
  }

  
type FetchedData = {
    Tbl_Bird: []
  }

type BirdData = {
    Id: number ,BirdMyanmarName: string , BirdEnglishName: string ,Description: string ,ImagePath: string 
  };

export const BirdList: React.FC<BirdListArr> = ({arr}: BirdListArr) => {

    let [display,setDisplay] = useState<string>('hidden');
    let [Obj,setObj] = useState<BirdData>()

    let DetailFn = async (IdValue: number) => {
           let FilteredData = arr.filter((data: BirdData) =>data.Id == IdValue)
            setObj(FilteredData[0]);
        setDisplay('block');
    }

    return (
        <>
        <div className="list-ctn">
            {
                    arr.map((data,index) => (
                        <div key={index} className="list">
                        <div className="list-layer round"></div>
                        <img src={require(`../../../Birds/${data.ImagePath}`)} alt="" className="pic list-img" />
                        {/* <img src={data.ImagePath} alt="" className="pic list-img" /> */}

                    <div className="list-info">
                        <div className="list-name">
                            <div className="list-mm titF-24 white">{data.BirdMyanmarName}</div>
                            <div className="list-eng">{data.BirdEnglishName}</div>
                        </div>
                    <button onClick={()=>DetailFn(data?.Id)} className="typ-btn-light bcu trans">See More</button>
                    </div>
                    </div>
                    ))
            }
        </div>
        <Detail BirdObj={Obj} classDisplay={display} displayFn={setDisplay} />
        </>
    );
        
}