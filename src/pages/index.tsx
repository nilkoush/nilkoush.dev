import Layout from '@components/layout';
import { NextPageWithLayout } from '@pages/page';

const HomePage: NextPageWithLayout = () => {
	return (
		<>
			<h1>nilkoush</h1>
		</>
	);
};

export default HomePage;

HomePage.getLayout = (page) => {
	return <Layout title="nilkoush">{page}</Layout>;
};
