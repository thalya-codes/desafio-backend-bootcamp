import Products from"../models/Products.model.js"

const create = async (request, response) => {
    if(request.body.category_id) {
        await Products.create(request.body);
        return response.json({"message":"products is inserted"});
    } else {
        return response.json({"message": "o campo category_id é obrigatório"});
    }
};

const getAll = async (_, response) => {
    const products = await Products.findAll();
    return response.json(products);
};

const getOne = async (request, response) => {
    const products = await Products.findByPk(request.params.id);
    return response.json(products);
}

const update = async (request, response) =>{
    const products = await Products.findByPk(request.params.id);

    if(!request.body.category_id) {
        return response.json({"message":"por favor informe o id da categoria :D"})
    }

    if(products.name != request.body.name) {
        products.name = request.body.name
    } 
    if(products.description != request.body.description) {
        products.description = request.body.description
    } 
    
    if(products.value != request.body.value) {
        products.value = request.body.value
    } 

    if(products.person_count != request.body.person_count) {
        products.person_count = request.body.person_count
    } 

    if(products.image != request.body.image) {
        products.image = request.body.image
    }

    await products.save()

    return response.json({"message":"updated"});
}

const deleteProduct = async (request, response) => {
    const requestedId = request.params.id;
    await Products.destroy({where: {id: requestedId}});
    return response.json({"message": "deleted"});
}



export {
    create,
    getAll,
    getOne,
    update,
    deleteProduct
};