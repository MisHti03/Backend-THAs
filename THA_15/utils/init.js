const sequelize = require("../database")
const product = require("../models/product")

sequelize.sync()
.then((...a) => {
    return sequelize.authenticate()

})
.then(async (...a) => {
    const now = Date.now()
    for(let i=0; i<100; i++){
        const productId = now + i
        await product.create({
            title: 'product title ${productId}' ,
            price: Math.floor(100 + Math.random() * 100000),
            count: Math.floor(1+ Math.random() * 1000),
            description: 'product description ${productId}',
            image: 'http://picsum.photos/100?product=${productId}'

        });
    }
})
.catch(async (e) => {
    await sequelize.close();
    console.error(e);
  })
  .catch((e) => {
    console.error(e);
  });