import { useState } from 'react';
import EcommerceROICalculator from './EcommerceROICalculator';
import ServiceROICalculator from './ServiceROICalculator';

const TABS = {
	service: {
		label: 'Service-Based',
		component: ServiceROICalculator,
	},
	ecommerce: {
		label: 'E-Commerce',
		component: EcommerceROICalculator,
	},
};

const CalculatorTabs = () => {
	const [activeTab, setActiveTab] = useState('service');
	const ActiveTabComponent = TABS[activeTab].component;

	return (
		<div className='w-full max-w-[95%] mx-auto bg-[#0b0b0b] shadow-lg p-8 rounded-lg'>
			<div className='relative w-[300px] mx-auto mb-6'>
				<span
					className={`
            absolute top-0 left-0 h-full w-1/2 bg-[#ff8c02] rounded-md
            transform transition-transform duration-300 ease-in-out
            ${activeTab === 'ecommerce' ? 'translate-x-full' : 'translate-x-0'}
          `}
				/>
				<div className='relative z-10 flex text-sm font-semibold'>
					<button
						onClick={() => setActiveTab('service')}
						className={`
              flex-1 py-2 rounded-md text-center
              ${
								activeTab === 'service' ? 'text-white' : 'text-white opacity-70'
							}
            `}
					>
						{TABS.service.label}
					</button>
					<button
						onClick={() => setActiveTab('ecommerce')}
						className={`
              flex-1 py-2 rounded-md text-center
              ${
								activeTab === 'ecommerce'
									? 'text-white'
									: 'text-white opacity-70'
							}
            `}
					>
						{TABS.ecommerce.label}
					</button>
				</div>
			</div>
			<ActiveTabComponent />
		</div>
	);
};

export default CalculatorTabs;
