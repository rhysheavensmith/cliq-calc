import logo from '../assets/cliq-logo.webp';

const CalculatorResults = ({ results }) => {
	return (
		<div className='flex-1 bg-[#0b0b0b] text-white rounded-lg p-6 border border-[#ff8c02]'>
			<div className='flex flex-col items-center gap-4 mb-4'>
				<img src={logo} alt='logo' className='h-12' />
				<p className='text-lg text-center'>
					Based on these numbers, here is what you could expect for return on
					investment*
				</p>
			</div>
			<div className='space-y-3'>
				<div className='flex justify-between border-b border-gray-700 pb-2'>
					<span>Visits:</span> <span>{results.visits}</span>
				</div>
				<div className='flex justify-between border-b border-gray-700 pb-2'>
					<span>Leads:</span> <span>{results.leads}</span>
				</div>
				<div className='flex justify-between border-b border-gray-700 pb-2'>
					<span>CPL:</span> <span>${results.costPerLead}</span>
				</div>
				<div className='flex justify-between border-b border-gray-700 pb-2'>
					<span>Sales:</span> <span>{results.sales}</span>
				</div>
				<div className='flex justify-between border-b border-gray-700 pb-2'>
					<span>Revenue:</span> <span>${results.revenue}</span>
				</div>
				<div className='flex justify-between border-b border-gray-700 pb-2'>
					<span>Profit:</span> <span>${results.profit}</span>
				</div>
				<div className='flex justify-between text-xl font-bold border-t border-gray-700 pt-2'>
					<span>Monthly ROI</span> <span>{results.roi}</span>
				</div>
			</div>
		</div>
	);
};

export default CalculatorResults;
