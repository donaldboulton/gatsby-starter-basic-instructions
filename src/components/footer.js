/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "@react-icons/all-files/ri/RiHeart2Line"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div>
      <p>
      © {new Date().getFullYear()} Gatsby Starter{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        <Link to="/">Basic Instructions</Link>
      </p>
    </div>
  </footer>
)

export default Footer
