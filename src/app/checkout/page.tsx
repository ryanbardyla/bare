'use client'

// app/checkout/page.jsx
import { metadata } from "../layout"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, CreditCard, Check, AlertTriangle } from 'lucide-react'
import { useCartStore } from '../../lib/store/cartStore'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardName: '',
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState(null)

  // Calculate order totals
  const subtotal = getTotal()
  const shipping = subtotal > 50 ? 0 : 5.99
  const total = subtotal + shipping

  if (items.length === 0) {
    return (
      <div className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">You need to add items to your cart before checking out.</p>
            <Link 
              href="/products" 
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Browse Products <ArrowLeft className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const validateForm = () => {
    const newErrors = {}
    
    // Validate contact info
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    
    // Validate shipping address
    if (!formData.address.trim()) newErrors.address = 'Address is required'
    if (!formData.city.trim()) newErrors.city = 'City is required'
    if (!formData.state.trim()) newErrors.state = 'State is required'
    if (!formData.zipCode.trim()) newErrors.zipCode = 'Zip code is required'
    
    // Validate payment details
    if (!formData.cardName.trim()) newErrors.cardName = 'Name on card is required'
    if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required'
    else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) newErrors.cardNumber = 'Card number is invalid'
    if (!formData.expMonth.trim()) newErrors.expMonth = 'Required'
    if (!formData.expYear.trim()) newErrors.expYear = 'Required'
    if (!formData.cvv.trim()) newErrors.cvv = 'Required'
    else if (!/^\d{3,4}$/.test(formData.cvv)) newErrors.cvv = 'CVV is invalid'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setPaymentStatus('processing')
    
    // Simulate API call with timeout
    setTimeout(() => {
      // 90% chance of success (for demo purposes)
      const isSuccess = Math.random() < 0.9
      
      if (isSuccess) {
        setPaymentStatus('success')
        clearCart()
        setTimeout(() => {
          router.push('/checkout/success')
        }, 2000)
      } else {
        setPaymentStatus('error')
        setIsSubmitting(false)
      }
    }, 2000)
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        {/* Checkout status message */}
        {paymentStatus && (
          <div className={`mb-6 p-4 rounded-md ${
            paymentStatus === 'processing' ? 'bg-blue-50 text-blue-700' : 
            paymentStatus === 'success' ? 'bg-green-50 text-green-700' : 
            'bg-red-50 text-red-700'
          }`}>
            <div className="flex items-center">
              {paymentStatus === 'processing' && (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-3"></div>
              )}
              {paymentStatus === 'success' && (
                <Check className="h-5 w-5 mr-3" />
              )}
              {paymentStatus === 'error' && (
                <AlertTriangle className="h-5 w-5 mr-3" />
              )}
              <p>
                {paymentStatus === 'processing' && 'Processing your payment...'}
                {paymentStatus === 'success' && 'Payment successful! Redirecting to confirmation page...'}
                {paymentStatus === 'error' && 'There was an error processing your payment. Please try again.'}
              </p>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Contact Information */}
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="p-6 border-b">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md ${errors.state ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md ${errors.zipCode ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.zipCode && <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      id="cardName"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleChange}
                      className={`w-full p-2 border rounded-md ${errors.cardName ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.cardName && <p className="text-red-500 text-xs mt-1">{errors.cardName}</p>}
                  </div>
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="XXXX XXXX XXXX XXXX"
                        className={`w-full p-2 pl-10 border rounded-md ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      <div className="absolute left-3 top-2.5 text-gray-400">
                        <CreditCard className="h-4 w-4" />
                      </div>
                    </div>
                    {errors.cardNumber && <p className="text-red-500 text-xs mt-1">{errors.cardNumber}</p>}
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="expMonth" className="block text-sm font-medium text-gray-700 mb-1">
                        Exp. Month
                      </label>
                      <select
                        id="expMonth"
                        name="expMonth"
                        value={formData.expMonth}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md ${errors.expMonth ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">MM</option>
                        {[...Array(12)].map((_, i) => (
                          <option key={i} value={String(i + 1).padStart(2, '0')}>
                            {String(i + 1).padStart(2, '0')}
                          </option>
                        ))}
                      </select>
                      {errors.expMonth && <p className="text-red-500 text-xs mt-1">{errors.expMonth}</p>}
                    </div>
                    <div>
                      <label htmlFor="expYear" className="block text-sm font-medium text-gray-700 mb-1">
                        Exp. Year
                      </label>
                      <select
                        id="expYear"
                        name="expYear"
                        value={formData.expYear}
                        onChange={handleChange}
                        className={`w-full p-2 border rounded-md ${errors.expYear ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">YYYY</option>
                        {[...Array(10)].map((_, i) => {
                          const year = new Date().getFullYear() + i
                          return (
                            <option key={year} value={year.toString()}>
                              {year}
                            </option>
                          )
                        })}
                      </select>
                      {errors.expYear && <p className="text-red-500 text-xs mt-1">{errors.expYear}</p>}
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <input
                        type="text"
                        id="cvv"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="XXX"
                        className={`w-full p-2 border rounded-md ${errors.cvv ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="p-6 bg-gray-50">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium 
                    ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-blue-700'} transition`}
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </button>
              </div>
            </form>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              {/* Order Items */}
              <div className="mb-4">
                <h3 className="font-medium text-sm text-gray-500 mb-2">
                  {items.length} {items.length === 1 ? 'ITEM' : 'ITEMS'}
                </h3>
                <div className="space-y-3 max-h-60 overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-start">
                      <div className="h-16 w-16 relative flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                          sizes="64px"
                        />
                      </div>
                      <div className="ml-4 flex-grow">
                        <h4 className="text-sm font-medium">{item.name}</h4>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Qty: {item.quantity}</span>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Cost Breakdown */}
              <div className="border-t pt-4 mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>{shipping === 0 ? "Free" : `${shipping.toFixed(2)}`}</span>
                </div>
                {shipping > 0 && (
                  <div className="text-xs text-gray-500">
                    Free shipping on orders over $50
                  </div>
                )}
                <div className="border-t pt-2 mt-2 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              {/* Return to Cart */}
              <div className="mt-6 text-center">
                <Link href="/cart" className="text-blue-600 hover:text-blue-800 text-sm">
                  Return to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>