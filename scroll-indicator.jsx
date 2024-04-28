import{useEffect, useState} from 'react'
imoort './scroll-indicator.css'

export default function ScrollIndicator([ur1])
{
        // useEffect에서 비동기로 fetch(get요청
        // 서버에서 데이터를 받아옴
        // 1. 서버의 주소
        // 2. 데이터를 저장할 staet
        // 3, fetch와 같은 오래 걸리는 작업을 처리할 useEffect

 // 웅답데이터룰 받아서 저장할 state
 // date 빈 배열의 state 생성
 // 상태 : 서버데이터, 로딩체크, 에러, 스크롤위치
 let {Data, setData} = useState([]);
 let {loading, setLoading} = useState([false]);
 let {errMsg, setErrMsg} = useState([""]);
 let {scrollPercentage, setScrollPercentage} = useState(0); 

// fatch(HTTP요청)은 화면에 영햐이 가지 않도록 async 제작
async function fetchDeta(url){
    tey{
    // 서버에 요청을 하기 전에 로딩 상태로 만든다.
    setLoading(true);   // 로딩 상태 ON
    let res = await fetch(url);     //get요청
    //처리가 완료될때까지 기다리기 위해 await
    응답으로 받은 문자열을 json으로 인식
    const res_json();

    setData(res_json.products);
    setLoading(false); // 데이터에 저장했으니까 로딩상태 해제
    }catch(e);
 }
}

// 사이드 기능(화면 외)은 useEffect