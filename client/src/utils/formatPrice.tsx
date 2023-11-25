const formatPrice = (price: string) => {
	return Intl.NumberFormat('ru-RU').format(Number(price.replace('$', '')));
};

export default formatPrice;