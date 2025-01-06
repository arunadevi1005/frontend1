function Slambook(){
    return (
        
        
            <div className="header">
                <fieldset className="fieldset">

                    <legend>SLAMBOOK:</legend>
                    
                    <form className="Slambook">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name"/><br/><br/>

                    <label for="nickname">NickName</label>
                    <input type="text" id="nickname" name="nickname"/><br/><br/>

                    <label for="memories">Memories:</label><br/>
                
                    <textarea id="memories" name="memories" rows="13" cols="55"></textarea><br/><br/>
                    

                    <label for="gender">Gender:</label><br/>
                    <input type="radio" id="gender" name="gender"/>
                    <label for="gender">Male</label>
                    <input type="radio" id="gender" name="gender"/>
                    <label for="gender">Female</label><br/><br/>

                    <label for="fav actors">FAV ACTORS</label><br/>
                    <input type="checkbox" id="fav_actors" name="fav_actors"/>
                    <label for ="fav actors">Thalapathy</label><br/>
                    <input type="checkbox" id="fav_actors" name="fav_actors"/>
                    <label for ="fav actors">Thala</label><br/>
                    <input type="checkbox" id="fav_actors" name="fav_actors"/>
                    <label for ="fav actors">Dhanush</label><br/><br/>

                    <label for="school">School:</label>
                    <select id="school" name="school">
                        <option value="12th">12th</option>
                        <option value="11th">11th</option>
                        <option value="10th">10th</option>
                    </select><br/> 
                    
                    </form>
                </fieldset>
            </div>
            
        
    )
}
export default Slambook;