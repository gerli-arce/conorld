const Menu = [
	{ is_header: true, title: 'Navegación' },
	{ path: '/lte/dashboard', icon: 'bi bi-cpu', title: 'Inicio' },
	{ path: '/lte/analytics', icon: 'bi bi-bar-chart', title: 'Analytics' },
	{ path: '/lte/email', icon: 'bi bi-envelope', title: 'Email',
		children: [
			{ path: '/lte/email/inbox', title: 'Inbox' }, 
			{ path: '/lte/email/compose', title: 'Compose' }, 
			{ path: '/lte/email/detail', title: 'Detail' }
		]
	}, 
	{ is_divider: true }, 
	{ is_header: true, title: 'Components' }, 
	{ path: '/lte/widgets', icon: 'bi bi-columns-gap', title: 'Widgets' }, 
	{ path: '/lte/pos', icon: 'bi bi-bag-check', title: 'POS System',
		highlight: true,
		children: [
			{ path: '/lte/pos/customer-order', title: 'Customer Order' }, 
			{ path: '/lte/pos/kitchen-order', title: 'Kitchen Order' }, 
			{ path: '/lte/pos/counter-checkout', title: 'Counter Checkout' }, 
			{ path: '/lte/pos/table-booking', title: 'Table Booking' }, 
			{ path: '/lte/pos/menu-stock', title: 'Menu Stock' }
		]
	}, 
	{ path: '/lte/ui', icon: 'fa fa-heart', title: 'UI Kits',
		children: [
			{ path: '/lte/ui/bootstrap', title: 'Bootstrap' }, 
			{ path: '/lte/ui/buttons', title: 'Buttons' }, 
			{ path: '/lte/ui/card', title: 'Card' }, 
			{ path: '/lte/ui/icons', title: 'Icons' }, 
			{ path: '/lte/ui/modal-notifications', title: 'Modal & Notifications' }, 
			{ path: '/lte/ui/typography', title: 'Typography' }, 
			{ path: '/lte/ui/tabs-accordions', title: 'Tabs & Accordions' }
		]
	}, 
	{ path: '/lte/form', icon: 'bi bi-pen', title: 'Forms',
		children: [
			{ path: '/lte/form/elements', title: 'Form Elements' }, 
			{ path: '/lte/form/plugins', title: 'Form Plugins' }, 
			{ path: '/lte/form/wizards', title: 'Wizards' }
		]
	}, 
	{ path: '/lte/table', icon: 'bi bi-grid-3x3', title: 'Tables',
		children: [
			{ path: '/lte/table/elements', title: 'Table Elements' },
			{ path: '/lte/table/plugins', title: 'Table Plugins' }
		]
	}, 
	{ path: '/lte/chart', icon: 'bi bi-pie-chart', title: 'Charts',
		children: [
			{ path: '/lte/chart/chart-js', title: 'Chart.js' },
			{ path: '/lte/chart/chart-apex', title: 'Apexcharts.js' }
		]
	}, 
	{ path: '/lte/map', icon: 'bi bi-compass', title: 'Map' }, 
	{ path: '/lte/layout', icon: 'bi bi-layout-sidebar', title: 'Layout',
		children: [
			{ path: '/lte/layout/starter-page', title: 'Starter Page' }, 
			{ path: '/lte/layout/fixed-footer', title: 'Fixed Footer' }, 
			{ path: '/lte/layout/full-height', title: 'Full Height' }, 
			{ path: '/lte/layout/full-width', title: 'Full Width' }, 
			{ path: '/lte/layout/boxed-layout', title: 'Boxed Layout' }, 
			{ path: '/lte/layout/collapsed-sidebar', title: 'Collapsed Sidebar' }, 
			{ path: '/lte/layout/top-nav', title: 'Top Nav' }, 
			{ path: '/lte/layout/mixed-nav', title: 'Mixed Nav' }, 
			{ path: '/lte/layout/mixed-nav-boxed-layout', title: 'Mixed Nav Boxed Layout' }
		]
	}, 
	{ path: '/lte/pages', icon: 'bi bi-collection', title: 'Pages',
		children: [
			{ path: '/lte/pages/scrum-board', title: 'Scrum Board' }, 
			{ path: '/lte/pages/products', title: 'Products' }, 
			{ path: '/lte/pages/product-details', title: 'Product Details' }, 
			{ path: '/lte/pages/orders', title: 'Orders' }, 
			{ path: '/lte/pages/order-details', title: 'Order Details' }, 
			{ path: '/lte/pages/gallery', title: 'Gallery' }, 
			{ path: '/lte/pages/search-results', title: 'Search Results' }, 
			{ path: '/lte/pages/coming-soon', title: 'Coming Soon Page' }, 
			{ path: '/lte/pages/error', title: 'Error Page' }, 
			{ path: '/lte/pages/login', title: 'Login' }, 
			{ path: '/lte/pages/register', title: 'Register' }, 
			{ path: '/lte/pages/messenger', title: 'Messenger' }, 
			{ path: '/lte/pages/data-management', title: 'Data Management' },
			{ path: '/lte/pages/file-manager', title: 'File Manager' }, 
			{ path: '/lte/pages/pricing', title: 'Pricing Page' }
		]
	}, 
	{ is_divider: true }, 
	{ is_header: true, title: 'Users' }, 
	{ path: '/lte/profile', icon: 'bi bi-people', title: 'Profile' }, 
	{ path: '/lte/calendar', icon: 'bi bi-calendar4', title: 'Calendar' }, 
	{ path: '/lte/settings', icon: 'bi bi-gear', title: 'Settings' }, 
	{ path: '/lte/helper', icon: 'bi bi-gem',	title: 'Helper' }
];

export default Menu;