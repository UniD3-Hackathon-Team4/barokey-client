import * as S from './TotalCongestionButton.style';
import React, { useEffect, useState } from 'react';
// import {Button} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const { kakao } = window;

const TotalCongestionButton = () => {
  const [polygonPath, setPolygonPath] = useState([]);
  const s_polygonPath = [
    [37.51684043, 127.14511013100002],
    [37.517038566999986, 127.14384594399996],
    [37.52796713499998, 127.11911248499996],
    [37.529669963, 127.12015481200001],
    [37.538648282, 127.12345794400005],
    [37.539287715, 127.121876327],
    [37.541080018, 127.11889123200001],
    [37.54298559799997, 127.11306236099995],
    [37.543170621, 127.10915912500002],
    [37.54694839699999, 127.111480035],
    [37.55038274399999, 127.11154955500001],
    [37.554386276, 127.11428417299999],
    [37.55676291499998, 127.11526904799996],
    [37.557702898, 127.11566284000003],
    [37.559467202, 127.11735874600004],
    [37.56120324699998, 127.12011629799997],
    [37.56349386, 127.12297571600004],
    [37.56616545000003, 127.12862746099995],
    [37.567961086000025, 127.134283364],
    [37.56843244200002, 127.13768321700002],
    [37.568444026, 127.14896618800003],
    [37.57204888699999, 127.154998245],
    [37.572958835, 127.15691686699995],
    [37.576732698, 127.16257241200003],
    [37.57897662, 127.16676596299999],
    [37.57901745999999, 127.17026691299998],
    [37.57926277399997, 127.17185117300005],
    [37.58046697200001, 127.17521472800001],
    [37.581575015, 127.17734763199996],
    [37.579511809, 127.17701410100005],
    [37.578472404000024, 127.17550670900005],
    [37.57723767800002, 127.17534214],
    [37.57490180399998, 127.17569917399999],
    [37.57187252799997, 127.17789114499999],
    [37.56892072800002, 127.17922984100005],
    [37.56549991899999, 127.17959913300001],
    [37.56301996299999, 127.181200053],
    [37.56099529800002, 127.18200949499999],
    [37.557559535, 127.181566868],
    [37.55600353400001, 127.18169641500003],
    [37.552973123000015, 127.18135382599996],
    [37.55177914199999, 127.18294495500004],
    [37.551111615000025, 127.183131151],
    [37.54791615900001, 127.18268913400004],
    [37.54639986199999, 127.182837425],
    [37.54657307399998, 127.17934642900002],
    [37.545213538999974, 127.17573322400006],
    [37.545588527, 127.17392236499995],
    [37.545541722999985, 127.17212391600003],
    [37.544813007000016, 127.16978076600003],
    [37.54521138699999, 127.16699588400002],
    [37.54426145999997, 127.16665500399995],
    [37.544997455999976, 127.16317850999997],
    [37.541629215, 127.16032596900004],
    [37.53927536100002, 127.15766934199996],
    [37.537974744999985, 127.15696225299996],
    [37.53622368600003, 127.15527845999998],
    [37.533672017000015, 127.15358375799997],
    [37.531926252, 127.15395052600002],
    [37.528535456999975, 127.15270367899996],
    [37.52637816499998, 127.15041863099998],
    [37.52215484599998, 127.14781481299997],
    [37.52193569399998, 127.145682889],
    [37.519630431999985, 127.144801873],
    [37.51684043, 127.14511013100002],
  ];
  const [responseData, setResponseData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('/v2/local/search/keyword.json', {
        params: {
          query: '강동구청',
          size: 1,
        },
        headers: {
          Authorization: 'KakaoAK 2bab94d636ff301fb7cbd296fe2c7b92',
        },
      });
      setResponseData(response.data);
      for (let i = 0; i < s_polygonPath.length; i++) {
        const newLatLng = new kakao.maps.LatLng(s_polygonPath[i][0], s_polygonPath[i][1]);
        setPolygonPath((prevArray) => [...prevArray, newLatLng]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const Menu1 = () => {
    fetchData();
  };

  useEffect(() => {
    if (responseData && responseData.documents.length > 0) {
      const { x, y } = responseData.documents[0];
      var mapContainer = document.getElementById('map');
      var mapOption = {
        center: new window.kakao.maps.LatLng(y, x),
        level: 7,
      };

      // 마커를 담을 배열

      var map = new window.kakao.maps.Map(mapContainer, mapOption);

      //교통 상황
      // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

      // 다음 코드는 마커를 추가하거나 다른 지도 관련 작업을 진행할 수 있습니다.

      // 마커를 추가
      var marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(y, x),
        map: map,
        title: '강동구청',
      });

      // 원 그리기
      var circle = new kakao.maps.Circle({
        center: new kakao.maps.LatLng(y, x), // 원의 중심좌표 입니다
        radius: 50, // 미터 단위의 원의 반지름입니다
        strokeWeight: 5, // 선의 두께입니다
        strokeColor: '#75B8FA', // 선의 색깔입니다
        strokeOpacity: 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid', // 선의 스타일 입니다
        fillColor: '#CFE7FF', // 채우기 색깔입니다
        fillOpacity: 0.7, // 채우기 불투명도 입니다
      });

      // 지도에 원을 표시합니다
      circle.setMap(map);

      // var polygonPath = [
      //   new kakao.maps.LatLng(37.55542508460329, 126.97150295700077),
      //   new kakao.maps.LatLng(37.55391134268271, 126.97123192292717),
      //   new kakao.maps.LatLng(37.554263367324054, 126.97397053948468),
      //   new kakao.maps.LatLng(37.555668848282, 126.97363052955845),
      //   new kakao.maps.LatLng(37.55587582216215, 126.9725100339905)
      // ];

      // 지도에 표시할 다각형을 생성합니다
      var polygon = new kakao.maps.Polygon({
        path: polygonPath, // 그려질 다각형의 좌표 배열입니다
        strokeWeight: 3, // 선의 두께입니다
        strokeColor: '#39DE2A', // 선의 색깔입니다
        strokeOpacity: 0, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        strokeStyle: 'solid', // 선의 스타일입니다
        fillColor: '#A2FF99', // 채우기 색깔입니다
        fillOpacity: 0.7, // 채우기 불투명도 입니다
      });

      // 지도에 다각형을 표시합니다
      polygon.setMap(map);
    }
  }, [responseData]); // responseData가 변경될 때마다 실행

  return <S.Container onClick={Menu1}></S.Container>;
};

export default TotalCongestionButton;
