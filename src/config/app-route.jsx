import React from 'react';
import App from './../app.jsx';
import { Navigate } from 'react-router-dom';

import Dashboard from './../pages/lte/dashboard/dashboard.js';
import Analytics from './../pages/lte/analytics/analytics.js';
import EmailInbox from './../pages/lte/email/inbox.js';
import EmailCompose from './../pages/lte/email/compose.js';
import EmailDetail from './../pages/lte/email/detail.js';
import Widgets from './../pages/lte/widgets/widgets.js';
import PosCustomerOrder from './../pages/lte/pos/customer-order.js';
import PosKitchenOrder from './../pages/lte/pos/kitchen-order.js';
import PosCounterCheckout from './../pages/lte/pos/counter-checkout.js';
import PosTableBooking from './../pages/lte/pos/table-booking.js';
import PosMenuStock from './../pages/lte/pos/menu-stock.js';
import UiBootstrap from './../pages/lte/ui/bootstrap.js';
import UiButtons from './../pages/lte/ui/buttons.js';
import UiCard from './../pages/lte/ui/card.js';
import UiIcons from './../pages/lte/ui/icons.js';
import UiModalNotifications from './../pages/lte/ui/modal-notifications.js';
import UiTypography from './../pages/lte/ui/typography.js';
import UiTabsAccordions from './../pages/lte/ui/tabs-accordions.js';
import FormElements from './../pages/lte/form/elements.js';
import FormPlugins from './../pages/lte/form/plugins.js';
import FormWizards from './../pages/lte/form/wizards.js';
import TableElements from './../pages/lte/table/elements.js';
import TablePlugins from './../pages/lte/table/plugins.js';
import ChartJs from '../pages/lte/charts/js.js';
import ChartApex from '../pages/lte/charts/apex.js';
import Map from './../pages/lte/map/map.js';
import LayoutStarter from './../pages/lte/layout/starter.js';
import LayoutFixedFooter from './../pages/lte/layout/fixed-footer.js';
import LayoutFullHeight from './../pages/lte/layout/full-height.js';
import LayoutFullWidth from './../pages/lte/layout/full-width.js';
import LayoutBoxedLayout from './../pages/lte/layout/boxed-layout.js';
import LayoutCollapsedSidebar from './../pages/lte/layout/collapsed-sidebar.js';
import LayoutTopNav from './../pages/lte/layout/top-nav.js';
import LayoutMixedNav from './../pages/lte/layout/mixed-nav.js';
import LayoutMixedNavBoxedLayout from './../pages/lte/layout/mixed-nav-boxed-layout.js';
import PagesScrumBoard from './../pages/lte/pages/scrum-board.js';
import PagesProducts from './../pages/lte/pages/products.js';
import PagesProductDetails from './../pages/lte/pages/product-details.js';
import PagesOrders from './../pages/lte/pages/orders.js';
import PagesOrderDetails from './../pages/lte/pages/order-details.js';
import PagesGallery from './../pages/lte/pages/gallery.js';
import PagesSearchResults from './../pages/lte/pages/search-results.js';
import PagesComingSoon from './../pages/lte/pages/coming-soon.js';
import PagesError from './../pages/lte/pages/error.js';
import PagesLogin from './../pages/lte/pages/login.js';
import PagesRegister from './../pages/lte/pages/register.js';
import PagesMessenger from './../pages/lte/pages/messenger.js';
import PagesDataManagement from './../pages/lte/pages/data-management.js';
import PagesFileManager from './../pages/lte/pages/file-manager.js';
import PagesPricing from './../pages/lte/pages/pricing.js';
import Profile from './../pages/lte/profile/profile.js';
import Calendar from '../pages/lte/calendar/calendar.js';
import Settings from './../pages/lte/settings/settings.js';
import Helper from './../pages/lte/helper/helper.js';

