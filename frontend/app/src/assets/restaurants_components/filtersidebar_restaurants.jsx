import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { SessionContext } from "../../context/SessionContext";
import { ChevronDown, ChevronRight } from 'lucide-react';
import Axios from 'axios';
import FilterImg1 from '../restaurants_components/filter_icons/occasions.png';
import FilterImg2 from '../restaurants_components/filter_icons/time_based.png';
import FilterImg3 from '../restaurants_components/filter_icons/dietary_needs.png';
import FilterImg4 from '../restaurants_components/filter_icons/drink_selection.png';
import FilterImg5 from '../restaurants_components/filter_icons/budget.png';
import FilterImg6 from '../restaurants_components/filter_icons/experience_type.png';
import FilterImg7 from '../restaurants_components/filter_icons/cleanliness_focused.png';
const SERVER_URL = 'http://127.0.0.1:5000';

const filterCategories = [
	{ id: 'occasions', name: 'Occasions', img: FilterImg1 },
	{ id: 'time_based', name: 'Time-Based', img: FilterImg2 },
	{ id: 'dietary_needs', name: 'Dietary Needs', img: FilterImg3 },
	{ id: 'drink_selection', name: 'Drink Selection', img: FilterImg4 },
	{ id: 'budget', name: 'Budget', img: FilterImg5 },
	{ id: 'experience_type', name: 'Experience Type', img: FilterImg6 },
	{ id: 'cleanliness_focused', name: 'Cleanliness Focused', img: FilterImg7 },
];

const defaultFormData = {
	occasions: {
		dateNight: false,
		familyFriendly: false,
		birthdayDinner: false,
		soloDining: false,
		groupHangout: false,
	},
	time_based: {
		quickLunch: false,
		lateNightEats: false,
		weekendBrunch: false,
		OpenNow: false,
	},
	dietary_needs: {
		veganOptions: false,
		halalFriendly: false,
		glutenFree: false,
		lowCalorie: false,
	},
	drink_selection: {
		extensiveBarMenu: false,
		craftCocktails: false,
		nonAlcoholicVariety: false,
		premiumBeverages: false,
	},
	budget: {
		budgetFriendly: false,
		midRange: false,
		highEndDining: false,
	},
	experience_type: {
		romanticVibes: false,
		trendySpots: false,
		quietAndCozy: false,
		greatForPhotos: false,
		liveMusic: false,
	},
	cleanliness_focused: {
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
	occasions: {
		dateNight: 'Date Night',
		familyFriendly: 'Family Friendly',
		birthdayDinner: 'Birthday Dinner',
		soloDining: 'Solo Dining',
		groupHangout: 'Group Hangout',
	},
	time_based: {
		quickLunch: 'Quick Lunch',
		lateNightEats: 'Late Night Eats',
		weekendBrunch: 'Weekend Brunch',
		OpenNow: 'Open Now',
	},
	dietary_needs: {
		veganOptions: 'Vegan Options',
		halalFriendly: 'Halal-Friendly',
		glutenFree: 'Gluten-Free',
		lowCalorie: 'Low-Calorie',
	},
	drink_selection: {
		extensiveBarMenu: 'Extensive Bar Menu',
		craftCocktails: 'Craft Cocktails	',
		nonAlcoholicVariety: 'Non-Alcoholic Variety',
		premiumBeverages: 'Premium Beverages',
	},
	budget: {
		budgetFriendly: 'Budget Friendly',
		midRange: 'Mid-Range',
		highEndDining: 'High-End Dining',
	},
	experience_type: {
		romanticVibes: 'Romantic Vibes',
		trendySpots: 'Trendy Spots',
		quietAndCozy: 'Quiet & Cozy',
		greatForPhotos: 'Great for Photos',
		liveMusic: 'Live Music',
	},
	cleanliness_focused: {
		spotlessDining: 'Spotless Dining',
		cleanBathrooms: 'Clean Bathrooms',
		highHygieneStandards: 'High Hygiene Standards',
	},
};

const FilterSideBarRestaurants = () => {
	const [ responseData, setResponseData ] = useState('');

	const [openFilter, setOpenFilter] = useState({
		occasions: false,
		time_based: false,
		dietary_needs: false,
		drink_selection: false,
		budget: false,
		experience_type: false,
		cleanliness_focused: false,
	});

	const [formData, setFormData] = useState(defaultFormData);

	// console.log(formData);

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

    const handleSubmit = (event) => {
        event.preventDefault();
        // POST email, password to 'SERVER_URL' using Axios
        try{
            Axios.post(SERVER_URL+'/restaurant', formData, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then(response => {
				console.log('Filters sent successfully:', response.data);
                setResponseData(response.data);

                const code = response.data.code;
                const message = response.data.message;

                console.log(code)
                console.log(message)
            })
        } catch(error){
            console.error(error);
        }
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
					<div className="p-4">
						<button 
							onClick={handleSubmit}
							className="text-md px-3 py-2 rounded-md text-white bg-indigo-500 font-medium hover:bg-indigo-600"
						>
							Apply filters
						</button>
					</div>
				</ul>
			</aside>
		</div>
	);
};

export default FilterSideBarRestaurants;
