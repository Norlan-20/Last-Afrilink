import  React from 'react'
import { Text,View } from 'react-native'
import { connect } from 'react-redux'
import Store from '../Store/configureStore'

const CountItem = (props) => {
    var sd,count,ter,cartData

		// Store.subscribe(() => console.log(Store.getState()))

		Store.subscribe(ter = () => {  
			sd =  Store.getState() 
			return sd
		})
		cartData = ter()
        count = cartData.panierReducer.cart.length
        console.log(count)

    return <View style={{width:"100%", height: "100%"}}><Text>{count}</Text></View>
}

const mapStateToProps = (state) => {
	return {
		cart: state.panierReducer.cart
	}
}

export default connect(mapStateToProps)(CountItem)