import React, {useState, useEffect} from "react";
import { BASE_URL } from "../../../api";

function FilterBlog ({setSelectedCategory }) { 
    const[industry, setIndustry] = useState([]);
    const[category, setCategory] = useState([]);
    useEffect(() => {
        const fetchIndustryAndCategory = async () => {
          try {
            // get industry
            const responseIndustry = await fetch(`${BASE_URL}/post-industry`);
            if (!responseIndustry.ok) {
              throw new Error('Network response was not ok');
            }
            const dataIndustry = await responseIndustry.json();
            setIndustry(dataIndustry);
            // get category
            const responseCategory = await fetch(`${BASE_URL}/post-categories`);
            if (!responseCategory.ok) {
              throw new Error('Network response was not ok');
            }
            const dataCategory = await responseCategory.json();
            setCategory(dataCategory);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };    
        fetchIndustryAndCategory(); 
      }, []);
      const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        };
    return (
    <>
    
    <section className="col-md-12 filter-by">
        <div className="container">
            <h2 className="mb-lg-5 mb-4">Filter by</h2>	
            <div className="row justify-content-center">                    			
                <div className="col-md-4">
                    <div className="Email-field">
                        <div className="gradient-border mb-4">                            
                            <select className="content w-100" onChange={handleCategoryChange}>
                                <option value="">Select Category</option>
                                {category.map((item)  => (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))}                                
                            </select>				
                        </div>														
                    </div>								  
                </div>
                <div className="col-md-4">
                    <div className="Email-field">
                        <div className="gradient-border mb-4">
                            <input type="name" name="name" className="form-control" placeholder="Topics"/>				
                        </div>														
                    </div>								  
                </div>
                <div className="col-md-4">
                    <div className="Email-field">
                        <div className="gradient-border mb-4">
                            <select className="content w-100">
                                {industry.map((item)  => (
                                    <option key={item.id} value={item.name}>{item.name}</option>
                                ))}
                            </select>				
                        </div>														
                    </div>								  
                </div>
            </div>
            <div className="sort-by">
                <h4>Sort By:</h4>						
                <div className="sort-by-button gradient-border"><span className="content">Feature</span></div>		
                <div className="sort-by-button gradient-border"><span className="content">Most recent</span></div>		
            </div>
        </div>
    </section>
    
    </>

);
}

export default FilterBlog;