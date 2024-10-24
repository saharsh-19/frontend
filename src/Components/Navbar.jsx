import "../Assets/CSS/nav.css"


function Navbar(){
    return(
        <div> 
            <body>
                <ul>
                <li><a href='/home'>Home</a></li>
                    <li><a href='/create'>Create</a></li>
                    <li><a href='/delete'>Delete</a></li>
                    <li><a href='/view'>View</a></li>
                    <li><a href='/update'>Update</a></li>
                </ul>
            </body>
        </div>
    )
}

export default Navbar