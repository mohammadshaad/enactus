import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51O5T7VSF2n2SezFqmxk6fU9u5UjJewWX7hTkhLajnyJZgx6tyG4P2vDw9N87eUtaoYtjzKJ76r5hjGtuyRXeGbUI00d2Un5ynP"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}