import Card1Img from './wellness_cards_images/card_1.jpg'
import Card2Img from './wellness_cards_images/card_2.jpg'
import Card3Img from './wellness_cards_images/card_3.jpg'
import Card4Img from './wellness_cards_images/card_4.jpg'
import Card5Img from './wellness_cards_images/card_5.jpg'
import Card6Img from './wellness_cards_images/card_6.jpg'
import Card7Img from './wellness_cards_images/card_7.jpg'
import Card8Img from './wellness_cards_images/card_8.jpg'
import Card9Img from './wellness_cards_images/card_9.jpg'
import Card10Img from './wellness_cards_images/card_10.jpg'

const wellnesses = [
  {
    "id": 1,
    "name": "Serenity Spa",
    "location": "Colombo, Sri Lanka",
    "rating": 4.5,
    "image": Card1Img,
    "description": "A tranquil spa retreat offering rejuvenating massages, aromatherapy, and holistic wellness treatments for ultimate relaxation.",
    "category": "Wellness",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 2,
    "name": "Vitality Yoga Studio",
    "location": "Colombo, Sri Lanka",
    "rating": 4.6,
    "image": Card2Img,
    "description": "A calming yoga space providing diverse classes, meditation sessions, and personalized wellness programs for mind and body balance.",
    "category": "Wellness",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 3,
    "name": "Pure Glow Skincare",
    "location": "Colombo, Sri Lanka",
    "rating": 4.4,
    "image": Card3Img,
    "description": "A boutique skincare studio specializing in natural facials, rejuvenating treatments, and personalized beauty consultations.",
    "category": "Wellness",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 4,
    "name": "Mindful Retreat",
    "location": "Colombo, Sri Lanka",
    "rating": 4.5,
    "image": Card4Img,
    "description": "A serene retreat offering mindfulness workshops, guided meditation, and stress-relief sessions in a peaceful environment.",
    "category": "Wellness",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 5,
    "name": "Harmony Fitness Hub",
    "location": "Colombo, Sri Lanka",
    "rating": 4.7,
    "image": Card5Img,
    "description": "A modern fitness center providing strength training, cardio sessions, and wellness coaching to promote holistic health.",
    "category": "Wellness",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 6,
    "name": "Bliss Aromatherapy",
    "location": "Colombo, Sri Lanka",
    "rating": 4.6,
    "image": Card6Img,
    "description": "A calming aromatherapy studio offering essential oil treatments, relaxation therapies, and sensory wellness experiences.",
    "category": "Wellness",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 7,
    "name": "Rejuvenate Spa & Wellness",
    "location": "Colombo, Sri Lanka",
    "rating": 4.5,
    "image": Card7Img,
    "description": "A wellness haven offering massages, hydrotherapy, and holistic treatments designed to restore energy and vitality.",
    "category": "Wellness",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 8,
    "name": "Tranquil Mind Center",
    "location": "Colombo, Sri Lanka",
    "rating": 4.4,
    "image": Card8Img,
    "description": "A peaceful center for meditation, stress management, and mindfulness practices aimed at mental clarity and balance.",
    "category": "Wellness",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 9,
    "name": "Vital Essence Wellness",
    "location": "Colombo, Sri Lanka",
    "rating": 4.3,
    "image": Card9Img,
    "description": "A holistic wellness studio offering nutrition guidance, fitness programs, and therapeutic treatments for a balanced lifestyle.",
    "category": "Wellness",
    "price": "$$",
    "isOpen": true
  },
  {
    "id": 10,
    "name": "Zen Harmony Studio",
    "location": "Colombo, Sri Lanka",
    "rating": 4.6,
    "image": Card10Img,
    "description": "A mindful wellness studio providing yoga, meditation, and relaxation therapies in a calm and restorative atmosphere.",
    "category": "Wellness",
    "price": "$$",
    "isOpen": true
  }
];
  
function WellnessCards() {
    return (
		<div className="space-y-6">
			{wellnesses.map((wellness) => (
			<div key={wellness.id}
			className="flex bg-white w-full h-60 border shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
			>
				<img src={wellness.image} alt={wellness.name} 
				className="w-80 h-60 border rounded-xl object-cover" 
				/>
				<div className="px-6 py-4 flex flex-col justify-start">
					<div>
						<h2 className="text-2xl font-bold">{wellness.name}</h2>
						<p className="text-sm font-medium text-gray-500">{wellness.location}</p>
						<div className="flex items-center space-x-1 pt-2">
							{[...Array(5)].map((_, i) => (
								<svg
									key={i}
									className={`w-5 h-5 ${i < wellness.rating ? "text-yellow-400" : "text-gray-300"}`}
									fill="currentColor"
									viewBox="0 0 20 20"
								>
									<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.184 3.63a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.087 2.24a1 1 0 00-.364 1.118l1.184 3.63c.3.921-.755 1.688-1.54 1.118l-3.087-2.24a1 1 0 00-1.175 0l-3.087 2.24c-.784.57-1.838-.197-1.539-1.118l1.184-3.63a1 1 0 00-.364-1.118L2.32 9.057c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.184-3.63z"/>
								</svg>
							))}
							<span className="text-sm text-yellow-500 font-medium">({wellness.rating}/5)</span>
						</div>
						<p className="text-sm mt-2 text-gray-600">
							{wellness.description}
						</p>
						
						<div className="flex justify-between items-center space-x-4 text-sm text-gray-500 pt-8">
							<div>
								<span className="bg-gray-100 px-3 mx-2 py-2 rounded-md">
									{wellness.category}
								</span>
								<span className="bg-gray-100 px-3 mx-2 py-2 rounded-md">
									{wellness.price}
								</span>
								<span className={`px-3 mx-2 py-2 rounded-md ${wellness.isOpen ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
									{wellness.isOpen ? 'Open now' : 'Closed'}
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
export default WellnessCards;