const AppRoute = [
  {
    path: '*', 
    element: <App />,
    children: [
    	{ path: '', element: <Navigate to='lte/dashboard' /> },
    	{ path: 'lte/dashboard', element: <Dashboard /> },
    	{ path: 'lte/analytics', element: <Analytics /> },
    	{ path: 'lte/email/*', 
    		children: [
					{ path: 'inbox', element: <EmailInbox /> },
					{ path: 'compose', element: <EmailCompose /> },
					{ path: 'detail', element: <EmailDetail /> }
				]
			},
    	{ path: 'lte/widgets', element: <Widgets /> },
    	{ path: 'lte/pos/*', 
    		children: [
					{ path: 'customer-order', element: <PosCustomerOrder /> },
					{ path: 'kitchen-order', element: <PosKitchenOrder /> },
					{ path: 'counter-checkout', element: <PosCounterCheckout /> },
					{ path: 'table-booking', element: <PosTableBooking /> },
					{ path: 'menu-stock', element: <PosMenuStock /> }
				]
			},
    	{ path: 'lte/ui/*', 
    		children: [
					{ path: 'bootstrap', element: <UiBootstrap /> },
					{ path: 'buttons', element: <UiButtons /> },
					{ path: 'card', element: <UiCard /> },
					{ path: 'icons', element: <UiIcons /> },
					{ path: 'modal-notifications', element: <UiModalNotifications /> },
					{ path: 'typography', element: <UiTypography /> },
					{ path: 'tabs-accordions', element: <UiTabsAccordions /> },
				]
			},
    	{ path: 'lte/form/*', 
    		children: [
					{ path: 'elements', element: <FormElements /> },
					{ path: 'plugins', element: <FormPlugins /> },
					{ path: 'wizards', element: <FormWizards /> }
				]
			},
    	{ path: 'lte/table/*', 
    		children: [
					{ path: 'elements', element: <TableElements /> },
					{ path: 'plugins', element: <TablePlugins /> }
				]
			},
    	{ path: 'lte/chart/*', 
    		children: [
					{ path: 'chart-js', element: <ChartJs /> },
					{ path: 'chart-apex', element: <ChartApex /> }
				]
			},
    	{ path: 'lte/layout/*', 
    		children: [
					{ path: 'starter-page', element: <LayoutStarter /> },
					{ path: 'fixed-footer', element: <LayoutFixedFooter /> },
					{ path: 'full-height', element: <LayoutFullHeight /> },
					{ path: 'full-width', element: <LayoutFullWidth /> },
					{ path: 'boxed-layout', element: <LayoutBoxedLayout /> },
					{ path: 'collapsed-sidebar', element: <LayoutCollapsedSidebar /> },
					{ path: 'top-nav', element: <LayoutTopNav /> },
					{ path: 'mixed-nav', element: <LayoutMixedNav /> },
					{ path: 'mixed-nav-boxed-layout', element: <LayoutMixedNavBoxedLayout /> }
				]
			},
    	{ path: 'lte/pages/*', 
    		children: [
					{ path: 'scrum-board', element: <PagesScrumBoard /> },
					{ path: 'products', element: <PagesProducts /> },
					{ path: 'product-details', element: <PagesProductDetails /> },
					{ path: 'orders', element: <PagesOrders /> },
					{ path: 'order-details', element: <PagesOrderDetails /> },
					{ path: 'gallery', element: <PagesGallery /> },
					{ path: 'search-results', element: <PagesSearchResults /> },
					{ path: 'coming-soon', element: <PagesComingSoon /> },
					{ path: 'error', element: <PagesError /> },
					{ path: 'login', element: <PagesLogin /> },
					{ path: 'register', element: <PagesRegister /> },
					{ path: 'messenger', element: <PagesMessenger /> },
					{ path: 'data-management', element: <PagesDataManagement /> },
					{ path: 'file-manager', element: <PagesFileManager /> },
					{ path: 'pricing', element: <PagesPricing /> }
				]
			},
    	{ path: 'lte/map', element: <Map /> },
    	{ path: 'lte/profile', element: <Profile /> },
    	{ path: 'lte/calendar', element: <Calendar /> },
    	{ path: 'lte/settings', element: <Settings /> },
    	{ path: 'lte/helper', element: <Helper /> },
    	{ path: '*', element: <PagesError /> }
		]
  }
];


export default AppRoute;