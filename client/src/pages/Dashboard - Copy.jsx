import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="py-3 mb-4">Dashboard</h4>
        <div className="row">
          <div className="col-sm-6 col-lg-3 mb-4">
            <div className="card card-border-shadow-primary">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2 pb-1">
                  <div className="avatar me-2">
                    <span className="avatar-initial rounded bg-label-primary"><i
                        className="ti ti-truck ti-md"></i></span>
                  </div>
                  <h4 className="ms-1 mb-0">42</h4>
                </div>
                <p className="mb-1">On route vehicles</p>
                <p className="mb-0">
                  <span className="fw-medium me-1">+18.2%</span>
                  <small className="text-muted">than last week</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4">
            <div className="card card-border-shadow-warning">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2 pb-1">
                  <div className="avatar me-2">
                    <span className="avatar-initial rounded bg-label-warning"><i
                        className="ti ti-alert-triangle ti-md"></i></span>
                  </div>
                  <h4 className="ms-1 mb-0">8</h4>
                </div>
                <p className="mb-1">Vehicles with errors</p>
                <p className="mb-0">
                  <span className="fw-medium me-1">-8.7%</span>
                  <small className="text-muted">than last week</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4">
            <div className="card card-border-shadow-danger">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2 pb-1">
                  <div className="avatar me-2">
                    <span className="avatar-initial rounded bg-label-danger"><i
                        className="ti ti-git-fork ti-md"></i></span>
                  </div>
                  <h4 className="ms-1 mb-0">27</h4>
                </div>
                <p className="mb-1">Deviated from route</p>
                <p className="mb-0">
                  <span className="fw-medium me-1">+4.3%</span>
                  <small className="text-muted">than last week</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3 mb-4">
            <div className="card card-border-shadow-info">
              <div className="card-body">
                <div className="d-flex align-items-center mb-2 pb-1">
                  <div className="avatar me-2">
                    <span className="avatar-initial rounded bg-label-info"><i className="ti ti-clock ti-md"></i></span>
                  </div>
                  <h4 className="ms-1 mb-0">13</h4>
                </div>
                <p className="mb-1">Late vehicles</p>
                <p className="mb-0">
                  <span className="fw-medium me-1">-2.5%</span>
                  <small className="text-muted">than last week</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard