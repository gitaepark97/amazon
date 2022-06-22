import { useEffect } from 'react'
import { logout, selectedUser } from '../features/auth/authSlice'
import HeaderComponent from '../features/products/components/Header.component'
import ProductComponent from '../features/products/components/Product.component'
import { getProducts } from '../features/products/productSlice'
import { useAppDispatch, useAppSelector } from '../hooks/redux/hooks'

const HomePage = () => {
  const dispatch = useAppDispatch()

  const { cart, products } = useAppSelector(state => state.product)

  console.log(products)

  useEffect(() => {
    dispatch(getProducts())
  }, [])

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <div>
      <HeaderComponent />
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '48px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '48px',
        }}
      >
        {products.length > 0 && products.map(product => <ProductComponent key={product._id} product={product} />)}
      </div>
    </div>
  )
}

export default HomePage
