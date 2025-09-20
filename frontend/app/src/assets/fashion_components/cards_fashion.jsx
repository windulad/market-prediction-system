import Card1Img from './fashion_cards_images/card_1.jpg'
import Card2Img from './fashion_cards_images/card_2.jpg'
import Card3Img from './fashion_cards_images/card_3.jpg'
import Card4Img from './fashion_cards_images/card_4.jpg'
import Card5Img from './fashion_cards_images/card_5.jpg'
import Card6Img from './fashion_cards_images/card_6.jpg'
import Card7Img from './fashion_cards_images/card_7.jpg'
import Card8Img from './fashion_cards_images/card_8.jpg'
import Card9Img from './fashion_cards_images/card_9.jpg'
import Card10Img from './fashion_cards_images/card_10.jpg'

const fashions = [
  {
    "id": 1,
    "name": "Urban Threads",
    "location": "Colombo, Sri Lanka",
    "rating": 4.5,
    "image": Card1Img,
    "description": "A trendy boutique offering curated urban streetwear and contemporary fashion pieces for casual and evening wear.",
    "category": "Vintage",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 2,
    "name": "Elegance Atelier",
    "location": "Colombo, Sri Lanka",
    "rating": 4.6,
    "image": Card2Img,
    "description": "A high-end atelier showcasing sophisticated dresses, tailored suits, and timeless accessories for all occasions.",
    "category": "Couture",
    "price": "$$$",
    "isOpen": true
  },
  {
    "id": 3,
    "name": "Boho Chic",
    "location": "Colombo, Sri Lanka",
    "rating": 4.4,
    "image": Card3Img,
    "description": "A vibrant store specializing in bohemian-inspired clothing, eclectic accessories, and relaxed yet stylish ensembles.",
    "category": "Glamorous",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 4,
    "name": "Minimal Mode",
    "location": "Colombo, Sri Lanka",
    "rating": 4.5,
    "image": Card4Img,
    "description": "A sleek boutique offering minimalist designs, clean lines, and versatile pieces for a modern, understated wardrobe.",
    "category": "Minimalist",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 5,
    "name": "Vintage Vogue",
    "location": "Colombo, Sri Lanka",
    "rating": 4.7,
    "image": Card5Img,
    "description": "A curated collection of vintage clothing, retro accessories, and unique finds for fashion lovers with a nostalgic flair.",
    "category": "Vintage",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 6,
    "name": "Street Luxe",
    "location": "Colombo, Sri Lanka",
    "rating": 4.6,
    "image": Card6Img,
    "description": "An urban fashion hotspot combining luxury streetwear, bold prints, and statement accessories for the style-savvy.",
    "category": "Retro",
    "price": "$$$",
    "isOpen": true
  },
  {
    "id": 7,
    "name": "EcoWear Studio",
    "location": "Colombo, Sri Lanka",
    "rating": 4.5,
    "image": Card7Img,
    "description": "A sustainable fashion boutique offering eco-friendly fabrics, ethically made clothing, and stylish conscious choices.",
    "category": "FashClassicion",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 8,
    "name": "Glam & Grace",
    "location": "Colombo, Sri Lanka",
    "rating": 4.4,
    "image": Card8Img,
    "description": "A chic boutique featuring elegant gowns, evening wear, and accessories designed for glamorous occasions and red carpets.",
    "category": "Glamorous",
    "price": "$$$",
    "isOpen": true
  },
  {
    "id": 9,
    "name": "Casual Canvas",
    "location": "Colombo, Sri Lanka",
    "rating": 4.3,
    "image": Card9Img,
    "description": "A relaxed fashion store offering comfortable, everyday wear, versatile basics, and easy-to-style wardrobe staples.",
    "category": "Casual",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 10,
    "name": "Avant Garde Studio",
    "location": "Colombo, Sri Lanka",
    "rating": 4.6,
    "image": Card10Img,
    "description": "A modern design hub featuring bold, experimental pieces, cutting-edge fashion, and statement looks for trendsetters.",
    "category": "Luxury",
    "price": "$$$",
    "isOpen": true
  }
]
;
  
function FashionCards() {
    return (
		<div className="space-y-6">
			{fashions.map((fashion) => (
			<div key={fashion.id}
			className="flex bg-white w-full h-60 border shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
			>
				<img src={fashion.image} alt={fashion.name} 
				className="w-80 h-60 border rounded-xl object-cover" 
				/>
				<div className="px-6 py-4 flex flex-col justify-start">
					<div>
						<h2 className="text-2xl font-bold">{fashion.name}</h2>
						<p className="text-sm font-medium text-gray-500">{fashion.location}</p>
						<div className="flex items-center space-x-1 pt-2">
							{[...Array(5)].map((_, i) => (
								<svg
									key={i}
									className={`w-5 h-5 ${i < fashion.rating ? "text-yellow-400" : "text-gray-300"}`}
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.184 3.63a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.184 3.63c.3.921-.755 1.688-1.54 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.784.57-1.838-.197-1.539-1.118l1.184-3.63a1 1 0 00-.364-1.118L2.32 9.057c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.184-3.63z"/>
								</svg>
							))}
							<span className="text-sm text-yellow-500 font-medium">({fashion.rating}/5)</span>
						</div>
						<p className="text-sm mt-2 text-gray-600">
							{fashion.description}
						</p>
						
						<div className="flex justify-between items-center space-x-4 text-sm text-gray-500 pt-8">
							<div>
								<span className="bg-gray-100 px-3 mx-2 py-2 rounded-md">
									{fashion.category}
								</span>
								<span className="bg-gray-100 px-3 mx-2 py-2 rounded-md">
									{fashion.price}
								</span>
								<span className={`px-3 mx-2 py-2 rounded-md ${fashion.isOpen ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
									{fashion.isOpen ? 'Open now' : 'Closed'}
								</span>
							</div>
							<div>
								<button className="text-sm px-3 py-2 rounded-md text-white bg-indigo-500 font-medium hover:bg-indigo-600">
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
export default FashionCards;