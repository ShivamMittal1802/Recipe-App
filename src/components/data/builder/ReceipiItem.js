class ReceipiItem {
  constructor({
    itemId,
    itemName,
    itemImage,
    itemInfo,
    isVeg
  }) {
    this.setId(itemId);
    this.setName(itemName);
    this.setImageUrl(itemImage);
    this.setInfo(itemInfo);
    this.setIsVeg(isVeg);
  }
  getId = () => {
    return this.itemId;
  };
  getName = () => {
    return this.itemName;
  };
  getImageUrl = () => {
    return this.itemImage;
  };
  getInfo = () => {
    return this.itemInfo;
  };
  getIsVeg = () => {
    return this.isVeg;
  };
  setId = id => {
    this.itemId = id;
    return this.itemId;
  };
  setName = name => {
    this.itemName = name;
    return this.itemName;
  };
  setImageUrl = imageUrl => {
    this.itemImage = imageUrl;
    return this.itemImage;
  };
  setInfo = info => {
    this.itemInfo = info;
    return this.itemInfo;
  };
  setIsVeg = isVeg => {
    this.isVeg = isVeg;
    return this.isVeg;
  };
}

export default ReceipiItem;
