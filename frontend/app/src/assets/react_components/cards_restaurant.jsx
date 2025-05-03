import Card1Img from '../category_cards/card_1.jpg'
import Card2Img from '../category_cards/card_2.jpg'
import Card3Img from '../category_cards/card_3.jpg'

const restaurants = [
    {
		id: 1,
		name: "The Gourmet Grill",
		location: "Colombo, Sri Lanka",
		rating: 4.5,
		image: Card1Img,
		description: "A cozy urban hideout offering a fusion of Sri Lankan and Mediterranean flavors, perfect for brunch dates and late-night bites alike.",
		cuisine: "Western",
		price: "$$",
  		isOpen: true
	},
	{
		id: 2,
		name: "Spice Hub",
		location: "Kandy, Sri Lanka",
		rating: 4.2,
		image: Card2Img,
		description: "Modern bistro serving handcrafted burgers, gourmet pasta, and locally sourced desserts in a warm, industrial-chic atmosphere.",
		cuisine: "Italian",
		price: "$$$",
  		isOpen: true
	},
	{
		id: 3,
		name: "Ocean Breeze Café",
		location: "Galle, Sri Lanka",
		rating: 4.8,
		image: Card3Img,
		description: "Family-friendly diner with a vibrant menu of Asian street food, sizzling grills, and refreshing mocktails, just minutes from the city center.",
		cuisine: "Vegetarian",
		price: "$$$",
  		isOpen: false
	},
	{
		id: 4,
		name: "The Gourmet Grill",
		location: "Colombo, Sri Lanka",
		rating: 4.5,
		image: Card1Img,
		description: "A cozy urban hideout offering a fusion of Sri Lankan and Mediterranean flavors, perfect for brunch dates and late-night bites alike.",
		cuisine: "Western",
		price: "$$",
  		isOpen: true
	},
	{
		id: 5,
		name: "Spice Hub",
		location: "Kandy, Sri Lanka",
		rating: 4.2,
		image: Card2Img,
		description: "Modern bistro serving handcrafted burgers, gourmet pasta, and locally sourced desserts in a warm, industrial-chic atmosphere.",
		cuisine: "Italian",
		price: "$$$",
  		isOpen: true
	},
	{
		id: 6,
		name: "Ocean Breeze Café",
		location: "Galle, Sri Lanka",
		rating: 4.8,
		image: Card3Img,
		description: "Family-friendly diner with a vibrant menu of Asian street food, sizzling grills, and refreshing mocktails, just minutes from the city center.",
		cuisine: "Vegetarian",
		price: "$$",
  		isOpen: false
	},
	{
		id: 7,
		name: "The Gourmet Grill",
		location: "Colombo, Sri Lanka",
		rating: 4.5,
		image: Card1Img,
		description: "A cozy urban hideout offering a fusion of Sri Lankan and Mediterranean flavors, perfect for brunch dates and late-night bites alike.",
		cuisine: "Western",
		price: "$$",
  		isOpen: true
	},
	{
		id: 8,
		name: "Spice Hub",
		location: "Kandy, Sri Lanka",
		rating: 4.2,
		image: Card2Img,
		description: "Modern bistro serving handcrafted burgers, gourmet pasta, and locally sourced desserts in a warm, industrial-chic atmosphere.",
		cuisine: "Italian",
		price: "$$$",
  		isOpen: true
	},
	{
		id: 9,
		name: "Ocean Breeze Café",
		location: "Galle, Sri Lanka",
		rating: 4.8,
		image: Card3Img,
		description: "Family-friendly diner with a vibrant menu of Asian street food, sizzling grills, and refreshing mocktails, just minutes from the city center.",
		cuisine: "Vegetarian",
		price: "$$$",
  		isOpen: false
	},
	{
		id: 10,
		name: "The Gourmet Grill",
		location: "Colombo, Sri Lanka",
		rating: 4.5,
		image: Card1Img,
		description: "A cozy urban hideout offering a fusion of Sri Lankan and Mediterranean flavors, perfect for brunch dates and late-night bites alike.",
		cuisine: "Western",
		price: "$$",
  		isOpen: true
	},
];
  
function RestaurantCards() {
    return (
		<div className="space-y-6">
			{restaurants.map((restaurant) => (
			<div key={restaurant.id}
			className="flex bg-white w-full h-60 border shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
			>
				<img src={restaurant.image} alt={restaurant.name} 
				className="w-80 h-60 border rounded-xl object-cover" 
				/>
				<div className="px-6 py-4 flex flex-col justify-start">
					<div>
						<h2 className="text-2xl font-bold">{restaurant.name}</h2>
						<p className="text-sm font-medium text-gray-500">{restaurant.location}</p>
						<div className="flex items-center space-x-1 pt-2">
							{[...Array(5)].map((_, i) => (
								<svg
									key={i}
									className={`w-5 h-5 ${i < restaurant.rating ? "text-yellow-400" : "text-gray-300"}`}
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.184 3.63a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.184 3.63c.3.921-.755 1.688-1.54 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.784.57-1.838-.197-1.539-1.118l1.184-3.63a1 1 0 00-.364-1.118L2.32 9.057c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.184-3.63z"/>
								</svg>
							))}
							<span className="text-sm text-yellow-500 font-medium">({restaurant.rating}/5)</span>
						</div>
						<p className="text-sm mt-2 text-gray-600">
							{restaurant.description}
						</p>
						
						<div className="flex justify-between items-center space-x-4 text-sm text-gray-500 pt-8">
							<div>
								<span className="bg-gray-100 px-3 mx-2 py-2 rounded-md">
									{restaurant.cuisine}
								</span>
								<span className="bg-gray-100 px-3 mx-2 py-2 rounded-md">
									{restaurant.price}
								</span>
								<span className={`px-3 mx-2 py-2 rounded-md ${restaurant.isOpen ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
									{restaurant.isOpen ? 'Open now' : 'Closed'}
								</span>
							</div>
							<div>
								<button className="text-sm px-3 py-2 rounded-md text-white bg-indigo-600 font-medium hover:underline">
									More details
								</button>
							</div>
							
							
						</div>
					</div>
					
				</div>
			</div>
			))}
		</div>
    );
}
export default RestaurantCards;