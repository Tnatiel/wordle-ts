import { SignInInput } from "../main-components/SignInInput"

export function SignIn() {

    return (
            <form>
                <SignInInput 
                    inputLabel={'Username:'}
                    inputPlaceHolder={'Username'}
                    inputType={'text'}
                />

                <SignInInput 
                    inputLabel={'Password:'}
                    inputPlaceHolder={'Password'}
                    inputType={'text'}
                />

                <div className="col-12">
                    <button onClick={(e) => e.preventDefault()} className="btn btn-primary">Sign in</button>
                </div>

            </form>
        )
    }