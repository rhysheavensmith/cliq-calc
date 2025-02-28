import ROICalculatorBase from '../components/ROICalculatorBase';

const ServiceROICalculator = () => {
	const fieldConfig = [
		{
			name: 'cpc',
			label: 'CPC',
			min: '0.10',
			max: '400',
			step: '0.01',
			prefix: '$',
			suffix: '',
			question:
				'Average cost per click for keywords relating to your services?',
		},
		{
			name: 'adSpend',
			label: 'Ad Spend',
			min: '100',
			max: '100000',
			step: '10',
			prefix: '$',
			suffix: '',
			question: 'Amount intended to be invested into Google Ads?',
		},
		{
			name: 'conversionRate',
			label: 'Conversion Rate',
			min: '0.5',
			max: '100',
			step: '0.5',
			prefix: '%',
			suffix: '',
			question: 'Conversion Rate of website visitors to leads (in percentage)?',
		},
		{
			name: 'closeRate',
			label: 'Close Rate',
			min: '1',
			max: '100',
			step: '1',
			prefix: '%',
			suffix: '',
			question: 'Sales Close Rate - how many leads become customers?',
		},
		{
			name: 'avgCustomerValue',
			label: 'Avg Customer Value',
			min: '100',
			max: '500000',
			step: '10',
			prefix: '$',
			suffix: '',
			question: 'What is the lifetime value of each closed customer/client?',
		},
		{
			name: 'avgProfitMargin',
			label: 'Avg Profit Margin',
			min: '1',
			max: '99',
			step: '1',
			prefix: '%',
			suffix: '',
			question: 'What is your profit (margin)?',
		},
	];

	const initialInputs = {
		cpc: 0.1,
		adSpend: 1000,
		conversionRate: 0.5,
		closeRate: 1,
		avgCustomerValue: 100,
		avgProfitMargin: 1,
	};

	return (
		<ROICalculatorBase
			title='ROI Calculator for Service Providers'
			fieldConfig={fieldConfig}
			initialInputs={initialInputs}
		/>
	);
};

export default ServiceROICalculator;
