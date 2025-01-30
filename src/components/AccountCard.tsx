import { ReactNode } from "react"
import { Link } from "react-router-dom"


function AccountCard({ title, desc, link, children }: { title: string, desc: string, link: string, children: ReactNode }) {

  return (
    <>
      <Link to={link} className="account-card">
        <div className="card">
          <span className="icon">
            {children}
          </span>
          <h4>{title}</h4>
          <p>
            {desc}
          </p>
          <div className="shine"></div>
          <div className="background">
            <div className="tiles">
              <div className="tile tile-1"></div>
              <div className="tile tile-2"></div>
              <div className="tile tile-3"></div>
              <div className="tile tile-4"></div>
              <div className="tile tile-5"></div>
              <div className="tile tile-6"></div>
              <div className="tile tile-7"></div>
              <div className="tile tile-8"></div>
              <div className="tile tile-9"></div>
              <div className="tile tile-10"></div>
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        </div>
      </Link>

    </>
  )
}

export default AccountCard