import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="content-footer footer bg-footer-theme">

        <div className="container-xxl">
          <div
              className="footer-container d-flex align-items-center justify-content-between py-2 flex-md-row flex-column">
            <div>
              ©
              <script>
                document.write(new Date().getFullYear());
              </script>2024
              , made with ❤️ by <a href="" target="_blank" className="fw-medium">Maku Digital</a>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Footer