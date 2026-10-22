import heroImg from '../assets/images/hero_cover.jpg';
import part1NoodlesImg from '../assets/images/part1_noodles.jpg';
import part1FriedRiceImg from '../assets/images/part1_fried_rice.jpg';
import part2LasagnaImg from '../assets/images/part2_lasagna.jpg';
import part2PenneImg from '../assets/images/part2_penne.jpg';
import afterPartyImg from '../assets/images/after_party_platter.jpg';
import termsFullImg from '../assets/images/terms_full.jpg';

import type { MenuCategory, TermsData } from '../types';

export const brandInfo = {
  name: "Magic'n'Food",
  tagline: "Unparalleled and Exceptional Local and International Gourmet Cuisine",
  year: "2026",
  subTitle: "MINI FOOD BOWLS & AFTER PARTY MENU",
  heroImage: heroImg,
  heroImageAlt: "Mini food bowls presentation featuring seasoned basmati rice and succulent tiger prawns in cocktail glassware",
  closingQuote: "Crafting memorable culinary experiences with passion, artistry, and authentic flavours."
};

export const menuCategories: MenuCategory[] = [
  {
    id: "mini-bowls-part-1",
    badge: "Part 1 of 2",
    title: "Mini Food Bowls",
    subtitle: "Gourmet Individual Portions",
    notice: "Minimum order of 50 guests • 15% service charge applies",
    primaryImage: part1NoodlesImg,
    primaryImageAlt: "Vibrant stir fried vermicelli bowl garnished with fresh herbs and bell peppers",
    secondaryImage: part1FriedRiceImg,
    secondaryImageAlt: "Savory fried rice bowl loaded with tender succulent prawns and diced garden vegetables",
    layoutVariant: 'default',
    items: [
      {
        id: "mb1-1",
        name: "Chinese Fried Rice with General Tso's Chicken",
        price: "₦6,000"
      },
      {
        id: "mb1-2",
        name: "Surf and Turf Coconut Rice",
        price: "₦6,000"
      },
      {
        id: "mb1-3",
        name: "Slow Cooked Roast Beef and Creamy Mashed Potatoes",
        price: "₦7,500"
      },
      {
        id: "mb1-4",
        name: "Mashed Potatoes with Seafood Balls in Peppercorn Sauce and Glazed Veggies",
        price: "₦8,000"
      },
      {
        id: "mb1-5",
        name: "Basmati Jollof with Grilled Seafood Mix and Plantain",
        price: "₦7,500"
      },
      {
        id: "mb1-6",
        name: "Yam Fries with Pepper Sauce and Yaaji Roasted Gizzards",
        price: "₦5,500"
      },
      {
        id: "mb1-7",
        name: "Basmati Jollof served with Asun and Plantain",
        price: "₦6,500"
      },
      {
        id: "mb1-8",
        name: "Arrabbiata Pasta with Open Belly Tiger Prawns",
        price: "₦7,500"
      }
    ]
  },
  {
    id: "mini-bowls-part-2",
    badge: "Part 2 of 2",
    title: "Mini Food Bowls",
    subtitle: "Chef's Signature Selections",
    notice: "Minimum order of 50 guests • 15% service charge applies",
    primaryImage: part2LasagnaImg,
    primaryImageAlt: "Golden baked mini lasagna bowls with rich sauce and fresh melted cheese",
    secondaryImage: part2PenneImg,
    secondaryImageAlt: "Penne Alfredo tossed with seasoned chicken chunks and sautéed garden greens",
    layoutVariant: 'inverted',
    items: [
      {
        id: "mb2-1",
        name: "Seafood Penne Alfredo",
        price: "₦7,500"
      },
      {
        id: "mb2-2",
        name: "Chicken Penne Alfredo",
        price: "₦6,500"
      },
      {
        id: "mb2-3",
        name: "Native Rice with Peppered Goat Meat Chunks",
        price: "₦5,500"
      },
      {
        id: "mb2-4",
        name: "Jamaican Rice and Peas with Goat Curry and Jerk Chicken Bites",
        price: "₦6,500"
      },
      {
        id: "mb2-5",
        name: "Mini Lasagna Bowls",
        price: "₦7,500"
      },
      {
        id: "mb2-6",
        name: "Basmati Fried Rice with Mini Peppered Snail and Herb Butter Prawn",
        price: "₦7,500"
      },
      {
        id: "mb2-7",
        name: "Bulgur Jollof with Lamb Chops",
        price: "₦10,000"
      },
      {
        id: "mb2-8",
        name: "Stir Fried Vermicelli Noodles with Mongolian Chicken",
        price: "₦7,500"
      }
    ]
  },
  {
    id: "after-party-eats",
    badge: "Night Event Specials",
    title: "After Party Eats",
    subtitle: "Late-night bites — hot, fast and fuss-free",
    notice: "Minimum order of 50 guests",
    primaryImage: afterPartyImg,
    primaryImageAlt: "Loaded after party platter featuring grilled fish, chargrilled chicken, golden yam fries, boli and rich spicy pepper sauces",
    layoutVariant: 'default',
    items: [
      {
        id: "ap-1",
        name: "Grilled Fish and Chips with Salad",
        price: "₦10,000"
      },
      {
        id: "ap-2",
        name: "Chargrilled Chicken and Chips with Salad",
        price: "₦5,000"
      },
      {
        id: "ap-3",
        name: "Yam Fries / Sweet Potato Fries / Fried Plantain with Gizzard in Pepper Sauce",
        price: "₦3,500"
      },
      {
        id: "ap-4",
        name: "Boli with Grilled Fish and Pepper Sauce",
        price: "₦9,500"
      }
    ]
  }
];

export const termsData: TermsData = {
  title: "Terms & Conditions",
  generalTerms: [
    { id: "gt-1", text: "Minimum order of 50 guests." },
    { id: "gt-2", text: "All orders must be confirmed at least 7 days before your event." },
    { id: "gt-3", text: "An 80% deposit is required to fully secure your booking." },
    { id: "gt-4", text: "Final guest count and balance must be completed no later than 5 working days to the event." },
    { id: "gt-5", text: "A 15% service charge applies." },
    { id: "gt-6", text: "Transportation charges apply based on location." }
  ],
  cancellationTitle: "Cancellation & Refunds",
  cancellationTerms: [
    { id: "ct-1", text: "Cancellations made 7+ days in advance: 80% deposit refund." },
    { id: "ct-2", text: "Cancellations made within 4 days: 50% cancellation fee applies." },
    { id: "ct-3", text: "Cancellations within 48 hours are non-refundable due to preparation and ingredient costs." }
  ],
  image: termsFullImg,
  imageAlt: "Eco-friendly craft catering food containers and gourmet pasta bites prepared for event service"
};
