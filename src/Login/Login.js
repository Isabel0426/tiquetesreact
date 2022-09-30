import { Route, Link } from "react-router-dom"

export function Login() {
    return(

        <> <h1 style="text-align: center; color: aliceblue;">Ingreso</h1>


        <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-5">

                <form>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-person"></i></span>
                        <input id="username" type="text" class="form-control" placeholder="Userna,e" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>

                    <div class="input-group mb-3">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-key-fill"></i></span>
                        <input id="password" type="Password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>

                    <button id="boton" type="submit" class="btn btn-primary w-100">Ingresar</button>
              
                </form>

            </div>
        </div>
    </div>
   

        
        </>
    )
}