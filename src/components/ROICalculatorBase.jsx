import { useState } from 'react';
import { calculateROI } from '../utils/calculateROI';
import CalculatorInputs from './CalculatorInputs';
import CalculatorResults from './CalculatorResults';

const ROICalculatorBase = ({ title, fieldConfig, initialInputs }) => {
	const [inputs, setInputs] = useState(initialInputs);
	const [results, setResults] = useState({
		visits: 0,
		leads: 0,
		costPerLead: 0,
		sales: 0,
		revenue: 0,
		profit: 0,
		roi: '0%',
	});

	const constraints = {
		cpc: { min: 0.1, max: 400 },
		adSpend: { min: 100, max: 100000 },
		conversionRate: { min: 0.5, max: 100 },
		closeRate: { min: 1, max: 100 },
		avgCustomerValue: { min: 100, max: 500000 },
		avgProfitMargin: { min: 1, max: 99 },
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		let parsedValue = parseFloat(value);

		if (constraints[name]) {
			const { min, max } = constraints[name];
			parsedValue = Math.min(Math.max(parsedValue || 0, min), max);
		}

		const updatedInputs = { ...inputs, [name]: parsedValue };
		setInputs(updatedInputs);

		const newResults = calculateROI(updatedInputs);
		setResults(newResults);
	};

	return (
		<div className='mx-auto xl:max-w-[80%] py-4 px-8 bg-[#0b0b0b] rounded-lg shadow-lg'>
			<h1 className='text-2xl md:text-4xl my-8 font-bold text-center text-white border-b-2 border-[#ff8c02] pb-2'>
				{title}
			</h1>
			<div className='flex flex-col lg:flex-row gap-6 justify-center items-center'>
				<div className='flex-1'>
					<CalculatorInputs
						fields={fieldConfig}
						handleChange={handleChange}
						inputs={inputs}
					/>
				</div>
				<CalculatorResults results={results} />
			</div>
		</div>
	);
};

export default ROICalculatorBase;
