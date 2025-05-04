import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import FilterImg1 from '../wellness_components/filter_icons/experience_type.png';
import FilterImg2 from '../wellness_components/filter_icons/cleanliness_focused.png';
import FilterImg3 from '../wellness_components/filter_icons/ambience_and_comfort.png';
import FilterImg4 from '../wellness_components/filter_icons/staff_experience.png';
import FilterImg5 from '../wellness_components/filter_icons/product_quality.png';
import FilterImg6 from '../wellness_components/filter_icons/budget.png';

const filterCategories = [
	{ id: 'experience_type', name: 'Experience Type', img: FilterImg1 },
	{ id: 'cleanliness_focused', name: 'Cleanliness Focused', img: FilterImg2 },
	{ id: 'ambience_and_comfort', name: 'Ambience & Comfort', img: FilterImg3 },
	{ id: 'staff_experience', name: 'Staff Experience', img: FilterImg4 },
	{ id: 'product_quality', name: 'Product Quality', img: FilterImg5 },
	{ id: 'budget', name: 'Budget', img: FilterImg6 },
];

const defaultFormData = {
	experience_type: {
		dateNight: false,
		familyFriendly: false,
		birthdayDinner: false,
		soloDining: false,
		groupHangout: false,
	},
	cleanliness_focused: {
		quickLunch: false,
		lateNightEats: false,
		weekendBrunch: false,
		OpenNow: false,
	},
	ambience_and_comfort: {
		veganOptions: false,
		halalFriendly: false,
		glutenFree: false,
		lowCalorie: false,
	},
	staff_experience: {
		budgetFriendly: false,
		midRange: false,
		highEndDining: false,
	},
	product_quality: {
		romanticVibes: false,
		trendySpots: false,
		quietAndCozy: false,
		greatForPhotos: false,
		liveMusic: false,
	},
	budget: {
		spotlessDining: false,
		cleanBathrooms: false,
		highHygieneStandards: false,
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
	experience_type: {
		luxurySpaDay: 'Luxury Spa Day',
		quickRefresh: 'Quick Refresh',
		holisticWellness: 'Holistic Wellness',
		trendySpot: 'Trendy Spot',
		traditionalAyurveda: 'Traditional Ayurveda',
	},
	cleanliness_focused: {
		spotlessFacilities: 'Spotless Facilities',
		strictSanitation: 'Strict Sanitation',
		cleanAndComfortable: 'Clean & Comfortable',
	},
	ambience_and_comfort: {
		relaxingVibes: 'Relaxing Vibes',
		elegantDecor: 'Elegant Decor',
		quietAndPeaceful: 'Quiet & Peaceful',
		moodBoosting: 'Mood Boosting',
	},
	staff_experience: {
		friendlyStaff: 'Friendly Staff',
		highlySkilled: 'Highly Skilled',
		greatCommunication: 'Great Communication',
		personalizedService: 'Personalized Service',
	},
	product_quality: {
		premiumSkinCare: 'Premium Skin Care',
		topHairProducts: 'Top Hair Products',
		naturalIngredients: 'Natural Ingredients',
	},
	budget: {
		budgetFriendly: 'Budget-Friendly',
		midRange: 'Mid-Range',
		premiumExperience: 'Premium Experience',
	},
};

const FilterSideBarWellness = () => {
	const [openFilter, setOpenFilter] = useState({
		occasions: false,
		time_based: false,
		dietary_needs: false,
		budget: false,
		experience_type: false,
		cleanliness_focused: false,
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

export default FilterSideBarWellness;
