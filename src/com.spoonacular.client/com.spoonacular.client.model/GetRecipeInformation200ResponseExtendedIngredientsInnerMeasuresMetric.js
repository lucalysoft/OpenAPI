/**
 * spoonacular API
 * The spoonacular Nutrition, Recipe, and Food API allows you to access over thousands of recipes, thousands of ingredients, 800,000 food products, over 100,000 menu items, and restaurants. Our food ontology and semantic recipe search engine makes it possible to search for recipes using natural language queries, such as \"gluten free brownies without sugar\" or \"low fat vegan cupcakes.\" You can automatically calculate the nutritional information for any recipe, analyze recipe costs, visualize ingredient lists, find recipes for what's in your fridge, find recipes based on special diets, nutritional requirements, or favorite ingredients, classify recipes into types and cuisines, convert ingredient amounts, or even compute an entire meal plan. With our powerful API, you can create many kinds of food and especially nutrition apps.  Special diets/dietary requirements currently available include: vegan, vegetarian, pescetarian, gluten free, grain free, dairy free, high protein, whole 30, low sodium, low carb, Paleo, ketogenic, FODMAP, and Primal.
 *
 * The version of the OpenAPI document: 1.1
 * Contact: mail@spoonacular.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric model module.
 * @module com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric
 * @version 1.1
 */
class GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric {
    /**
     * Constructs a new <code>GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric</code>.
     * @alias module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric
     * @param amount {Number} 
     * @param unitLong {String} 
     * @param unitShort {String} 
     */
    constructor(amount, unitLong, unitShort) { 
        
        GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric.initialize(this, amount, unitLong, unitShort);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, unitLong, unitShort) { 
        obj['amount'] = amount;
        obj['unitLong'] = unitLong;
        obj['unitShort'] = unitShort;
    }

    /**
     * Constructs a <code>GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric} obj Optional instance to populate.
     * @return {module:com.spoonacular.client/com.spoonacular.client.model/GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric} The populated <code>GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('unitLong')) {
                obj['unitLong'] = ApiClient.convertToType(data['unitLong'], 'String');
            }
            if (data.hasOwnProperty('unitShort')) {
                obj['unitShort'] = ApiClient.convertToType(data['unitShort'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} amount
 */
GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric.prototype['amount'] = undefined;

/**
 * @member {String} unitLong
 */
GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric.prototype['unitLong'] = undefined;

/**
 * @member {String} unitShort
 */
GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric.prototype['unitShort'] = undefined;






export default GetRecipeInformation200ResponseExtendedIngredientsInnerMeasuresMetric;

