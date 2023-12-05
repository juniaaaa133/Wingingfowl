import React ,{useEffect, useState} from 'react'
import '../../css/detail/detail.css'

interface DetailProps {
    BirdObj: BirdData| undefined;
    classDisplay: string;
    displayFn: any
}

type BirdData = {
    Id: number ,BirdMyanmarName: string , BirdEnglishName: string ,Description: string ,ImagePath: string 
  };


export const Detail: React.FC<DetailProps> = ({BirdObj,classDisplay,displayFn}) => {

    let [dis,setDis] = useState(classDisplay);

let setDisplay = (value: string) => {
    displayFn('hidden')
    setDis(value);
}
    
        return (
            <>
            {
                BirdObj == undefined ? <div className='undefined-value'></div>: 
                <div className={`dt-ctn ${classDisplay}`}>
                <button onClick={()=>setDisplay('hidden')} className="back typ-btn-light titF-16 bcu trans">Back</button>
                <div className="dt-layer"></div>
            <img src={require(`../../../Birds/${BirdObj?.ImagePath}`)} alt="" className="pic bg-img" />
            <div className="info-ctn">
                <img src={require(`../../../Birds/${BirdObj?.ImagePath}`)} alt="" className="pic info-pic" />
                <div className="info">
                  <div className="nameEng titF-16 white">{BirdObj?.BirdEnglishName}</div>
                    <div className="nameMM titF-38 white">{BirdObj?.BirdMyanmarName}</div>
            <div className="desc-ctn">
            <div className="desc white">{BirdObj?.Description}</div>

            </div>
                </div>
            </div>
            </div>
            }
            </>
        );
}