export function Signup() {
    return(
        <div id ="signup">
            <h1>Signup:</h1>
            <form>
                <div>
                    Name: <input type="text" />
                </div>
                <div>
                    Email: <input type="email" />
                </div>
                <div>
                    Password: <input type="password" />
                </div>
                <div>
                    Password Confirmation: <input type="password" />
                </div> 
                <div>
                <button>Submit</button>
                </div>
            </form>
        </div>
    )
}