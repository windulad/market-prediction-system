import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

const filterCategories = [
	{ id: 'occasions', name: 'Occasions' },
	{ id: 'time_based', name: 'Time-Based' },
	{ id: 'dietary_needs', name: 'Dietary Needs' },
	{ id: 'budget', name: 'Budget' },
	{ id: 'experience_type', name: 'Experience Type' },
	{ id: 'cleanliness_focused', name: 'Cleanliness Focused' },
];

const FilterSideBarRestaurants = () => {
	const [openFilters, setOpenFilters] = useState(null);

	const toggleFilter = (id) => {
		setOpenFilters((prev) => (prev === id ? null : id));
	};

	const isFilterOpen = (id) => openFilters === id

	const [formData, setFormData] = useState({
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
	});

	const renderFilterOptions = (filterId) => {
		switch (filterId) {
			case 'occasions':
				return (
					<div className="space-y-2">
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.occasions.dateNight} 
							onChange={(e) =>
								setFormData({...formData,occasions: {...formData.occasions,dateNight: e.target.checked,},})
							}
							/>
							<span className="ml-2">Date Night</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.occasions.familyFriendly} 
							onChange={(e) =>
								setFormData({...formData,occasions: {...formData.occasions,familyFriendly: e.target.checked,},})
							}
							/>
							<span className="ml-2">Family Friendly</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.occasions.birthdayDinner} 
							onChange={(e) =>
								setFormData({...formData,occasions: {...formData.occasions,birthdayDinner: e.target.checked,},})
							}
							/>
							<span className="ml-2">Birthday Dinner</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.occasions.soloDining} 
							onChange={(e) =>
								setFormData({...formData,occasions: {...formData.occasions,soloDining: e.target.checked,},})
							}
							/>
							<span className="ml-2">Solo Dining</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.occasions.groupHangout} 
							onChange={(e) =>
								setFormData({...formData,occasions: {...formData.occasions,groupHangout: e.target.checked,},})
							}
							/>
							<span className="ml-2">Group Hangout</span>
						</label>
					</div>
				);

			case 'time_based':
				return (
					<div className="space-y-2">
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.time_based.quickLunch} 
							onChange={(e) =>
								setFormData({...formData,time_based: {...formData.time_based,quickLunch: e.target.checked,},})
							}
							/>
							<span className="ml-2">Quick Lunch</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.time_based.lateNightEats} 
							onChange={(e) =>
								setFormData({...formData,time_based: {...formData.time_based,lateNightEats: e.target.checked,},})
							}
							/>
							<span className="ml-2">Late Night Eats</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.time_based.weekendBrunch} 
							onChange={(e) =>
								setFormData({...formData,time_based: {...formData.time_based,weekendBrunch: e.target.checked,},})
							}
							/>
							<span className="ml-2">Weekend Brunch</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.time_based.OpenNow} 
							onChange={(e) =>
								setFormData({...formData,time_based: {...formData.time_based,OpenNow: e.target.checked,},})
							}
							/>
							<span className="ml-2">Open Now</span>
						</label>
					</div>
				);

			case 'dietary_needs':
				return (
					<div className="space-y-2">
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.dietary_needs.veganOptions} 
							onChange={(e) =>
								setFormData({...formData,dietary_needs: {...formData.dietary_needs,veganOptions: e.target.checked,},})
							}
							/>
							<span className="ml-2">Vegan Options</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.dietary_needs.halalFriendly} 
							onChange={(e) =>
								setFormData({...formData,dietary_needs: {...formData.dietary_needs,halalFriendly: e.target.checked,},})
							}
							/>
							<span className="ml-2">Halal-Friendly</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.dietary_needs.glutenFree} 
							onChange={(e) =>
								setFormData({...formData,dietary_needs: {...formData.dietary_needs,glutenFree: e.target.checked,},})
							}
							/>
							<span className="ml-2">Gluten-Free</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.dietary_needs.lowCalorie} 
							onChange={(e) =>
								setFormData({...formData,dietary_needs: {...formData.dietary_needs,lowCalorie: e.target.checked,},})
							}
							/>
							<span className="ml-2">Low-Calorie</span>
						</label>
					</div>
				);

			case 'budget':
				return (
					<div className="space-y-2">
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.budget.budgetFriendly} 
							onChange={(e) =>
								setFormData({...formData,budget: {...formData.budget,budgetFriendly: e.target.checked,},})
							}
							/>
							<span className="ml-2">Budget Friendly</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.budget.midRange} 
							onChange={(e) =>
								setFormData({...formData,budget: {...formData.budget,midRange: e.target.checked,},})
							}
							/>
							<span className="ml-2">Mid-Range</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.budget.highEndDining} 
							onChange={(e) =>
								setFormData({...formData,budget: {...formData.budget,highEndDining: e.target.checked,},})
							}
							/>
							<span className="ml-2">High-End Dining</span>
						</label>
					</div>
				);

			case 'experience_type':
				return (
					<div className="space-y-2">
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.experience_type.romanticVibes} 
							onChange={(e) =>
								setFormData({...formData,experience_type: {...formData.experience_type,romanticVibes: e.target.checked,},})
							}
							/>
							<span className="ml-2">Romantic Vibes</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.experience_type.trendySpots} 
							onChange={(e) =>
								setFormData({...formData,experience_type: {...formData.experience_type,trendySpots: e.target.checked,},})
							}
							/>
							<span className="ml-2">Trendy Spots</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.experience_type.quietAndCozy} 
							onChange={(e) =>
								setFormData({...formData,experience_type: {...formData.experience_type,quietAndCozy: e.target.checked,},})
							}
							/>
							<span className="ml-2">Quiet & Cozy</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.experience_type.greatForPhotos} 
							onChange={(e) =>
								setFormData({...formData,experience_type: {...formData.experience_type,greatForPhotos: e.target.checked,},})
							}
							/>
							<span className="ml-2">Great for Photos</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.experience_type.liveMusic} 
							onChange={(e) =>
								setFormData({...formData,experience_type: {...formData.experience_type,liveMusic: e.target.checked,},})
							}
							/>
							<span className="ml-2">Live Music</span>
						</label>
					</div>
				);

			case 'cleanliness_focused':
				return (
					<div className="space-y-2">
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.cleanliness_focused.spotlessDining} 
							onChange={(e) =>
								setFormData({...formData,cleanliness_focused: {...formData.cleanliness_focused,spotlessDining: e.target.checked,},})
							}
							/>
							<span className="ml-2">Spotless Dining</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.cleanliness_focused.cleanBathrooms} 
							onChange={(e) =>
								setFormData({...formData,cleanliness_focused: {...formData.cleanliness_focused,cleanBathrooms: e.target.checked,},})
							}
							/>
							<span className="ml-2">Clean Bathrooms</span>
						</label>
						<label className="flex items-center py-2">
							<input type="checkbox" className="form-checkbox" 
							checked={formData.cleanliness_focused.highHygieneStandards} 
							onChange={(e) =>
								setFormData({...formData,cleanliness_focused: {...formData.cleanliness_focused,highHygieneStandards: e.target.checked,},})
							}
							/>
							<span className="ml-2">High Hygiene Standards</span>
						</label>
					</div>
				);
					

			default:
				return null;
		}
	};

	return (
		<div className="flex">
			{/* Sidebar */}
			<aside className="fixed top-48 left-6 w-80 bg-white p-4 px-6 z-50 h-full shadow-[4px_0_10px_-2px_rgba(0,0,0,0.1)] ">
				<ul className="space-y-2">
					{filterCategories.map((cat) => (
						<li key={cat.id}>
							<button
								onClick={() => toggleFilter(cat.id)}
								className="w-full flex justify-between items-center text-left px-3 py-2 rounded hover:bg-gray-100"
							>
								<span className="font-medium">{cat.name}</span>
								{isFilterOpen(cat.id) ? (
									<ChevronDown className="h-4 w-4" />
								) : (
									<ChevronRight className="h-4 w-4" />
								)}
							</button>
						</li>
					))}
				</ul>
			</aside>

			{/* Filter Options Panel */}
			<div className={`fixed top-44 left-80 z-40 w-72 pl-8 py-4 h-full transform transition-transform duration-[1000ms] text-white bg-indigo-500  shadow-[4px_0_10px_-2px_rgba(0,0,0,0.1)] 
				${openFilters ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<div className="relative flex">
				<form className="p-6 rounded w-full max-w-xl space-y-10">
					<div>
						<p className="text-md font-semibold">
							{openFilters && renderFilterOptions(openFilters)}
						</p>
					</div>
				</form>
				</div>
			</div>
		</div>
	);
};

export default FilterSideBarRestaurants;
