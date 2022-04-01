import React from 'react'
import {View,Image }from "react-native"

const Headers = (props) => {
  return (
    <View>
      <Image style={{width:50,height:50}} source={props.user} />
    </View>
  )
}
export default Headers