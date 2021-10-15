import joi from "joi";

export const gameSchema = joi.object({
    name: joi.string().alphanum().min(0).required(),
    image: joi.string().required(),
    stockTotal: joi.number().integer().min(1).required(),
    categoryId: joi.number().integer().min(1).required(),
    pricePerDay: joi.number().integer().min(1).required()
})