import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';
import { useContext } from "react";
import { SessionContext } from "../../context/SessionContext";
import Axios from 'axios';
import HomeIcon from "../business_components/sidebar_icons/home.png";
import AdsIcon from "../business_components/sidebar_icons/ads.png";
import ShopInfoIcon from "../business_components/sidebar_icons/shop_info.png";
import MediaIcon from "../business_components/sidebar_icons/media.png";
import ConnectIcon from "../business_components/sidebar_icons/connect.png";
import ReviewsIcon from "../business_components/sidebar_icons/reviews.png";
import GradingIcon from "../business_components/sidebar_icons/grading.png";
import ActivationIcon from "../business_components/sidebar_icons/activation.png";
import InboxIcon from "../business_components/sidebar_icons/inbox.png";
import HistoryIcon from "../business_components/sidebar_icons/history.png";
import FutureIcon from "../business_components/sidebar_icons/future.png";
import CTAIcon from "../business_components/sidebar_icons/cta.png";

function Sidebar() {
	// GET sessionValue
	const { sessionValue, setSessionValue } = useContext(SessionContext);

	console.log(sessionValue)

	// Navigation
	const navigate = useNavigate();

	const menuItems = [
		{ 
			label: "Home", 
			path: "/business",
			icon: HomeIcon
		},
		{ 
			label: "Ads", 
			path: "/business/ads",
			icon: AdsIcon
		},
		{ 
			label: "Shop Info", 
			path: "/shop-info",
			icon: ShopInfoIcon
		},
		{ 
			label: "Media", 
			path: "/media",
			icon: MediaIcon
		},
		{ 
			label: "Connect", 
			path: "/connect",
			icon: ConnectIcon
		},
		{ 
			label: "Reviews", 
			path: "/reviews",
			icon: ReviewsIcon
		},
		{ 
			label: "Grading", 
			path: "/grading",
			icon: GradingIcon
		},
		{ 
			label: "Activation", 
			path: "/activation",
			icon: ActivationIcon
		},
		{ 
			label: "Inbox", 
			path: "/inbox",
			icon: InboxIcon
		},
		{ 
			label: "History", 
			path: "/history",
			icon: HistoryIcon
		},
		{ 
			label: "Future", 
			path: "/future",
			icon: FutureIcon
		},
		{ 
			label: "CTA", 
			path: "/cta",
			icon: CTAIcon
		},
	];

	return (
		<div>
			<ul className="space-y-2 font-medium">
				{menuItems.map((item, index) => (
				<li key={index}>
					<button
						onClick={() => navigate(item.path)}
						className="w-full flex items-center gap-3 pl-3 py-2"
					>
						<img src={item.icon} alt={item.name} className="w-5 h-5" />
						<span>{item.label}</span>
					</button>
				</li>
				))}
			</ul>
		</div>
	);
};

export default Sidebar;
