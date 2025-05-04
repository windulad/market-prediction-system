import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import FilterImg1 from '../fashion_components/filter_icons/wearing_occasion.png';
import FilterImg2 from '../fashion_components/filter_icons/wearing_season.png';
import FilterImg3 from '../fashion_components/filter_icons/lifestyle_based.png';
import FilterImg4 from '../fashion_components/filter_icons/budget.png';
import FilterImg5 from '../fashion_components/filter_icons/aesthetics.png';

const filterCategories = [
	{ id: 'wearing_occasion', name: 'Wearing Occasion', img: FilterImg1 },
	{ id: 'wearing_season', name: 'Wearing Season', img: FilterImg2 },
	{ id: 'lifestyle_based', name: 'Lifestyle-Based', img: FilterImg3 },
	{ id: 'budget', name: 'Budget', img: FilterImg4 },
	{ id: 'aesthetics', name: 'Aesthetics', img: FilterImg5 },
];

const defaultFormData = {
	wearing_occasion: {
		workWear: false,
		casualOuting: false,
		partyWear: false,
		dateNight: false,
		loungewear: false,
		gymFitness: false,
	},
	wearing_season: {
		summerEssentials: false,
		winterWarmers: false,
		allSeason: false,
		rainReady: false,
	},
	lifestyle_based: {
		activeLifestyle: false,
		minimalistWardrobe: false,
		fashionForward: false,
		ecoFriendly: false,
		frequentTravelers: false,
	},
	budget: {
		budgetFriendly: false,
		balancedQuality: false,
		luxuryPicks: false,
	},
	aesthetics: {
		trendyAndModern: false,
		classicAndTimeless: false,
		boldAndStatement: false,
		softAndNeutral: false,
	},
};

const FilterOptionGroup = ({ options, state, onChange }) => (
	<div className="space-y-2">
		{Object.entries(options).map(([key, label]) => (
		<label key={key} className="flex items-center cursor-pointer pl-4 py-1">
			<input
				type="checkbox"
				className="sr-only peer"
				checked={state[key]}
				onChange={(e) => onChange(key, e.target.checked)}
			/>
			<div 
				class="relative w-7 h-4  peer-focus:outline-none peer-focus:ring-4  rounded-full peer bg-gray-400 
				peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white 
				after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all 
				peer-checked:bg-blue-600"></div>
			<span class="ms-3 text-sm font-normal">{label}</span>
		</label>
		))}
	</div>
);

const filterOptionsMap = {
	wearing_occasion: {
		workWear: 'Workwear',
		casualOuting: 'Casual Outing',
		partyWear: 'Party Wear',
		dateNight: 'Date Night',
		loungewear: 'Loungewear',
		gymFitness: 'Gym/Fitness',
	},
	wearing_season: {
		summerEssentials: 'Summer Essentials',
		winterWarmers: 'Winter Warmers',
		allSeason: 'All-Season',
		rainReady: 'Rain Ready',
	},
	lifestyle_based: {
		activeLifestyle: 'Active Lifestyle',
		minimalistWardrobe: 'Minimalist Wardrobe',
		fashionForward: 'Fashion-Forward',
		ecoFriendly: 'Eco-Friendly',
		frequentTravelers: 'Frequent Travelers',
	},
	budget: {
		budgetFriendly: 'Budget Friendly',
		balancedQuality: 'Balanced Quality',
		luxuryPicks: 'Luxury Picks',
	},
	aesthetics: {
		trendyAndModern: 'Trendy & Modern',
		classicAndTimeless: 'Classic & Timeless',
		boldAndStatement: 'Bold & Statement',
		softAndNeutral: 'Soft & Neutral',
	},
};

const FilterSideBarRestaurants = () => {
	const [openFilter, setOpenFilter] = useState({
		wearing_occasion: false,
		wearing_season: false,
		lifestyle_based: false,
		budget: false,
		aesthetics: false,
	});

	const [formData, setFormData] = useState(defaultFormData);

	const toggleFilter = (id) => {
		setOpenFilter((prev) => ({
			...prev,
			[id]: !prev[id],
		}));
	};
	  

	const handleOptionChange = (category, key, value) => {
		setFormData((prev) => ({
		...prev,
		[category]: {
			...prev[category],
			[key]: value,
		},
		}));
	};

  return (
	<div className="flex">
		<aside className="flex top-48 left-6 w-80 h-screen bg-white p-4 px-6">
			<ul className="space-y-2">
			{filterCategories.map((cat) => (
				<li key={cat.id}>
				<button
					onClick={() => toggleFilter(cat.id)}
					className="w-64 flex justify-between items-center text-left pl-3 py-2 rounded hover:bg-gray-100"
				>
					<div className="flex items-center gap-2">
						<img src={cat.img} className="w-6 h-6" />
						<span className="text-base font-medium text-gray-700 pl-2">{cat.name}</span>
					</div>
					{openFilter[cat.id] ? (
					<ChevronDown className="h-4 w-4" />
					) : (
					<ChevronRight className="h-4 w-4" />
					)}


				</button>
				<div
					className={`transition-all duration-500 ease-in-out overflow-hidden ${
					openFilter[cat.id] ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
					}`}
				>
					<div className="text-sm font-semibold pl-3 pt-2">
					<FilterOptionGroup
						options={filterOptionsMap[cat.id]}
						state={formData[cat.id]}
						onChange={(key, value) => handleOptionChange(cat.id, key, value)}
					/>
					</div>
				</div>
				</li>
			))}
			</ul>
		</aside>
	</div>
  );
};

export default FilterSideBarRestaurants;
