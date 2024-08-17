import React from 'react'

const SideBar = () => {
  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
    <div className="app-brand demo">
      <a href="/" className="app-brand-link">
        <span className="app-brand-text demo menu-text fw-bold">Shutter Suites</span>
      </a>

      <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto">
        <i className="ti menu-toggle-icon d-none d-xl-block ti-sm align-middle"></i>
        <i className="ti ti-x d-block d-xl-none ti-sm align-middle"></i>
      </a>
    </div>

    <div className="menu-inner-shadow"></div>

      <ul className="menu-inner py-1">
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link">
            <i className="menu-icon tf-icons ti ti-smart-home"></i>
            <div data-i18n="Dashboards">Dashboards</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="" className="menu-link">
            <i className="menu-icon tf-icons ti ti-calendar"></i>
            <div data-i18n="Calendar">Calendar</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link">
            <i className="menu-icon tf-icons ti ti-users"></i>
            <div data-i18n="Users">Users</div>
          </a>
        </li>
        <li className="menu-item">
          <a href="javascript:void(0);" className="menu-link">
            <i className="menu-icon tf-icons ti ti-file-dollar"></i>
            <div data-i18n="Invoice">Invoice</div>
            <div className="badge bg-danger rounded-pill ms-auto">4</div>
          </a>

        </li>
      </ul>
    </aside>
  )
}

export default SideBar