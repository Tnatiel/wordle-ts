

export function SignInInput({inputLabel, inputPlaceHolder, inputType}: {inputLabel: string, inputPlaceHolder: string, inputType: string}) {

    return (
        <div className="col-md-4">
            <div className="form-outline">
            <input type={inputType} 
                className="form-control" 
                id="validationCustom01" 
                placeholder={inputPlaceHolder}
                autoFocus
                />
            <label htmlFor="validationCustom01" className="form-label">{inputLabel}</label>
            <div className="valid-feedback">Looks good!</div>
            </div>
        </div>
)
}