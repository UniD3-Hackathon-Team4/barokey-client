import { Header } from "../../components"; // Header 컴포넌트 import 추가
import * as S from "./HomePage.style";

const HomePage = () => {
	return (
		<S.PageLayout>
			<Header />
		</S.PageLayout>
	);
};

export default HomePage;
