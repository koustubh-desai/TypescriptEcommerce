"use strict";
import BasePage from './BasePage';
import ajax from '../Utils/Ajax';
import Template from '../Modules/odp_template';

class Odp extends BasePage{
    templateObj;
    cart;
    productJson;
    constructor(props){
        super(props);
        this.setContainer('odp-listing');
        this.cart = this.makeCart();
        ajax.getFromUrl('order-products',this.cart).then(this.ajaxSuccess,this.ajaxFail);     
    }
    ajaxSuccess=(data)=>{
        this.productJson = data.products;
        this.templateObj = new Template(data.products,data.orderDetails);
        this.setTemplate();
        this.render();
        this.templateObj.resovePostRender();
        //this.setupFiltersOnHtml();
        //document.getElementById('sortby').addEventListener("change",this.sortHandler);
        //document.getElementById('filterby').addEventListener('change',this.filterHandler);
    }
    ajaxFail=(err)=>{

    }
/**
 * 
 */
// setupFiltersOnHtml(){
//     let filters = {};
//     this.productJson.map((el)=>{
//         filters[el.brand] = filters[el.brand]?Number(filters[el.brand] + 1):1;
//     });
//     document.getElementById('filterby').innerHTML = '';

//     //Populate Brand Filters. 
//     for(let k in filters){
//         document.getElementById('filterby').innerHTML += `
//         <p><input checked="true" id="${k}" value="${k}" type="checkbox">
//         <label for="${k}"><span class="ax-hidden">Brand Name:</span>${k}</label>
//         </p>
//         `;
//     }
// }
// sortHandler=(event)=>{
//     switch(event.target.getAttribute('id')){
//         case 'select-sort':
//             this.templateObj.sortyBy(event.target.value);
            
//         break;
//         default:
//         break;
//     }
//     this.setTemplate();
//     this.render();
//     this.templateObj.resovePostRender();
// }
// filterHandler=(event)=>{
//     if(event.target.getAttribute('type')=='checkbox'){
//         this.templateObj.filterBy(event.target.getAttribute('value'),event.target.checked);
//         this.setTemplate();
//         this.render();
//         this.templateObj.resovePostRender();
//     }
    
// }
setTemplate(){
    this.template=this.templateObj.getTemplate();
}
/**
 * 
 */
    makeCart=()=>{
        let obj = [];
        if(window.sessionStorage){
            let count = window.sessionStorage.length;
            while(count--){
                let s = window.sessionStorage.key(count);
                let [key,id] = s.match(/item_(\d)*/);
                if(id){
                    obj.push({
                        id:id,
                        count:window.sessionStorage.getItem(s)
                    });
                }            
            }
        }
        return obj;
    }
}
export default Odp;
