const displayPrice = (price) => {
  if(/.+\..+/.test(price)) return price.toString().replace(/((\..)(.+$)?)/, "$2"+"0")
  return price.toString().replace(/([0-9]+$)/, "$1"+".00")
}

export default displayPrice;