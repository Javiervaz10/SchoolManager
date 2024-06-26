import { Link, NavLink, useNavigate } from "react-router-dom";

export const DocentesPage = () => {
    return (
      <div>
        <h1>Docentes</h1>
        <hr />
        <div className="documentosDiv row">
          <div className="card m-3 col-md-5 shadow">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="data:image/png;base64,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"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Agregar Docente</h5>
                  <p className="card-text">
                   Puedes agregar docentes disponibles para las materias
                  </p>
  
                  <NavLink
                className={'btn btn-primary'}
                to={{
                  pathname: 'agregarDocente'
                }}
              >
                Acceder
              </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="card m-3 col-md-5 shadow">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="data:image/jpeg;base64,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"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Administrar Docentes</h5>
                  <p className="card-text">
                   Puedes modificar o eliminar los docentes disponibles
                  </p>
                  <br />
                  <NavLink
                className={'btn btn-primary'}
                to={{
                  pathname: 'administrarDocente'
                }}
              >
                Acceder
              </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="card m-3 col-md-5 shadow">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1055/1055644.png"
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">Reportes de docentes</h5>
                  <p className="card-text">
                   Genera reportes con información del docente
                  </p>
                  <br />
                  <NavLink
                className={'btn btn-primary'}
                to={{
                  pathname: 'reportesDocentes'
                }}
              >
                Acceder
              </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
  
       
          </div>
  
    );
  };
  