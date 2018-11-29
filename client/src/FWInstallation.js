import React, {Component} from 'react';
import styled from 'styled-components';
import NavBar from "./NavBar";
import TableContents from "./TableContents";
export default class FWInstallation extends Component {
    
    render(){
        
        return(
            <div>
                <NavBar/>
                <div>
                    <h1 id = "react">
                        React Installation
                    </h1>
                    <h2 id = "requirements">
                        Requirements
                    </h2> 
                    <p>
                        Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet 
                        Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet 
                        Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet 
                        Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet 
                        Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet 
                        Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet 
                    </p>  
                    <h2 id = "stuff">
                        Stuff
                    </h2>
                    <p>
                        Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet 
                        Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet 
                        Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet 
                        Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet 
                        Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet 
                        Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet Yeet 
                    </p>  
                    <h1 id ="backend" >
                        Backend Installation
                    </h1>
                </div>
                <div>
                <TableContents>
                    <a href = "#react">React Installation</a>
                    <a href = "#requirements">Requirements</a>
                    <a href = "#stuff">Stuff</a>
                    <a href = "#backend">Backend Installation</a>
                </TableContents>
                </div>
            </div>
            
        )
    }
    
}
