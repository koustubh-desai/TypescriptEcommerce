"use strict";
import BasePage from './BasePage';
import ajax from '../Utils/Ajax';
import Template from '../Modules/plp_template'
class Plp extends BasePage{
    productJson:any;
    productToner;
    filterFlags;
    constructor(args){
        super(args);
        this.setContainer('plp-listing');
        this.filterFlags = {};
        document.getElementById('sortby').addEventListener("change",this.sortHandler);
       
        document.getElementById('hamburger').addEventListener('click',this.clickHandler);
    
        ajax.getFromUrl('/Products').then(this.ajaxSuccess,this.ajaxFailure);
    }
    clickHandler=(event)=>{
        switch(event.target.getAttribute('name')){
            case 'brand':

            case 'price':

            return;
            case 'toggler':
                //get Sibling ul
                let sibling = event.target.nextElementSibling;
                if(sibling.className.match(/active/gi)){
                    sibling.className = sibling.className.replace(/active/gi,'');
                }
                else{
                    sibling.className += ' active';
                }
                event.preventDefault();
                event.stopPropagation();
            default:
            break;
        }
    }
    ajaxSuccess=(data:any)=>{
        this.productJson = data;
        this.productToner = new Template(data);
        this.productToner.filterBy(this.filterFlags);
        this.setTemplate();
        this.render();
        this.setupFiltersOnHtml();
    }
    ajaxFailure=(err)=>{

    }
    setupFiltersOnHtml(){
        let filters = {};
        let ul = document.querySelectorAll('ul.filterByBrand');
        let li = '';
        this.productJson.map((el)=>{
            filters[el.brand] = filters[el.brand]?Number(filters[el.brand] + 1):1;
        });
        //Populate brand filter options
        for(let k in filters){
            li += `
            <li><input checked="true" id="${k}" value="${k}" type="checkbox">
            <label for="${k}"><span class="ax-hidden">Brand Name:</span>${k}</label>
            </li>
            `;
        }
        for(let i=0; i < ul.length; i++){
            ul[i].innerHTML = li;
            ul[i].addEventListener('change',this.filterHandler);
        }

        ul = document.querySelectorAll('ul.filterByRating');
        li = '';
        for(let k of [1,2,3,4,5]){
            //Array(5).fill(`<i class="fa fa-star"></i>`).fill(`<i class="fa fa-star checked"></i>`,0,obj.rating).join('')+`(${obj.rating})`
            li += `
            <li><input checked="true" id="rate${k}" value="${k}" type="checkbox">
            <label for="rate${k}"><span class="ax-hidden">Rating:${k}</span>
            ${Array(5).fill(`<i class="fa fa-star" aria-hidden="true"></i>`).fill(`<i class="fa fa-star checked"></i>`,0,k).join('')}
            </label>
            </li>
            `;
        }
        for(let i=0; i < ul.length; i++){
            ul[i].innerHTML = li;
            ul[i].addEventListener('change',this.filterHandler);
        }
        //Populate Brand Filters. 
        // for(let k in filters){
        //     document.getElementById('brandFilter').innerHTML += `
        //     <li><input checked="true" id="${k}" value="${k}" type="checkbox">
        //     <label for="${k}"><span class="ax-hidden">Brand Name:</span>${k}</label>
        //     </li>
        //     `;
        //     document.getElementById('brandOnMobile').innerHTML += `
        //     <li><input checked="true" id="mobile${k}" type="checkbox" value="${k}" name="brand"><label for="mobile${k}"><span class="ax-hidden">Brand Name:</span>${k}</label></li>
        //     `;
        // }
        
    }
    sortHandler=(event)=>{
        switch(event.target.getAttribute('id')){
            case 'select-sort':
                this.productToner.sortyBy(event.target.value);
            break;
            default:
            break;
        }
        this.setTemplate();
        this.render();
        
    }
    filterHandler=(event)=>{
        
        
        let checkboxes;
        let noos = 0;
        let relation;
        relation = event.target.closest('ul');
        switch(relation.className){
            case 'filterByBrand':
            case 'filterByBrand active':
                let brands = {}
                checkboxes  = event.target.closest('ul').querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(element => {
                    brands[element.getAttribute('value')] = element.checked;
                    if(!element.checked) ++noos;
                });
                if(checkboxes.length == noos){
                    checkboxes.forEach(element => {
                        brands[element.getAttribute('value')] = true;
                        element.checked = true;
                        element.setAttribute('checked',true);
                    });
                }
                this.filterFlags.brand = brands;
            break;
            case 'filterByRating':
            case 'filterByRating active':
                let ratings = {};
                checkboxes  = event.target.closest('ul').querySelectorAll('input[type="checkbox"]');
                checkboxes.forEach(element => {
                    ratings[element.getAttribute('value')] = element.checked;
                    if(!element.checked) ++noos;
                });
                if(checkboxes.length == noos){
                    checkboxes.forEach(element => {
                        ratings[element.getAttribute('value')] = true;
                        element.checked = true;
                        element.setAttribute('checked',true);
                    });
                }
                this.filterFlags.ratings = ratings;
            default:
            break;
        }
        
        this.productToner.filterBy(this.filterFlags);
        this.setTemplate();
        this.render();
        /*if(event.target.getAttribute('type')=='checkbox'){
            this.productToner.filterBy(event.target.getAttribute('value'),event.target.checked);
            this.setTemplate();
            this.render();
        }*/
        
    }
    setTemplate(){
        this.template=`<ul>${this.productToner.getTemplate()}</ul>`;
    }
    
}
export default Plp;