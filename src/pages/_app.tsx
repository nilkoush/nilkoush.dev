import '@styles/style.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import 'react-tippy/dist/tippy.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
	Component: NextPageWithLayout;
}

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
	const getLayout = Component.getLayout || ((page) => page);

	useEffect(() => {
		if (typeof window === 'undefined') {
			return;
		}

		void new Audio('/pop.mp3').play().catch(() => null);
	}, [router.pathname]);

	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		Router.events.on('routeChangeStart', handleRouteStart);
		Router.events.on('routeChangeComplete', handleRouteDone);
		Router.events.on('routeChangeError', handleRouteDone);

		return () => {
			// Make sure to remove the event handler on unmount!
			Router.events.off('routeChangeStart', handleRouteStart);
			Router.events.off('routeChangeComplete', handleRouteDone);
			Router.events.off('routeChangeError', handleRouteDone);
		};
	}, []);

	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			{getLayout(<Component {...pageProps} />)}
		</>
	);
}

export default appWithTranslation(MyApp);
