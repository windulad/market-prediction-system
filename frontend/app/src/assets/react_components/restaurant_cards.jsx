const restaurants = [
    {
		id: 1,
		name: "The Gourmet Grill",
		location: "Colombo, Sri Lanka",
		rating: 4.5,
		image: "https://source.unsplash.com/400x300/?restaurant",
	},
	{
		id: 2,
		name: "Spice Hub",
		location: "Kandy, Sri Lanka",
		rating: 4.2,
		image: "https://source.unsplash.com/400x300/?dining",
	},
	{
		id: 3,
		name: "Ocean Breeze Café",
		location: "Galle, Sri Lanka",
		rating: 4.8,
		image: "https://source.unsplash.com/400x300/?cafe",
	},
	{
		id: 4,
		name: "The Gourmet Grill",
		location: "Colombo, Sri Lanka",
		rating: 4.5,
		image: "https://source.unsplash.com/400x300/?restaurant",
	},
	{
		id: 5,
		name: "Spice Hub",
		location: "Kandy, Sri Lanka",
		rating: 4.2,
		image: "https://source.unsplash.com/400x300/?dining",
	},
	{
		id: 6,
		name: "Ocean Breeze Café",
		location: "Galle, Sri Lanka",
		rating: 4.8,
		image: "https://source.unsplash.com/400x300/?cafe",
	},
	{
		id: 7,
		name: "The Gourmet Grill",
		location: "Colombo, Sri Lanka",
		rating: 4.5,
		image: "https://source.unsplash.com/400x300/?restaurant",
	},
	{
		id: 8,
		name: "Spice Hub",
		location: "Kandy, Sri Lanka",
		rating: 4.2,
		image: "https://source.unsplash.com/400x300/?dining",
	},
	{
		id: 9,
		name: "Ocean Breeze Café",
		location: "Galle, Sri Lanka",
		rating: 4.8,
		image: "https://source.unsplash.com/400x300/?cafe",
	},
	{
		id: 10,
		name: "The Gourmet Grill",
		location: "Colombo, Sri Lanka",
		rating: 4.5,
		image: "https://source.unsplash.com/400x300/?restaurant",
	},
];
  
function RestaurantCards() {
    return (
		<div className="space-y-6">
			{restaurants.map((restaurant) => (
			<div
				key={restaurant.id}
				className="flex bg-white border shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
			>
				<img
				src={restaurant.image}
				alt={restaurant.name}
				className="w-48 h-32 border object-cover"
				/>
				<div className="p-4 flex flex-col justify-between">
				<div>
					<h2 className="text-xl font-semibold">{restaurant.name}</h2>
					<p className="text-gray-500">{restaurant.location}</p>
					<p className="text-yellow-500 font-medium">⭐ {restaurant.rating}</p>
				</div>
				<button className="mt-3 text-sm text-indigo-600 font-medium hover:underline">
					More details
				</button>
				</div>
			</div>
			))}
		</div>
    );
}
export default RestaurantCards;