import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const PLAN_PRICE_ID = {
  seeker_pro: "price_1TgaOsAXuYTD7QwvVjNcoye1",
  seeker_premium: "price_1TgbRoAXuYTD7QwvxAla2dAC",
  recruiter_growth: "price_1TgbUZAXuYTD7QwvovxyMQqU",
  recruiter_enterprise: "price_1Tgb5GAXuYTD7QwvzszsWC8S",
};
