import * as S from "./RoadView.style";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import {Button} from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

const { kakao } = window;

const RoadView = () => {
	const [responseData, setResponseData] = useState(null);

	const fetchData = async () => {
		try {
			const response = await axios.get("/v2/local/search/keyword.json", {
				params: {
					query: "강동구청",
					size: 1,
				},
				headers: {
					Authorization: "KakaoAK 2bab94d636ff301fb7cbd296fe2c7b92",
				},
			});
			setResponseData(response.data);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const Menu1 = () => {
		fetchData();
	};

	useEffect(() => {
		if (responseData && responseData.documents.length > 0) {
			const { x, y } = responseData.documents[0];
			var mapContainer = document.getElementById("map");
			var mapOption = {
				center: new window.kakao.maps.LatLng(y, x),
				level: 3,
			};

			// 마커를 담을 배열
			var markers = [];

			var map = new window.kakao.maps.Map(mapContainer, mapOption);

			//교통 상황
			map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

			// 다음 코드는 마커를 추가하거나 다른 지도 관련 작업을 진행할 수 있습니다.

			// 마커를 추가
			var marker = new window.kakao.maps.Marker({
				position: new window.kakao.maps.LatLng(y, x),
				map: map,
				title: "강동구청",
			});
		}
	}, [responseData]); // responseData가 변경될 때마다 실행

	return <S.Container onClick={Menu1}> 도로 상황 </S.Container>;
};

export default RoadView;
